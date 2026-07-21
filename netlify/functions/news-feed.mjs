// Server-side proxy for the MAQ Software news Blogger feed.
//
// Why this exists: the browser must NOT load the feed via JSONP (which would
// run whatever JavaScript the remote server returns inside our own page).
// Instead this function runs on Netlify's servers, fetches the feed, and
// returns plain JSON. The browser only ever *reads* data — it never executes
// remote code.
//
// Security notes:
//   - The destination host is hard-coded (no caller-supplied URL) → no SSRF.
//   - The only accepted inputs are two integers, both validated and clamped.

const NEWS_FEED_URL = "https://news.maqsoftware.com/feeds/posts/default";

/** Parse an integer query param, falling back and clamping to a safe range. */
function clampInt(value, fallback, min, max) {
  const n = Number.parseInt(value ?? "", 10);
  if (Number.isNaN(n)) return fallback;
  return Math.min(Math.max(n, min), max);
}

export default async (req) => {
  const url = new URL(req.url);
  const start = clampInt(url.searchParams.get("start"), 1, 1, 100000);
  const limit = clampInt(url.searchParams.get("limit"), 10, 1, 50);

  const target =
    `${NEWS_FEED_URL}?alt=json` +
    `&start-index=${start}&max-results=${limit}`;

  try {
    const upstream = await fetch(target, {
      headers: { Accept: "application/json" },
    });
    if (!upstream.ok) {
      return new Response(
        JSON.stringify({ error: `Upstream returned ${upstream.status}` }),
        { status: 502, headers: { "Content-Type": "application/json" } },
      );
    }
    const body = await upstream.text();
    return new Response(body, {
      status: 200,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        // Browser cache (per-client) for 5 min.
        "Cache-Control": "public, max-age=300",
        // Netlify edge/CDN cache: serve identical requests from the edge for
        // 5 min so repeated/popular requests don't re-invoke this function or
        // re-hit Blogger. `durable` keeps the entry across deploys/regions.
        "Netlify-CDN-Cache-Control": "public, s-maxage=300, durable",
      },
    });
  } catch {
    return new Response(JSON.stringify({ error: "Failed to load news feed" }), {
      status: 502,
      headers: { "Content-Type": "application/json" },
    });
  }
};
