import { db } from "@/lib/prisma";
import ChatInterface from "./ChatInterface";

export default async function ChatbotPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const chatbot = await db.chatbot.findUnique({
    where: { id },
    include: {
      messages: {
        orderBy: {
          createdAt: "asc",
        },
      },
    },
  });

  if (!chatbot) {
    return <div>Chatbot not found</div>;
  }

  return <ChatInterface chatbot={chatbot} />;
}