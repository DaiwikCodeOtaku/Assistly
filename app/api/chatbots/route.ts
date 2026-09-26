import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const { name } = await req.json();

  if (!name || name.trim() === "") {
    return NextResponse.json(
      { error: "Name is required" },
      { status: 400 }
    );
  }

  const chatbot = await db.chatbot.create({
    data: {
      name: name.trim(),
    },
  });

  return NextResponse.json(chatbot, { status: 201 });
}

export async function GET() {
  const chatbots = await db.chatbot.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(chatbots);
}