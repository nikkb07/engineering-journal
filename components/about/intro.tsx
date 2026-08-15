"use client";

import { motion } from "framer-motion";

export default function Intro() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="mx-auto max-w-3xl text-center"
    >
      <p className="text-xs font-medium uppercase tracking-[0.4em] text-[var(--accent)]">
        Chapter 1
      </p>

      <h1 className="mt-6 font-editorial text-5xl leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
        The Engineer
        <br />
        Behind The Journal
      </h1>

      <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-[var(--foreground-secondary)] md:text-lg">
        I believe engineering is more than writing code. It&apos;s about
        understanding problems, designing thoughtful solutions, and building
        systems that create meaningful impact while continuously learning
        along the journey.
      </p>

      <div className="mx-auto mt-8 h-px w-9 bg-[var(--accent)]" />
    </motion.div>
  );
}