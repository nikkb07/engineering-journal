const stack = [
  "FastAPI",
  "Python",
  "LangChain",
  "Ollama",
  "ChromaDB",
  "Next.js",
  "React",
  "Tailwind",
  "Docker",
];

export default function TechStack() {
  return (
    <section>

      <h3 className="font-editorial text-5xl">
        Technology Stack
      </h3>

      <div className="mt-8 flex flex-wrap gap-4">

        {stack.map((item) => (
          <div
            key={item}
            className="
              rounded-full
              border
              border-[var(--border)]
              bg-[var(--surface)]
              px-5
              py-3
            "
          >
            {item}
          </div>
        ))}

      </div>

    </section>
  );
}