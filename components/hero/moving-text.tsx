const TEXT =
  "BUILD • ENGINEER • SOLVE • CREATE • IMPACT • LEARN • ";

const rows = [
  {
    speed: "animate-background-left",
    scale: "text-[13vw]",
    opacity: "opacity-[0.045]",
  },
  {
    speed: "animate-background-right",
    scale: "text-[12vw]",
    opacity: "opacity-[0.035]",
  },
  {
    speed: "animate-background-left",
    scale: "text-[13vw]",
    opacity: "opacity-[0.045]",
  },
];
export default function MovingText() {
  return (
    <div className="absolute inset-0 flex flex-col justify-center -translate-y-10 overflow-hidden select-none pointer-events-none">
      {rows.map((row, index) => (
        <div
          key={index}
          className={`whitespace-nowrap font-editorial leading-none tracking-tight ${row.scale}`}
        >
          <div
            className={`inline-flex ${row.speed} ${row.opacity} dark:opacity-[0.04]`}
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i}>{TEXT}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}