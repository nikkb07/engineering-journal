"use client";

import { motion, MotionValue } from "framer-motion";

interface SpotlightProps {
  x: MotionValue<number>;
  y: MotionValue<number>;
}

export default function Spotlight({
  x,
  y,
}: SpotlightProps) {
  return (
    <div className="absolute inset-0 z-[5] overflow-hidden pointer-events-none">
      <motion.div
        style={{ x, y }}
        initial={{
          opacity: 0,
          scale: 0.85,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          left-[72%]
          top-[48%]
          -translate-x-1/2
          -translate-y-1/2
          h-[680px]
          w-[680px]
          rounded-full
          bg-[rgba(214,180,102,0.14)]
          blur-[150px]
        "
      />
    </div>
  );
}