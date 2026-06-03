import { useState } from "react";
import type { ReactNode } from "react";
import { Button, makeStyles, tokens } from "@fluentui/react-components";
import { ArrowRight16Regular } from "@fluentui/react-icons";

const useStyles = makeStyles({
  section: { padding: "48px 32px", backgroundColor: "#fff" },
  inner: { maxWidth: "1240px", margin: "0 auto" },
  head: { marginBottom: "20px" },
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
    fontSize: "30px",
    fontWeight: 700,
    color: "var(--maq-black)",
    margin: "0 0 6px",
    letterSpacing: "-0.01em",
  },
  sub: { fontSize: "14px", color: "var(--maq-gray-600)", margin: 0, maxWidth: "780px" },

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
    ":hover": { border: `1px solid var(--maq-red)` },
  },
  railBtnActive: {
    border: `1px solid var(--maq-red)`,
    borderLeftWidth: "3px",
    boxShadow: "0 1px 4px rgba(186,20,26,0.10)",
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
    name: "Data & analytics strategy",
    tagline: "Craft a winning data strategy",
    description:
      "Develop a comprehensive data strategy that aligns with your business goals. Our experts help you identify key data sources, establish governance frameworks, and create a roadmap for data-driven success.",
    tags: ["Strategy", "Governance", "Roadmap"],
  },
  {
    name: "Lakehouse modernization on Fabric, Snowflake, and Databricks",
    tagline: "Medallion lakehouses on your platform of choice",
    description: "Modernize data estates with governed medallion lakehouses on Microsoft Fabric, Snowflake, or Databricks — unified storage, semantic models, and a single source of truth ready for Copilot and AI agents.",
    tags: ["Microsoft Fabric", "Snowflake", "Databricks", "Lakehouse"],
  },
  {
    name: "Real-time Intelligence using Microsoft Fabric",
    tagline: "Make decisions in the moment",
    description: "Build streaming and event-driven architectures on Fabric to deliver real-time insights and actions.",
    tags: ["Real-time", "Streaming", "Fabric"],
  },
  {
    name: "Data migration",
    tagline: "Lift & shift with intelligence",
    description: "Migrate legacy ETL and warehouses to modern cloud platforms with automated tooling and validation.",
    tags: ["Migration", "ETL", "Lift-and-shift"],
  },
  {
    name: "Platform optimization",
    tagline: "Cost and performance tuning",
    description: "Optimize platform costs, query performance, and operational reliability for large-scale analytics.",
    tags: ["Optimization", "Cost", "Performance"],
  },
];

export function ServiceCapabilitiesData() {
  const s = useStyles();
  const [active, setActive] = useState(0);
  const sel = capabilities[active];
  return (
    <section className={s.section} id="data-analytics-capabilities">
      <div className={s.inner}>
        <div className={s.head}>
          <span className={s.eyebrow}>Our expertise</span>
          <h2 className={s.title}>Our data & analytics capabilities</h2>
          <p className={s.sub}>
            Capabilities that turn data into reliable, scalable analytics and real-time decisioning.
          </p>
        </div>
        <div className={s.panel}>
          <div>
            <div className={s.iconBox}>{sel.icon}</div>
            <div className={s.detailName}>{sel.name}</div>
            <p className={s.detailDesc}>{sel.description}</p>
            <div className={s.tagRow}>
              {sel.tags.map((t) => (
                <span key={t} className={s.tag}>
                  {t}
                </span>
              ))}
            </div>
            <Button
              appearance="outline"
              className={s.knowMore}
              as="a"
              href={`mailto:customersuccess@maqsoftware.com?subject=${encodeURIComponent(
                sel.name + " - Data & Analytics"
              )}`}
            >
              Know more
            </Button>
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
        <a
          className={s.footerLink}
          href="/insights/case-studies?filter=Data%20%26%20analytics#insights-content"
          target="_blank"
          rel="noreferrer"
        >
          See data &amp; analytics case studies <ArrowRight16Regular />
        </a>
      </div>
    </section>
  );
}
