export default function EngineeringDecisions() {
  const decisions = [
    {
      title: "Why FastAPI?",
      description:
        "Chosen for its excellent async performance, type safety, and seamless integration with Python AI libraries.",
    },
    {
      title: "Why ChromaDB?",
      description:
        "A lightweight persistent vector database suitable for local development and fast semantic search.",
    },
    {
      title: "Why Ollama?",
      description:
        "Enabled local LLM inference without relying on paid cloud APIs during development.",
    },
  ];

  return (
    <section>

      <h3 className="font-editorial text-5xl">
        Engineering Decisions
      </h3>

      <div className="mt-10 space-y-6">

        {decisions.map((decision) => (
          <div
            key={decision.title}
            className="rounded-[30px] border border-[var(--border)] p-8"
          >
            <h4 className="text-xl font-semibold">
              {decision.title}
            </h4>

            <p className="mt-4 leading-8 text-[var(--foreground-secondary)]">
              {decision.description}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}