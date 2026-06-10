import { makeStyles, tokens } from "@fluentui/react-components";
import { ArrowRight20Regular } from "@fluentui/react-icons";

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
  sub: { fontSize: "14px", color: "var(--maq-gray-600)", margin: "0 auto", textAlign: "center" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
    gap: "16px",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "12px",
    padding: "22px",
    background: "#fff",
    textDecoration: "none",
    color: "inherit",
    transition: "all 0.2s",
    ":hover": {
      border: `1px solid var(--maq-red)`,
      boxShadow: "0 6px 16px rgba(0,0,0,0.06)",
      transform: "translateY(-2px)",
    },
  },
  chip: {
    alignSelf: "flex-start",
    fontSize: "10px",
    fontWeight: 700,
    color: "var(--maq-red)",
    background: "var(--maq-red-pale)",
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    padding: "3px 8px",
    borderRadius: "4px",
    marginBottom: "12px",
  },
  metric: {
    fontSize: "32px",
    fontWeight: 700,
    color: "var(--maq-red)",
    lineHeight: 1.1,
    marginBottom: "8px",
    letterSpacing: "-0.02em",
  },
  cardTitle: {
    fontSize: "15px",
    fontWeight: 700,
    color: "var(--maq-black)",
    lineHeight: 1.4,
    marginBottom: "10px",
  },
  label: {
    fontSize: "13px",
    fontWeight: 400,
    color: "var(--maq-gray-600)",
    lineHeight: 1.55,
    marginBottom: "14px",
    flex: 1,
  },
  link: {
    display: "inline-flex",
    alignItems: "center",
    gap: "4px",
    fontSize: "13px",
    fontWeight: 600,
    color: "var(--maq-red)",
    textDecoration: "none",
  },
});

export interface ImpactStat {
  metric?: string;
  chip?: string;
  title?: string;
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
          {/* <p className={s.sub}>{sub}</p> */}
        </div>
        <div className={s.grid}>
          {stats.map((st) => (
            <a key={st.label} className={s.card} href={st.sourceHref} target="_blank" rel="noopener noreferrer">
              {st.chip && <span className={s.chip}>{st.chip}</span>}
              {st.metric && st.metric !== "____" && (
                <div className={s.metric}>{st.metric}</div>
              )}
              {st.title && <div className={s.cardTitle}>{st.title}</div>}
              <div className={s.label}>{st.label}</div>
              <span className={s.link}>
                {st.sourceLabel} <ArrowRight20Regular fontSize={14} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
