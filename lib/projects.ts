import { PROJECTS } from "@/data/projects";

export function getProject(slug: string) {
  return PROJECTS.find(
    (project) => project.slug === slug
  );
}

export function getProjects() {
  return PROJECTS;
}