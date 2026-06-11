import { makeStyles, tokens } from "@fluentui/react-components";
import { ArrowLeft16Regular } from "@fluentui/react-icons";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { CTA } from "../components/CTA";
import { PrimaryButton, SecondaryButton } from "../components/buttons";
import { InsightsHero } from "../components/insights/InsightsHero";
import { InsightsResourceNav } from "../components/insights/InsightsResourceNav";
import {
  visualGuideFilters,
  visualGuideItems,
  visualGuideSlug,
  type VisualGuideItem,
} from "../data/insights";

const useStyles = makeStyles({
  section: { padding: "48px 32px", backgroundColor: "#fff" },
  inner: { maxWidth: "1240px", margin: "0 auto" },
  back: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "13px",
    fontWeight: 600,
    color: "var(--maq-red)",
    textDecoration: "none",
    marginBottom: "20px",
    ":hover": { textDecoration: "underline" },
  },
  intro: {
    fontSize: "15px",
    lineHeight: 1.6,
    color: "var(--maq-gray-600)",
    margin: "0 0 24px",
    maxWidth: "780px",
  },
  toc: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginBottom: "24px",
  },
  tocItem: {
    fontSize: "13px",
    fontWeight: 600,
    color: "var(--maq-black)",
    backgroundColor: "var(--maq-off-white)",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "999px",
    paddingTop: "6px",
    paddingBottom: "6px",
    paddingLeft: "14px",
    paddingRight: "14px",
    textDecoration: "none",
    ":hover": {
      border: "1px solid var(--maq-red)",
      color: "var(--maq-red)",
    },
  },
  group: { marginBottom: "32px", scrollMarginTop: "80px" },
  groupHead: {
    display: "flex",
    alignItems: "baseline",
    justifyContent: "space-between",
    gap: "12px",
    marginBottom: "10px",
    flexWrap: "wrap",
  },
  groupTitle: {
    fontSize: "20px",
    fontWeight: 700,
    color: "var(--maq-black)",
    margin: 0,
  },
  groupHint: {
    fontSize: "13px",
    color: "var(--maq-gray-500)",
    margin: 0,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "16px",
    "@media (max-width: 1180px)": { gridTemplateColumns: "repeat(2, 1fr)" },
    "@media (max-width: 700px)": { gridTemplateColumns: "1fr" },
  },
  card: {
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "12px",
    backgroundColor: "#fff",
    padding: "16px",
    textDecoration: "none",
    color: "inherit",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    transition: "all 0.2s",
    ":hover": { border: "1px solid var(--maq-red)", boxShadow: "0 6px 16px rgba(0,0,0,0.06)" },
  },
  cardImg: {
    width: "100%",
    aspectRatio: "16/9",
    objectFit: "contain",
    backgroundColor: "#fff",
    borderRadius: "8px",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
  },
  cardTitle: { fontSize: "15px", fontWeight: 600, color: "var(--maq-black)", margin: 0 },
  cardTeaser: {
    fontSize: "12px",
    color: "var(--maq-gray-600)",
    lineHeight: 1.5,
    margin: 0,
    flex: 1,
  },
  read: {
    display: "inline-block",
    fontSize: "13px",
    fontWeight: 700,
    lineHeight: 1.4,
    color: "var(--maq-red)",
    textDecoration: "none",
    },
  filterRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "12px",
    marginBottom: "16px",
    flexWrap: "wrap",
  },
});

const guideCategoryHints: Record<string, string> = {
  "Change Over Time": "Track trends, growth, and how metrics evolve.",
  Clustering: "Reveal natural groupings within your data.",
  Comparison: "Compare measures across categories side-by-side.",
  Correlation: "Surface relationships between two or more variables.",
  Distribution: "Understand spread, density, and outliers.",
  Flow: "Show movement, progression, or transitions between states.",
  Forecast: "Project future values based on historical patterns.",
  KPI: "Highlight key performance indicators against targets.",
  "Part-to-Whole": "Break a total into its constituent shares.",
  Ranking: "Order items by a measure to spotlight leaders or laggards.",
  "Single Metric": "Spotlight one number with rich context.",
  Utility: "Add interaction, formatting, or layout helpers to reports.",
};

function categoryList(item: VisualGuideItem): string[] {
  return Array.isArray(item.category) ? item.category : [item.category];
}

interface CategoryGroup {
  category: string;
  hint?: string;
  items: VisualGuideItem[];
}

function buildGroups(filterCategory: string): CategoryGroup[] {
  const cats = visualGuideFilters.filter((c) => c !== "All" && c !== "Certified");
  const groups: CategoryGroup[] = cats.map((category) => ({
    category,
    hint: guideCategoryHints[category],
    items: visualGuideItems.filter((item) => categoryList(item).includes(category)),
  }));
  if (filterCategory === "All") return groups.filter((g) => g.items.length > 0);
  if (filterCategory === "Certified") {
    return groups
      .map((g) => ({
        ...g,
        items: g.items.filter((item) => item.badges.includes("Certified")),
      }))
      .filter((g) => g.items.length > 0);
  }
  return groups.filter((g) => g.category === filterCategory);
}

export function InsightsVisualChooser() {
  const s = useStyles();
  const [activeFilter, setActiveFilter] = useState("All");
  const groups = useMemo(() => buildGroups(activeFilter), [activeFilter]);

  return (
    <>
      <InsightsHero
        title="Visual chooser guide"
        subhead="Pick the right Power BI custom visual for your story. Browse by intent — comparison, distribution, flow, ranking, and more — and jump straight to a detail page or get the visual on Microsoft AppSource."
      />
      <InsightsResourceNav active="power-bi-custom-visual-guide" />

      <section className={s.section} id="visual-chooser-content">
        <div className={s.inner}>
          <Link to="/insights/power-bi-custom-visual-guide" className={s.back}>
            <ArrowLeft16Regular /> Back to Power BI custom visual guide
          </Link>
          {/* <p className={s.intro}>
            This guide groups our 43 certified custom visuals by analytic intent. Start from the
            question you want your report to answer, then dive into any visual for a detail view
            and AppSource link.
          </p> */}

          <div className={s.filterRow}>
            <div className={s.toc}>
              {groups.map((g) => (
                <a key={g.category} href={`#cat-${visualGuideSlug(g.category)}`} className={s.tocItem}>
                  {g.category}
                </a>
              ))}
            </div>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {["All", "Certified"].map((f) => (
                activeFilter === f ? (
                  <PrimaryButton key={f} size="small" onClick={() => setActiveFilter(f)}>
                    {f}
                  </PrimaryButton>
                ) : (
                  <SecondaryButton key={f} size="small" onClick={() => setActiveFilter(f)}>
                    {f}
                  </SecondaryButton>
                )
              ))}
            </div>
          </div>

          {groups.map((group) => (
            <div
              key={group.category}
              className={s.group}
              id={`cat-${visualGuideSlug(group.category)}`}
            >
              <div className={s.groupHead}>
                <h2 className={s.groupTitle}>{group.category}</h2>
                {group.hint && <p className={s.groupHint}>{group.hint}</p>}
              </div>
              <div className={s.grid}>
                {group.items.map((item) => (
                  <Link
                    key={item.name}
                    className={s.card}
                    to={`/insights/power-bi-custom-visual-guide/${visualGuideSlug(item.name)}`}
                  >
                    <img
                      className={s.cardImg}
                      src={item.imageUrl}
                      alt={item.name}
                      loading="lazy"
                    />
                    <h3 className={s.cardTitle}>{item.name}</h3>
                    <p className={s.cardTeaser}>{item.description}</p>
                    <span className={s.read}>
                      Open visual detail
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}

