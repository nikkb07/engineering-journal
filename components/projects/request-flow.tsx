"use client";

import {
  Bot,
  Database,
  MessageSquareText,
  Search,
  MonitorSmartphone,
} from "lucide-react";

import { motion } from "framer-motion";

const FLOW = [
  {
    title: "Retriever",
    icon: Search,
  },
  {
    title: "ChromaDB",
    icon: Database,
  },
  {
    title: "Prompt",
    icon: MessageSquareText,
  },
  {
    title: "Ollama",
    icon: Bot,
  },
  {
    title: "Frontend",
    icon: MonitorSmartphone,
  },
];

export default function RequestFlow() {
  return (
    <section className="py-32">
      <div className="mb-20 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-[var(--foreground-secondary)]">
          Live Flow
        </p>

        <h2 className="mt-4 font-editorial text-6xl">
          How Every Request Travels
        </h2>
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-center">
        {/* User */}

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
            scale: 0.9,
            filter: "blur(10px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col items-center"
        >
          <div
            className="
              flex
              h-24
              w-24
              items-center
              justify-center
              rounded-full
              border
              border-[var(--border)]
              bg-[var(--surface)]
              text-4xl
            "
          >
            👤
          </div>

          <p className="mt-4 text-sm font-medium">
            User Question
          </p>
        </motion.div>

        {FLOW.map((step, index) => {
          const Icon = step.icon;

          return (
            <div
              key={step.title}
              className="flex items-center"
            >
              {/* Connector */}

              <motion.div
                initial={{
                  scaleX: 0,
                }}
                whileInView={{
                  scaleX: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.25 + 0.2,
                }}
                className="
                  mx-8
                  h-[2px]
                  w-20
                  origin-left
                  bg-gradient-to-r
                  from-[var(--accent)]
                  to-[var(--border)]
                "
              />

              {/* Node */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 60,
                  scale: 0.9,
                  filter: "blur(10px)",
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  filter: "blur(0px)",
                }}
                viewport={{
                  once: true,
                  amount: 0.5,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.25 + 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col items-center"
              >
                <div
                  className="
                    flex
                    h-24
                    w-24
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[var(--border)]
                    bg-[var(--surface)]
                    shadow-lg
                  "
                >
                  <Icon
                    size={34}
                    className="text-[var(--accent)]"
                  />
                </div>

                <p className="mt-4 text-sm font-medium">
                  {step.title}
                </p>
              </motion.div>
            </div>
          );
        })}

        {/* Final Connector */}

        <motion.div
          initial={{
            scaleX: 0,
          }}
          whileInView={{
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
            delay: FLOW.length * 0.25 + 0.2,
          }}
          className="
            mx-8
            h-[2px]
            w-20
            origin-left
            bg-gradient-to-r
            from-[var(--accent)]
            to-[var(--border)]
          "
        />

        {/* Response */}

        <motion.div
          initial={{
            opacity: 0,
            y: 60,
            scale: 0.9,
            filter: "blur(10px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: FLOW.length * 0.25 + 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col items-center"
        >
          <div
            className="
              flex
              h-24
              w-24
              items-center
              justify-center
              rounded-full
              bg-[var(--accent)]
              text-4xl
            "
          >
            ✓
          </div>

          <p className="mt-4 text-sm font-medium">
            Response
          </p>
        </motion.div>
      </div>
    </section>
  );
}