// Press coverage is static — sourced from the bottom of maqsoftware.com/news.
// The article list above it is fetched live from the Blogger feed:
// https://news.maqsoftware.com/feeds/posts/default?alt=json
// See src/pages/AboutNews.tsx for the fetcher.

export interface NewsArticle {
  id: string;
  title: string;
  href: string; // public post URL
  date: string; // ISO date
  image: string | null; // first image from post content, or null
  excerpt: string; // plain-text excerpt
  tag: string; // first category, or "News"
}

export interface PressItem {
  outlet: string;
  logo: string;
  headline: string;
  href: string;
}

export const NEWS_FEED_URL =
  "https://news.maqsoftware.com/feeds/posts/default?alt=json";

export const pressCoverage: PressItem[] = [
  {
    outlet: "ET CIO",
    logo: "https://maqsoftware.com/images/logos/ET-CIO-logo.png",
    headline: "Three US giants to invest in UP",
    href: "https://cio.economictimes.indiatimes.com/news/corporate-news/three-us-giants-to-invest-in-up/85507016",
  },
  {
    outlet: "Seattle Times",
    logo: "https://maqsoftware.com/images/logos/SeattleTimes-logo.png",
    headline: "High technology from India is just down the street",
    href: "https://www.seattletimes.com/business/high-technology-from-india-is-just-down-the-street/",
  },
  {
    outlet: "Puget Sound Business Journal",
    logo: "https://maqsoftware.com/images/logos/PudgetSoundBusinessJournal-logo.png",
    headline:
      "Sea Change: Overseas Outsourcing Could Pose Problems for Tech Sector",
    href: "https://www.bizjournals.com/seattle/stories/2003/08/11/story3.html",
  },
  {
    outlet: "Puget Sound Business Journal",
    logo: "https://maqsoftware.com/images/logos/PudgetSoundBusinessJournal-logo.png",
    headline: "Software Products Being Developed in India",
    href: "https://www.bizjournals.com/seattle/stories/2007/11/05/story1.html?b=1194238800%5e1544578&surround=etf",
  },
  {
    outlet: "Puget Sound Business Journal",
    logo: "https://maqsoftware.com/images/logos/PudgetSoundBusinessJournal-logo.png",
    headline: "Migration of Technology Workers from Seattle to India",
    href: "https://www.bizjournals.com/seattle/stories/2006/03/27/story3.html",
  },
  {
    outlet: "BBC News",
    logo: "https://maqsoftware.com/images/logos/BBC-News-logo.png",
    headline: "BBC World Business Report — September 2004",
    href: "https://www.youtube.com/watch?v=pwn5-_9c180",
  },
  {
    outlet: "Entrepreneur",
    logo: "https://maqsoftware.com/images/logos/Entrepreneur-logo.png",
    headline:
      "Why Some Companies Grow Consistently While Others Struggle",
    href: "https://www.entrepreneur.com/article/305605",
  },
  {
    outlet: "BW Business World",
    logo: "https://maqsoftware.com/images/logos/BW-Business-World-logo.png",
    headline:
      "Many MBA Graduates Lack Context and Experience: Rajeev Agarwal, Founder and CEO, MAQ Software",
    href: "http://www.businessworld.in/article/Many-MBA-Graduates-Lack-Context-And-Experience-Rajeev-Agarwal-Founder-And-CEO-MAQ-Software/06-12-2017-133919/",
  },
  {
    outlet: "Business Standard",
    logo: "https://maqsoftware.com/images/logos/Business-Standard-logo.png",
    headline: "B-schools teach you to be good corporate foot soldiers",
    href: "https://www.business-standard.com/article/management/-b-schools-teach-you-to-be-good-corporate-foot-soldiers-104082401004_1.html",
  },
];

// ── Blogger feed types (minimal — only fields we use) ──────────────────────
interface BloggerText {
  $t: string;
}
interface BloggerLink {
  rel: string;
  type?: string;
  href: string;
  title?: string;
}
interface BloggerCategory {
  term: string;
}
export interface BloggerEntry {
  id: BloggerText;
  published: BloggerText;
  title: BloggerText;
  content: BloggerText;
  link: BloggerLink[];
  category?: BloggerCategory[];
  media$thumbnail?: { url: string; height?: string; width?: string };
}
export interface BloggerFeedResponse {
  feed: {
    openSearch$totalResults?: BloggerText;
    openSearch$startIndex?: BloggerText;
    openSearch$itemsPerPage?: BloggerText;
    entry?: BloggerEntry[];
  };
}

