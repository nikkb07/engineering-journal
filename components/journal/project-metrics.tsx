"use client";

import { motion } from "framer-motion";

const metrics = [
  {
    value: "RAG",
    label: "Architecture",
  },
  {
    value: "FastAPI",
    label: "Backend",
  },
  {
    value: "ChromaDB",
    label: "Vector Store",
  },
  {
    value: "Next.js",
    label: "Frontend",
  },
];

export default function ProjectMetrics() {
  return (
    <section>

      <h3 className="font-editorial text-5xl">
        Project Snapshot
      </h3>

      <div className="mt-10 grid grid-cols-2 gap-6">

        {metrics.map((metric) => (
          <motion.div
            key={metric.label}
            whileHover={{
              y: -6,
              scale: 1.02,
            }}
            className="rounded-[30px] border border-[var(--border)] bg-[var(--surface)] p-8"
          >
            <div className="font-editorial text-4xl">
              {metric.value}
            </div>

            <div className="mt-2 text-sm text-[var(--foreground-secondary)]">
              {metric.label}
            </div>
          </motion.div>
        ))}

      </div>

    </section>
  );
}