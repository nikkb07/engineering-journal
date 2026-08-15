import { cn } from "@/lib/utils";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "rounded-full border border-[var(--border)] bg-[var(--surface)] px-6 py-3 transition-all duration-300 hover:scale-[1.03] hover:border-[var(--accent)]",
        className
      )}
    >
      {children}
    </button>
  );
}