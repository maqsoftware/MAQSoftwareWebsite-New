import { makeStyles, tokens } from "@fluentui/react-components";
import { ArrowRight16Regular } from "@fluentui/react-icons";

const useStyles = makeStyles({
  section: { padding: "48px 32px", backgroundColor: "#fff", "@media (max-width: 768px)": { padding: "32px 16px" } },
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
    margin: "0 0 6px",
    letterSpacing: "-0.01em",
  },
  sub: { fontSize: "14px", color: "var(--maq-gray-600)", margin: 0 },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    "@media (max-width: 960px) and (min-width: 481px)": { gridTemplateColumns: "repeat(2, 1fr)" },
    "@media (max-width: 480px)": { gridTemplateColumns: "1fr" },
  },
  card: {
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "12px",
    overflow: "hidden",
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    textDecoration: "none",
    color: "inherit",
    transition: "all 0.2s",
    ":hover": {
      border: "1px solid var(--maq-red)",
      boxShadow: "0 6px 16px rgba(0,0,0,0.06)",
    },
  },
  cover: {
    height: "100px",
    background:
      "linear-gradient(135deg, var(--maq-red-pale) 0%, var(--maq-off-white) 60%, var(--maq-surface-cream) 100%)",
    borderBottom: "1px solid var(--maq-border)",
  },
  body: { padding: "20px", display: "flex", flexDirection: "column", gap: "10px", flex: 1 },
  cardTitle: {
    fontSize: "16px",
    fontWeight: 700,
    color: "var(--maq-black)",
    lineHeight: 1.35,
    margin: 0,
  },
  teaser: { fontSize: "13px", color: "var(--maq-gray-600)", lineHeight: 1.55, margin: 0, flex: 1 },
  read: {
    display: "inline-flex",
    alignItems: "center",
    gap: "4px",
    fontSize: "13px",
    fontWeight: 600,
    color: "var(--maq-red)",
  },
});

const insights = [
  {
    title: "Optimize your DevOps strategies with our 9 essential best practices",
    teaser: "Essential DevOps practices for efficient cloud deployment and operations.",
    href: "https://maqsoftware.com/insights/azure-dev-ops-best-practices-guide.html",
  },
  {
    title: "Strengthen your cloud security and protect your assets with 19 security best practices",
    teaser: "Comprehensive security best practices for protecting your cloud infrastructure and data.",
    href: "https://maqsoftware.com/insights/azure-security-best-practices.html",
  },
  {
    title: "This guide covers the 7 best practices you need to secure Dataverse",
    teaser:
      "Essential security controls for protecting data in Microsoft Dataverse cloud environment.",
    href: "https://maqsoftware.com/insights/dataverse-security-best-practices.html",
  },
];

export function ServiceCloudInsights() {
  const s = useStyles();
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <div className={s.head}>
          <span className={s.eyebrow}>Insights</span>
          <h2 className={s.title}>Our cloud optimization insights</h2>
          <p className={s.sub}>
            See our research that goes into refining our cloud optimization service.
          </p>
        </div>
        <div className={s.grid}>
          {insights.map((i) => (
            <a key={i.title} className={s.card} href={i.href}>
              <div className={s.cover} aria-hidden="true" />
              <div className={s.body}>
                <h3 className={s.cardTitle}>{i.title}</h3>
                <p className={s.teaser}>{i.teaser}</p>
                <span className={s.read}>
                  Read more <ArrowRight16Regular />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
