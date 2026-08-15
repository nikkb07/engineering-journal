import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import SectionHeading from "@/components/ui/section-heading";
import ChatWindow from "./chat-window";

export default function Assistant() {
  return (
    <Section id="assistant">
      <Container>
        <SectionHeading
          eyebrow="Ask About My Work"
          title="Curious about something?"
          description="Ask my engineering assistant about my projects, skills, experience, or the decisions behind what I've built."
        />

        <div className="mt-20">
          <ChatWindow />
        </div>
      </Container>
    </Section>
  );
}