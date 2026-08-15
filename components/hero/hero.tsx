"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Container from "@/components/ui/container";
import HeroContent from "./hero-content";
import Marquee from "./marquee";
import BackgroundGrid from "./background-grid";
import Spotlight from "./spotlight";
import MovingText from "./moving-text";
import HeroPortrait from "./hero-portrait";

export default function Hero() {
  // Portrait motion values
  const portraitMouseX = useMotionValue(0);
  const portraitMouseY = useMotionValue(0);

  // Glow motion values
  const glowMouseX = useMotionValue(0);
  const glowMouseY = useMotionValue(0);

  // Portrait springs
  const portraitSpringX = useSpring(portraitMouseX, {
    stiffness: 55,
    damping: 22,
    mass: 0.9,
  });

  const portraitSpringY = useSpring(portraitMouseY, {
    stiffness: 55,
    damping: 22,
    mass: 0.9,
  });

  // Glow springs
  const glowSpringX = useSpring(glowMouseX, {
    stiffness: 40,
    damping: 22,
    mass: 1,
  });

  const glowSpringY = useSpring(glowMouseY, {
    stiffness: 40,
    damping: 22,
    mass: 1,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const { innerWidth, innerHeight } = window;

    const px = e.clientX / innerWidth - 0.5;
    const py = e.clientY / innerHeight - 0.5;

    // Portrait moves subtly
    portraitMouseX.set(px * 12);
    portraitMouseY.set(py * 12);

    // Glow moves farther
    glowMouseX.set(px * 35);
    glowMouseY.set(py * 35);
  }

  function handleMouseLeave() {
    portraitMouseX.set(0);
    portraitMouseY.set(0);

    glowMouseX.set(0);
    glowMouseY.set(0);
  }

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="
        relative
        min-h-screen
        overflow-hidden

        lg:h-screen
      "
    >
      <BackgroundGrid />

      <Spotlight
        x={glowSpringX}
        y={glowSpringY}
      />

      <MovingText />

      <HeroPortrait
        x={portraitSpringX}
        y={portraitSpringY}
      />

      <Container className="flex min-h-screen flex-col lg:h-full">
        <div
          className="
            absolute
            inset-0
            z-20
          "
        >
          <div
            className="
              mx-auto
              flex
              min-h-full
              max-w-[1400px]
              items-center

              px-6
              pt-20
              pb-24

              sm:px-10
              sm:pt-24

              md:px-12

              lg:h-full
              lg:px-20
              lg:pt-0
              lg:pb-0
              lg:translate-y-10
            "
          >
            <HeroContent />
          </div>
        </div>

        <Marquee />
      </Container>
    </section>
  );
}