import { makeStyles, tokens } from "@fluentui/react-components";

const useStyles = makeStyles({
  section: { padding: "48px 32px", backgroundColor: "#fff" },
  inner: { maxWidth: "1240px", margin: "0 auto" },
  head: { textAlign: "center", marginBottom: "28px" },
  eyebrow: {
    fontSize: "12px",
    fontWeight: 700,
    color: "var(--maq-red)",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    display: "block",
    marginBottom: "8px",
  },
  title: {
    display: "block",
    fontSize: "28px",
    fontWeight: 700,
    color: "var(--maq-black)",
    margin: "0 0 6px",
    letterSpacing: "-0.01em",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "16px",
    "@media (max-width: 960px)": { gridTemplateColumns: "repeat(2, 1fr)" },
  },
  card: {
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "10px",
    padding: "20px",
    background: "#fff",
    textAlign: "center",
    transition: "all 0.2s",
    ":hover": {
      border: "1px solid var(--maq-red)",
      boxShadow: "0 6px 16px rgba(0,0,0,0.06)",
    },
  },
  metric: {
    fontSize: "36px",
    fontWeight: 800,
    color: "var(--maq-red)",
    lineHeight: 1.1,
    marginBottom: "8px",
    letterSpacing: "-0.02em",
  },
  label: {
    fontSize: "14px",
    fontWeight: 600,
    color: "var(--maq-black)",
    lineHeight: 1.4,
  },
});

export interface HighlightStat {
  metric: string;
  label: string;
}

export interface PartnershipHighlightsProps {
  eyebrow?: string;
  title: string;
  stats: HighlightStat[];
}

export function PartnershipHighlights({
  eyebrow,
  title,
  stats,
}: PartnershipHighlightsProps) {
  const s = useStyles();
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <div className={s.head}>
          {eyebrow && <span className={s.eyebrow}>{eyebrow}</span>}
          <h2 className={s.title}>{title}</h2>
        </div>
        <div className={s.grid}>
          {stats.map((h) => (
            <div key={h.label} className={s.card}>
              <div className={s.metric}>{h.metric}</div>
              <div className={s.label}>{h.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
