import { useState } from "react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { makeStyles, tokens } from "@fluentui/react-components";
import { useContactAction } from "../../lib/contact";
import {
  ChartMultiple24Regular,
  Pulse24Regular,
  Window24Regular,
  Gauge24Regular,
  DataPie24Regular,
  People24Regular,
  ArrowRight16Regular,
} from "@fluentui/react-icons";
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
    textAlign: "left",
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
  icon: ReactNode;
  tags: string[];
}

const capabilities: Capability[] = [
  {
    name: "Power BI",
    tagline: "Interactive business intelligence dashboards",
    icon: <ChartMultiple24Regular />,
    description:
      "Create interactive dashboards and business intelligence solutions that transform enterprise data into actionable insights and informed decisions.",
    tags: ["Power BI", "Dashboards", "Business Intelligence"],
  },
  {
    name: "Microsoft Fabric Real-Time Intelligence",
    tagline: "Real-time insights from streaming data",
    icon: <Pulse24Regular />,
    description:
      "Monitor streaming data and operational events in real time to enable faster business decisions and proactive responses.",
    tags: ["Microsoft Fabric", "Real-Time", "Streaming Analytics"],
  },
  {
    name: "Databricks SQL",
    tagline: "High-performance analytics with SQL",
    icon: <DataPie24Regular />,
    description:
      "Deliver high-performance SQL analytics for enterprise reporting, dashboards, and collaborative data exploration on large-scale datasets.",
    tags: ["Databricks SQL", "Enterprise Reporting", "Large-Scale Analytics"],
  },
  {
    name: "Executive Dashboards & KPI Reporting",
    tagline: "Executive visibility into business performance",
    icon: <Gauge24Regular />,
    description:
      "Design executive dashboards that provide clear visibility into business performance through meaningful KPIs and operational metrics.",
    tags: ["Executive Dashboards", "KPI Reporting", "Business Performance"],
  },
  {
    name: "Self-Service Analytics",
    tagline: "Analytics accessible to every business user",
    icon: <People24Regular />,
    description:
      "Empower business users with governed self-service analytics to explore data, build reports, and generate insights independently.",
    tags: ["Self-Service", "Governed Analytics", "Business Users"],
  },
  {
    name: "Predictive & Prescriptive Analytics",
    tagline: "Forecast outcomes. Optimize decisions.",
    icon: <Gauge24Regular />,
    description:
      "Apply machine learning and statistical models to forecast outcomes, optimize decisions, and recommend business actions.",
    tags: ["Predictive Analytics", "Prescriptive Analytics", "Optimization"],
  },
];

export function ReportingBICapabilities() {
  const s = useStyles();
  const handleContactClick = useContactAction();
  const [active, setActive] = useState(0);
  const sel = capabilities[active];
  return (
    <section className={s.section} id="bi-capabilities">
      <div className={s.inner}>
        <div className={s.head}>
          {/* <span className={s.eyebrow}>Our expertise</span> */}
          <h2 className={s.title}>Our insights &amp; analytics capabilities</h2>
          {/* <p className={s.sub}>
            Four capability pillars that turn raw data into governed, high-performance Power BI and
            Microsoft Fabric reporting.
          </p> */}
        </div>
        <div className={s.panel}>
          <div>
            <div className={s.iconBox}>{sel.icon}</div>
            <div className={s.detailName}>{sel.name}</div>
            <p className={s.detailDesc}>{sel.description}</p>
            {/* <SecondaryButton
              size="large"
              className="maq-equal-cta"
              onClick={() =>
                handleContactClick(sel.name + " - Insights & Analytics")
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
          to="/insights/case-studies?filter=Insights%20%26%20Analytics#insights-content"
        >
          See Insights &amp; Analytics case studies <ArrowRight16Regular />
        </Link>
      </div>
    </section>
  );
}
