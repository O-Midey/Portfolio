// Desktop cards and detail panels share status colors; light colors stay fixed.
export function projectStatusStyles(status: string): string {
  return status === "Completed"
    ? "bg-green-100 text-green-700 dark:bg-term-accent/15 dark:text-term-accent"
    : "bg-amber-100 text-amber-700 dark:bg-term-amber/15 dark:text-term-amber";
}
