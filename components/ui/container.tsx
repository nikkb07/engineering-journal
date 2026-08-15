import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({
  children,
  className,
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1600px] px-6 md:px-8 xl:px-12",
        className
      )}
    >
      {children}
    </div>
  );
}