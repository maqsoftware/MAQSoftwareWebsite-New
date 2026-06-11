import { makeStyles } from "@fluentui/react-components";
import { insightsResourceLinks, type InsightsResourceLink } from "../../data/insights";
import { ResourceMarketplaceCard } from "../cards/ResourceMarketplaceCard";

const useStyles = makeStyles({
  section: { padding: "32px", backgroundColor: "#fff" },
  inner: { maxWidth: "1240px", margin: "0 auto" },
  head: { marginBottom: "16px" },
  eyebrow: {
    fontSize: "12px",
    fontWeight: 700,
    color: "var(--maq-red)",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    display: "block",
    marginBottom: "6px",
  },
  title: {
    fontSize: "28px",
    fontWeight: 700,
    color: "var(--maq-black)",
    margin: 0,
    letterSpacing: "-0.01em",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "12px",
    "@media (max-width: 1080px)": { gridTemplateColumns: "repeat(2, 1fr)" },
    "@media (max-width: 680px)": { gridTemplateColumns: "1fr" },
  },
});

interface InsightsResourceNavProps {
  active: InsightsResourceLink["key"];
}

export function InsightsResourceNav({ active }: InsightsResourceNavProps) {
  const s = useStyles();
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <div className={s.head}>
          <span className={s.eyebrow}>Resources</span>
          <h2 className={s.title}>Explore all insights resources</h2>
        </div>
        <div className={s.grid}>
          {insightsResourceLinks.map((r) => (
            <ResourceMarketplaceCard
              key={r.key}
              title={r.label}
              description={r.description}
              href={r.href}
              ctaLabel="Open resource"
              active={r.key === active}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
