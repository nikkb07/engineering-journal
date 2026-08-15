import Image from "next/image";

export default function Architecture() {
  return (
    <section>

      <h3 className="font-editorial text-5xl">
        System Architecture
      </h3>

      <p className="mt-6 leading-8 text-[var(--foreground-secondary)]">
        The assistant follows a Retrieval-Augmented Generation pipeline.
        Company documents are embedded into ChromaDB using
        sentence-transformers. Relevant chunks are retrieved,
        combined with conversation history, and passed to
        Ollama through LangChain before generating the final
        response.
      </p>

      <div className="mt-10 overflow-hidden rounded-[30px] border border-[var(--border)] bg-[var(--surface)]">

        <Image
          src="/images/projects/rag-architecture.png"
          alt="Architecture"
          width={1200}
          height={800}
          className="w-full"
        />

      </div>

    </section>
  );
}