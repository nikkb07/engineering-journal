"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/constants/projects";
import ProjectCard from "./project-card";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden py-20 sm:py-24 md:py-28"
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1400px]
          px-5
          sm:px-6
          md:px-10
          lg:px-12
        "
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 sm:mb-12 md:mb-14"
        >
          <div className="mb-4 flex items-center gap-3 sm:mb-5 sm:gap-4">
            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.3em]
                text-[var(--accent)]
                sm:text-xs
                sm:tracking-[0.35em]
              "
            >
              My Projects
            </span>

            <span className="h-px w-7 bg-[var(--accent)] sm:w-10" />
          </div>

          <h2
            className="
              max-w-[800px]
              font-editorial
              text-[42px]
              leading-[0.95]
              tracking-[-0.035em]
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            Some of my recent work
            <span className="text-[var(--accent)]">.</span>
          </h2>

          <p
            className="
              mt-5
              max-w-[650px]
              text-sm
              leading-6
              text-[var(--foreground-secondary)]
              sm:mt-6
              sm:text-base
              sm:leading-7
              md:text-lg
            "
          >
            Real-world applications built with modern technologies.
          </p>
        </motion.div>

        {/* Projects */}
        <div
          className="
            grid
            grid-cols-1
            gap-8
            md:gap-10
            lg:grid-cols-2
            lg:gap-6
          "
        >
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}