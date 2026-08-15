"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/types/project";

interface ProjectGalleryProps {
  project: Project;
}

export default function ProjectGallery({
  project,
}: ProjectGalleryProps) {
  return (
    <section className="py-32">
      <div className="mb-20">
        <p className="text-sm uppercase tracking-[0.35em] text-[var(--accent)]">
          Gallery
        </p>

        <h2 className="mt-5 font-editorial text-6xl">
          Visual Journey
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--foreground-secondary)]">
          A visual walkthrough of the product, interface, and engineering
          decisions that shaped this project.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        {project.gallery.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: index * 0.08,
            }}
            whileHover={{
              y: -8,
            }}
            className="group overflow-hidden rounded-[36px] border border-[var(--border)] bg-[var(--surface)] shadow-xl"
          >
            {/* Browser Header */}
            <div className="flex items-center gap-3 border-b border-[var(--border)] px-6 py-5">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <div className="mx-auto w-[60%] rounded-full border border-[var(--border)] bg-[var(--background)] py-2 text-center text-xs text-[var(--foreground-secondary)]">
                {project.title.toLowerCase().replace(/\s+/g, "")}.dev
              </div>
            </div>

            {/* Screenshot */}
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={image}
                alt={project.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              {/* Glass Reflection */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}