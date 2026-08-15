interface MessageProps {
  role: "user" | "assistant";
  content: string;
}

export default function Message({
  role,
  content,
}: MessageProps) {
  const isUser = role === "user";

  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`
          max-w-[80%]
          rounded-2xl
          border
          px-5
          py-3
          text-sm
          leading-6
          ${
            isUser
              ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--accent-foreground)]"
              : "border-[var(--border)] bg-[var(--surface-secondary)] text-[var(--foreground)]"
          }
        `}
      >
        {content}
      </div>
    </div>
  );
}