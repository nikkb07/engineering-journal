import SectionDivider from "./section-divider";
import Architecture from "./architecture";
import Challenges from "./challenges";
import Lessons from "./lessons";
import FutureWork from "./future-work";
import TechStack from "./tech-stack";
import ProjectLinks from "./project-links";
import CodePreview from "./code-preview";
import Reveal from "@/components/ui/reveal";

export default function Article() {
  return (
    
    <article className="space-y-24">
       <Reveal> 
      <section>

        <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent)]">
          Case Study
        </p>

        <h2 className="mt-4 font-editorial text-6xl leading-none">
          AI Knowledge Assistant
        </h2>

        <p className="mt-8 text-lg leading-8 text-[var(--foreground-secondary)]">
          A production-ready Retrieval Augmented Generation assistant
          built using FastAPI, ChromaDB, Ollama and Next.js to deliver
          contextual answers over proprietary company knowledge.
        </p>

      </section>
      </Reveal>

      <SectionDivider />

      <Reveal>
        <Architecture />
      </Reveal>

      <SectionDivider />


      <Reveal>  
      <TechStack />
      </Reveal>

      <SectionDivider />

      <Reveal>
        <ProjectLinks/>
      </Reveal>

      <SectionDivider />

      <Reveal>
        <CodePreview />
      </Reveal>
        
      <SectionDivider />

      <Reveal>
      <Challenges />
      </Reveal>

      <SectionDivider />

      <Reveal>
      <Lessons />
      </Reveal>

      <SectionDivider />

      <Reveal>
        <FutureWork />
      </Reveal>
      

    </article>
  );
}