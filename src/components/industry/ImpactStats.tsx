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
    fontSize: "28px",
    fontWeight: 700,
    color: "var(--maq-black)",
    margin: "0 0 6px",
    letterSpacing: "-0.01em",
  },
  sub: { fontSize: "14px", color: "var(--maq-gray-600)", margin: 0 },
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
    transition: "all 0.2s",
    ":hover": {
      border: `1px solid var(--maq-red)`,
      boxShadow: "0 6px 16px rgba(0,0,0,0.06)",
    },
  },
  metric: {
    fontSize: "32px",
    fontWeight: 700,
    color: "var(--maq-red)",
    lineHeight: 1.1,
    marginBottom: "8px",
    letterSpacing: "-0.02em",
  },
  label: {
    fontSize: "14px",
    fontWeight: 600,
    color: "var(--maq-black)",
    lineHeight: 1.35,
    marginBottom: "8px",
  },
  source: {
    fontSize: "11px",
    color: "var(--maq-gray-600)",
    textTransform: "uppercase",
    letterSpacing: "0.06em",
  },
  link: { color: "var(--maq-red)", textDecoration: "none" },
});

export interface ImpactStat {
  metric: string;
  label: string;
  sourceLabel: string;
  sourceHref: string;
}

interface ImpactStatsProps {
  eyebrow?: string;
  title: string;
  sub: string;
  stats: ImpactStat[];
}

export function ImpactStats({ eyebrow = "Proven outcomes", title, sub, stats }: ImpactStatsProps) {
  const s = useStyles();
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <div className={s.head}>
          <span className={s.eyebrow}>{eyebrow}</span>
          <h2 className={s.title}>{title}</h2>
          <p className={s.sub}>{sub}</p>
        </div>
        <div className={s.grid}>
          {stats.map((st) => (
            <div key={st.label} className={s.card}>
              <div className={s.metric}>{st.metric}</div>
              <div className={s.label}>{st.label}</div>
              <a
                className={`${s.source} ${s.link}`}
                href={st.sourceHref}
                target="_blank"
                rel="noreferrer"
              >
                {st.sourceLabel} ↗
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
