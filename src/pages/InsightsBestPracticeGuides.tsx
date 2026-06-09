import { makeStyles, tokens } from "@fluentui/react-components";
import { ArrowRight16Regular } from "@fluentui/react-icons";
import { useMemo, useState } from "react";
import { CTA } from "../components/CTA";
import { InsightsFilterBar } from "../components/insights/InsightsFilterBar";
import { InsightsHero } from "../components/insights/InsightsHero";
import { InsightsResourceNav } from "../components/insights/InsightsResourceNav";
import { bestPracticeFilters, bestPracticeItems } from "../data/insights";

const useStyles = makeStyles({
  section: { padding: "48px 32px", backgroundColor: "var(--maq-off-white)" },
  inner: { maxWidth: "1240px", margin: "0 auto" },
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
    padding: "20px",
    textDecoration: "none",
    color: "inherit",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    transition: "all 0.2s",
    ":hover": { border: "1px solid var(--maq-red)", boxShadow: "0 6px 16px rgba(0,0,0,0.06)" },
  },
  imageWrap: {
    borderRadius: "10px",
    overflow: "hidden",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    background: "#fff",
  },
  image: {
    width: "100%",
    aspectRatio: "16/9",
    objectFit: "cover",
    display: "block",
  },
  topic: {
    fontSize: "11px",
    fontWeight: 700,
    color: "var(--maq-red)",
    background: "var(--maq-red-pale)",
    padding: "3px 8px",
    borderRadius: "4px",
    textTransform: "uppercase",
    alignSelf: "flex-start",
  },
  cardTitle: { fontSize: "17px", lineHeight: 1.35, color: "var(--maq-black)", margin: 0 },
  teaser: { fontSize: "14px", color: "var(--maq-gray-600)", lineHeight: 1.55, margin: 0, flex: 1 },
  read: { display: "inline-flex", alignItems: "center", gap: "4px", color: "var(--maq-red)", fontWeight: 600, fontSize: "13px" },
});

export function InsightsBestPracticeGuides() {
  const s = useStyles();
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = useMemo(() => {
    if (activeFilter === "All") return bestPracticeItems;
    return bestPracticeItems.filter((item) => item.topic === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <InsightsHero
        title="Best practice guides"
        subhead="Learn implementation patterns and guardrails across GitHub Copilot, Power BI, Databricks, Snowflake, Azure architecture, Dynamics 365, and Power Platform."
      />
      <InsightsResourceNav active="best-practice-guides" />
      <section className={s.section} id="insights-content">
        <div className={s.inner}>
          <h2 className={s.title}>Technical playbooks</h2>
          <InsightsFilterBar items={bestPracticeFilters} active={activeFilter} onChange={setActiveFilter} />
          <div className={s.grid}>
            {filtered.map((item) => (
              <a key={item.href} className={s.card} href={item.href} target="_blank" rel="noopener noreferrer">
                <div className={s.imageWrap}>
                  <img className={s.image} src={item.imageUrl} alt={item.title} loading="lazy" />
                </div>
                <span className={s.topic}>{item.topic}</span>
                <h3 className={s.cardTitle}>{item.title}</h3>
                <p className={s.teaser}>{item.teaser}</p>
                <span className={s.read}>Read full article <ArrowRight16Regular /></span>
              </a>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
