import {
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiPython,
  SiDocker,
  SiGit,
  SiGithub,
  SiPostman,
  SiLinux,
} from "react-icons/si";

import { TbApi } from "react-icons/tb";
import { BrainCircuit } from "lucide-react";

export const SKILLS = [
  {
    category: "Backend",

    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "REST APIs", icon: TbApi },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
  },

  {
    category: "Frontend",

    items: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Framer Motion", icon: SiFramer },
    ],
  },

  {
    category: "AI",

    items: [
      { name: "Python", icon: SiPython },
      { name: "LangChain", icon: BrainCircuit },
      { name: "RAG", icon: BrainCircuit },
      { name: "FastAPI", icon: TbApi },
    ],
  },

  {
    category: "Tools",

    items: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Docker", icon: SiDocker },
      { name: "Linux", icon: SiLinux },
      { name: "Postman", icon: SiPostman },
    ],
  },
];