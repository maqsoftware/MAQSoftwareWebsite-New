import { makeStyles } from "@fluentui/react-components";
import {
  DocumentBulletList24Regular,
  Money24Regular,
  Chat24Regular,
  ShieldCheckmark24Regular,
  Search24Regular,
  Brain24Regular,
  Database24Regular,
  LockClosed24Regular,
  ArrowTrendingLines24Regular,
  BuildingBank24Regular,
  ReceiptMoney24Regular,
} from "@fluentui/react-icons";
// import { TrustBanner } from "../components/TrustBanner";

import { IndustryHero } from "../components/industry/IndustryHero";
import { ImpactStats } from "../components/industry/ImpactStats";
import { SolutionShowcase } from "../components/industry/SolutionShowcase";
import { IndustryCaseStudies } from "../components/industry/IndustryCaseStudies";
import { MarketplaceOffers } from "../components/industry/MarketplaceOffers";

// --- Financial services hero visual ---
const useVisualStyles = makeStyles({
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "12px",
    pointerEvents: "none",
    userSelect: "none",
  },
  card: {
    background: "#fff",
    border: "1px solid var(--maq-border)",
    borderRadius: "12px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: "10px",
  },
  iconWrap: {
    width: "44px",
    height: "44px",
    borderRadius: "10px",
    background: "var(--maq-red-pale)",
    color: "var(--maq-red)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: "11px",
    fontWeight: 600,
    color: "var(--maq-gray-600)",
    lineHeight: 1.35,
    letterSpacing: "0.02em",
  },
  connector: {
    gridColumn: "1 / -1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    padding: "4px 0",
  },
  line: {
    flex: 1,
    height: "1px",
    background: "linear-gradient(90deg, transparent, var(--maq-red), transparent)",
    opacity: 0.3,
  },
  connectorLabel: {
    fontSize: "12px",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    color: "var(--maq-red)",
    whiteSpace: "nowrap",
  },
});

function FinancialHeroVisual() {
  const v = useVisualStyles();
  return (
    <div className={v.grid} aria-hidden="true">
      <div className={v.card}>
        <div className={v.iconWrap}><Brain24Regular /></div>
        <span className={v.label}>AI Agents</span>
      </div>
      <div className={v.card}>
        <div className={v.iconWrap}><Database24Regular /></div>
        <span className={v.label}>Governed Data</span>
      </div>
      <div className={v.connector}>
        <div className={v.line} />
        <span className={v.connectorLabel}>Microsoft Fabric · Snowflake · Databricks</span>
        <div className={v.line} />
      </div>
      <div className={v.card}>
        <div className={v.iconWrap}><LockClosed24Regular /></div>
        <span className={v.label}>Compliance & Audit</span>
      </div>
      <div className={v.card}>
        <div className={v.iconWrap}><ArrowTrendingLines24Regular /></div>
        <span className={v.label}>Faster Decisions</span>
      </div>
    </div>
  );
}

// --- Financial services content data ---
const fsStats = [
  {
    chip: "Finance Operations",
    title: "Invoice Processing Agent",
    label: "Invoices extracted, validated, and posted with a full audit trail for finance operations teams on Azure AI Document Intelligence and Microsoft Fabric",
    sourceLabel: "Case study",
    sourceHref: "https://blog.maqsoftware.com/2026/02/transforming-finance-with-agentic-ai.html",
  },
  {
    chip: "Reporting & BI",
    title: "Microsoft Fabric Modernization",
    label: "Faster risk and finance reporting for finance controllers — replacing fragmented legacy BI with a unified data platform",
    sourceLabel: "Case study",
    sourceHref: "https://blog.maqsoftware.com/2026/01/delivering-accurate-business.html",
  },
  {
    chip: "Fraud Detection",
    title: "Fraud & Anomaly Detection Agent",
    label: "Fewer false-positive alerts reaching analysts — routing only high-confidence exceptions for review on Snowflake and Azure",
    sourceLabel: "Case study",
    sourceHref: "https://blog.maqsoftware.com/2026/02/transforming-finance-with-agentic-ai.html",
  },
  {
    chip: "Month-End Close",
    title: "Close Acceleration Agent",
    label: "Shorter month-end close for finance controllers — automating ledger reconciliation across systems on Microsoft Fabric and Databricks",
    sourceLabel: "Case study",
    sourceHref: "https://blog.maqsoftware.com/2026/02/transforming-finance-with-agentic-ai.html",
  },
];

const fsAgents = [
  {
    name: "Loan Underwriting Agent",
    tagline: "Automated credit decisioning",
    icon: <BuildingBank24Regular />,
    description:
      "AI-powered loan underwriting platform built with Microsoft Agent Framework and Azure OpenAI. Uses a coordinated team of specialized underwriting agents to evaluate creditworthiness, verify income, assess collateral risk, enforce lending policies, calculate financial ratios, and generate final loan approval recommendations through an auditable multi-step workflow.",
  },
  {
    name: "POE Scanner",
    tagline: "Expense document automation",
    icon: <ReceiptMoney24Regular />,
    description:
      "AI-powered Proof of Expense (POE) document processor that automates receipt data extraction, validation, and categorization using a multi-agent Semantic Kernel pipeline. Accepts PDF uploads, file paths, or raw receipt text — running them through a configurable sequence of DocumentProcessor, FieldExtractor, DataValidator, and ResultFormatter agents backed by FAISS vector search for intelligent vendor recognition and expense categorization.",
  },
  {
    name: "Invoice PO Matching Agent",
    tagline: "Procurement validation",
    icon: <DocumentBulletList24Regular />,
    description:
      "AI-powered procurement validation solution that automatically matches supplier invoices against purchase orders to identify discrepancies, assess financial risk, and generate actionable recommendations. Built using a multi-agent workflow with Microsoft Agent Framework and Azure OpenAI, with a deterministic fallback engine for offline execution.",
  },
  {
    name: "Expense Trend Analyzer",
    tagline: "Spending analytics & insights",
    icon: <ArrowTrendingLines24Regular />,
    description:
      "AI-powered expense analytics platform built on Microsoft Agent Framework (MAF). Uses specialized agents for financial metrics computation, spending trend analysis, anomaly detection, category breakdowns, and recommendation generation. Combines statistical analysis with Azure OpenAI-powered insights through an interactive Streamlit dashboard.",
  },
];

