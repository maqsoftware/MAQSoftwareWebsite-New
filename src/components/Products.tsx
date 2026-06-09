import { makeStyles, tokens } from "@fluentui/react-components";
import {
  Bot24Regular,
  Cloud24Regular,
  AppFolder24Regular,
  ChartMultiple24Regular,
  DataPie24Regular,
  ShieldCheckmark24Regular,
} from "@fluentui/react-icons";
import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  section: { padding: "32px 32px", backgroundColor: "var(--maq-off-white)" },
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
    borderRadius: "14px",
    padding: "28px",
    display: "flex",
    flexDirection: "column",
    transition: "all 0.2s",
    ":hover": {
      border: `1px solid var(--maq-blue)`,
      transform: "translateY(-3px)",
      boxShadow: "var(--maq-shadow-sm)",
    },
  },
  titleRow: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "12px",
  },
  logo: {
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
  name: {
    fontSize: "18px",
    fontWeight: 700,
    color: "var(--maq-navy)",
    lineHeight: 1.2,
  },
  tagline: {
    fontSize: "12px",
    color: "var(--maq-blue)",
    fontWeight: 500,
    marginBottom: "12px",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  },
  desc: {
    fontSize: "13.5px",
    color: "var(--maq-text-700)",
    lineHeight: 1.6,
    marginBottom: "20px",
  },
  footer: {
    marginTop: "auto",
  },
  more: {
    display: "inline-flex",
    alignItems: "center",
    gap: "4px",
    fontSize: "13px",
    color: "var(--maq-red)",
    fontWeight: 600,
  },
});

interface Product {
  icon: ReactNode;
  name: string;
  slug: string;
  tagline: string;
  desc: string;
  tags: string[];
}

const products: Product[] = [
  {
    icon: <Bot24Regular />,
    name: "Fabric Admin Agent",
    slug: "fabric-admin-agent",
    tagline: "Fabric Workload",
    desc: "AI-powered capacity management for Microsoft Fabric admins. Detects anomalies and spikes in real time, forecasts demand, and recommends actions to reduce throttling, eliminate waste, and optimize cost.",
    tags: ["Fabric Workload"],
  },
  {
    icon: <Cloud24Regular />,
    name: "MigrateFAST",
    slug: "migratefast",
    tagline: "Migration accelerator",
    desc: "AI-powered migration of legacy ETL (Alteryx, Informatica) and BI workloads (Tableau, SAP BO, SAP Crystal, Qlik, Cognos) to Microsoft Fabric and Power BI — up to 70–80% faster.",
    tags: ["Fabric", "Power BI", "AI Powered"],
  },
  {
    icon: <AppFolder24Regular />,
    name: "EmbedFAST",
    slug: "embedfast",
    tagline: "Power BI embedding",
    desc: "Seamlessly embed Power BI into your applications with role-based access, unlimited tenant/workspace onboarding, and tailored features — without heavy integration or licensing overhead.",
    tags: ["Power BI", "SaaS"],
  },
  {
    icon: <ChartMultiple24Regular />,
    name: "AI-DataLens",
    slug: "ai-datalens",
    tagline: "Conversational analytics",
    desc: "Interact with enterprise datasets in natural language. No SQL or DAX — ask questions and get instant answers, with row-level security and audit preserved.",
    tags: ["Gen AI", "Power BI", "Conversational AI"],
  },
  {
    icon: <DataPie24Regular />,
    name: "LoadFAST",
    slug: "loadfast",
    tagline: "Power BI load testing",
    desc: "Web-based load-testing for Power BI on Microsoft Fabric — simulates real-time user traffic to right-size capacity, prevent slowdowns, and cut over-provisioning.",
    tags: ["Power BI", "Performance"],
  },
  {
    icon: <ShieldCheckmark24Regular />,
    name: "CertyFAST",
    slug: "certyfast",
    tagline: "Power BI quality control",
    desc: "Streamlining Power BI model development with automated error detection, DAX measure formatting, and simplified documentation. Ensure top-quality reports and adherence to best practices.",
    tags: ["Power BI", "Quality", "Governance"],
  },
]; 

export function Products() {
  const s = useStyles();
  const navigate = useNavigate();
  return (
    <section className={s.section} id="products">
      <div className={s.inner}>
        <div className={s.head}>
          <span className={s.eyebrow}>Our products</span>
          <h2 className={s.title}>
            Accelerators that compress months into weeks
          </h2>
          <p className={s.sub}>
            AppSource-listed products built from real customer engagements.
          </p>
        </div>
        <div className={s.grid}>
          {products.map((p) => (
            <article
              key={p.name}
              className={s.card}
              onClick={() => navigate(`/products/${p.slug}`)}
              style={{ cursor: "pointer" }}
            >
              <div className={s.titleRow}>
                <div className={s.logo}>{p.icon}</div>
                <div className={s.name}>{p.name}</div>
              </div>
              <div className={s.tagline}>{p.tagline}</div>
              <div className={s.desc}>{p.desc}</div>
              <div className={s.footer}>
                <span className={s.more}>
                  Learn more
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
