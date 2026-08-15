interface SuggestionsProps {
  onSelect: (question: string) => void;
}

const suggestions = [
  "What projects have you built?",
  "Tell me about the RAG project.",
  "What technologies do you work with?",
  "What is your backend experience?",
];

export default function Suggestions({
  onSelect,
}: SuggestionsProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {suggestions.map((question) => (
        <button
          key={question}
          type="button"
          onClick={() => onSelect(question)}
          className="
            rounded-full
            border
            border-[var(--border)]
            bg-[var(--surface)]
            px-4
            py-2
            text-sm
            text-[var(--foreground-secondary)]
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:border-[var(--accent)]
            hover:text-[var(--foreground)]
          "
        >
          {question}
        </button>
      ))}
    </div>
  );
}