"use client";

import {
  motion,
  useScroll,
  useSpring,
} from "framer-motion";

export default function ReadingProgress() {
  const { scrollYProgress } = useScroll();

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
  });

  return (
    <div className="fixed right-6 top-1/2 z-50 h-48 w-[3px] -translate-y-1/2 rounded-full bg-white/10">

      <motion.div
        style={{ scaleY }}
        className="origin-top rounded-full bg-[var(--accent)]"
      />

    </div>
  );
}