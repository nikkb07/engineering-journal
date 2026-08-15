"use client";

import { ArrowUpRight, Code2 } from "lucide-react";
import { Project } from "@/types/project";

interface ProjectHeaderProps {
  project: Project;
}

export default function ProjectHeader({
  project,
}: ProjectHeaderProps) {
  return (
    <section className="relative overflow-hidden rounded-[40px] border border-[var(--border)] bg-[var(--surface)] p-10 shadow-lg">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        {/* Left */}

        <div className="max-w-3xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="rounded-full border border-[var(--border)] px-4 py-1 text-xs uppercase tracking-[0.25em] text-[var(--foreground-secondary)]">
              {project.year}
            </span>

            <span className="rounded-full bg-[var(--accent)] px-4 py-1 text-xs font-medium text-[var(--accent-foreground)]">
              {project.status}
            </span>
          </div>

          <h1 className="font-editorial text-6xl leading-none">
            {project.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--foreground-secondary)]">
            {project.subtitle}
          </p>
        </div>

        {/* Right */}

        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            className="flex items-center gap-2 rounded-full border border-[var(--border)] px-6 py-3 transition hover:border-[var(--accent)]"
          >
            <Code2 size={18} />

            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            className="flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-[var(--accent-foreground)] transition hover:scale-105"
          >
            Live Demo

            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}