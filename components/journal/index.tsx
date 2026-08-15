import Container from "@/components/ui/container";
import ProjectHeader from "@/components/projects/project-header";
import ProjectOverview from "@/components/projects/project-overview";
import { getProject } from "@/lib/projects";
import ProjectGallery from "@/components/projects/project-gallery";
import ProjectTechStack from "@/components/projects/project-tech-stack";
import ProjectArchitecture from "@/components/projects/project-architecture";
import RequestFlow from "@/components/projects/request-flow";
import FeaturedProject from "@/components/projects/featured-project";
import { PROJECTS } from "@/data/projects";

export default function Journal() {
  const project = getProject("engineering-journal");

  if (!project) return null;

  return (
    <section className="py-40">
      <Container>
        <ProjectHeader project={project} />

        <ProjectOverview project={project} />

        <ProjectGallery project={project} />

        <ProjectTechStack project={project} />

        <ProjectArchitecture />

        <RequestFlow />

        <FeaturedProject
          project={PROJECTS.find((p) => p.featured)!}
        />

      </Container>

    </section>
  );
}