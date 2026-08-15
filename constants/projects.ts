export interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  image: string;
  slug: string;
  github: string | null;
  demo: string | null;
  technologies: string[];
  eyebrow: string;
  overview: string;
  problem: string;
  approach: string;
  engineering: string[];
  result: string;
}

export const PROJECTS: Project[] = [
  {
    number: "01",

    title: "SIMPY RAG Assistant",
    category: "AI • RAG",
    eyebrow: "PROJECT 01 • AI / RAG ASSISTANT",

    description:
      "An AI-powered customer assistant that retrieves relevant information from a knowledge base and generates contextual responses using Retrieval-Augmented Generation.",

    image: "/projects/simpy-rag.png",

    slug: "simpy-rag-assistant",

    github: "https://github.com/nikkb07/RAG-ChatBot-SIMPY",
    demo: null,

    technologies: [
      "Python",
      "FastAPI",
      "LangChain",
      "Chroma",
      "Hugging Face",
      "Ollama",
      "Next.js",
    ],

    overview:
      "SIMPY RAG Assistant is a Retrieval-Augmented Generation chatbot designed to help users interact with company information through a conversational interface.",

    problem:
      "Traditional website navigation makes it difficult for users to quickly find specific company information. The goal was to create a conversational interface that could retrieve relevant information from a controlled knowledge base and answer questions naturally.",

    approach:
      "The system separates the conversational frontend from the RAG backend. User questions are embedded and matched against a vector database. Relevant documents are retrieved and passed to the language model as context before generating the final response.",

    engineering: [
      "Built a FastAPI backend for the assistant.",
      "Implemented document ingestion and vector retrieval.",
      "Used Chroma as the vector database.",
      "Integrated Hugging Face embeddings.",
      "Connected the RAG pipeline with an Ollama-hosted language model.",
      "Built a Next.js conversational frontend.",
      "Added session-based conversation memory.",
    ],

    result:
      "The result is a conversational knowledge interface that allows users to interact with company information without directly exposing the underlying database.",
  },

  {
    number: "02",

    title: "Employee Management System",
    category: "BACKEND • RBAC",
    eyebrow: "PROJECT 02 • BACKEND ENGINEERING",

    description:
      "A backend-focused employee management platform with authentication, authorization, role-based access control, search, filtering, pagination, and PostgreSQL integration.",

    image: "/projects/employee-management.png",

    slug: "employee-management-system",

    github: "https://github.com/nikkb07/Employee_Management_System",
    demo: null,

    technologies: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "JWT",
      "bcrypt",
      "REST APIs",
    ],

    overview:
      "The Employee Management System is a backend application designed around secure employee management and role-based access control.",

    problem:
      "Employee systems need more than basic CRUD operations. Different users should have different permissions while employee data needs to remain structured, searchable, and protected.",

    approach:
      "The application uses JWT authentication and role-based authorization to control access to employee resources. PostgreSQL handles persistent data while REST APIs expose the required employee management operations.",

    engineering: [
      "Implemented user registration and login.",
      "Added JWT-based authentication.",
      "Implemented bcrypt password hashing.",
      "Designed ADMIN, MANAGER, and EMPLOYEE roles.",
      "Implemented role-based permissions.",
      "Built employee CRUD operations.",
      "Added search and department filtering.",
      "Added salary and date sorting.",
      "Implemented pagination.",
      "Integrated PostgreSQL using Node.js.",
    ],

    result:
      "The project demonstrates a production-oriented backend architecture with authentication, authorization, relational data management, and structured REST APIs.",
  },

  {
    number: "03",

    title: "Spin Wheel",
    category: "FRONTEND • INTERACTION",
    eyebrow: "PROJECT 03 • INTERACTIVE WEB",

    description:
      "An interactive reward wheel application focused on visual interaction, reusable components, and random selection logic.",

    image: "/projects/spin-wheel.png",

    slug: "spin-wheel",

    github: "https://github.com/nikkb07/Spin_Wheel",
    demo: null,

    technologies: [
      "React",
      "JavaScript",
      "CSS",
      "Frontend",
      "Backend",
    ],

    overview:
      "Spin Wheel is an interactive reward-wheel application designed around visual feedback and user interaction.",

    problem:
      "The objective was to create a simple but engaging interaction where users can trigger a visual spinning wheel and receive a randomized result.",

    approach:
      "The application separates the interactive frontend from the backend and focuses on reusable components and predictable wheel behavior.",

    engineering: [
      "Built a responsive wheel interface.",
      "Implemented random selection logic.",
      "Created reusable frontend components.",
      "Separated frontend and backend responsibilities.",
      "Focused on visual interaction and user feedback.",
    ],

    result:
      "The project demonstrates the ability to combine frontend interaction, application logic, and reusable component design into a focused product experience.",
  },

  {
    number: "04",

    title: "The Engineering Journal",
    category: "FULL STACK • PORTFOLIO",
    eyebrow: "PROJECT 04 • THIS WEBSITE",

    description:
      "A premium engineering portfolio designed as an interactive journal documenting projects, technical skills, experience, and engineering decisions.",

    image: "/projects/engineering-journal.png",

    slug: "engineering-journal",

    github: null,
    demo: null,

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "FastAPI",
      "RAG",
    ],

    overview:
      "The Engineering Journal is more than a traditional portfolio. It is designed as a technical journal that combines personal branding, project documentation, interactive UI, and an engineering assistant.",

    problem:
      "A conventional portfolio often reduces engineering work to screenshots and technology lists. The goal here was to create a website that communicates both what was built and the engineering thinking behind it.",

    approach:
      "The website is structured as a collection of sections representing different parts of an engineering journey. The frontend uses reusable components and motion-driven interactions while the engineering assistant is connected to a separate RAG backend.",

    engineering: [
      "Built the portfolio using Next.js and React.",
      "Designed reusable UI components.",
      "Implemented responsive layouts.",
      "Added Framer Motion interactions.",
      "Created project case-study architecture.",
      "Integrated an AI engineering assistant.",
      "Connected the assistant to a separate FastAPI RAG backend.",
      "Designed navigation around individual portfolio sections.",
    ],

    result:
      "The portfolio itself becomes a demonstration project: a full-stack product combining frontend engineering, backend integration, AI, UX, and technical storytelling.",
  },
];