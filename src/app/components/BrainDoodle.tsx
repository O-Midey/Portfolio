export default function BrainDoodle() {
  return (
    <span
      aria-hidden="true"
      data-doodle-motion="brain"
      className="pointer-events-none inline-flex h-6 w-8 shrink-0 text-pink-700 dark:text-pink-300"
    >
      <svg
        focusable="false"
        viewBox="0 0 52 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-full"
      >
        <path d="M25 6C22 2 15 4 14 10C8 8 4 13 7 19C3 23 6 29 11 30C10 36 16 39 22 35C25 39 30 38 31 34C37 36 42 31 39 26C45 22 42 16 38 15C40 9 34 4 29 7C28 6 27 6 25 6Z" />
        <path d="M26 7C23 11 28 14 25 18C22 22 27 24 24 27C21 30 24 32 22 35" />
        <path d="M14 11C18 10 20 13 19 17M9 22C14 20 18 23 18 27M32 11C29 15 34 17 33 20M33 26C29 25 28 29 31 32" />
      </svg>
    </span>
  );
}
