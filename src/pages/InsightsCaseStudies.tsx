import { makeStyles, tokens } from "@fluentui/react-components";
import { ArrowRight16Regular } from "@fluentui/react-icons";
import { useMemo, useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { CTA } from "../components/CTA";
// import { TrustBanner } from \"../components/TrustBanner\";

import { InsightsFilterBar } from "../components/insights/InsightsFilterBar";
import { InsightsHero } from "../components/insights/InsightsHero";
import { InsightsResourceNav } from "../components/insights/InsightsResourceNav";
import { caseStudyFilters, caseStudyItems } from "../data/insights";

const useStyles = makeStyles({
  section: { padding: "48px 32px", backgroundColor: "var(--maq-off-white)" },
  inner: { maxWidth: "1240px", margin: "0 auto" },
  head: { marginBottom: "18px" },
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
    height: "220px",
    objectFit: "cover",
    display: "block",
    backgroundColor: "var(--maq-surface-cream)",
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

  const filtered = useMemo(() => {
    if (activeFilter === "All") return caseStudyItems;
    return caseStudyItems.filter((item) => item.service === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <InsightsHero
        title="Case Studies"
        subhead="Explore real-world outcomes across AI, data, reporting, cloud, and security implementations delivered by MAQ Software."
        ctaLabel="Discuss your project"
      />

      <InsightsResourceNav active="case-studies" />
      <section className={s.section} id="insights-content">
        <div className={s.inner}>
          <div className={s.head}>
            <h2 className={s.title}>Case studies catalog</h2>
            <InsightsFilterBar items={caseStudyFilters} active={activeFilter} onChange={setActiveFilter} />
          </div>
          <div className={s.grid}>
            {filtered.map((item) => (
              <a key={item.href} className={s.card} href={item.href} target="_blank" rel="noreferrer">
                <img className={s.image} src={item.imageUrl} alt={item.title} loading="lazy" />
                <div className={s.body}>
                  <div className={s.meta}>
                    <span className={s.pill}>{item.tag}</span>
                    <span className={s.date}>{item.date}</span>
                  </div>
                  <h3 className={s.cardTitle}>{item.title}</h3>
                  <p className={s.teaser}>{item.teaser}</p>
                  <span className={s.read}>Read full article <ArrowRight16Regular /></span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
