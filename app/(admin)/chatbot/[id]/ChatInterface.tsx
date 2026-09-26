'use client';

import { useState } from "react";
import { Send } from "lucide-react";

import AvatarComponent from "@/components/Avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Message = {
  id: string;
  role: string;
  content: string;
  chatbotId: string;
  createdAt: Date;
};

type Chatbot = {
  id: string;
  name: string;
  createdAt: Date;
  messages: Message[];
};

export default function ChatInterface({
  chatbot,
}: {
  chatbot: Chatbot;
}) {
  const [messages, setMessages] = useState<Message[]>(chatbot.messages);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!prompt.trim() || loading) return;

    const text = prompt;
    setPrompt("");
    setLoading(true);

    const response = await fetch(
      `/api/chatbots/${chatbot.id}/messages`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          role: "user",
          content: text,
        }),
      }
    );

    if (response.ok) {
      const newMessage: Message = await response.json();
      setMessages((prev) => [...prev, newMessage]);
    }

    setLoading(false);
  };

  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col rounded-3xl border bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-4 border-b p-5">
        <AvatarComponent seed={chatbot.name} size={56} />

        <div>
          <h1 className="text-xl font-bold">{chatbot.name}</h1>
          <p className="text-sm text-gray-500">
            {messages.length} message{messages.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto bg-gray-50 p-6">
        {messages.length === 0 ? (
          <div className="flex h-full flex-col items-center justify-center text-center">
            <AvatarComponent seed={chatbot.name} size={72} />

            <h2 className="mt-4 text-2xl font-bold">
              Start chatting with {chatbot.name}
            </h2>

            <p className="mt-2 max-w-md text-gray-500">
              Your conversation will appear here.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                    msg.role === "user"
                      ? "bg-emerald-600 text-white"
                      : "border bg-white text-gray-900"
                  }`}
                >
                  <p className="whitespace-pre-wrap">
                    {msg.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Input */}
      <div className="border-t bg-white p-4">
        <form onSubmit={handleSend} className="flex gap-3">
          <Input
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder={`Message ${chatbot.name}...`}
            className="h-11"
          />

          <Button
            nativeButton
            type="submit"
            disabled={loading}
            className="h-11 px-5"
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}