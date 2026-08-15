interface PillProps {
  children: React.ReactNode;
}

export default function Pill({
  children,
}: PillProps) {
  return (
    <div className="rounded-full border border-[var(--border)] bg-white/5 px-5 py-3 text-sm transition-colors hover:border-[var(--accent)]">
      {children}
    </div>
  );
}