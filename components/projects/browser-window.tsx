"use client";

import { ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

interface BrowserWindowProps {
  children: ReactNode;
}

export default function BrowserWindow({
  children,
}: BrowserWindowProps) {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const smoothRotateX = useSpring(rotateX, {
    stiffness: 180,
    damping: 20,
  });

  const smoothRotateY = useSpring(rotateY, {
    stiffness: 180,
    damping: 20,
  });

  const glareX = useTransform(
    smoothRotateY,
    [-10, 10],
    ["20%", "80%"]
  );

  function handleMouseMove(
    e: React.MouseEvent<HTMLDivElement>
  ) {
    const rect = e.currentTarget.getBoundingClientRect();

    const x =
      (e.clientX - rect.left) / rect.width;

    const y =
      (e.clientY - rect.top) / rect.height;

    rotateY.set((x - 0.5) * 10);

    rotateX.set(-(y - 0.5) * 10);
  }

  function reset() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{
        rotateX: smoothRotateX,
        rotateY: smoothRotateY,
        transformPerspective: 1400,
      }}
      whileHover={{
        scale: 1.02,
      }}
      transition={{
        duration: 0.35,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-[var(--border)]
        bg-[var(--surface)]
        shadow-[var(--shadow-lg)]
      "
    >
      {/* Moving Reflection */}

      <motion.div
        style={{
          left: glareX,
        }}
        className="
          pointer-events-none
          absolute
          top-0
          h-full
          w-40
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-white/15
          to-transparent
          blur-2xl
        "
      />

      {/* Browser Header */}

      <div
        className="
          flex
          items-center
          justify-between
          border-b
          border-[var(--border)]
          px-5
          py-4
        "
      >
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-red-400" />
          <div className="h-3 w-3 rounded-full bg-yellow-400" />
          <div className="h-3 w-3 rounded-full bg-green-400" />
        </div>

        <div
          className="
            rounded-full
            border
            border-[var(--border)]
            bg-[var(--background)]
            px-6
            py-1
            text-xs
            text-[var(--foreground-secondary)]
          "
        >
          engineeringjournal.dev
        </div>

        <div className="w-12" />
      </div>

      {children}
    </motion.div>
  );
}