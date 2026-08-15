"use client";

import { motion } from "framer-motion";

const cards = [
  {
    icon: "⌂",
    title: "Education",
    description:
      "Instrumentation & Control Engineering with a passion for software engineering, backend systems, and artificial intelligence.",
  },
  {
    icon: "</>",
    title: "Current Focus",
    description:
      "Building scalable backend applications, mastering Data Structures & Algorithms, and creating production-ready AI-powered systems.",
  },
  {
    icon: "✦",
    title: "Engineering Philosophy",
    description:
      "Great software isn’t built by writing more code — it’s built by deeply understanding problems and designing elegant solutions.",
  },
];

export default function AboutGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {cards.map((card, index) => (
        <motion.article
          key={card.title}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.6,
            delay: index * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            group
            relative
            min-h-[270px]
            rounded-[24px]
            border
            border-[var(--border)]
            bg-[var(--surface)]
            p-7
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-[rgba(214,180,102,0.35)]
          "
        >
          {/* Icon */}
          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-[var(--border)]
              bg-black/20
              text-sm
              font-medium
              text-[var(--accent)]
            "
          >
            {card.icon}
          </div>

          <h3 className="mt-8 text-xl font-medium">
            {card.title}
          </h3>

          <p className="mt-4 max-w-sm text-sm leading-7 text-[var(--foreground-secondary)]">
            {card.description}
          </p>

          {/* Arrow */}
          <div
            className="
              absolute
              bottom-7
              right-7
              text-lg
              text-[var(--accent)]
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          >
            →
          </div>
        </motion.article>
      ))}
    </div>
  );
}