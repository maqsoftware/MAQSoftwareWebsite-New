import { makeStyles, tokens, Button } from "@fluentui/react-components";
import { ArrowRight16Regular } from "@fluentui/react-icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  section: { padding: "48px 32px", backgroundColor: "var(--maq-off-white)" },
  inner: { maxWidth: "1240px", margin: "0 auto" },
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
    fontSize: "28px",
    fontWeight: 700,
    color: "var(--maq-black)",
    margin: 0,
    letterSpacing: "-0.01em",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
    gap: "16px",
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
    display: "inline-block",
    fontSize: "13px",
    fontWeight: 700,
    lineHeight: 1.4,
    color: "var(--maq-red)",
    textDecoration: "none",
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
  buttonGroup: {
    marginTop: "20px",
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
    "@media (max-width: 640px)": { flexDirection: "column" },
  },
});

interface Study {
  tag: string;
  title: string;
  teaser?: string;
  href: string;
}

const studies: Study[] = [
  {
    tag: "Microsoft Fabric · OneLake",
    title: "Unifying disconnected data systems using Microsoft Fabric and OneLake",
    teaser:
      "Siloed enterprise data unified on OneLake for a single governed surface powering analytics, reporting and AI.",
    href: "https://blog.maqsoftware.com/2026/01/unifying-disconnected-data-systems.html",
  },
  {
    tag: "Snowflake · Iceberg",
    title: "Optimizing data refresh by integrating Snowflake iceberg tables with Microsoft Fabric",
    teaser:
      "Snowflake Iceberg tables integrated with Microsoft Fabric to dramatically reduce data refresh latency and storage cost.",
    href: "https://blog.maqsoftware.com/2025/08/optimizing-data-refresh-by-integrating.html",
  },
  {
    tag: "Databricks",
    title: "Unlocking advanced analytics with Databricks",
    teaser:
      "Building an advanced analytics platform on Databricks to support ML, streaming, and large-scale data engineering workloads.",
    href: "https://blog.maqsoftware.com/2025/07/unlocking-advanced-analytics-with.html",
  },
];

export function ServiceCaseStudiesData({
  serviceFilter,
  allCasesLabel,
  serviceSpecificLabel,
}: {
  serviceFilter?: string;
  allCasesLabel?: string;
  serviceSpecificLabel?: string;
} = {}) {
  const s = useStyles();
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <div className={s.head}>
          <span className={s.eyebrow}>Related case studies</span>
          <h2 className={s.title}>How clients are putting data &amp; analytics to work</h2>
        </div>
        <div className={s.grid}>
          {studies.map((c) => (
            <a key={c.title} className={s.card} href={c.href} target="_blank" rel="noopener noreferrer">
              <h3 className={s.cardTitle}>{c.title}</h3>
              <p className={s.teaser}>{c.teaser ?? ""}</p>
              <span className={s.read}>Read full case study</span>
            </a>
          ))}
        </div>
        {serviceFilter && allCasesLabel && serviceSpecificLabel ? (
          <Link
          className={s.footerLink}
          to="/insights/case-studies#insights-content"
        >
          See all case studies <ArrowRight16Regular />
        </Link>
        ) : (
          <Link
            className={s.footerLink}
            to="/insights/case-studies#insights-content"
          >
            See all case studies <ArrowRight16Regular />
          </Link>
        )}
      </div>
    </section>
  );
}