const fsCases = [
  {
    tag: "Finance · Agentic AI",
    title: "Transforming finance with agentic AI solutions",
    teaser:
      "MAQ Software's own finance agentic-AI post covering invoice processing, FP&A, expense anomaly detection, close automation, and compliance.",
    href: "https://blog.maqsoftware.com/2026/02/transforming-finance-with-agentic-ai.html",
  },
  {
    tag: "Microsoft Fabric · AI Data Agent",
    title: "Delivering accurate business answers with a Microsoft Fabric data agent",
    teaser:
      "Fortune 500 conversational data agent directly applicable to finance reporting and Q&A, built on Microsoft Fabric.",
    href: "https://blog.maqsoftware.com/2026/01/delivering-accurate-business.html",
  },
  {
    tag: "Agentic AI · Cross-Industry",
    title: "Reshaping industries with agentic AI solutions",
    teaser:
      "Covers financial services among other functions including lead and knowledge agents powered by agentic AI.",
    href: "https://blog.maqsoftware.com/2025/08/reshaping-industries-with-agentic-ai.html",
  },
];

const fsOffers = [
  {
    pill: "Consulting services",
    title: "MAQ Software consulting services on Azure Marketplace",
    desc: "Full catalog of MAQ Software's Microsoft-listed marketplace offers, including Fabric assessments and AI workshops tagged for Financial Services.",
    href: "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services?page=1&search=maq%20software",
  },
  {
    pill: "Real-Time Intelligence",
    title: "Real-Time Intelligence in Microsoft Fabric: 1-Day Workshop",
    desc: "Hands-on Fabric workshop for streaming, fraud-alerting, and real-time dashboards—listed for Financial Services.",
    href: "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/maqsoftware.real_time_intelligence_using_microsoft_fabric",
  },
  {
    pill: "AI Analytics",
    title: "AI-DataLens",
    desc: "AI-powered conversational analytics that lets risk, finance, and compliance teams query enterprise data in natural language and get governed, source-cited answers.",
    href: "/products/ai-datalens",
  },
  {
    pill: "Migration",
    title: "MigrateFAST",
    desc: "AI-assisted migration of legacy banking and reporting platforms—including Snowflake, Teradata, and Synapse—to Microsoft Fabric, cutting migration cost and timeline.",
    href: "/products/migratefast",
  },
];

const fsTestimonials = [
  {
    body: "We engaged MAQ Software to build our fraud and anomaly detection on Microsoft Fabric and Snowflake. They delivered an agent that cut false positives sharply, and our analysts now spend their time on real threats instead of clearing noise.",
    cite: "Director of Financial Crime — Global Banking",
  },
  {
    body: "MAQ Software stood up our close-acceleration agent on Fabric and Databricks with reconciliation we can defend in audit. They shortened our month-end close without adding headcount.",
    cite: "Senior Director, Finance Transformation — Consumer Finance",
  },
];

export function IndustryFinancialServices() {
  return (
    <>
      <IndustryHero
        eyebrow="Financial Services"
        h1="Deliver Smarter, Safer Financial Services with AI"
        subhead="Massive datasets, tightening regulation, and rising fraud demand more than incremental fixes. Leading banks, insurers, and capital markets firms are deploying AI agents that underwrite credit, close the books, monitor transactions, and keep compliance audit-ready with all on a governed data foundation. At MAQ Software, we build and deploy those agents on Microsoft Fabric, Snowflake, and Databricks so your institution acts on decisions in hours, not days. As a Top 25 Global Microsoft Partner and Microsoft Fabric Featured Partner, we bring the partnerships, the platform expertise, and the production-grade delivery your finance transformation requires."
        mailSubject="Financial Services - MAQ Software"
        visual={<FinancialHeroVisual />}
      />

      <ImpactStats
        eyebrow="Proven outcomes"
        title="Real impact for financial services leaders"
        sub="Numbers from MAQ Software engagements with banks, insurers, and capital markets firms."
        stats={fsStats}
      />
      <SolutionShowcase
        sectionId="fs-solutions"
        eyebrow="Industry Solutions"
        title="Accelerate your financial operations with AI Agents"
        agents={fsAgents}
        industryLabel="Financial Services"
      />
      <IndustryCaseStudies
        eyebrow="Financial services case studies"
        title="How financial firms move faster with MAQ Software"
        cases={fsCases}
        seeAllLabel="See all financial services case studies"
        seeAllHref="/insights/case-studies"
      />
      <MarketplaceOffers
        sub="Accelerate financial outcomes with ready-to-deploy Microsoft Azure Marketplace offerings and MAQ Software products—spanning consulting services, real-time intelligence, AI analytics, and migration."
        offers={fsOffers}
      />
    </>
  );
}