// ── Helpers ────────────────────────────────────────────────────────────────
function stripHtml(html: string): string {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return (doc.body.textContent || "").replace(/\s+/g, " ").trim();
}

function firstImage(html: string): string | null {
  const doc = new DOMParser().parseFromString(html, "text/html");
  const img = doc.querySelector("img");
  return img?.getAttribute("src") ?? null;
}

// Blogger-hosted images (blogspot.com / googleusercontent.com) accept a size
// suffix in the URL path. Originals can be 1600px+, so downscale to ~640w
// to dramatically speed up the news list.
function resizeBloggerImage(url: string, width = 640): string {
  if (!url) return url;
  if (
    /blogspot\.com|googleusercontent\.com/.test(url) === false
  ) {
    return url;
  }
  // Path style: /s1600/, /s0/, /w1200-h800/, /s1600-c/ → /w{width}/
  let out = url.replace(
    /\/(?:s\d+|w\d+(?:-h\d+)?)(?:-[a-z])?\//,
    `/w${width}/`,
  );
  // Query style: =s1600 or =w1200-h800 → =w{width}
  out = out.replace(/=(?:s\d+|w\d+(?:-h\d+)?)(?:-[a-z])?$/, `=w${width}`);
  return out;
}

function publicUrl(entry: BloggerEntry): string {
  const alt = entry.link.find(
    (l) => l.rel === "alternate" && l.type === "text/html",
  );
  return alt?.href ?? "https://news.maqsoftware.com/";
}

function excerpt(html: string, max = 280): string {
  const text = stripHtml(html);
  if (text.length <= max) return text;
  return text.slice(0, max).replace(/\s+\S*$/, "") + "…";
}

export function mapBloggerEntry(entry: BloggerEntry): NewsArticle {
  const raw =
    entry.media$thumbnail?.url ?? firstImage(entry.content.$t);
  return {
    id: entry.id.$t,
    title: entry.title.$t,
    href: publicUrl(entry),
    date: entry.published.$t,
    image: raw ? resizeBloggerImage(raw, 640) : null,
    excerpt: excerpt(entry.content.$t),
    tag: entry.category?.[0]?.term ?? "News",
  };
}

// Blogger feeds don't expose CORS headers, so we load them via JSONP
// (the same technique the original maqsoftware.com/news page uses).
let jsonpCounter = 0;
function fetchJsonp<T>(url: string, timeoutMs = 15000): Promise<T> {
  return new Promise((resolve, reject) => {
    const cbName = `__maqNewsCb_${Date.now()}_${jsonpCounter++}`;
    const script = document.createElement("script");
    const cleanup = () => {
      delete (window as unknown as Record<string, unknown>)[cbName];
      script.remove();
      clearTimeout(timer);
    };
    const timer = setTimeout(() => {
      cleanup();
      reject(new Error("News feed request timed out"));
    }, timeoutMs);

    (window as unknown as Record<string, (data: T) => void>)[cbName] = (
      data: T,
    ) => {
      cleanup();
      resolve(data);
    };
    script.onerror = () => {
      cleanup();
      reject(new Error("Failed to load news feed"));
    };
    const sep = url.includes("?") ? "&" : "?";
    script.src = `${url}${sep}callback=${cbName}`;
    document.head.appendChild(script);
  });
}

export async function fetchNews(
  startIndex = 1,
  maxResults = 10,
): Promise<{ articles: NewsArticle[]; total: number }> {
  const url = `${NEWS_FEED_URL}&start-index=${startIndex}&max-results=${maxResults}`;
  const data = await fetchJsonp<BloggerFeedResponse>(url);
  const entries = data.feed.entry ?? [];
  const total = Number(data.feed.openSearch$totalResults?.$t ?? entries.length);
  return { articles: entries.map(mapBloggerEntry), total };
}

export function formatPublishedDate(iso: string): string {
  const d = new Date(iso);
  if (isNaN(d.getTime())) return "";
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
