import { Project } from "@/types/project";

interface ProjectOverviewProps {
  project: Project;
}

export default function ProjectOverview({
  project,
}: ProjectOverviewProps) {
  return (
    <section className="grid gap-20 py-24 lg:grid-cols-[1.5fr_1fr]">
      {/* Left */}

      <div>
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[var(--foreground-secondary)]">
          Overview
        </p>

        <h2 className="font-editorial text-5xl leading-tight">
          {project.overviewTitle}
        </h2>

        <p className="mt-10 max-w-3xl text-lg leading-9 text-[var(--foreground-secondary)]">
          {project.description}
        </p>
      </div>

      {/* Right */}

      <div className="space-y-8">
        <Info
          title="Client"
          value={project.client}
        />

        <Info
          title="Role"
          value={project.role}
        />

        <Info
          title="Duration"
          value={project.duration}
        />

        <Info
          title="Team"
          value={project.team}
        />

        <Info
          title="Platform"
          value={project.platform}
        />
        
      </div>
    </section>
  );
}

function Info({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="border-b border-[var(--border)] pb-6">
      <p className="mb-2 text-xs uppercase tracking-[0.3em] text-[var(--foreground-secondary)]">
        {title}
      </p>

      <p className="text-lg">{value}</p>
    </div>
  );
}