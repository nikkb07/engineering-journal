"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "6+",
    label: "Projects Built",
    icon: "↗",
  },
  {
    value: "200+",
    label: "DSA Problems",
    icon: "✦",
  },
  {
    value: "15+",
    label: "Technologies",
    icon: "</>",
  },
  {
    value: "1",
    label: "Research Project",
    icon: "◇",
  },
];

export default function Stats() {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.06,
          }}
          className="
            flex
            min-h-[92px]
            items-center
            gap-4
            rounded-[20px]
            border
            border-[var(--border)]
            bg-[var(--surface)]
            px-5
            py-4
          "
        >
          <div
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-black/20
              text-sm
              text-[var(--accent)]
            "
          >
            {stat.icon}
          </div>

          <div>
            <p className="font-editorial text-2xl leading-none">
              {stat.value}
            </p>

            <p className="mt-2 text-xs text-[var(--foreground-secondary)]">
              {stat.label}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}