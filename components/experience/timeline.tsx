"use client";

import { EXPERIENCE } from "@/constants/experience";
import TimelineItem from "./timeline-item";
import FadeUp from "@/components/ui/fade-up";

export default function Timeline() {
  return (
    <div
      className="
        mx-auto
        mt-16
        w-full
        max-w-4xl

        sm:mt-20
        md:mt-24
      "
    >
      <FadeUp>

        {/* Role */}
        <h3
          className="
            font-editorial
            text-[40px]
            leading-[0.95]
            tracking-[-0.03em]

            sm:text-5xl
            md:text-6xl
          "
        >
          {EXPERIENCE.role}
        </h3>

        {/* Company */}
        <p
          className="
            mt-3
            text-lg
            text-[var(--accent)]

            sm:mt-4
            sm:text-xl
          "
        >
          {EXPERIENCE.company}
        </p>

        {/* Duration */}
        <p
          className="
            mt-1.5
            text-sm
            text-[var(--foreground-secondary)]

            sm:mt-2
          "
        >
          {EXPERIENCE.duration}
        </p>

      </FadeUp>


      {/* Timeline */}
      <div
        className="
          mt-12

          sm:mt-16
          md:mt-20
        "
      >
        {EXPERIENCE.points.map((point, index) => (
          <TimelineItem
            key={`${EXPERIENCE.role}-${index}`}
            text={point}
            delay={index * 0.15}
          />
        ))}
      </div>

    </div>
  );
}