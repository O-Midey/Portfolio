export default function StatusPill({ status }: { status: string }) {
  const isCompleted = status === "Completed";
  return (
    <span
      className={`shrink-0 rounded-full border px-2.5 py-1 font-jet text-[10px] ${
        isCompleted
          ? "border-term-accent/35 bg-term-accent/13 text-term-accent"
          : "border-term-amber/35 bg-term-amber/13 text-term-amber"
      }`}
    >
      {status}
    </span>
  );
}
