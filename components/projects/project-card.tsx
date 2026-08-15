"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import type { Project } from "@/constants/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-80px",
      }}
      transition={{
        duration: 0.65,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -4,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[24px]
        border
        border-[var(--border)]
        bg-[var(--surface)]
        p-4
        transition-all
        duration-500
        hover:border-[var(--accent)]

        sm:rounded-[26px]
        sm:p-5

        lg:rounded-[28px]
      "
    >
      {/* Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-24
          -top-24
          h-48
          w-48
          rounded-full
          bg-[var(--accent)]
          opacity-0
          blur-[80px]
          transition-opacity
          duration-500
          group-hover:opacity-20
        "
      />

      <div
        className="
          relative
          grid
          gap-5

          md:grid-cols-[1fr_0.82fr]
          md:items-center

          lg:gap-6
        "
      >

        {/* =====================================================
            LEFT CONTENT
        ====================================================== */}

        <div className="flex flex-col">

          {/* Category */}
          <div className="mb-4 sm:mb-5">
            <span
              className="
                inline-flex
                rounded-full
                border
                border-[var(--accent)]
                px-2.5
                py-1.5
                text-[9px]
                font-medium
                uppercase
                tracking-[0.16em]
                text-[var(--accent)]

                sm:px-3
                sm:text-[10px]
                sm:tracking-[0.18em]
              "
            >
              {project.category}
            </span>
          </div>

          {/* Title */}
          <h3
            className="
              max-w-[480px]
              font-editorial
              text-[28px]
              leading-[1.05]
              tracking-[-0.025em]

              sm:text-3xl
              md:text-4xl
            "
          >
            {project.title}
          </h3>

          {/* Description */}
          <p
            className="
              mt-4
              max-w-[470px]
              text-[13px]
              leading-6
              text-[var(--foreground-secondary)]

              sm:mt-5
              sm:text-sm

              md:text-base
            "
          >
            {project.description}
          </p>

          {/* Technologies */}
          <div
            className="
              mt-4
              flex
              flex-wrap
              gap-1.5

              sm:mt-5
              sm:gap-2
            "
          >
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="
                  rounded-full
                  border
                  border-[var(--border)]
                  bg-white/[0.025]
                  px-2.5
                  py-1.5
                  text-[10px]
                  text-[var(--foreground-secondary)]

                  sm:px-3
                  sm:text-[11px]
                "
              >
                {technology}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div
            className="
              mt-5
              flex
              flex-wrap
              items-center
              gap-2.5

              sm:mt-6
              sm:gap-3
            "
          >

            {/* Study More */}
            <Link
              href={`/projects/${project.slug}`}
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-[var(--accent)]
                px-4
                py-2.5
                text-[11px]
                font-medium
                text-black
                transition-all
                duration-300
                hover:-translate-y-0.5

                sm:px-5
                sm:text-xs
              "
            >
              Study More

              <ArrowRight size={14} />
            </Link>

            {/* Demo */}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-[var(--border)]
                  px-4
                  py-2.5
                  text-[11px]
                  transition-all
                  hover:border-[var(--accent)]

                  sm:px-5
                  sm:text-xs
                "
              >
                Demo

                <ArrowUpRight size={14} />
              </a>
            )}

          </div>
        </div>


        {/* =====================================================
            PROJECT IMAGE
        ====================================================== */}

        <div
          className="
            relative
            aspect-[1.35/1]
            w-full
            overflow-hidden
            rounded-xl
            border
            border-[var(--border)]
            bg-[var(--background)]

            sm:rounded-2xl
          "
        >
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            className="
              object-cover
              transition-transform
              duration-700
              ease-out
              group-hover:scale-[1.04]
            "
            sizes="
              (max-width: 767px) 100vw,
              (max-width: 1024px) 50vw,
              45vw
            "
          />

          {/* Image overlay */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-black/35
              via-transparent
              to-transparent
            "
          />

          {/* GitHub */}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              className="
                absolute
                bottom-3
                right-3
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-full
                border
                border-[var(--border)]
                bg-[var(--background)]/80
                backdrop-blur
                transition-all
                duration-300
                hover:border-[var(--accent)]
                hover:bg-[var(--accent)]
                hover:text-black

                sm:bottom-4
                sm:right-4
              "
            >
              <ArrowUpRight size={14} />
            </a>
          )}
        </div>

      </div>
    </motion.article>
  );
}