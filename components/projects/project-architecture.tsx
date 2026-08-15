"use client";

import { motion } from "framer-motion";
import { RAG_ARCHITECTURE } from "@/data/architecture";
import GlassCard from "@/components/ui/glass-card";

export default function ProjectArchitecture() {
  return (
    <section className="py-32">
      {/* Heading */}
      <div className="mb-20">
        <p className="text-sm uppercase tracking-[0.35em] text-[var(--foreground-secondary)]">
          Architecture
        </p>

        <h2 className="mt-4 font-editorial text-6xl">
          System Flow
        </h2>
      </div>

      {/* Timeline */}
      <div className="mx-auto max-w-3xl">
        {RAG_ARCHITECTURE.map((step, index) => {
          const Icon = step.icon;

          return (
            <div key={step.title}>
              {/* Card */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.35,
                }}
                transition={{
                  duration: 0.75,
                  delay: index * 0.15,
                }}
              >
                <GlassCard
                  className="
                    group
                    p-8
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-[var(--accent)]
                  "
                >
                  <div className="flex items-center gap-6">
                    {/* Icon */}
                    <motion.div
                      animate={{
                        boxShadow: [
                          "0 0 0 rgba(214,180,102,0)",
                          "0 0 24px rgba(214,180,102,.22)",
                          "0 0 0 rgba(214,180,102,0)",
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.25,
                      }}
                      className="
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[var(--border)]
                        bg-[var(--accent)]/10
                        text-[var(--accent)]
                        transition-transform
                        duration-300
                        group-hover:scale-110
                      "
                    >
                      <Icon size={28} />
                    </motion.div>

                    {/* Text */}
                    <div>
                      <h3 className="text-2xl font-semibold transition-colors group-hover:text-[var(--accent)]">
                        {step.title}
                      </h3>

                      <p className="mt-2 text-[var(--foreground-secondary)]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>

              {/* Connector */}
              {index !== RAG_ARCHITECTURE.length - 1 && (
                <div className="flex justify-center py-5">
                  <motion.div
                    initial={{
                      scaleY: 0,
                    }}
                    whileInView={{
                      scaleY: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.35,
                      ease: "easeOut",
                    }}
                    className="
                      h-16
                      w-[2px]
                      origin-top
                      rounded-full
                      bg-gradient-to-b
                      from-[var(--accent)]
                      to-[var(--border)]
                    "
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}