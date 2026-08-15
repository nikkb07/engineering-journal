export default function BackgroundGrid() {
  return (
    <div
      className="
      absolute inset-0
      opacity-[0.04]
      dark:opacity-[0.06]
      pointer-events-none
      "
      style={{
        backgroundImage: `
          linear-gradient(to right, currentColor 1px, transparent 1px),
          linear-gradient(to bottom, currentColor 1px, transparent 1px)
        `,
        backgroundSize: "48px 48px",
      }}
    />
  );
}