"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticProps {
  children: React.ReactNode;
  className?: string;
}

export default function Magnetic({
  children,
  className,
}: MagneticProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, {
    stiffness: 180,
    damping: 15,
    mass: 0.2,
  });

  const y = useSpring(mouseY, {
    stiffness: 180,
    damping: 15,
    mass: 0.2,
  });

  function handleMove(
    e: React.MouseEvent<HTMLDivElement>
  ) {
    const rect = e.currentTarget.getBoundingClientRect();

    const px = e.clientX - rect.left - rect.width / 2;
    const py = e.clientY - rect.top - rect.height / 2;

    mouseX.set(px * 0.18);
    mouseY.set(py * 0.18);
  }

  function handleLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      style={{ x, y }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
}