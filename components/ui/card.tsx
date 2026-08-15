import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({
  children,
  className,
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-[28px] border border-[var(--border)] bg-[var(--surface)] p-8 shadow-[var(--shadow-sm)] transition-all duration-300 hover:shadow-[var(--shadow-md)]",
        className
      )}
    >
      {children}
    </div>
  );
}