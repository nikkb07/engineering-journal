"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Project } from "@/types/project";

interface FeaturedProjectProps {
  project: Project;
  reverse?: boolean;
}

export default function FeaturedProject({
  project,
  reverse = false,
}: FeaturedProjectProps) {
  return (
    <article
      className={`
        grid
        gap-10
        lg:grid-cols-2
        lg:items-center
        ${reverse ? "lg:[&>*:first-child]:order-2" : ""}
      `}
    >
      {/* Project Visual */}

      <div
        className="
          group
          relative
          min-h-[420px]
          overflow-hidden
          rounded-[32px]
          border
          border-[var(--border)]
          bg-[var(--surface)]
        "
      >
        {/* Background glow */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            h-72
            w-72
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[rgba(214,180,102,0.10)]
            blur-[100px]
            transition-transform
            duration-700
            group-hover:scale-125
          "
        />

        {/* Decorative grid */}

        <div
          className="
            absolute
            inset-0
            opacity-30
            [background-image:linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)]
            [background-size:40px_40px]
          "
        />

        {/* Project number */}

        <div className="absolute left-8 top-8 z-10">
          <span className="font-mono text-xs tracking-[0.3em] text-[var(--accent)]">
            PROJECT {String(project.slug).toUpperCase()}
          </span>
        </div>

        {/* Center visual */}

        <div className="relative z-10 flex h-full min-h-[420px] items-center justify-center p-10">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--foreground-secondary)]">
              {project.subtitle}
            </p>

            <h3 className="mt-5 font-editorial text-5xl leading-none md:text-6xl">
              {project.title}
            </h3>

            <div className="mt-8 flex justify-center">
              <span
                className="
                  rounded-full
                  border
                  border-[var(--border)]
                  bg-[var(--surface)]
                  px-5
                  py-2
                  text-xs
                  text-[var(--foreground-secondary)]
                  backdrop-blur
                "
              >
                {project.status}
              </span>
            </div>
          </div>
        </div>

        {/* Hover indicator */}

        <div
          className="
            absolute
            bottom-8
            right-8
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            border
            border-[var(--border)]
            bg-[var(--surface)]
            transition-all
            duration-500
            group-hover:-translate-y-1
            group-hover:border-[var(--accent)]
          "
        >
          <ArrowUpRight size={18} />
        </div>
      </div>

      {/* Project Information */}

      <div className="lg:px-8">
        <p className="text-xs uppercase tracking-[0.35em] text-[var(--accent)]">
          {project.year} · {project.role}
        </p>

        <h3 className="mt-5 font-editorial text-5xl leading-[0.95] md:text-6xl">
          {project.title}
        </h3>

        <p className="mt-6 text-lg leading-8 text-[var(--foreground-secondary)]">
          {project.description}
        </p>

        {/* Tech stack */}

        <div className="mt-8 flex flex-wrap gap-2">
          {project.tech.slice(0, 6).map((technology) => (
            <span
              key={technology}
              className="
                rounded-full
                border
                border-[var(--border)]
                bg-[var(--surface-secondary)]
                px-4
                py-2
                text-xs
                text-[var(--foreground-secondary)]
              "
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Buttons */}

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href={`/projects/${project.slug}`}
            className="
              group
              flex
              items-center
              gap-2
              rounded-full
              bg-[var(--accent)]
              px-6
              py-3
              text-sm
              font-medium
              text-[var(--accent-foreground)]
              transition-all
              duration-300
              hover:scale-105
            "
          >
            Study More

            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-[var(--border)]
              bg-[var(--surface)]
              px-6
              py-3
              text-sm
              transition-all
              duration-300
              hover:border-[var(--accent)]
              hover:bg-[var(--surface-secondary)]
            "
          >
            Demo

            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </article>
  );
}