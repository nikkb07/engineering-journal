"use client";

import Image from "next/image";
import { motion, MotionValue } from "framer-motion";
import { useState } from "react";

interface HeroPortraitProps {
  x: MotionValue<number>;
  y: MotionValue<number>;
}

export default function HeroPortrait({
  x,
  y,
}: HeroPortraitProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      initial={{
        opacity: 0,
        scale: 0.96,
        y: 40,
      }}
      animate={{
        opacity: 1,
        scale: hovered ? 1.015 : 1,
        y: hovered ? -6 : 0,
      }}
      transition={{
        duration: 1.4,
        delay: 0.25,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        pointer-events-none
        absolute
        inset-0
        z-10
        flex
        items-start
        justify-center

        /* Mobile */
        translate-x-[30%]
        pt-[170px]
        opacity-45

        /* iPhone SE */
        max-[390px]:translate-x-[34%]
        max-[390px]:pt-[185px]
        max-[390px]:opacity-35

        /* Tablet */
        sm:translate-x-[24%]
        sm:pt-[140px]
        sm:opacity-60

        /* Desktop */
        lg:translate-x-[400px]
        lg:items-end
        lg:pt-0
        lg:pb-1
        lg:opacity-100
      "
    >
      <motion.div
        style={{ x, y }}
        className="
          relative
          h-[68vh]
          w-[520px]

          /* iPhone SE */
          max-[390px]:h-[60vh]
          max-[390px]:w-[440px]

          /* Tablet */
          sm:h-[74vh]
          sm:w-[620px]

          /* Desktop */
          lg:h-[96vh]
          lg:w-[940px]
        "
      >
        <Image
          src="/images/avatar/hero.png"
          alt="Hero Portrait"
          fill
          priority
          sizes="
            (max-width: 390px) 70vw,
            (max-width: 768px) 75vw,
            (max-width: 1024px) 70vw,
            940px
          "
          className="object-contain object-bottom"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 90%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, black 0%, black 96%, transparent 100%)",
          }}
        />
      </motion.div>
    </motion.div>
  );
}