import { useState } from "react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { makeStyles, tokens } from "@fluentui/react-components";
import {
  ArrowRight16Regular,
  Layer24Regular,
  ArrowSwap24Regular,
  DataPie24Regular,
  ShieldCheckmark24Regular,
  Database24Regular,
  Cloud24Regular,
} from "@fluentui/react-icons";
import { useContactAction } from "../../lib/contact";
import { SecondaryButton } from "../buttons";

const useStyles = makeStyles({
  section: { padding: "48px 32px", backgroundColor: "#fff" },
  inner: { maxWidth: "var(--maq-container-wide)", margin: "0 auto" },
  head: { textAlign: "center", marginBottom: "20px" },
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
  sub: { fontSize: "14px", color: "var(--maq-gray-600)", margin: "0 auto", maxWidth: "780px", textAlign: "center" },

  panel: {
    marginTop: "20px",
    background: "#fff",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "14px",
    padding: "28px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "40px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
    "@media (max-width: 960px)": { gridTemplateColumns: "1fr" },
  },

  iconBox: {
    width: "48px",
    height: "48px",
    borderRadius: "10px",
    background: "var(--maq-off-white)",
    color: "var(--maq-red)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "18px",
  },
  detailName: {
    fontSize: "22px",
    fontWeight: 700,
    color: "var(--maq-black)",
    marginBottom: "10px",
  },
  detailDesc: {
    fontSize: "14px",
    color: "var(--maq-gray-600)",
    lineHeight: 1.65,
    marginBottom: "16px",
  },
  tagRow: { display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" },
  tag: {
    fontSize: "11px",
    fontWeight: 600,
    color: "var(--maq-red)",
    background: "var(--maq-red-pale)",
    padding: "4px 8px",
    borderRadius: "4px",
    letterSpacing: "0.02em",
  },
  knowMore: {
    border: `1px solid var(--maq-red)`,
    color: "var(--maq-red)",
    background: "transparent",
    ":hover": { background: "var(--maq-red-pale)", color: "var(--maq-red)" },
  },

  rail: { display: "flex", flexDirection: "column", gap: "10px" },
  railBtn: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    width: "100%",
    padding: "14px 16px",
    background: "#fff",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderLeftWidth: "1px",
    borderRadius: "8px",
    cursor: "pointer",
    textAlign: "left",
    transition: "all 0.15s",
    ":hover": { border: "1px solid var(--maq-card-hover-border)", boxShadow: "var(--maq-shadow-lift)", transform: "translateY(-2px)" },
  },
  railBtnActive: {
    border: "1px solid var(--maq-card-hover-border)",
    borderLeftWidth: "3px",
    boxShadow: "var(--maq-shadow-sm)",
  },
  railIcon: {
    width: "36px",
    height: "36px",
    borderRadius: "8px",
    background: "var(--maq-off-white)",
    color: "var(--maq-red)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  railText: { display: "flex", flexDirection: "column", gap: "2px" },
  railName: { fontSize: "14px", fontWeight: 700, color: "var(--maq-black)" },
  railTagline: { fontSize: "12px", color: "var(--maq-gray-600)" },

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

interface Capability {
  name: string;
  tagline: string;
  description: string;
  icon?: ReactNode;
  tags: string[];
}

const capabilities: Capability[] = [
  {
    name: "Microsoft Fabric",
    tagline: "Unified analytics for enterprise AI",
    icon: <Layer24Regular />,
    description:
      "Build unified analytics platforms using Microsoft Fabric to integrate data engineering, warehousing, real-time analytics, and business intelligence in a single AI-ready environment.",
    tags: ["Microsoft Fabric", "Analytics", "Enterprise AI"],
  },
  {
    name: "Databricks",
    tagline: "Scalable data engineering and AI",
    icon: <Database24Regular />,
    description:
      "Develop scalable data engineering and AI solutions using Databricks for advanced analytics, machine learning, collaborative notebooks, and enterprise data processing.",
    tags: ["Databricks", "Data Engineering", "AI"],
  },
  {
    name: "Snowflake AI Data Cloud",
    tagline: "Cloud-native data sharing and analytics",
    icon: <Cloud24Regular />,
    description:
      "Modernize enterprise data ecosystems with Snowflake, enabling secure data sharing, scalable analytics, AI workloads, and cross-cloud collaboration.",
    tags: ["Snowflake", "Data Cloud", "Cross-cloud"],
  },
  {
    name: "Azure Data Factory",
    tagline: "Automated enterprise data integration",
    icon: <ArrowSwap24Regular />,
    description:
      "Design and automate reliable data integration pipelines that ingest, transform, and orchestrate enterprise data across hybrid and cloud environments.",
    tags: ["Azure Data Factory", "Pipelines", "Integration"],
  },
  {
    name: "Lakehouse & Data Warehouse Modernization",
    tagline: "Modern data architectures for AI",
    icon: <DataPie24Regular />,
    description:
      "Modernize legacy data platforms by implementing scalable lakehouse and warehouse architectures optimized for analytics, governance, and AI.",
    tags: ["Lakehouse", "Data Warehouse", "Modernization"],
  },
  {
    name: "Master Data Management (MDM)",
    tagline: "Trusted enterprise data foundation",
    icon: <ShieldCheckmark24Regular />,
    description:
      "Establish trusted enterprise data by centralizing, governing, and maintaining consistent master records across business systems.",
    tags: ["MDM", "Governance", "Master Data"],
  },
];

export function ServiceCapabilitiesData() {
  const s = useStyles();
  const handleContactClick = useContactAction();
  const [active, setActive] = useState(0);
  const sel = capabilities[active];
  return (
    <section className={s.section} id="data-analytics-capabilities">
      <div className={s.inner}>
        <div className={s.head}>
          {/* <span className={s.eyebrow}>Our expertise</span> */}
          <h2 className={s.title}>Our data &amp; AI platform capabilities</h2>
          {/* <p className={s.sub}>
            Capabilities that turn data into reliable, scalable analytics and real-time decisioning.
          </p> */}
        </div>
        <div className={s.panel}>
          <div>
            <div className={s.iconBox}>{sel.icon}</div>
            <div className={s.detailName}>{sel.name}</div>
            <p className={s.detailDesc}>{sel.description}</p>
            {/* <SecondaryButton
              size="large"
              className="maq-secondary-btn maq-equal-cta"
              onClick={() =>
                handleContactClick(sel.name + " - Data & AI Platforms")
              }
            >
              Know more
            </SecondaryButton> */}
          </div>
          <div className={s.rail}>
            {capabilities.map((c, i) => (
              <button
                key={c.name}
                type="button"
                aria-current={i === active}
                onClick={() => setActive(i)}
                className={`${s.railBtn} ${i === active ? s.railBtnActive : ""}`}
              >
                <span className={s.railIcon}>{c.icon}</span>
                <span className={s.railText}>
                  <span className={s.railName}>{c.name}</span>
                  <span className={s.railTagline}>{c.tagline}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
        <Link
          className={s.footerLink}
          to="/insights/case-studies?filter=Data%20%26%20AI%20Platforms#insights-content"
        >
          See data &amp; analytics case studies <ArrowRight16Regular />
        </Link>
      </div>
    </section>
  );
}
