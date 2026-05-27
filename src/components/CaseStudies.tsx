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
    textDecoration: "none",
    color: "inherit",
    ":hover": {
      border: `1px solid var(--maq-blue)`,
      boxShadow: "var(--maq-shadow-sm)",
      transform: "translateY(-2px)",
    },
  },
  tag: { alignSelf: "flex-start", marginBottom: "16px" },
  num: {
    fontSize: "32px",
    fontWeight: 700,
    color: "var(--maq-blue)",
    lineHeight: 1,
    marginBottom: "12px",
    letterSpacing: "-0.02em",
  },
  title2: {
    fontSize: "16px",
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
  href: string;
  color: "brand" | "success" | "warning" | "danger" | "informative";
}

const cases: Case[] = [
  {
    industry: "Retail",
    metric: "2026",
    title: "Reshaping retail with agentic AI solutions",
    teaser:
      "Agentic AI deployed across pricing, merchandising, and store operations — unlocking faster decisions and resilient supply chains for a global retailer.",
    href: "https://blog.maqsoftware.com/2026/02/reshaping-retail-with-agentic-ai.html",
    color: "danger",
  },
  {
    industry: "Technology",
    metric: "2026",
    title: "Accelerating software development with agentic AI solutions",
    teaser:
      "Agentic AI woven through the SDLC to accelerate coding, review, and release — lifting developer throughput across an ISV's engineering org.",
    href: "https://blog.maqsoftware.com/2026/02/accelerating-software-development-with.html",
    color: "informative",
  },
  {
    industry: "Reporting & BI",
    metric: "2026",
    title: "Delivering accurate business intelligence insights with a Fabric data agent",
    teaser:
      "A Microsoft Fabric data agent answers business questions with citation-backed accuracy, replacing brittle hand-built dashboards.",
    href: "https://blog.maqsoftware.com/2026/01/delivering-accurate-business.html",
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
            Outcomes from real engagements — across retail, technology, and
            reporting &amp; BI.
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
