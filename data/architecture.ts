import {
  FileText,
  Scissors,
  BrainCircuit,
  Database,
  Search,
  MessageSquareText,
  Bot,
  MonitorSmartphone,
} from "lucide-react";

export const RAG_ARCHITECTURE = [
  {
    title: "Documents",
    description: "PDFs, Website Content",
    icon: FileText,
  },
  {
    title: "Chunking",
    description: "Semantic Text Splitting",
    icon: Scissors,
  },
  {
    title: "Embeddings",
    description: "Sentence Transformers",
    icon: BrainCircuit,
  },
  {
    title: "ChromaDB",
    description: "Persistent Vector Database",
    icon: Database,
  },
  {
    title: "Retriever",
    description: "Semantic Search",
    icon: Search,
  },
  {
    title: "Prompt Builder",
    description: "Context Injection",
    icon: MessageSquareText,
  },
  {
    title: "Ollama",
    description: "Local LLM Inference",
    icon: Bot,
  },
  {
    title: "Next.js Frontend",
    description: "Interactive Chat Interface",
    icon: MonitorSmartphone,
  },
];