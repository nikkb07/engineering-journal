"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUp, Sparkles } from "lucide-react";

import Message from "./message";
import Suggestions from "./suggestions";
import { sendChatMessage } from "@/lib/assistant-api";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export default function ChatWindow() {
  const [sessionId] = useState(
    () =>
      `portfolio-${Math.random()
        .toString(36)
        .slice(2)}`
  );

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Hi! I can answer questions about my projects, skills, experience, and engineering work.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Auto-scroll reference
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll whenever messages or loading state changes
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages, loading]);

  async function sendMessage(question?: string) {
    const text = (question ?? input).trim();

    if (!text || loading) {
      return;
    }

    setMessages((current) => [
      ...current,
      {
        role: "user",
        content: text,
      },
    ]);

    setInput("");
    setError(null);
    setLoading(true);

    try {
      const result = await sendChatMessage(
        sessionId,
        text
      );

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: result.answer,
        },
      ]);
    } catch (error) {
      console.error("RAG request failed:", error);

      setError(
        "The assistant is temporarily unavailable. Please try again in a moment."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="
        mx-auto
        max-w-4xl
        overflow-hidden
        rounded-[32px]
        border
        border-[var(--border)]
        bg-[var(--surface)]
        shadow-[var(--shadow-lg)]
      "
    >
      {/* Header */}

      <div
        className="
          flex
          items-center
          justify-between
          border-b
          border-[var(--border)]
          px-6
          py-5
        "
      >
        <div className="flex items-center gap-3">
          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-[var(--border)]
              bg-[var(--surface-secondary)]
            "
          >
            <Sparkles size={17} />
          </div>

          <div>
            <p className="font-medium">
              Engineering Assistant
            </p>

            <p className="mt-1 text-xs text-[var(--foreground-secondary)]">
              Ask about my work
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-green-400" />

          <span className="text-xs text-[var(--foreground-secondary)]">
            Online
          </span>
        </div>
      </div>

      {/* Messages */}

      <div
        className="
          min-h-[320px]
          max-h-[480px]
          space-y-4
          overflow-y-auto
          p-6
        "
      >
        {messages.map((message, index) => (
          <Message
            key={`${message.role}-${index}`}
            role={message.role}
            content={message.content}
          />
        ))}

        {error && (
          <div
            className="
              rounded-xl
              border
              border-red-500/20
              bg-red-500/5
              px-4
              py-3
              text-sm
              text-red-400
            "
          >
            {error}
          </div>
        )}

        {loading && (
          <div className="flex justify-start">
            <div
              className="
                rounded-2xl
                border
                border-[var(--border)]
                bg-[var(--surface-secondary)]
                px-5
                py-3
                text-sm
                text-[var(--foreground-secondary)]
              "
            >
              Thinking...
            </div>
          </div>
        )}

        {/* Invisible element used for automatic scrolling */}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}

      <div className="border-t border-[var(--border)] p-6">
        <Suggestions onSelect={sendMessage} />

        <div
          className="
            mt-5
            flex
            items-center
            gap-3
            rounded-2xl
            border
            border-[var(--border)]
            bg-[var(--background)]
            p-2
          "
        >
          <input
            value={input}
            onChange={(event) =>
              setInput(event.target.value)
            }
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                sendMessage();
              }
            }}
            disabled={loading}
            placeholder="Ask about my projects..."
            className="
              min-w-0
              flex-1
              bg-transparent
              px-4
              py-3
              text-sm
              outline-none
              placeholder:text-[var(--foreground-secondary)]
              disabled:opacity-50
            "
          />

          <button
            type="button"
            onClick={() => sendMessage()}
            disabled={loading || !input.trim()}
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-[var(--accent)]
              text-[var(--accent-foreground)]
              transition-all
              duration-300
              hover:scale-105
              disabled:cursor-not-allowed
              disabled:opacity-40
            "
            aria-label="Send message"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}