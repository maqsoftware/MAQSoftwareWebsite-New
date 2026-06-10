/**
 * Returns `url` only if it is a real http(s) web address; otherwise returns
 * `fallback` (default `null`). This blocks dangerous values such as
 * `javascript:` links that could otherwise arrive from an external feed and
 * run code when clicked.
 */
export function safeHttpUrl(
  url: string | null | undefined,
  fallback: string | null = null,
): string | null {
  if (!url) return fallback;
  try {
    const parsed = new URL(url, window.location.origin);
    if (parsed.protocol === "http:" || parsed.protocol === "https:") {
      return url;
    }
  } catch {
    /* not a parseable URL — fall through to fallback */
  }
  return fallback;
}
