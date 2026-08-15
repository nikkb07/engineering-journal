interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-3xl text-center"
          : "max-w-3xl"
      }
    >
      <p className="text-sm uppercase tracking-[0.35em] text-[var(--accent)]">
        {eyebrow}
      </p>

      <h2 className="mt-5 font-editorial text-6xl leading-none">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-[var(--foreground-secondary)]">
          {description}
        </p>
      )}
    </div>
  );
}