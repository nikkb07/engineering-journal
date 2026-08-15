"use client";

import {
  Server,
  Monitor,
  Sparkles,
  Wrench,
} from "lucide-react";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";

interface Skill {
  name: string;
  icon: IconType | React.ComponentType<{
    size?: number;
    className?: string;
  }>;
}

interface SkillCardProps {
  title: string;
  skills: Skill[];
}

const CATEGORY_ICONS = {
  Backend: Server,
  Frontend: Monitor,
  AI: Sparkles,
  Tools: Wrench,
};

const CATEGORY_DESCRIPTIONS = {
  Backend: "Building robust APIs and scalable server-side systems.",
  Frontend: "Crafting responsive and interactive user experiences.",
  AI: "Exploring AI technologies to build intelligent solutions.",
  Tools: "Essential tools that power my development workflow.",
};

export default function SkillCard({
  title,
  skills,
}: SkillCardProps) {
  const Icon =
    CATEGORY_ICONS[title as keyof typeof CATEGORY_ICONS] ?? Wrench;

  const description =
    CATEGORY_DESCRIPTIONS[
      title as keyof typeof CATEGORY_DESCRIPTIONS
    ] ?? "Technologies I use throughout my engineering workflow.";

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group
        relative
        flex
        h-full
        min-h-[280px]
        flex-col
        overflow-hidden
        rounded-[24px]
        border
        border-[var(--border)]
        bg-[var(--surface)]
        p-5
        transition-colors
        duration-500
        hover:border-[var(--accent)]

        sm:min-h-[300px]
        sm:rounded-[26px]
        sm:p-6

        xl:min-h-[330px]
        xl:rounded-[28px]
      "
    >
      {/* Subtle corner glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-16
          -top-16
          h-32
          w-32
          rounded-full
          bg-[var(--accent)]
          opacity-0
          blur-3xl
          transition-opacity
          duration-500
          group-hover:opacity-10
        "
      />

      {/* Category icon */}
      <div
        className="
          relative
          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-[var(--border)]
          bg-[var(--background)]
          text-[var(--accent)]
          transition-all
          duration-300
          group-hover:border-[var(--accent)]
          group-hover:bg-[var(--accent)]
          group-hover:text-black

          sm:h-12
          sm:w-12
        "
      >
        <Icon
          size={19}
          strokeWidth={1.6}
        />
      </div>

      {/* Heading */}
      <div className="mt-5 sm:mt-6">
        <h3
          className="
            font-editorial
            text-[28px]
            leading-none

            sm:text-3xl
          "
        >
          {title}
        </h3>

        <div
          className="
            mt-3
            h-px
            w-8
            bg-[var(--accent)]
            transition-all
            duration-300
            group-hover:w-14

            sm:mt-4
          "
        />

        <p
          className="
            mt-3
            max-w-[280px]
            text-[13px]
            leading-6
            text-[var(--foreground-secondary)]

            sm:mt-4
            sm:text-sm
          "
        >
          {description}
        </p>
      </div>

      {/* Technology pills */}
      <div
        className="
          mt-auto
          flex
          flex-wrap
          gap-1.5
          pt-6

          sm:gap-2
          sm:pt-8
        "
      >
        {skills.map((skill, index) => {
          const SkillIcon = skill.icon;

          return (
            <span
              key={`${title}-${skill.name}-${index}`}
              className="
                inline-flex
                items-center
                gap-1.5
                rounded-full
                border
                border-[var(--border)]
                bg-white/[0.025]
                px-2.5
                py-1.5
                text-[10px]
                text-[var(--foreground-secondary)]
                transition-all
                duration-300
                hover:border-[var(--accent)]
                hover:bg-[var(--accent)]/[0.06]
                hover:text-[var(--foreground)]

                sm:gap-2
                sm:px-3
                sm:py-2
                sm:text-xs
              "
            >
              <SkillIcon
                size={14}
                className="shrink-0 sm:h-[15px] sm:w-[15px]"
              />

              <span>{skill.name}</span>
            </span>
          );
        })}
      </div>
    </motion.div>
  );
}