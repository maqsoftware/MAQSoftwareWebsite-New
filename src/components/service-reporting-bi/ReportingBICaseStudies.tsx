import { makeStyles, tokens } from "@fluentui/react-components";
import { ArrowRight16Regular } from "@fluentui/react-icons";

const useStyles = makeStyles({
  section: { padding: "48px 32px", backgroundColor: "var(--maq-off-white)" },
  inner: { maxWidth: "1240px", margin: "0 auto" },
  head: { marginBottom: "24px" },
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
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "16px",
    "@media (max-width: 700px)": { gridTemplateColumns: "1fr" },
  },
  card: {
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "12px",
    padding: "22px",
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    textDecoration: "none",
    color: "inherit",
    transition: "all 0.2s",
    ":hover": {
      border: "1px solid var(--maq-red)",
      boxShadow: "0 6px 16px rgba(0,0,0,0.06)",
    },
  },
  pill: {
    fontSize: "11px",
    fontWeight: 700,
    color: "var(--maq-red)",
    background: "var(--maq-red-pale)",
    padding: "3px 8px",
    borderRadius: "4px",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    alignSelf: "flex-start",
  },
  cardTitle: {
    fontSize: "17px",
    fontWeight: 700,
    color: "var(--maq-black)",
    lineHeight: 1.3,
    margin: 0,
  },
  teaser: { fontSize: "14px", color: "var(--maq-gray-600)", lineHeight: 1.55, margin: 0, flex: 1 },
  read: {
    display: "inline-flex",
    alignItems: "center",
    gap: "4px",
    fontSize: "13px",
    fontWeight: 600,
    color: "var(--maq-red)",
  },
  footerLink: {
    marginTop: "20px",
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "14px",
    fontWeight: 600,
    color: "var(--maq-red)",
    textDecoration: "none",
    ":hover": { textDecoration: "underline" },
  },
});

interface Study {
  tag: string;
  title: string;
  teaser: string;
  href: string;
}

const studies: Study[] = [
  {
    tag: "Fabric data agent",
    title: "Delivering accurate business intelligence insights with a Fabric data agent",
    teaser:
      "A Microsoft Fabric data agent that answers business questions with citation-backed accuracy, replacing brittle hand-built dashboards.",
    href: "https://blog.maqsoftware.com/2026/01/delivering-accurate-business.html",
  },
  {
    tag: "Retail",
    title: "Modernizing retail business intelligence with Microsoft Fabric and Power BI",
    teaser:
      "Re-platforming a global retailer's reporting estate onto Microsoft Fabric and Power BI with a unified semantic model.",
    href: "https://blog.maqsoftware.com/2025/12/modernizing-retail-business.html",
  },
  {
    tag: "Migration",
    title: "Transitioning legacy reports from Qlik to Power BI",
    teaser:
      "AI-assisted Qlik to Power BI migration rebuilding semantic models, RLS, and pixel-perfect layouts on Fabric.",
    href: "https://blog.maqsoftware.com/2025/06/transitioning-legacy-reports-from-qlik.html",
  },
  {
    tag: "Real-time",
    title: "Real-time reporting for an organic supermarket chain",
    teaser:
      "Real-time Power BI reporting on store, inventory, and freshness KPIs for an organic supermarket chain.",
    href: "https://blog.maqsoftware.com/2022/06/real-time-reporting-for-organic.html",
  },
];

export function ReportingBICaseStudies() {
  const s = useStyles();
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <div className={s.head}>
          <span className={s.eyebrow}>Related case studies</span>
          <h2 className={s.title}>How clients are modernizing reporting &amp; BI</h2>
        </div>
        <div className={s.grid}>
          {studies.map((c) => (
            <a key={c.title} className={s.card} href={c.href} target="_blank" rel="noreferrer">
              <span className={s.pill}>{c.tag}</span>
              <h3 className={s.cardTitle}>{c.title}</h3>
              <p className={s.teaser}>{c.teaser}</p>
              <span className={s.read}>
                Read full story <ArrowRight16Regular />
              </span>
            </a>
          ))}
        </div>
        <a
          className={s.footerLink}
          href="https://maqsoftware.com/case-studies.html?filter=reporting-and-visualization"
          target="_blank"
          rel="noreferrer"
        >
          See all reporting &amp; BI case studies <ArrowRight16Regular />
        </a>
      </div>
    </section>
  );
}
