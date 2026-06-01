import { makeStyles } from "@fluentui/react-components";
import {
  DocumentBulletList24Regular,
  Money24Regular,
  Chat24Regular,
  ShieldCheckmark24Regular,
} from "@fluentui/react-icons";
import { IndustryHero } from "../components/industry/IndustryHero";
import { TrustBanner } from "../components/TrustBanner";
import { ImpactStats } from "../components/industry/ImpactStats";
import { SolutionShowcase } from "../components/industry/SolutionShowcase";
import { IndustryCaseStudies } from "../components/industry/IndustryCaseStudies";
// import { Testimonials } from "../components/industry/Testimonials";
import { MarketplaceOffers } from "../components/industry/MarketplaceOffers";
import { CTA } from "../components/CTA";

// --- Financial services hero visual ---
const useVisualStyles = makeStyles({
  tile: {
    background: "#fff",
    border: "1px solid var(--maq-border)",
    borderRadius: "10px",
    padding: "14px 16px",
  },
  tileTitle: {
    fontSize: "11px",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    color: "var(--maq-gray-500)",
    marginBottom: "10px",
    display: "block",
  },
  closeGrid: { display: "flex", flexDirection: "column", gap: "6px" },
  closeRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "8px",
  },
  closeLabel: { fontSize: "11px", color: "var(--maq-gray-600)", flex: 1 },
  badge: {
    fontSize: "10px",
    fontWeight: 700,
    padding: "2px 7px",
    borderRadius: "4px",
    letterSpacing: "0.04em",
  },
  badgeDone: { background: "#dcfce7", color: "#15803d" },
  badgeInReview: { background: "#fef9c3", color: "#92400e" },
  badgePending: { background: "var(--maq-gray-100)", color: "var(--maq-gray-500)" },
  barRow: { display: "flex", alignItems: "flex-end", gap: "5px", height: "40px" },
  bar: { flex: 1, background: "var(--maq-gray-200)", borderRadius: "3px 3px 0 0" },
  barRed: { background: "var(--maq-red)" },
  barLabel: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "4px",
  },
  barLabelText: { fontSize: "9px", color: "var(--maq-gray-500)", flex: 1, textAlign: "center" },
  riskRow: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" },
  riskLabel: { fontSize: "11px", width: "68px", color: "var(--maq-gray-500)" },
  riskTrack: { flex: 1, height: "6px", background: "var(--maq-gray-100)", borderRadius: "3px" },
  riskFill: { height: "100%", borderRadius: "3px" },
});

const closeSteps = [
  { label: "GL Reconciliation", status: "done" },
  { label: "AR / AP Close", status: "done" },
  { label: "Variance Analysis", status: "done" },
  { label: "Regulatory Report", status: "in-review" },
  { label: "CFO Sign-off", status: "pending" },
];

const claimsStages = [
  { label: "Intake", h: 65 },
  { label: "Validate", h: 80 },
  { label: "Review", h: 45 },
  { label: "Closed", h: 90 },
];

const riskBands = [
  { label: "Low risk", pct: "55%", color: "#22c55e" },
  { label: "Medium", pct: "30%", color: "#f59e0b" },
  { label: "High risk", pct: "15%", color: "var(--maq-red)" },
];

