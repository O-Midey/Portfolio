export default function ThoughtBubbleDoodle({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      data-doodle-motion="thought-bubble"
      className={`pointer-events-none inline-flex h-6 w-8 text-pink-700 dark:text-pink-300 ${className}`}
    >
      <svg
        focusable="false"
        viewBox="0 0 56 44"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-full"
      >
        <path d="M15 29C9 29 5 25 6 20C6 15 10 12 17 13C19 7 27 5 32 10C38 7 45 11 44 17C50 17 53 20 52 25C51 29 48 31 43 31H17" />
        <path d="M14 35C13 35 12 34 13 33C14 32 17 32 18 34C18 36 16 37 14 37Z" />
        <path d="M7 41C6 41 6 40 7 39C8 38 10 39 10 40C10 41 9 42 7 41Z" />
      </svg>
    </span>
  );
}
