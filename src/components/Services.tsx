import { makeStyles, tokens } from "@fluentui/react-components";
import {
  Bot24Regular,
  DataPie24Regular,
  ChartMultiple24Regular,
  AppFolder24Regular,
  Cloud24Regular,
  ShieldCheckmark24Regular,
  PeopleTeam24Regular,
} from "@fluentui/react-icons";
import type { FC, ReactNode } from "react";
import {useNavigate} from "react-router-dom";

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
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "16px",
    "@media (max-width: 1120px)": { gridTemplateColumns: "repeat(2, minmax(0, 1fr))" },
    "@media (max-width: 700px)": { gridTemplateColumns: "1fr" },
  },
  card: {
    backgroundColor: "#fff",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "12px",
    padding: "24px",
    transition: "all 0.2s ease",
    cursor: "pointer",
    ":hover": {
      border: `1px solid var(--maq-blue)`,
      boxShadow: "var(--maq-shadow-sm)",
      transform: "translateY(-2px)",
    },
  },
  titleRow: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "12px",
  },
  iconBox: {
    width: "44px",
    height: "44px",
    borderRadius: "10px",
    backgroundColor: "var(--maq-blue-pale)",
    color: "var(--maq-blue)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  name: { fontSize: "20px", fontWeight: 700, color: "var(--maq-navy)", lineHeight: 1.2 },
  heading: {
    fontSize: "12px",
    color: "var(--maq-blue)",
    fontWeight: 500,
    marginBottom: "10px",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    lineHeight: 1.4,
  },
  tagline: {
    fontSize: "13.5px",
    color: "var(--maq-text-700)",
    lineHeight: 1.6,
    marginBottom: "12px",
  },
  desc: { fontSize: "13.5px", color: "var(--maq-text-700)", lineHeight: 1.6 },
  bulletList: {
    margin: "0",
    paddingLeft: "18px",
    display: "grid",
    gap: "6px",
  },
  bullet: {
    fontSize: "13.5px",
    color: "var(--maq-text-700)",
    lineHeight: 1.5,
  },
});

interface Svc {
  icon: ReactNode;
  name: string;
  heading?: string;
  tagline?: string;
  bullets?: string[];
  desc?: string;
  path: string;
}

const services: Svc[] = [
  {
    icon: <DataPie24Regular />,
    name: "Data & AI Platforms",
    heading: "Modern Data Foundations for Enterprise AI",
    tagline: "Unify Data. Accelerate AI. Drive Business Value.",
    bullets: [
      "Microsoft Fabric",
      "Azure Databricks",
      "Snowflake AI Data Cloud",
      "Azure Data Factory",
      "Lakehouse & Data Warehouse Modernization",
      "Master Data Management (MDM)",
    ],
    path: "/services/data-and-analytics",
  },
  {
    icon: <Bot24Regular />,
    name: "AI Solutions & Agents",
    heading: "From Copilots to Autonomous Agents",
    tagline: "Automate Decisions. Enhance Productivity. Accelerate Outcomes.",
    bullets: [
      "Azure AI Foundry",
      "Azure OpenAI Service",
      "Microsoft Copilot Studio",
      "Agentic AI & Multi-Agent Systems",
      "Retrieval-Augmented Generation (RAG)",
      "AI Governance & Responsible AI",
    ],
    path: "/services/agentic-ai",
  },
  {
    icon: <ChartMultiple24Regular />,
    name: "Insights & Analytics",
    heading: "Transform Data into Actionable Intelligence",
    tagline: "Discover Trends. Drive Decisions. Accelerate Growth.",
    bullets: [
      "Power BI",
      "Microsoft Fabric Real-Time Intelligence",
      "Databricks SQL",
      "Executive Dashboards & KPI Reporting",
      "Self-Service Analytics",
      "Predictive & Prescriptive Analytics",
    ],
    path: "/services/reporting-bi",
  },
  {
    icon: <AppFolder24Regular />,
    name: "Business Applications & Automation",
    heading: "Intelligent Applications for Modern Business",
    tagline: "Connect Workflows. Increase Productivity. Enable Growth.",
    bullets: [
      "Dynamics 365",
      "Microsoft Power Platform",
      "Power Apps",
      "Power Automate",
      "Customer 360",
      "Workflow Automation & Process Optimization",
    ],
    path: "/services/business-apps",
  },
  {
    icon: <Cloud24Regular />,
    name: "Cloud Modernization",
    heading: "Modernize Faster. Innovate Without Limits.",
    tagline: "Migrate Securely. Optimize Costs. Scale Confidently.",
    bullets: [
      "Microsoft Azure",
      "Azure Kubernetes Service (AKS)",
      "Cloud-Native Application Development",
      "Application & Data Platform Migration",
      "Infrastructure Modernization",
      "FinOps & Cloud Cost Optimization",
    ],
    path: "/services/cloud",
  },
  {
    icon: <ShieldCheckmark24Regular />,
    name: "Security & Governance",
    heading: "Govern Data. Secure AI. Manage Risk.",
    tagline: "Protect Assets. Ensure Compliance. Enable Trust.",
    bullets: [
      "Microsoft Purview",
      "Microsoft Defender",
      "Microsoft Entra",
      "Unity Catalog (Databricks)",
      "Data Governance & Compliance",
      "Identity, Access & AI Governance",
    ],
    path: "/services/security-compliance",
  },
  /* {
    icon: <PeopleTeam24Regular />,
    name: "Workplace Transformation & Productivity",
    heading: "Empower People. Modernize Work.",
    tagline: "Drive Adoption. Boost Productivity. Sustain Change.",
    bullets: [
      "Microsoft 365",
      "Microsoft Teams",
      "SharePoint",
      "Microsoft Copilot",
      "Change Management & Adoption",
      "Employee Experience & Collaboration",
    ],
    path: "/services/workplace-transformation",
  }, */ 
];

export const Services: FC = () => {
  const s = useStyles();
  const navigate = useNavigate();
  return (
    <section className={s.section} id="services">
      <div className={s.inner}>
        <div className={s.head}>
          <span className={s.eyebrow}>What we do</span>
          <h2 className={s.title}>
            Capabilities That Accelerate Growth.
          </h2>
        </div>
        <div className={s.grid}>
          {services.map((svc) => (
            <div key={svc.name} className={s.card} onClick={() => navigate(svc.path)}>
              <div className={s.titleRow}>
                <div className={s.iconBox}>{svc.icon}</div>
                <div className={s.name}>{svc.name}</div>
              </div>
              {svc.heading ? <div className={s.heading}>{svc.heading}</div> : null}
              {svc.tagline ? <div className={s.tagline}>{svc.tagline}</div> : null}
              {svc.bullets && svc.bullets.length > 0 ? (
                <ul className={s.bulletList}>
                  {svc.bullets.map((item) => (
                    <li key={item} className={s.bullet}>{item}</li>
                  ))}
                </ul>
              ) : svc.desc ? (
                <div className={s.desc}>{svc.desc}</div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