function FinancialHeroVisual() {
  const v = useVisualStyles();
  return (
    <>
      <div className={v.tile}>
        <span className={v.tileTitle}>Month-end close status</span>
        <div className={v.closeGrid}>
          {closeSteps.map(({ label, status }) => (
            <div key={label} className={v.closeRow}>
              <span className={v.closeLabel}>{label}</span>
              <span
                className={`${v.badge} ${
                  status === "done"
                    ? v.badgeDone
                    : status === "in-review"
                    ? v.badgeInReview
                    : v.badgePending
                }`}
              >
                {status === "done" ? "Done" : status === "in-review" ? "In review" : "Pending"}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className={v.tile}>
        <span className={v.tileTitle}>Claims processed today</span>
        <div className={v.barRow}>
          {claimsStages.map(({ label, h }, i) => (
            <div key={label} className={`${v.bar} ${i === 3 ? v.barRed : ""}`} style={{ height: `${h}%` }} />
          ))}
        </div>
        <div className={v.barLabel}>
          {claimsStages.map(({ label }) => (
            <span key={label} className={v.barLabelText}>{label}</span>
          ))}
        </div>
      </div>
      <div className={v.tile}>
        <span className={v.tileTitle}>Portfolio risk distribution</span>
        {riskBands.map(({ label, pct, color }) => (
          <div key={label} className={v.riskRow}>
            <span className={v.riskLabel}>{label}</span>
            <div className={v.riskTrack}>
              <div className={v.riskFill} style={{ width: pct, background: color }} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

// --- Financial services content data ---
const fsStats = [
  {
    metric: "Millions",
    label: "Borrowers matched to better loan options with real-time lending analytics",
    sourceLabel: "Fintech analytics case study",
    sourceHref: "https://blog.maqsoftware.com/2022/06/enhancing-fintech-analytics-to-provide.html",
  },
  {
    metric: "< 1 week",
    label: "Month-end close compressed from 18+ days with agentic AI finance automation",
    sourceLabel: "Finance agentic AI case study",
    sourceHref: "https://blog.maqsoftware.com/2026/02/transforming-finance-with-agentic-ai.html",
  },
  {
    metric: "Real-time",
    label: "Credit decisioning replacing overnight batch scoring for faster loan approvals",
    sourceLabel: "Fintech analytics case study",
    sourceHref: "https://blog.maqsoftware.com/2022/06/enhancing-fintech-analytics-to-provide.html",
  },
  {
    metric: "100%",
    label: "Audit traceability on reconciled transactions with Fabric-native lineage",
    sourceLabel: "Finance agentic AI case study",
    sourceHref: "https://blog.maqsoftware.com/2026/02/transforming-finance-with-agentic-ai.html",
  },
];

const fsAgents = [
  {
    name: "Finance Close Agent",
    tagline: "Compress month-end close from weeks to days",
    icon: <Money24Regular />,
    description:
      "Autonomous agent that reconciles GL entries, flags variances, and routes exceptions for human review — so your finance team closes the books in days, not weeks. Integrates with ERP systems over Microsoft Fabric and delivers audit-ready close packages with full transaction lineage.",
  },
  {
    name: "Claims Processing Agent",
    tagline: "Accelerate insurance claims from intake to resolution",
    icon: <DocumentBulletList24Regular />,
    description:
      "Extracts structured data from unstructured claim documents, validates against policy rules, and routes cases to the right handlers. Built on Azure AI Document Intelligence and Microsoft Fabric, it eliminates manual handoffs, enforces compliance controls, and cuts claims cycle time.",
  },
  {
    name: "Lending Intelligence Agent",
    tagline: "Real-time credit decisioning at scale",
    icon: <Chat24Regular />,
    description:
      "Replaces static overnight batch scoring with live signals on Databricks or Microsoft Fabric. Evaluates creditworthiness across multiple data sources at the point of application and surfaces personalized loan options for millions of borrowers — improving approval accuracy while reducing decisioning latency.",
  },
  {
    name: "Regulatory Reporting Agent",
    tagline: "Audit-ready submissions without manual assembly",
    icon: <ShieldCheckmark24Regular />,
    description:
      "Aggregates data across ledgers, risk systems, and custodian feeds into structured regulatory submissions (DFAST, CECL, and similar frameworks). Generates citation-backed outputs for examiner review and flags data quality issues before filing — reducing compliance risk and examiner back-and-forth.",
  },
];

const fsCases = [
  {
    tag: "Fintech",
    title: "Enhancing fintech analytics to provide millions of borrowers with better loan options",
    teaser:
      "Real-time lending analytics platform on Microsoft Fabric helping millions of borrowers match to the right loan product.",
    href: "https://blog.maqsoftware.com/2022/06/enhancing-fintech-analytics-to-provide.html",
  },
  {
    tag: "Finance operations",
    title: "Transforming finance with agentic AI solutions",
    teaser:
      "Agentic AI deployed across finance close, reconciliation, and FP&A for faster cycles and full audit traceability.",
    href: "https://blog.maqsoftware.com/2026/02/transforming-finance-with-agentic-ai.html",
  },
  {
    tag: "Data platform",
    title: "Unifying disconnected data systems using Microsoft Fabric and OneLake",
    teaser:
      "Siloed financial data sources unified on OneLake for a single governed surface powering reporting and risk analytics.",
    href: "https://blog.maqsoftware.com/2026/01/unifying-disconnected-data-systems.html",
  },
];

const fsOffers = [
  {
    pill: "Risk & compliance",
    title: "Risk & Compliance Analytics for Financial Services: 4-Week PoC",
    desc: "A 4-week proof of concept that unifies risk, compliance, and audit data on Microsoft Fabric to expose regulatory gaps and accelerate reporting cycles.",
    href: "#", // TODO: replace with Azure Marketplace listing URL
  },
  {
    pill: "FP&A",
    title: "Finance Close Automation for Financial Services: 2-Week Assessment",
    desc: "A 2-week assessment that evaluates your month-end close estate on Microsoft Fabric, identifying automation opportunities for faster, audit-ready financial close.",
    href: "#", // TODO: replace with Azure Marketplace listing URL
  },
  {
    pill: "Lending",
    title: "Lending Analytics & Credit Intelligence: 4-Week PoC",
    desc: "A 4-week proof of concept that benchmarks your credit scoring and lending analytics pipeline on Databricks or Fabric, surfacing opportunities to reduce decisioning latency and improve approval accuracy.",
    href: "#", // TODO: replace with Azure Marketplace listing URL
  },
  {
    pill: "Insurance",
    title: "Claims Processing Intelligence for Insurance: 2-Week Assessment",
    desc: "A 2-week assessment that maps your claims intake workflow and identifies AI automation opportunities to cut cycle time and enforce policy-rule compliance.",
    href: "#", // TODO: replace with Azure Marketplace listing URL
  },
];

const fsTestimonials = [
  {
    body: "MAQ Software compressed our month-end close from 18 days to under a week. The reconciliation agent flags exceptions automatically — our team focuses on judgement calls, not spreadsheet hunting.",
    cite: "VP, Finance Operations — Global asset manager",
  },
  {
    body: "We moved from overnight credit batch scoring to real-time lending signals in one quarter. Our borrowers get better-matched loan options at the point of decision.",
    cite: "Head of Data & Analytics — Regional bank",
  },
];

export function IndustryFinancialServices() {
  return (
    <>
      <IndustryHero
        eyebrow="Financial Services"
        h1="AI-Driven Intelligence for a Faster, More Compliant Financial Enterprise"
        subhead="Financial services organizations face mounting pressure to accelerate decisions, reduce compliance risk, and modernize aging data estates. At MAQ Software, we help banks, insurers, and fintech firms embed AI across the front and back office — from automated claims processing and real-time credit decisioning to autonomous FP&A and regulatory reporting. Built on Microsoft Fabric, Snowflake, and Databricks, our solutions turn complex financial data into a competitive edge."
        mailSubject="Financial Services - MAQ Software"
        scrollTargetId="fs-solutions"
        scrollLabel="Explore financial solutions"
        visual={<FinancialHeroVisual />}
      />
      <TrustBanner />
      <ImpactStats
        eyebrow="Proven outcomes"
        title="Real impact for financial services leaders"
        sub="Numbers from MAQ Software engagements with banks, insurers, and fintech firms."
        stats={fsStats}
      />
      <SolutionShowcase
        sectionId="fs-solutions"
        eyebrow="Agentic AI"
        title="Accelerate your financial operations with our Finance Agents"
        agents={fsAgents}
      />
      <IndustryCaseStudies
        eyebrow="Financial services case studies"
        title="How financial firms move faster with MAQ Software"
        cases={fsCases}
        seeAllLabel="See all financial services case studies"
        seeAllHref="/insights/case-studies"
      />
      <MarketplaceOffers
        sub="Accelerate financial outcomes with ready-to-deploy Microsoft Azure Marketplace offerings — spanning risk & compliance, FP&A automation, lending intelligence, and claims processing."
        offers={fsOffers}
      />
      {/* <Testimonials quotes={fsTestimonials} /> */}
      <CTA />
    </>
  );
}
