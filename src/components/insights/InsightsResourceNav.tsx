import { makeStyles, tokens } from "@fluentui/react-components";
import { Link } from "react-router-dom";
import { insightsResourceLinks, type InsightsResourceLink } from "../../data/insights";

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
  card: {
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "12px",
    padding: "16px",
    background: "#fff",
    textDecoration: "none",
    color: "inherit",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    transition: "all 0.2s",
    ":hover": {
      border: "1px solid var(--maq-red)",
      boxShadow: "0 6px 16px rgba(0,0,0,0.06)",
    },
  },
  active: {
    border: "1px solid var(--maq-red)",
    background: "var(--maq-red-pale)",
  },
  name: { fontSize: "16px", fontWeight: 700, color: "var(--maq-black)" },
  desc: { fontSize: "13px", color: "var(--maq-gray-600)", lineHeight: 1.5, margin: 0, flex: 1 },
  link: {
    display: "inline-block",
    fontSize: "13px",
    fontWeight: 700,
    lineHeight: 1.4,
    color: "var(--maq-red)",
    textDecoration: "none",
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
          {insightsResourceLinks.map((r) => {
            const isExternal = r.href.startsWith("http");
            if (isExternal) {
              return (
                <a
                  key={r.key}
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${s.card} ${r.key === active ? s.active : ""}`}
                >
                  <span className={s.name}>{r.label}</span>
                  <p className={s.desc}>{r.description}</p>
                  <span className={s.link}>Open resource</span>
                </a>
              );
            }

            return (
              <Link key={r.key} to={r.href} className={`${s.card} ${r.key === active ? s.active : ""}`}>
                <span className={s.name}>{r.label}</span>
                <p className={s.desc}>{r.description}</p>
                <span className={s.link}>Open resource</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

