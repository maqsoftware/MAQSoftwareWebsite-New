/**
 * Helpers for rewriting remote image URLs through the free wsrv.nl
 * image proxy so we serve resized, WebP-encoded, edge-cached versions
 * of the original assets. The originals (e.g. maqsoftware.com cover
 * images) are large unoptimized JPEGs/PNGs that dominate page load.
 */

const PROXY_BASE = "https://wsrv.nl/";

/**
 * Returns an array of widths intended for srcset. Tuned for the
 * 3-col case-study grid (cards are at most ~420px wide on desktop).
 */
export const IMAGE_PROXY_WIDTHS = [320, 480, 640] as const;

/**
 * Build a proxied URL for a single width. Returns the original URL
 * if the source is not an http(s) URL we can safely rewrite.
 */
export function proxyImage(
  src: string,
  width: number,
  quality = 65,
): string {
  if (!src) return src;
  if (!/^https?:\/\//i.test(src)) return src;

  const params = new URLSearchParams({
    url: src,
    w: String(width),
    output: "webp",
    q: String(quality),
    we: "", // do not enlarge beyond source
    af: "", // adaptive filtering for smaller payloads
    il: "", // interlace/progressive — first bytes paint sooner
  });
  return `${PROXY_BASE}?${params.toString()}`;
}

/**
 * Build a srcset string covering common card widths so the browser
 * can pick the smallest acceptable image for the device.
 */
export function proxyImageSrcSet(src: string, quality = 65): string {
  if (!src || !/^https?:\/\//i.test(src)) return "";
  return IMAGE_PROXY_WIDTHS.map(
    (w) => `${proxyImage(src, w, quality)} ${w}w`,
  ).join(", ");
}

/**
 * Tiny low-quality blurred placeholder URL for use as a CSS
 * background while the full image is loading. ~1–3 KB, decodes in
 * a single frame, gives users an instant visual.
 */
export function proxyImagePlaceholder(src: string): string {
  if (!src || !/^https?:\/\//i.test(src)) return "";
  const params = new URLSearchParams({
    url: src,
    w: "32",
    output: "webp",
    q: "30",
    blur: "5",
    we: "",
  });
  return `${PROXY_BASE}?${params.toString()}`;
}

