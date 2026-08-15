import Container from "@/components/ui/container";
import Section from "@/components/ui/section";
import SectionHeading from "@/components/ui/section-heading";
import SkillsGrid from "./skills-grid";

export default function Skills() {
  return (
    <Section id="skills">
      <Container>
        <SectionHeading
          eyebrow="Engineering Stack"
          title="Technologies I use every day."
          description="Focused on building scalable backend systems, modern web applications, and AI-powered products."
        />

        <SkillsGrid />
      </Container>
    </Section>
  );
}