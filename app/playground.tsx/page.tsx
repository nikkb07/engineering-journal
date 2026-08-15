import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import SectionHeading from "@/components/ui/section-heading";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";

export default function PlaygroundPage() {
  return (
    <Section>
      <Container className="space-y-16">
        <SectionHeading
          title="The Engineering Journal"
          subtitle="Engineering with Purpose."
        />

        <div className="flex flex-wrap gap-4">
          <Button>Primary Button</Button>
          <Button>Download Resume</Button>
          <Button>Explore Projects</Button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <h3 className="mb-2 text-2xl font-semibold">
              Backend Engineering
            </h3>

            <p className="text-[var(--foreground-secondary)]">
              Building scalable backend services using Node.js,
              PostgreSQL and FastAPI.
            </p>
          </Card>

          <Card>
            <h3 className="mb-2 text-2xl font-semibold">
              Applied AI
            </h3>

            <p className="text-[var(--foreground-secondary)]">
              RAG systems, LangChain, Ollama and intelligent
              assistants.
            </p>
          </Card>

          <Card>
            <h3 className="mb-2 text-2xl font-semibold">
              Full Stack
            </h3>

            <p className="text-[var(--foreground-secondary)]">
              Modern web applications with Next.js and TypeScript.
            </p>
          </Card>
        </div>
      </Container>
    </Section>
  );
}