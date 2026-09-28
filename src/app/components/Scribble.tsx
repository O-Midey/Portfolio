import type { ReactNode } from "react";

const colorClasses = {
  emerald: "text-scribble-emerald",
  pink: "text-scribble-pink",
  amber: "text-scribble-amber",
};

export type ScribbleColor = keyof typeof colorClasses;

const drawings = {
  underline: {
    viewBox: "0 0 220 16",
    paths: ["M3 7C54 1 131 3 215 6M17 12C74 8 144 9 197 11"],
  },
  spark: {
    viewBox: "0 0 36 40",
    paths: [
      "M17 3C17 14 14 18 3 20C14 20 17 25 18 36C20 25 24 20 33 19C23 17 20 13 17 3Z",
      "M29 4L31 8M5 31L8 29",
    ],
  },
  arrow: {
    viewBox: "0 0 52 52",
    paths: ["M40 5C49 19 12 13 21 28C30 43 47 16 27 24C16 28 14 38 4 39M4 39L8 30M4 39L15 40"],
  },
  rays: {
    viewBox: "0 0 40 40",
    paths: ["M22 23L7 8M25 14L23 3M14 27L2 25"],
  },
};

/** Decorative ink only: never participates in interaction or accessible names. */
export default function Scribble({
  variant,
  color = "emerald",
  className = "size-6",
}: {
  variant: keyof typeof drawings;
  color?: ScribbleColor;
  className?: string;
}) {
  const drawing = drawings[variant];

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      data-scribble={variant}
      data-scribble-color={color}
      viewBox={drawing.viewBox}
      preserveAspectRatio={variant === "underline" ? "none" : "xMidYMid meet"}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`pointer-events-none shrink-0 ${colorClasses[color]} ${className}`}
    >
      {drawing.paths.map((path) => <path key={path} d={path} />)}
    </svg>
  );
}

export function ScribbledText({
  children,
  color = "emerald",
  className = "",
}: {
  children: ReactNode;
  color?: ScribbleColor;
  className?: string;
}) {
  return (
    <span className={`relative inline-block max-w-full ${className}`}>
      {children}
      <Scribble variant="underline" color={color} className="absolute -bottom-1.5 left-0 h-2 w-full" />
    </span>
  );
}

// Stable variation keeps project cards consistent across layouts and filters.
export function scribbleColorFor(label: string): ScribbleColor {
  const colors: ScribbleColor[] = ["emerald", "pink", "amber"];
  const value = Array.from(label).reduce((sum, character) => sum + character.charCodeAt(0), 0);
  return colors[value % colors.length];
}
