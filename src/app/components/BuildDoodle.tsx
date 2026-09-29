export default function BuildDoodle() {
  return (
    <span
      aria-hidden="true"
      data-doodle-motion="build"
      className="pointer-events-none inline-flex h-7 w-9 shrink-0 text-amber-700 dark:text-amber-300"
    >
      <svg
        focusable="false"
        viewBox="0 0 64 44"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-full"
      >
        <path d="M9 23L26 14L43 22L26 32Z" />
        <path d="M9 23V30L26 40L43 30V22M26 32V40" />
        <path d="M19 17V10L26 6L34 10V17M19 10L26 14L34 10" />
        <path d="M46 15L51 12M48 19L54 18M45 10L45 6" />
      </svg>
    </span>
  );
}
