'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, Sparkles, Bot } from 'lucide-react';

import AvatarComponent from '@/components/Avatar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function CreateChatbot() {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!prompt.trim()) return;

    setLoading(true);

    const response = await fetch('/api/chatbots', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: prompt.trim(),
      }),
    });

    if (response.ok) {
      setPrompt('');
      router.push('/view-chatbots');
      router.refresh();
    }

    setLoading(false);
  };

  return (
    <div className="mx-auto w-full max-w-6xl">
      <div className="grid gap-8 lg:grid-cols-5">
        {/* LEFT PANEL */}
        <div className="lg:col-span-2 rounded-3xl bg-emerald-600 p-8 text-white flex flex-col justify-between">
          <div>
            <div className="mb-6">
              <AvatarComponent seed={prompt || 'Nova'} size={84} />
            </div>

            <h1 className="text-3xl font-bold leading-tight">
              Build your next AI assistant
            </h1>

            <p className="mt-4 text-emerald-50 leading-relaxed">
              Every chatbot gets its own persistent identity, avatar and future
              conversation history. Start by giving it a memorable name.
            </p>
          </div>

          <div className="space-y-4 border-t border-white/20 pt-6">
            <div className="flex items-center gap-3">
              <Sparkles className="h-5 w-5" />
              <span>Unique DiceBear avatar</span>
            </div>

            <div className="flex items-center gap-3">
              <Bot className="h-5 w-5" />
              <span>Persistent PostgreSQL storage</span>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="lg:col-span-3 rounded-3xl border bg-white p-8 shadow-sm">
          <div className="mb-8">
            <h2 className="text-2xl font-bold">Create Chatbot</h2>
            <p className="mt-2 text-gray-500">
              This name will appear across your dashboard and conversations.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Chatbot Name
              </label>

              <Input
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g. Resume Reviewer"
                className="h-12 rounded-xl"
              />
            </div>

            {/* Live Preview */}
            <div className="rounded-2xl bg-gray-50 p-5">
              <p className="mb-4 text-sm font-medium text-gray-500">
                Live Preview
              </p>

              <div className="flex items-center gap-4">
                <AvatarComponent seed={prompt || 'Nova'} size={56} />

                <div>
                  <h3 className="font-semibold text-lg">
                    {prompt || 'Nova Assistant'}
                  </h3>

                  <p className="text-sm text-gray-500">
                    AI Assistant • Ready to chat
                  </p>
                </div>
              </div>
            </div>

            <Button
              nativeButton
              type="submit"
              disabled={loading || !prompt.trim()}
              className="h-12 w-full rounded-xl bg-emerald-600 text-white hover:bg-emerald-500"
            >
              {loading ? (
                'Creating...'
              ) : (
                <>
                  Create Chatbot
                  <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}