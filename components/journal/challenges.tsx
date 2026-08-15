"use client";
import { motion } from "framer-motion";


export default function Challenges() {
  const items = [
    {
      title: "Context Retrieval",
      text: "Reducing hallucinations while keeping latency low."
    },
    {
      title: "Conversation Memory",
      text: "Maintaining chat history without increasing prompt size."
    },
    {
      title: "Production Deployment",
      text: "Serving local models efficiently with FastAPI."
    },
  ];

  return (
    <section>

      <h3 className="font-editorial text-5xl">
        Engineering Challenges
      </h3>

      <div className="mt-10 space-y-6">

        {items.map((item) => (
          <motion.div
            key={item.title}
            whileHover={{
                y: -6,
                scale: 1.02,
            }}
            transition={{
                duration: 0.25,
            }}
            className="rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-8"
            >
            <h4 className="text-xl font-semibold">
                {item.title}
            </h4>

            <p className="mt-3 leading-7 text-[var(--foreground-secondary)]">
                {item.text}
            </p>
            </motion.div>
        ))}

      </div>

    </section>
  );
}