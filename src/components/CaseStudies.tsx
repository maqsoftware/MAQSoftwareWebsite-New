import { makeStyles, tokens } from "@fluentui/react-components";
import { ArrowRight16Regular } from "@fluentui/react-icons";

const useStyles = makeStyles({
  section: { padding: "32px 32px", backgroundColor: tokens.colorNeutralBackground1 },
  inner: { maxWidth: "1240px", margin: "0 auto" },
  head: { textAlign: "center", marginBottom: "20px" },
  eyebrow: {
    fontSize: "12px",
    fontWeight: 700,
    color: "var(--maq-blue)",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    marginBottom: "12px",
    display: "block",
  },
  title: {
    display: "block",
    fontSize: "36px",
    lineHeight: 1.15,
    fontWeight: 700,
    color: "var(--maq-navy)",
    margin: "0 0 12px",
    letterSpacing: "-0.02em",
  },
  sub: {
    display: "block",
    fontSize: "15px",
    lineHeight: 1.6,
    color: "var(--maq-text-muted)",
    maxWidth: "640px",
    margin: "0 auto",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
    gap: "16px",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "24px",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    transition: "all 0.2s",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    textDecoration: "none",
    color: "inherit",
    ":hover": {
      border: `1px solid var(--maq-blue)`,
      boxShadow: "var(--maq-shadow-sm)",
      transform: "translateY(-2px)",
    },
  },
  title2: {
    fontSize: "18px",
    fontWeight: 700,
    color: "var(--maq-navy)",
    marginBottom: "10px",
    lineHeight: 1.35,
    letterSpacing: "-0.01em",
  },
  teaser: {
    fontSize: "13.5px",
    color: "var(--maq-text-muted)",
    lineHeight: 1.6,
    flex: 1,
    marginBottom: "16px",
  },
  more: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "6px",
    fontSize: "13px",
    color: "var(--maq-red)",
    fontWeight: 600,
    minHeight: "36px",
    minWidth: "152px",
    padding: "0 12px",
    border: "1px solid var(--maq-red)",
    borderRadius: "8px",
    whiteSpace: "nowrap",
  },
});

interface Case {
  industry: string;
  title: string;
  teaser: string;
  href: string;
  color: "brand" | "success" | "warning" | "danger" | "informative";
}

const cases: Case[] = [
  {
    industry: "Agentic AI",
    title: "Reshaping industries with agentic AI solutions",
    teaser:
      "Agentic AI in production across retail, financial services, healthcare and manufacturing — a reference pattern for any regulated, multi-system enterprise.",
    href: "https://blog.maqsoftware.com/2025/08/reshaping-industries-with-agentic-ai.html",
    color: "brand",
  },
  {
    industry: "Snowflake + Fabric",
    title: "Optimizing data management by integrating Snowflake and Microsoft Fabric",
    teaser:
      "Bridging Snowflake and Microsoft Fabric to streamline data movement, governance, and cost — without rewriting existing pipelines or rebuilding semantic models.",
    href: "https://blog.maqsoftware.com/2025/03/optimizing-data-management-by.html",
    color: "brand",
  },
  {
    industry: "Fabric migration",
    title: "Modernizing retail business intelligence with Microsoft Fabric and Power BI",
    teaser:
      "Re-platforming a global retailer's reporting estate onto Microsoft Fabric and Power BI with a unified semantic model and faster refresh.",
    href: "https://blog.maqsoftware.com/2025/12/modernizing-retail-business.html",
    color: "brand",
  },
];

export function CaseStudies() {
  const s = useStyles();
  return (
    <section className={s.section} id="case-studies">
      <div className={s.inner}>
        <div className={s.head}>
          <span className={s.eyebrow}>Proven results</span>
          <h2 className={s.title}>
            What clients achieve with MAQ Software
          </h2>
          <p className={s.sub}>
            Outcomes from real engagements — agentic AI, multi-platform data
            engineering on Microsoft, Snowflake and Databricks, and migrations
            to Microsoft Fabric &amp; Power BI.
          </p>
        </div>
        <div className={s.grid}>
          {cases.map((c) => (
            <a
              key={c.title}
              className={s.card}
              href={c.href}
              target="_blank"
              rel="noreferrer"
            >
              <div className={s.title2}>{c.title}</div>
              <div className={s.teaser}>{c.teaser}</div>
              <span className={s.more}>
                Read full story <ArrowRight16Regular />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
