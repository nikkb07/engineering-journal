"use client";

import { MARQUEE_ITEMS } from "@/constants/marquee";
import { motion } from "framer-motion";

const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

export default function Marquee() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
        delay: 1.1,
      }} 
      className="relative z-30 mt-auto mb-2 overflow-hidden rounded-full border border-[var(--border)] bg-[var(--surface)]/70 backdrop-blur-xl">

      {/* left fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[var(--background)] to-transparent" />

      {/* right fade */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[var(--background)] to-transparent" />

      <div className="group flex overflow-hidden py-4">

        <div className="animate-marquee flex shrink-0 gap-12 group-hover:[animation-play-state:paused]">

          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-12 whitespace-nowrap"
            >
              <span className="text-sm font-medium tracking-wide text-[var(--foreground-secondary)]">
                {item}
              </span>

              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            </div>
          ))}

        </div>

      </div>

    </motion.div>
  );
}