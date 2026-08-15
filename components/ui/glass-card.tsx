"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.01,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`
        rounded-[32px]
        border
        border-[var(--border)]
        bg-[var(--surface)]/70
        backdrop-blur-xl
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}