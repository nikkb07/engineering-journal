export default function SectionDivider() {
  return (
    <div className="flex items-center gap-4">

      <div className="h-px flex-1 bg-[var(--border)]" />

      <div className="h-2 w-2 rounded-full bg-[var(--accent)]" />

      <div className="h-px flex-1 bg-[var(--border)]" />

    </div>
  );
}