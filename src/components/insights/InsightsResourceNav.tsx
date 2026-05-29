import { makeStyles, tokens } from "@fluentui/react-components";
import { Link } from "react-router-dom";
import { insightsResourceLinks, type InsightsResourceLink } from "../../data/insights";

const useStyles = makeStyles({
  section: {
    padding: "0 32px 24px",
    backgroundColor: "var(--maq-off-white)",
  },
  inner: {
    maxWidth: "1240px",
    margin: "0 auto",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "14px",
    "@media (max-width: 960px)": { gridTemplateColumns: "repeat(2, 1fr)" },
    "@media (max-width: 640px)": { gridTemplateColumns: "1fr" },
  },
  card: {
    backgroundColor: "#fff",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "12px",
    padding: "16px 18px",
    textDecoration: "none",
    color: "inherit",
    transition: "all 0.2s ease",
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    ":hover": {
      border: "1px solid var(--maq-red)",
      boxShadow: "0 6px 16px rgba(0,0,0,0.06)",
    },
  },
  active: {
    border: "1px solid var(--maq-red)",
    boxShadow: "0 6px 16px rgba(186, 20, 26, 0.08)",
  },
  label: {
    fontSize: "14px",
    fontWeight: 700,
    color: "var(--maq-black)",
  },
  description: {
    fontSize: "13px",
    lineHeight: 1.5,
    color: "var(--maq-gray-600)",
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
        <div className={s.grid}>
          {insightsResourceLinks.map((item) => (
            <Link
              key={item.key}
              to={item.href}
              className={`${s.card} ${item.key === active ? s.active : ""}`}
              aria-current={item.key === active ? "page" : undefined}
            >
              <span className={s.label}>{item.label}</span>
              <span className={s.description}>{item.description}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}