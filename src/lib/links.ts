export function isInternalPath(href: string): boolean {
  return href.startsWith("/") && !href.startsWith("//");
}
