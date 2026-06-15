import { makeStyles, tokens } from "@fluentui/react-components";
import { useMemo, useState, useEffect } from "react";
import { CTA } from "../components/CTA";
import { TextButton } from "../components/buttons";
import { InsightsFilterBar } from "../components/insights/InsightsFilterBar";
import { InsightsHero } from "../components/insights/InsightsHero";
import { InsightsResourceNav } from "../components/insights/InsightsResourceNav";
import { ArticleCard } from "../components/cards/ArticleCard";
import { bestPracticeFilters, bestPracticeItems } from "../data/insights";

const INITIAL_VISIBLE = 9;

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

export function InsightsBestPracticeGuides() {
  const s = useStyles();
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = useMemo(() => {
    if (activeFilter === "All") return bestPracticeItems;
    return bestPracticeItems.filter((item) => item.topic === activeFilter);
  }, [activeFilter]);

  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE);
  }, [activeFilter]);

  const total = filtered.length;
  const visibleItems = filtered.slice(0, visibleCount);

  const handleShowMore = () => setVisibleCount(total);
  const handleShowLess = () => setVisibleCount(INITIAL_VISIBLE);

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
            {visibleItems.map((item) => (
              <ArticleCard
                key={item.href}
                title={item.title}
                teaser={item.teaser}
                href={item.href}
                imageUrl={item.imageUrl}
                imageAlt={item.title}
                tag={item.topic}
                ctaLabel="Read full article"
              />
            ))}
          </div>
          {total > INITIAL_VISIBLE && (
            <div className={s.paginationControls}>
              <span className={s.controlsText}>
                Showing {visibleItems.length} of {total} guides
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
