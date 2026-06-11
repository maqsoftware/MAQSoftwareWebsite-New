import { Button, makeStyles, tokens } from "@fluentui/react-components";
import { useMemo, useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { CTA } from "../components/CTA";
// import { TrustBanner } from \"../components/TrustBanner\";

import { InsightsFilterBar } from "../components/insights/InsightsFilterBar";
import { InsightsHero } from "../components/insights/InsightsHero";
import { InsightsResourceNav } from "../components/insights/InsightsResourceNav";
import { LazyImage } from "../components/insights/LazyImage";
import {
  proxyImage,
  proxyImagePlaceholder,
  proxyImageSrcSet,
} from "../lib/imageProxy";
import { caseStudyFilters, caseStudyItems } from "../data/insights";

const INITIAL_VISIBLE = 9;

// Number of cards above the fold whose proxied image is preloaded
// via <link rel="preload"> on mount so they appear with the page.
// Set to the full first page so every initially-visible card is
// fetched in parallel with the JS bundle.
const PRELOAD_CARD_COUNT = INITIAL_VISIBLE;

// Card image sizing. Cards top out around 420px wide on desktop
// (3-col grid inside a 1240px max), 480px on tablet, full width on
// phones. The sizes attribute mirrors the grid breakpoints in CSS.
const CARD_IMAGE_SIZES =
  "(max-width: 700px) 100vw, (max-width: 1080px) 50vw, 420px";
const CARD_IMAGE_DEFAULT_WIDTH = 480;

// Hosts we want the browser to handshake with up-front: the wsrv
// image proxy (where every card image actually loads from) plus the
// origin servers wsrv fetches from.
const PRECONNECT_HOSTS = [
  "https://wsrv.nl",
  "https://maqsoftware.com",
  "https://www.maqsoftware.com",
  "https://blogger.googleusercontent.com",
];

const useStyles = makeStyles({
  section: { padding: "48px 32px", backgroundColor: "var(--maq-off-white)" },
  inner: { maxWidth: "1240px", margin: "0 auto" },
  head: { textAlign: "center", marginBottom: "18px" },
  title: { fontSize: "30px", fontWeight: 700, color: "var(--maq-black)", margin: "0 0 10px" },
  grid: {
    marginTop: "18px",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
    "@media (max-width: 1080px)": { gridTemplateColumns: "repeat(2, 1fr)" },
    "@media (max-width: 700px)": { gridTemplateColumns: "1fr" },
  },
  card: {
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "12px",
    background: "#fff",
    overflow: "hidden",
    textDecoration: "none",
    color: "inherit",
    display: "flex",
    flexDirection: "column",
    transition: "all 0.2s",
    ":hover": { border: "1px solid var(--maq-red)", boxShadow: "0 6px 16px rgba(0,0,0,0.06)" },
  },
  image: {
    width: "100%",
    aspectRatio: "16 / 9",
    height: "220px",
    objectFit: "cover",
    // Cover images often have title overlays anchored to the left of
    // the source artwork. Anchor cropping there so the text is never
    // sliced off when the wide source is cropped to card dimensions.
    objectPosition: "left center",
    display: "block",
    backgroundColor: "var(--maq-surface-cream)",
  },
  imageWrap: {
    width: "100%",
    height: "220px",
    display: "block",
  },
  body: {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    flex: 1,
  },
  meta: { display: "flex", justifyContent: "space-between", gap: "8px" },
  pill: {
    fontSize: "11px",
    fontWeight: 700,
    color: "var(--maq-red)",
    background: "var(--maq-red-pale)",
    padding: "3px 8px",
    borderRadius: "4px",
    textTransform: "uppercase",
  },
  date: { fontSize: "12px", color: "var(--maq-gray-500)", fontWeight: 600 },
  cardTitle: { fontSize: "17px", lineHeight: 1.35, color: "var(--maq-black)", margin: 0 },
  teaser: { fontSize: "14px", color: "var(--maq-gray-600)", lineHeight: 1.55, margin: 0, flex: 1 },
  read: { display: "inline-flex", alignItems: "center", gap: "4px", color: "var(--maq-red)", fontWeight: 600, fontSize: "13px" },
  paginationControls: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    flexWrap: "wrap",
  },
  controlsText: {
    fontSize: "13px",
    color: "var(--maq-gray-700)",
  },
});

