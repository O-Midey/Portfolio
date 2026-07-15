// Ensure links have a protocol so they open correctly
export function withProtocol(url?: string): string | undefined {
  const u = url?.trim();
  if (!u) return undefined;
  return /^https?:\/\//i.test(u) ? u : `https://${u}`;
}

// Hide the "Code" button when codeLink just points back at the live site
export function sameHost(a?: string, b?: string): boolean {
  try {
    return new URL(a!).host === new URL(b!).host;
  } catch {
    return false;
  }
}
