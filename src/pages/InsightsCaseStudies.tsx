import { makeStyles, tokens } from "@fluentui/react-components";
import { useMemo, useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { CTA } from "../components/CTA";
// import { TrustBanner } from \"../components/TrustBanner\";

import { TextButton } from "../components/buttons";
import { InsightsFilterBar } from "../components/insights/InsightsFilterBar";
import { InsightsHero } from "../components/insights/InsightsHero";
import { InsightsResourceNav } from "../components/insights/InsightsResourceNav";
import { CaseStudyCard } from "../components/cards/CaseStudyCard";
import { caseStudyFilters, caseStudyItems } from "../data/insights";

const INITIAL_VISIBLE = 9;

const useStyles = makeStyles({
  section: { padding: "48px 32px", backgroundColor: "var(--maq-off-white)" },
  inner: { maxWidth: "var(--maq-container-wide)", margin: "0 auto" },
  head: { textAlign: "center", marginBottom: "18px" },
  title: { fontSize: "36px", lineHeight: 1.15, fontWeight: 700, color: "var(--maq-navy)", margin: "0 0 10px", letterSpacing: "-0.02em" },
  grid: {
    marginTop: "18px",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
    "@media (max-width: 1080px)": { gridTemplateColumns: "repeat(2, 1fr)" },
    "@media (max-width: 700px)": { gridTemplateColumns: "1fr" },
  },
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
  const rawFilterParam = searchParams.get("filter") || "All";
  const filterAliases: Record<string, string> = {
    "Data & analytics": "Data & AI Platforms",
    "Data & Analytics": "Data & AI Platforms",
  };
  const filterParam = filterAliases[rawFilterParam] || rawFilterParam;
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
            {visibleItems.map((item, idx) => (
              <CaseStudyCard
                key={item.href}
                title={item.title}
                teaser={item.teaser}
                href={item.href}
                imageUrl={item.imageUrl}
                imageAlt={item.title}
                date={item.date}
                ctaLabel="Read full story"
                eager={idx < 3}
              />
            ))}
          </div>
          {total > INITIAL_VISIBLE && (
            <div className={s.paginationControls}>
              <span className={s.controlsText}>
                Showing {visibleItems.length} of {total} case studies
              </span>
              {visibleCount < total ? (
                <TextButton onClick={handleShowMore}>
                  Show more
                </TextButton>
              ) : (
                <TextButton onClick={handleShowLess}>
                  Show less
                </TextButton>
              )}
            </div>
          )}
        </div>
      </section>
      <CTA />
    </>
  );
}