export function InsightsCaseStudies() {
  const s = useStyles();
  const [searchParams] = useSearchParams();
  const filterParam = searchParams.get("filter") || "All";
  const [activeFilter, setActiveFilter] = useState(filterParam);

  useEffect(() => {
    setActiveFilter(filterParam);
  }, [filterParam]);

  // inside the component, after the existing useEffect:
const didScroll = useRef(false);

useEffect(() => {
  if (didScroll.current) return;
  if (window.location.hash !== "#insights-content") return; // ← only scroll if hash present
  const el = document.getElementById("insights-content");
  if (el) {
    didScroll.current = true;
    setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 80);
  }
}, []);

  // Preconnect to the image proxy and origin hosts while the page
  // is mounted so parallel image requests skip DNS/TLS handshake cost.
  useEffect(() => {
    const links = PRECONNECT_HOSTS.map((host) => {
      const link = document.createElement("link");
      link.rel = "preconnect";
      link.href = host;
      link.crossOrigin = "anonymous";
      document.head.appendChild(link);
      return link;
    });
    return () => {
      for (const link of links) link.parentNode?.removeChild(link);
    };
  }, []);

  const filtered = useMemo(() => {
    if (activeFilter === "All") return caseStudyItems;
    return caseStudyItems.filter((item) => item.service === activeFilter);
  }, [activeFilter]);

  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE);
  }, [activeFilter]);

  const total = filtered.length;
  const halfCount = Math.max(INITIAL_VISIBLE + 1, Math.ceil(total / 2));
  const visibleItems = filtered.slice(0, visibleCount);

  // Preload the first few proxied images on mount / filter change so
  // the browser starts fetching them in parallel with the JS-driven
  // render, making cards appear with the page rather than after.
  useEffect(() => {
    const links: HTMLLinkElement[] = [];
    const toPreload = filtered.slice(0, PRELOAD_CARD_COUNT);
    for (const item of toPreload) {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = proxyImage(item.imageUrl, CARD_IMAGE_DEFAULT_WIDTH);
      const srcset = proxyImageSrcSet(item.imageUrl);
      if (srcset) link.setAttribute("imagesrcset", srcset);
      link.setAttribute("imagesizes", CARD_IMAGE_SIZES);
      document.head.appendChild(link);
      links.push(link);
    }
    return () => {
      for (const link of links) link.parentNode?.removeChild(link);
    };
  }, [filtered]);

  const handleShowMore = () => {
    if (visibleCount < halfCount && halfCount < total) {
      setVisibleCount(halfCount);
    } else {
      setVisibleCount(total);
    }
  };
  const handleShowLess = () => setVisibleCount(INITIAL_VISIBLE);

  return (
    <>
      <InsightsHero
        title="Case Studies"
        subhead="Explore real-world outcomes across AI, data, reporting, cloud, and security implementations delivered by MAQ Software."
        ctaLabel="Contact Us"
      />

      <InsightsResourceNav active="case-studies" />
      <section className={s.section} id="insights-content">
        <div className={s.inner}>
          <div className={s.head}>
            <h2 className={s.title}>Case studies catalog</h2>
            <InsightsFilterBar items={caseStudyFilters} active={activeFilter} onChange={setActiveFilter} />
          </div>
          <div className={s.grid}>
            {visibleItems.map((item, index) => {
              const isAboveFold = index < PRELOAD_CARD_COUNT;
              const proxiedSrc = proxyImage(
                item.imageUrl,
                CARD_IMAGE_DEFAULT_WIDTH,
              );
              const proxiedSrcSet = proxyImageSrcSet(item.imageUrl);
              const placeholderSrc = proxyImagePlaceholder(item.imageUrl);
              return (
                <a key={item.href} className={s.card} href={item.href} target="_blank" rel="noopener noreferrer">
                  <LazyImage
                    src={proxiedSrc}
                    srcSet={proxiedSrcSet || undefined}
                    sizes={proxiedSrcSet ? CARD_IMAGE_SIZES : undefined}
                    fallbackSrc={item.imageUrl}
                    placeholderSrc={placeholderSrc || undefined}
                    alt={item.title}
                    width={600}
                    height={338}
                    eager={isAboveFold}
                    priority={isAboveFold ? "high" : "auto"}
                    wrapperClassName={s.imageWrap}
                    className={s.image}
                  />
                  <div className={s.body}>
                    <div className={s.meta}>
                      <span className={s.date}>{item.date}</span>
                    </div>
                    <h3 className={s.cardTitle}>{item.title}</h3>
                    <p className={s.teaser}>{item.teaser}</p>
                    <span className={s.read}>Read full article</span>
                  </div>
                </a>
              );
            })}
          </div>
          {total > INITIAL_VISIBLE && (
            <div className={s.paginationControls}>
              <span className={s.controlsText}>
                Showing {visibleItems.length} of {total} case studies
              </span>
              {visibleCount < total ? (
                <Button appearance="subtle" onClick={handleShowMore}>
                  Show more
                </Button>
              ) : (
                <Button appearance="subtle" onClick={handleShowLess}>
                  Show less
                </Button>
              )}
            </div>
          )}
        </div>
      </section>
      <CTA />
    </>
  );
}

