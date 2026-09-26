import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";

export async function GET() {
  const chatbots = await db.chatbot.findMany();

  return NextResponse.json(chatbots);
}