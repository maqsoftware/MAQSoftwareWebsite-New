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
} from "@fluentui/react-icons";
// import { TrustBanner } from "../components/TrustBanner";

import { IndustryHero } from "../components/industry/IndustryHero";
import { ImpactStats } from "../components/industry/ImpactStats";
import { SolutionShowcase } from "../components/industry/SolutionShowcase";
import { IndustryCaseStudies } from "../components/industry/IndustryCaseStudies";
import { MarketplaceOffers } from "../components/industry/MarketplaceOffers";
import { CTA } from "../components/CTA";

// --- Financial services hero visual ---
const useVisualStyles = makeStyles({
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "12px",
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
    transition: "all 0.2s",
    ":hover": {
      border: "1px solid var(--maq-red)",
      boxShadow: "0 4px 12px rgba(186,20,26,0.08)",
    },
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
    fontSize: "9px",
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
    <div className={v.grid}>
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
    name: "Invoice Processing Agent",
    tagline: "Close the accounts-payable cycle without manual keying",
    icon: <DocumentBulletList24Regular />,
    description:
      "Manual invoice entry slows finance operations, introduces errors, and weakens audit readiness. MAQ Software builds an agent that extracts key fields from invoice PDFs, validates them against your vendor master data, and posts results with a complete audit trail on Azure AI Document Intelligence and Microsoft Fabric. Your AP team clears clean invoices in seconds and reviews only true exceptions, cutting processing time, duplicate payments, and overpayment leakage.",
  },
  {
    name: "Close Acceleration Agent",
    tagline: "Shorten month-end close with automated reconciliation",
    icon: <Money24Regular />,
    description:
      "Month-end close depends on repetitive, manual reconciliation across disconnected systems. MAQ Software builds an agent that compares ledgers, identifies mismatches, and generates reconciliation summaries with full lineage—on Microsoft Fabric with OneLake and Microsoft Purview, layered over Databricks Delta tables for scale. Your controllers close faster with less manual effort and hand auditors repeatable, traceable reconciliation every period.",
  },
  {
    name: "Loan Underwriting Agent",
    tagline: "Faster, defensible credit decisions without adding underwriting headcount",
    icon: <Chat24Regular />,
    description:
      "Loan decisions that take days slow your lending business and frustrate applicants. MAQ Software builds an agent that ingests application data, bureau signals, and historical loan performance to assess credit risk and pre-qualify applicants before they reach a human underwriter—on Databricks with Spark-based feature pipelines and Azure ML, with explainable scorecards your compliance team can sign off on. Your lending team approves more good applicants faster, documents every decision for audit, and manages a stronger portfolio without scaling headcount.",
  },
  {
    name: "Policy & Compliance Agent",
    tagline: "Make policy and regulatory checks consistent and audit-ready",
    icon: <ShieldCheckmark24Regular />,
    description:
      "Policy and compliance checks are manual, inconsistent across business units, and hard to evidence under examination. MAQ Software builds an agent that validates claims and submissions against your policy rules, flags missing evidence, and standardizes the check—on Microsoft Fabric with Purview governance and Azure OpenAI reasoning. Your risk and compliance leaders reduce violations, improve audit outcomes, and extend the same governed approach to regulatory reporting across the enterprise.",
  },
  {
    name: "Fraud & Anomaly Detection Agent",
    tagline: "Catch irregular spend and suspicious transactions in real time",
    icon: <Search24Regular />,
    description:
      "Fraud and irregular spend are detected too late, and rules-based systems bury analysts in false positives. MAQ Software builds an agent that monitors expense and transaction data, flags anomalies with confidence scoring, and routes only high-confidence alerts for review—using anomaly and graph models on Snowflake and Azure ML, extensible to card, wire, and ACH monitoring for AML. Your financial-crime and finance teams cut false positives, reduce chargeback and leakage exposure, and focus investigation effort on genuine threats.",
  },
];

const fsCases = [
  {
    tag: "Finance · Agentic AI",
    title: "Transforming finance with agentic AI solutions",
    teaser:
      "MAQ's own finance agentic-AI post covering invoice processing, FP&A, expense anomaly detection, close automation, and compliance.",
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
    desc: "Full catalog of MAQ's Microsoft-listed marketplace offers, including Fabric assessments and AI workshops tagged for Financial Services.",
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
      {/* <Testimonials quotes={fsTestimonials} /> */}
      <CTA />
    </>
  );
}
