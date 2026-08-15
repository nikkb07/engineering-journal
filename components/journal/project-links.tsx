import { Code2, ExternalLink } from "lucide-react";

export default function ProjectLinks() {
  return (
    <section>

      <h3 className="font-editorial text-5xl">
        Project Links
      </h3>

      <div className="mt-8 flex gap-5">

        <button className="flex items-center gap-3 rounded-full border border-[var(--border)] px-6 py-4 hover:bg-[var(--surface)]">

          <Code2 size={18} />

          Source Code

        </button>

        <button className="flex items-center gap-3 rounded-full bg-[var(--accent)] px-6 py-4 text-[var(--accent-foreground)]">

          <ExternalLink size={18} />

          Live Demo

        </button>

      </div>

    </section>
  );
}