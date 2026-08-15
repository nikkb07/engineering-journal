"use client";

import { ArrowRight } from "lucide-react";
import FadeUp from "../ui/fade-up";
import Magnetic from "@/components/ui/magnetic";

export default function HeroContent() {
  return (
    <div className="relative z-20 flex h-full items-center">
      <div
        className="
          max-w-[760px]
          translate-y-[-3%]

          pt-24
          sm:pt-28
          lg:pt-0

          max-[380px]:pt-16
        "
      >

        {/* Small label */}
        <FadeUp delay={0.4}>
          <span
            className="
              mb-8
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-[var(--border)]
              bg-white/5
              px-4
              py-2
              text-sm
              text-[var(--foreground-secondary)]
              backdrop-blur

              max-[380px]:mb-5
              max-[380px]:px-3
              max-[380px]:py-1.5
              max-[380px]:text-xs
            "
          >
            Engineering with Purpose.
          </span>
        </FadeUp>

        {/* Heading */}
        <FadeUp delay={0.55}>
          <h1
            className="
              mt-8
              font-editorial
              text-[48px]
              leading-[0.95]
              tracking-[-0.04em]

              sm:text-[58px]
              md:text-[64px]
              lg:text-[70px]

              max-[380px]:mt-5
              max-[380px]:text-[40px]
            "
          >
            Building
            <br />
            software,
            <br />
            engineering
            <br />
            ideas.
          </h1>
        </FadeUp>

        {/* Description */}
        <FadeUp delay={0.75}>
          <p
            className="
              mt-8
              max-w-[560px]
              text-base
              leading-7
              text-[var(--foreground-secondary)]

              sm:text-lg
              sm:leading-8

              max-[380px]:mt-5
              max-[380px]:text-[13px]
              max-[380px]:leading-6
            "
          >
            Full-stack engineer crafting premium digital experiences,
            documenting the learning process, and building products that
            solve real-world problems.
          </p>
        </FadeUp>

        {/* Buttons */}
        <div
          className="
            mt-10
            flex
            flex-wrap
            items-center
            gap-4

            max-[380px]:mt-6
            max-[380px]:gap-2
          "
        >
          <Magnetic>
            <FadeUp delay={0.75}>
              <a
                href="#projects"
                className="
                  group
                  inline-flex
                  h-14
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[var(--accent)]
                  px-7
                  text-sm
                  font-medium
                  text-[var(--accent-foreground)]
                  transition-all
                  duration-300
                  hover:scale-105

                  max-[380px]:h-11
                  max-[380px]:px-5
                  max-[380px]:text-xs
                "
              >
                Explore Projects

                <ArrowRight
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1

                    max-[380px]:h-4
                    max-[380px]:w-4
                  "
                />
              </a>
            </FadeUp>
          </Magnetic>

          <Magnetic>
            <FadeUp delay={0.85}>
              <a
                href="#about"
                className="
                  inline-flex
                  h-14
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[var(--border)]
                  bg-white/5
                  px-7
                  text-sm
                  backdrop-blur
                  transition-all
                  duration-300
                  hover:bg-white/10

                  max-[380px]:h-11
                  max-[380px]:px-5
                  max-[380px]:text-xs
                "
              >
                About Me
              </a>
            </FadeUp>
          </Magnetic>
        </div>
      </div>
    </div>
  );
}