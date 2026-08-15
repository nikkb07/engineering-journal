interface Props {
  tech: string[];
}

export default function ProjectTags({
  tech,
}: Props) {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {tech.map((item) => (
        <span
          key={item}
          className="
            rounded-full
            border
            border-[var(--border)]
            bg-[var(--surface)]
            px-4
            py-2
            text-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-[var(--accent)]
            hover:bg-[var(--accent)]/10
            "
        >
          {item}
        </span>
      ))}
    </div>
  );
}