'use client';

import { useEffect, useState } from "react";
import { Plus, MessageSquare, Calendar } from "lucide-react";
import Link from "next/link";

import AvatarComponent from "@/components/Avatar";
import { Button } from "@/components/ui/button";

type Chatbot = {
  id: string;
  name: string;
  createdAt: string;
};

export default function ViewChatbots() {
  const [chatbots, setChatbots] = useState<Chatbot[]>([]);

  useEffect(() => {
    const loadChatbots = async () => {
      const response = await fetch("/api/chatbots");
      const data = await response.json();
      setChatbots(data);
    };

    loadChatbots();
  }, []);

  return (
    <div className="mx-auto w-full max-w-6xl space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 rounded-3xl bg-white p-8 shadow-sm border md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            My Chatbots
          </h1>
          <p className="mt-1 text-gray-500">
            Manage your AI assistants and client conversations.
          </p>

          <div className="mt-4 flex items-center gap-6 text-sm text-gray-600">
            <div>
              <span className="text-2xl font-bold text-emerald-600">
                {chatbots.length}
              </span>
              <p>Total Bots</p>
            </div>
          </div>
        </div>

        <Button
          render={<Link href="/create-chatbot" />}
          nativeButton={false}
          className="bg-emerald-600 hover:bg-emerald-500 h-11 px-5"
        >
          <Plus className="mr-2 h-4 w-4" />
          Create Bot
        </Button>
      </div>

      {/* Empty State */}
      {chatbots.length === 0 ? (
        <div className="rounded-3xl border-2 border-dashed bg-white p-14 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
            <MessageSquare className="h-8 w-8 text-emerald-600" />
          </div>

          <h2 className="text-xl font-semibold">No chatbots yet</h2>
          <p className="mt-2 text-gray-500">
            Create your first AI assistant to get started.
          </p>

          <Button
            render={<Link href="/create-chatbot" />}
            nativeButton={false}
            className="mt-6 bg-emerald-600 hover:bg-emerald-500"
          >
            <Plus className="mr-2 h-4 w-4" />
            Create First Bot
          </Button>
        </div>
      ) : (
        /* Grid */
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {chatbots.map((bot) => (
            <div
              key={bot.id}
              className="group rounded-3xl border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <AvatarComponent seed={bot.name} size={64} />
              </div>

              <div className="mt-5">
                <h2 className="text-xl font-semibold">{bot.name}</h2>

                <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="h-4 w-4" />
                  {new Date(bot.createdAt).toLocaleDateString("en-IN")}
                </div>
              </div>

              <div className="mt-6">
                <Button
                  render={<Link href={`/chatbot/${bot.id}`} />}
                  nativeButton={false}
                  variant="outline"
                  className="w-full group-hover:bg-emerald-600 group-hover:text-white transition-colors"
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Open Chat
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}