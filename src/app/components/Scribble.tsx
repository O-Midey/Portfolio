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
  loop: {
    viewBox: "0 0 220 64",
    paths: [
      "M11 35C7 16 48 5 107 8C168 4 211 13 210 32C212 52 167 60 106 57C48 61 14 53 11 35Z",
    ],
  },
  brackets: {
    viewBox: "0 0 220 64",
    paths: [
      "M18 7C13 19 15 43 10 56M18 7C22 10 24 13 27 16",
      "M202 8C208 20 205 44 211 56M202 8C198 11 196 14 193 17",
    ],
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
  zigzag: {
    viewBox: "0 0 48 28",
    paths: ["M3 18L10 7L18 20L26 5L34 18L42 8", "M39 23L45 21"],
  },
  phone: {
    viewBox: "0 0 44 40",
    paths: [
      "M10 7C8 6 6 8 6 11C8 23 17 33 30 36C33 36 35 34 35 31L34 27C33 25 31 24 29 24L26 24C24 24 23 26 22 28C18 26 15 23 13 19C15 18 17 17 17 15L16 11C16 9 14 8 12 7Z",
      "M25 6C32 7 37 12 38 19",
      "M25 12C29 13 32 16 32 19",
    ],
  },
  productWindow: {
    viewBox: "0 0 48 40",
    paths: [
      "M5 8C5 6 7 5 9 5H35C38 5 40 7 40 9V27C40 30 38 32 35 32H10C7 32 5 30 5 27Z",
      "M5 12L40 12M10 8L10.2 8M14 8L14.2 8M18 8L18.2 8",
      "M10 18L19 18M10 23L16 23M24 18L31 18",
      "M29 21L40 31L35 31L33 36L30 35L32 30L27 29Z",
    ],
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
  const floats = variant !== "underline" && variant !== "loop" && variant !== "brackets";

  return (
    <span
      aria-hidden="true"
      data-doodle-motion={floats ? "scribble" : undefined}
      data-scribble={variant}
      data-scribble-color={color}
      className={`pointer-events-none inline-flex shrink-0 ${className}`}
    >
      <svg
        aria-hidden="true"
        focusable="false"
        data-scribble={variant}
        viewBox={drawing.viewBox}
        preserveAspectRatio={floats ? "xMidYMid meet" : "none"}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`size-full ${colorClasses[color]}`}
      >
        {drawing.paths.map((path) => <path key={path} d={path} />)}
      </svg>
    </span>
  );
}

export function ScribbledText({
  children,
  color = "emerald",
  variant = "underline",
  className = "",
}: {
  children: ReactNode;
  color?: ScribbleColor;
  variant?: ScribbledTextVariant;
  className?: string;
}) {
  return (
    <span
      className={`relative isolate inline-block max-w-full ${
        variant === "underline" ? "" : "px-[0.14em] py-[0.06em]"
      } ${className}`}
    >
      <span className="relative z-20">{children}</span>
      <Scribble
        variant={variant}
        color={color}
        className={
          variant === "underline"
            ? "absolute -bottom-1.5 left-0 z-0 h-2 w-full"
            : "absolute inset-0 z-0 size-full"
        }
      />
    </span>
  );
}

export type ScribbledTextVariant = "underline" | "loop" | "brackets";

// Stable variation keeps project cards consistent across layouts and filters.
export function scribbleColorFor(label: string): ScribbleColor {
  const colors: ScribbleColor[] = ["emerald", "pink", "amber"];
  const value = Array.from(label).reduce((sum, character) => sum + character.charCodeAt(0), 0);
  return colors[value % colors.length];
}

export function scribbleVariantFor(label: string): ScribbledTextVariant {
  const variants: ScribbledTextVariant[] = ["loop", "brackets", "underline"];
  const value = Array.from(label).reduce(
    (sum, character, index) => sum + character.charCodeAt(0) * (index + 1),
    0,
  );
  return variants[value % variants.length];
}
