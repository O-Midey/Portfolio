export default function ToolboxDoodle() {
  return (
    <span
      aria-hidden="true"
      data-doodle-motion="toolbox"
      className="pointer-events-none inline-flex h-7 w-9 shrink-0 text-emerald-700 dark:text-emerald-300"
    >
      <svg
        focusable="false"
        viewBox="0 0 56 44"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-full"
      >
        <path d="M7 16C7 14 9 13 11 13H45C48 13 49 15 49 17V35C49 37 47 39 45 39H11C8 39 7 37 7 35Z" />
        <path d="M18 13V9C18 7 20 6 22 6H34C36 6 38 7 38 9V13M7 22C18 25 38 25 49 22M24 22V28H32V22" />
        <path d="M18 29L15 32L18 35M38 29L41 32L38 35M30 29L27 35" />
        <path d="M47 8L48 11M51 10L54 9M49 14L52 15" />
      </svg>
    </span>
  );
}
