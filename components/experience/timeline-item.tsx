"use client";

import { motion } from "framer-motion";

interface Props {
  text: string;
  delay: number;
}

export default function TimelineItem({
  text,
  delay,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -30,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        delay,
        duration: 0.6,
      }}
      className="
        relative
        border-l
        border-[var(--border)]
        pl-6
        pb-9

        sm:pl-8
        sm:pb-12

        md:pl-10
        md:pb-14
      "
    >

      {/* Timeline dot */}
      <div
        className="
          absolute
          left-[-5px]
          top-2
          h-2.5
          w-2.5
          rounded-full
          bg-[var(--accent)]

          sm:left-[-6px]
          sm:h-3
          sm:w-3
        "
      />

      {/* Experience text */}
      <p
        className="
          text-[15px]
          leading-7
          text-[var(--foreground-secondary)]

          sm:text-base
          sm:leading-7

          md:text-lg
          md:leading-8
        "
      >
        {text}
      </p>

    </motion.div>
  );
}