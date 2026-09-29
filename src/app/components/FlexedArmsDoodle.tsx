const armPaths = [
  "M27 109C17 106 15 99 18 88C24 70 34 50 45 33C39 27 40 20 47 16L59 11C65 8 69 9 73 14L79 23C81 27 78 31 73 34L61 39C58 55 61 72 70 81C74 69 83 58 94 58C110 57 128 74 134 88C137 95 136 103 133 109",
  "M49 33C53 37 57 38 61 39M73 34C67 32 65 27 69 25",
  "M50 18L54 24M58 14L62 21",
  "M70 81C80 73 90 72 99 78",
];

/** A double-biceps pose, shared by both About layouts. */
export default function FlexedArmsDoodle({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      data-doodle-motion="flexed-arms"
      className={`pointer-events-none block shrink-0 text-yellow-700 dark:text-yellow-300 ${className}`}
    >
      <svg
        focusable="false"
        viewBox="0 0 300 124"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="block h-auto w-full"
      >
        {[false, true].map((mirrored) => (
          <g key={String(mirrored)} transform={mirrored ? "translate(300 0) scale(-1 1) rotate(-3 80 80)" : undefined}>
            {armPaths.map((path, index) => (
              <path
                key={path}
                d={path}
                className={index === 3 ? "text-pink-700 dark:text-pink-300" : undefined}
                stroke={index === 3 ? "currentColor" : undefined}
              />
            ))}
          </g>
        ))}
      </svg>
    </span>
  );
}
