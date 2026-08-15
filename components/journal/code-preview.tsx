export default function CodePreview() {
  return (
    <section>

      <h3 className="font-editorial text-5xl">
        Retrieval Pipeline
      </h3>

      <pre
        className="
          mt-8
          overflow-x-auto
          rounded-[28px]
          border
          border-[var(--border)]
          bg-[#111]
          p-8
          text-sm
          text-green-400
        "
      >
{`query
 ↓
Embedding
 ↓
Vector Search
 ↓
Prompt
 ↓
Ollama
 ↓
Answer`}
      </pre>

    </section>
  );
}