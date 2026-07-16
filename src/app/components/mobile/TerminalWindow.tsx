// macOS-style terminal chrome used by the mobile about + contact views.
export default function TerminalWindow({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-[10px] border border-term-fg bg-term-panel">
      <div className="flex items-center gap-2 border-b border-term-fg/10 px-3.5 py-3">
        <span className="inline-block h-[11px] w-[11px] rounded-full bg-[#FF5F57]" />
        <span className="inline-block h-[11px] w-[11px] rounded-full bg-[#FEBC2E]" />
        <span className="inline-block h-[11px] w-[11px] rounded-full bg-[#28C840]" />
        <span className="ml-1.5 font-jet text-[11px] text-term-fg">
          {title}
        </span>
      </div>
      {children}
    </div>
  );
}
