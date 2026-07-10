import { makeStyles, tokens } from "@fluentui/react-components";
import { ArticleCard } from "../cards/ArticleCard";

const useStyles = makeStyles({
  section: { padding: "48px 32px", backgroundColor: "#fff" },
  inner: { maxWidth: "var(--maq-container-wide)", margin: "0 auto" },
  head: { textAlign: "center", marginBottom: "24px" },
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
    fontSize: "36px",
    lineHeight: 1.15,
    fontWeight: 700,
    color: "var(--maq-navy)",
    margin: "0 0 6px",
    letterSpacing: "-0.02em",
  },
  sub: { fontSize: "14px", color: "var(--maq-gray-600)", margin: "0 auto", textAlign: "center" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    "@media (max-width: 960px)": { gridTemplateColumns: "1fr" },
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
          <h2 className={s.title}>Our cloud modernization insights</h2>
          {/* <p className={s.sub}>
            See our research that goes into refining our cloud modernization service.
          </p> */}
        </div>
        <div className={s.grid}>
          {insights.map((i) => (
            <ArticleCard key={i.title} title={i.title} teaser={i.teaser} href={i.href} />
          ))}
        </div>
      </div>
    </section>
  );
}
