import {
  makeStyles,
  tokens,
  Badge,
  Link,
} from "@fluentui/react-components";
import { ArrowRight20Regular } from "@fluentui/react-icons";

const useStyles = makeStyles({
  section: { padding: "80px 32px", backgroundColor: "var(--maq-off-white)" },
  inner: { maxWidth: "1240px", margin: "0 auto" },
  head: { textAlign: "center", marginBottom: "48px" },
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
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
    "@media (max-width: 960px)": { gridTemplateColumns: "repeat(2, 1fr)" },
    "@media (max-width: 640px)": { gridTemplateColumns: "1fr" },
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
    ":hover": {
      border: `1px solid var(--maq-blue)`,
      boxShadow: "var(--maq-shadow-sm)",
      transform: "translateY(-2px)",
    },
  },
  tag: { alignSelf: "flex-start", marginBottom: "16px" },
  num: {
    fontSize: "40px",
    fontWeight: 700,
    color: "var(--maq-blue)",
    lineHeight: 1,
    marginBottom: "12px",
    letterSpacing: "-0.02em",
  },
  title2: {
    fontSize: "15px",
    fontWeight: 600,
    color: "var(--maq-navy)",
    marginBottom: "8px",
    lineHeight: 1.4,
  },
  teaser: {
    fontSize: "13px",
    color: "var(--maq-text-muted)",
    lineHeight: 1.55,
    flex: 1,
    marginBottom: "16px",
  },
  more: {
    display: "inline-flex",
    alignItems: "center",
    gap: "4px",
    fontSize: "13px",
    color: "var(--maq-blue)",
    fontWeight: 500,
  },
});

interface Case {
  industry: string;
  metric: string;
  title: string;
  teaser: string;
  color: "brand" | "success" | "warning" | "danger" | "informative";
}

const cases: Case[] = [
  {
    industry: "Retail",
    metric: "8×",
    title: "Faster report refresh for a top-3 US retailer",
    teaser:
      "200+ legacy SSRS reports migrated to Microsoft Fabric in 8 weeks. Refresh time dropped from 3.2s to 0.4s, unifying 12 regional BUs on OneLake.",
    color: "brand",
  },
  {
    industry: "Financial services",
    metric: "60%",
    title: "Less contract review time at a Fortune 100 insurer",
    teaser:
      "Azure OpenAI agent reviews contracts clause-by-clause with a full audit trail — cutting cycle time from weeks to days.",
    color: "informative",
  },
  {
    industry: "Technology",
    metric: "$3.4M",
    title: "Annual savings via Azure-native migration",
    teaser:
      "On-prem analytics workloads moved to a Medallion architecture with zero production downtime — and 4× faster queries.",
    color: "success",
  },
  {
    industry: "Financial services — Fintech",
    metric: "Millions",
    title: "Enhanced fintech analytics for better loan options",
    teaser:
      "Real-time lending analytics platform helping millions of borrowers find the right loan, faster.",
    color: "warning",
  },
  {
    industry: "Retail — Grocery",
    metric: "Real-time",
    title: "Real-time reporting for an organic supermarket chain",
    teaser:
      "Replaced overnight batch jobs with streaming pipelines, giving store managers live KPIs every minute.",
    color: "danger",
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
            Outcomes from real engagements — across retail, financial services,
            healthcare, and technology.
          </p>
        </div>
        <div className={s.grid}>
          {cases.map((c) => (
            <article key={c.title} className={s.card}>
              <Badge
                appearance="tint"
                color={c.color}
                size="medium"
                className={s.tag}
              >
                {c.industry}
              </Badge>
              <div className={s.num}>{c.metric}</div>
              <div className={s.title2}>{c.title}</div>
              <div className={s.teaser}>{c.teaser}</div>
              <Link className={s.more} appearance="subtle">
                Read full story <ArrowRight20Regular fontSize={14} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
