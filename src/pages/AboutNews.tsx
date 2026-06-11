import { useCallback, useEffect, useRef, useState } from "react";
import { makeStyles, Spinner } from "@fluentui/react-components";
import { CTA } from "../components/CTA";
import { TextButton } from "../components/buttons";
import { NewsCard } from "../components/cards/NewsCard";
import { PressCard } from "../components/cards/PressCard";
import {
  fetchNews,
  formatPublishedDate,
  pressCoverage,
  type NewsArticle,
} from "../data/news";

const PAGE_SIZE = 10;

const useStyles = makeStyles({
  // ── Hero ──────────────────────────────────────────────────────────────────
  hero: {
    backgroundColor: "var(--maq-off-white)",
    padding: "56px 32px 40px",
    backgroundImage: "url('/logos/wave_dots.svg')",
    backgroundPosition: "bottom left",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  heroInner: { maxWidth: "1240px", margin: "0 auto" },
  eyebrow: {
    display: "block",
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    color: "var(--maq-red)",
    marginBottom: "12px",
  },
  h1: {
    fontSize: "40px",
    fontWeight: 700,
    lineHeight: 1.15,
    color: "var(--maq-black)",
    letterSpacing: "-0.02em",
    margin: "0 0 12px",
  },
  heroSub: {
    fontSize: "15px",
    lineHeight: 1.65,
    color: "var(--maq-gray-700)",
    maxWidth: "720px",
    margin: 0,
  },

  // ── Articles list ─────────────────────────────────────────────────────────
  articlesSection: { padding: "40px 32px 64px", backgroundColor: "#fff" },
  articlesInner: {
    maxWidth: "1240px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "32px",
  },
  // ── Loading / error / load-more states ────────────────────────────────────
  centerState: {
    padding: "32px",
    textAlign: "center" as const,
    color: "var(--maq-gray-700)",
    fontSize: "14px",
  },
  paginationWrap: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "6px",
    flexWrap: "wrap" as const,
    paddingTop: "24px",
  },
  pageBtn: {
    minWidth: "36px",
    height: "36px",
    padding: "0 10px",
    borderRadius: "6px",
    border: "1px solid var(--maq-border)",
    backgroundColor: "#fff",
    color: "var(--maq-ink)",
    fontSize: "13px",
    fontWeight: 600,
    cursor: "pointer",
    ":hover": {
      border: "1px solid var(--maq-red)",
      color: "var(--maq-red)",
    },
    ":disabled": {
      opacity: 0.45,
      cursor: "not-allowed",
    },
  },
  pageBtnActive: {
    border: "1px solid var(--maq-red)",
    backgroundColor: "var(--maq-red)",
    color: "#fff",
    ":hover": {
      border: "1px solid var(--maq-red)",
      color: "#fff",
    },
  },
  pageEllipsis: {
    padding: "0 6px",
    color: "var(--maq-gray-700)",
    fontSize: "13px",
  },

  // ── Press Coverage ────────────────────────────────────────────────────────
  pressSection: {
    padding: "56px 32px 80px",
    backgroundColor: "var(--maq-off-white)",
  },
  pressInner: { maxWidth: "1240px", margin: "0 auto" },
  sectionHeading: {
    fontSize: "28px",
    fontWeight: 700,
    color: "var(--maq-black)",
    letterSpacing: "-0.01em",
    margin: "0 0 32px",
    textAlign: "center" as const,
  },
  pressGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    "@media (max-width: 960px)": { gridTemplateColumns: "repeat(2, 1fr)" },
    "@media (max-width: 560px)": { gridTemplateColumns: "1fr" },
  },
});

function buildPageList(current: number, totalPages: number): (number | "…")[] {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  const pages: (number | "…")[] = [1];
  const start = Math.max(2, current - 1);
  const end = Math.min(totalPages - 1, current + 1);
  if (start > 2) pages.push("…");
  for (let p = start; p <= end; p++) pages.push(p);
  if (end < totalPages - 1) pages.push("…");
  pages.push(totalPages);
  return pages;
}

export function AboutNews() {
  const s = useStyles();
  const articlesTopRef = useRef<HTMLDivElement | null>(null);
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadPage = useCallback(async (nextPage: number) => {
    try {
      setLoading(true);
      setError(null);
      const startIndex = (nextPage - 1) * PAGE_SIZE + 1;
      const { articles: pageArticles, total: t } = await fetchNews(
        startIndex,
        PAGE_SIZE,
      );
      setArticles(pageArticles);
      setTotal(t);
      setPage(nextPage);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load news.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadPage(1);
  }, [loadPage]);

  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const pageList = buildPageList(page, totalPages);

  const goToPage = (p: number) => {
    if (p === page || p < 1 || p > totalPages || loading) return;
    void loadPage(p);
    articlesTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Hero */}
      <section className={s.hero}>
        <div className={s.heroInner}>
          <h1 className={s.h1}>News</h1>
          <p className={s.heroSub}>
            Updates on events, partnerships, product launches, and what's happening
            across MAQ Software.
          </p>
        </div>
      </section>

      {/* Articles — fetched live from news.maqsoftware.com Blogger feed */}
      <section className={s.articlesSection}>
        <div className={s.articlesInner} ref={articlesTopRef}>
          {loading && (
            <div className={s.centerState}>
              <Spinner label="Loading news…" />
            </div>
          )}

          {error && !loading && (
            <div className={s.centerState}>
              {error}{" "}
              <TextButton size="small" onClick={() => void loadPage(page)}>
                Retry
              </TextButton>
            </div>
          )}

          {!loading &&
            !error &&
            articles.map((a) => (
              <NewsCard
                key={a.id}
                title={a.title}
                excerpt={a.excerpt}
                date={formatPublishedDate(a.date)}
                href={a.href}
                image={a.image ?? undefined}
              />
            ))}

          {!loading && !error && totalPages > 1 && (
            <nav className={s.paginationWrap} aria-label="News pagination">
              <TextButton
                className={s.pageBtn}
                onClick={() => goToPage(page - 1)}
                disabled={page === 1}
                aria-label="Previous page"
              >
                Prev
              </TextButton>
              {pageList.map((p, idx) =>
                p === "…" ? (
                  <span key={`e-${idx}`} className={s.pageEllipsis}>
                    …
                  </span>
                ) : (
                  <TextButton
                    key={p}
                    className={
                      p === page
                        ? `${s.pageBtn} ${s.pageBtnActive}`
                        : s.pageBtn
                    }
                    onClick={() => goToPage(p)}
                    aria-current={p === page ? "page" : undefined}
                  >
                    {p}
                  </TextButton>
                ),
              )}
              <TextButton
                className={s.pageBtn}
                onClick={() => goToPage(page + 1)}
                disabled={page === totalPages}
                aria-label="Next page"
              >
                Next
              </TextButton>
            </nav>
          )}
        </div>
      </section>

      {/* Press Coverage (static, matches the bottom of maqsoftware.com/news) */}
      <section className={s.pressSection}>
        <div className={s.pressInner}>
          <h2 className={s.sectionHeading}>Press Coverage</h2>
          <div className={s.pressGrid}>
            {pressCoverage.map((p) => (
              <PressCard
                key={p.headline}
                logo={p.logo}
                outlet={p.outlet}
                headline={p.headline}
                href={p.href}
              />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
