"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function StickyPreview() {
  return (
    <div className="sticky top-28">

      <motion.div
        whileHover={{
          scale: 1.02,
        }}
        transition={{
          duration: 0.35,
        }}
        className="w-full transition-transform duration-700 hover:scale-105"
      >

        <Image
          src="/images/projects/rag-cover.png"
          alt="RAG Chatbot"
          width={900}
          height={700}
          className="h-auto w-full object-cover"
        />

      </motion.div>

      <div className="mt-8">

        <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent)]">
          Journal Entry 01
        </p>

        <h3 className="mt-3 font-editorial text-5xl leading-none">
          AI Knowledge Assistant
        </h3>

        <p className="mt-5 text-[var(--foreground-secondary)]">
          Building a production-ready Retrieval Augmented
          Generation assistant using FastAPI, ChromaDB,
          Ollama and Next.js.
        </p>

      </div>

    </div>
  );
}