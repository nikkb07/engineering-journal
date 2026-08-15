"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/constants/skills";
import SkillCard from "./skill-card";

export default function SkillsGrid() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.12,
          },
        },
      }}
      className="
        mt-16
        grid
        grid-cols-1
        gap-5
        md:grid-cols-2
        xl:grid-cols-4
      "
    >
      {SKILLS.map((section) => (
        <motion.div
          key={section.category}
          variants={{
            hidden: {
              opacity: 0,
              y: 30,
            },
            show: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              },
            },
          }}
          className="h-full"
        >
          <SkillCard
            title={section.category}
            skills={section.items}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}