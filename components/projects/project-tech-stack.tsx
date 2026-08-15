import { Project } from "@/types/project";

interface Props {
  project: Project;
}

export default function ProjectTechStack({
  project,
}: Props) {
  return (
    <section className="py-28">

      <div className="mb-14">

        <p className="text-sm uppercase tracking-[0.35em] text-[var(--foreground-secondary)]">
          Technology
        </p>

        <h2 className="mt-4 font-editorial text-5xl">
          Engineering Stack
        </h2>

      </div>

      <div className="grid gap-8 md:grid-cols-2">

        {project.techStack.map((category) => (
          <div
            key={category.title}
            className="rounded-[30px] border border-[var(--border)] bg-[var(--surface)] p-8"
          >
            <h3 className="mb-6 text-2xl font-semibold">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-3">

              {category.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--border)] bg-white/5 px-4 py-2 text-sm"
                >
                  {item}
                </span>
              ))}

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}