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

interface Stat {
  metric: string;
  label: string;
  sourceLabel: string;
  sourceHref: string;
}

const stats: Stat[] = [
  {
    metric: "8×",
    label: "Faster Power BI refresh for a top-3 US retailer",
    sourceLabel: "Microsoft Fabric BI modernization",
    sourceHref:
      "https://blog.maqsoftware.com/2025/12/modernizing-retail-business.html",
  },
  {
    metric: "Real-time",
    label: "Direct Store Delivery visibility on Microsoft Fabric",
    sourceLabel: "Real-time DSD case study",
    sourceHref:
      "https://blog.maqsoftware.com/2024/05/enabling-real-time-visibility-how.html",
  },
  {
    metric: "< 1 min",
    label: "Live KPIs replacing nightly batches at an organic supermarket chain",
    sourceLabel: "Organic supermarket case study",
    sourceHref:
      "https://blog.maqsoftware.com/2022/06/real-time-reporting-for-organic.html",
  },
  {
    metric: "Personalized",
    label: "Loyalty program lift across millions of members",
    sourceLabel: "Loyalty program case study",
    sourceHref:
      "https://blog.maqsoftware.com/2024/02/empowering-retail-growth-with-optimized.html",
  },
];

export function ImpactStats() {
  const s = useStyles();
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <div className={s.head}>
          <span className={s.eyebrow}>Proven outcomes</span>
          <h2 className={s.title}>Real impact for retail leaders</h2>
          <p className={s.sub}>
            Numbers from MAQ Software engagements with global retailers and CPG
            brands.
          </p>
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
