import { socialLinks } from "../../data/socials";

// Circular two-letter social links (gh / in / tw / ig) shared across the
// mobile surfaces. Text color is inherited — pass it via `className`.
export default function SocialShortLinks({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={`flex gap-2.5 ${className ?? ""}`}>
      {socialLinks.map((s) => (
        <a
          key={s.id}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-term-fg font-jet text-[10.5px] uppercase transition-opacity active:opacity-60"
        >
          {s.short}
        </a>
      ))}
    </div>
  );
}
