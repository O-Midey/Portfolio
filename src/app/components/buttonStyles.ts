const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full font-mono text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-term-accent";

const outlined =
  "border border-gray-900 text-gray-900 hover:bg-gray-50 dark:border-white dark:text-white dark:hover:bg-[#1a1a1a]";

// Compact controls retain the portfolio's existing monochrome button treatment.
export const buttonStyles = {
  primary: `${base} px-4 bg-[#111] text-white hover:bg-[#333] dark:bg-white dark:text-black dark:hover:bg-gray-200`,
  outlined: `${base} px-4 ${outlined}`,
  icon: `${base} size-11 shrink-0 p-0 ${outlined}`,
};
