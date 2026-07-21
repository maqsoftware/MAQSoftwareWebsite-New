// Server-side proxy for the MAQ Software careers Blogger feed.
//
// Same rationale as news-feed.mjs: the browser must never load the feed via
// JSONP (which would execute remote JavaScript inside our page). This runs on
// Netlify's servers and returns plain JSON for the browser to read.
//
// Security notes:
//   - Blog ID and host are hard-coded → no SSRF.
//   - The only accepted input is `region`, validated against a fixed list.
//     The Blogger label is chosen server-side, never from the caller.

const CAREERS_BLOG_ID = "4733689656779828601";

const REGION_LABEL = {
  us: "Openings - US",
  india: "Openings - India",
};

export default async (req) => {
  const url = new URL(req.url);
  const region = url.searchParams.get("region");
  const label = REGION_LABEL[region];

  if (!label) {
    return new Response(JSON.stringify({ error: "Unknown region" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const target =
    `https://www.blogger.com/feeds/${CAREERS_BLOG_ID}/posts/default/-/` +
    `${encodeURIComponent(label)}?alt=json&max-results=999`;

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
    return new Response(
      JSON.stringify({ error: "Failed to load careers feed" }),
      { status: 502, headers: { "Content-Type": "application/json" } },
    );
  }
};
