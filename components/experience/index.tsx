import Section from "@/components/ui/section";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";

import Timeline from "./timeline";

export default function Experience() {
  return (
    <Section id="experience">
      <Container>

        <SectionHeading
          eyebrow="Experience"
          title="Building products in the real world."
          description="Applying engineering principles to production software, AI systems, and modern web applications."
        />

        <Timeline />

      </Container>
    </Section>
  );
}