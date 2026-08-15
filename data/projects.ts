import { Project } from "@/types/project";

export const PROJECTS: Project[] = [
  {
    slug: "simpy-rag-assistant",

    title: "SIMPY RAG Assistant",

    subtitle: "AI-Powered Customer Support Assistant",

    year: "2026",

    status: "In Progress",

    description:
      "An AI-powered customer support assistant that retrieves company knowledge from documents and generates accurate answers using Retrieval-Augmented Generation.",

    overviewTitle:
      "Building a knowledge-aware assistant for real-world customer support.",

    role: "Full Stack AI Engineer",

    duration: "2026",

    team: "Solo",

    platform: "Web",

    client: "SIMPY",

    image: "",

    gallery: [],

    tech: [
      "Python",
      "FastAPI",
      "LangChain",
      "Ollama",
      "ChromaDB",
      "HuggingFace",
      "Next.js",
      "Node.js",
    ],

    techStack: [
      {
        title: "AI / RAG",
        items: [
          "LangChain",
          "Ollama",
          "ChromaDB",
          "HuggingFace Embeddings",
        ],
      },
      {
        title: "Backend",
        items: [
          "Python",
          "FastAPI",
        ],
      },
      {
        title: "Frontend",
        items: [
          "Next.js",
          "React",
        ],
      },
    ],

    github: "#",

    live: "#",

    architecture: [
      "Document ingestion",
      "Text chunking",
      "Embedding generation",
      "Vector storage",
      "Semantic retrieval",
      "LLM response generation",
    ],

    lessons: [
      "Retrieval-Augmented Generation",
      "Vector databases",
      "LLM integration",
      "Production API architecture",
    ],

    featured: true,
  },

  {
    slug: "employee-management-system",

    title: "Employee Management System",

    subtitle: "Role-Based Full-Stack Management Platform",

    year: "2026",

    status: "Completed",

    description:
      "A role-based employee management platform with authentication, authorization, employee operations, and administrative controls.",

    overviewTitle:
      "Designing a secure backend architecture around authentication and role-based access control.",

    role: "Backend Engineer",

    duration: "2026",

    team: "Solo",

    platform: "Web",

    client: "Personal",

    image: "",

    gallery: [],

    tech: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "JWT",
      "REST APIs",
      "bcrypt",
    ],

    techStack: [
      {
        title: "Backend",
        items: [
          "Node.js",
          "Express.js",
        ],
      },
      {
        title: "Database",
        items: [
          "PostgreSQL",
        ],
      },
      {
        title: "Security",
        items: [
          "JWT",
          "bcrypt",
          "RBAC",
        ],
      },
    ],

    github: "#",

    live: "#",

    architecture: [
      "JWT authentication",
      "Role-based authorization",
      "REST API architecture",
      "PostgreSQL data layer",
      "Middleware-based access control",
    ],

    lessons: [
      "Authentication architecture",
      "RBAC implementation",
      "Secure API design",
      "Database integration",
    ],

    featured: true,
  },

  {
    slug: "spin-wheel",

    title: "Spin Wheel",

    subtitle: "Interactive Gamified Web Application",

    year: "2026",

    status: "Completed",

    description:
      "An interactive spin wheel application designed for gamification, random selection, and engaging user experiences.",

    overviewTitle:
      "Creating a simple interactive experience with responsive UI and engaging motion.",

    role: "Frontend Engineer",

    duration: "2026",

    team: "Solo",

    platform: "Web",

    client: "Personal",

    image: "",

    gallery: [],

    tech: [
      "React",
      "TypeScript",
      "JavaScript",
      "CSS",
    ],

    techStack: [
      {
        title: "Frontend",
        items: [
          "React",
          "TypeScript",
        ],
      },
      {
        title: "Interaction",
        items: [
          "JavaScript",
          "CSS Animations",
        ],
      },
    ],

    github: "#",

    live: "#",

    architecture: [
      "Interactive wheel component",
      "Random selection logic",
      "Responsive interface",
      "Animation-driven interaction",
    ],

    lessons: [
      "Interactive UI development",
      "Animation logic",
      "State management",
      "Responsive design",
    ],

    featured: true,
  },
];