import {
  Checkmark24Regular,
  Link24Regular,
  Shield24Regular,
  Money24Regular,
  LockClosed24Regular,
  ScaleFill24Regular,
} from "@fluentui/react-icons";
import { makeStyles, tokens } from "@fluentui/react-components";
import { ArrowRight20Regular } from "@fluentui/react-icons";
// import { TrustBanner } from \"../components/TrustBanner\";

import { PartnershipHero } from "../components/partnerships/PartnershipHero";
import { PartnershipValueProps } from "../components/partnerships/PartnershipValueProps";
import { PartnershipHighlights } from "../components/partnerships/PartnershipHighlights";
import { PartnershipOverview } from "../components/partnerships/PartnershipOverview";
import { PartnershipOfferings } from "../components/partnerships/PartnershipOfferings";
import { PartnershipInsights } from "../components/partnerships/PartnershipInsights";
import { PartnershipMarketplace } from "../components/partnerships/PartnershipMarketplace";

// ---------------------------------------------------------------------------
// Styles for Marketplace section
// ---------------------------------------------------------------------------
const useStyles = makeStyles({
  marketSection: {
    padding: "48px 32px",
    backgroundColor: "var(--maq-off-white)",
  },
  marketInner: {
    maxWidth: "1240px",
    margin: "0 auto",
  },
  marketHead: {
    marginBottom: "20px",
    textAlign: "center" as const,
  },
  marketEyebrow: {
    fontSize: "12px",
    fontWeight: 700,
    color: "var(--maq-red)",
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    display: "block",
    marginBottom: "8px",
    textAlign: "center" as const,
  },
  marketTitle: {
    display: "block",
    fontSize: "30px",
    fontWeight: 700,
    color: "var(--maq-black)",
    margin: 0,
    letterSpacing: "-0.01em",
    textAlign: "center" as const,
  },
  panelGrid: {
    display: "flex",
    justifyContent: "center",
    maxWidth: "700px",
    margin: "0 auto",
  },
  panel: {
    display: "flex",
    flexDirection: "column",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "12px",
    padding: "28px",
    background: "#fff",
    transition: "all 0.2s",
    width: "100%",
    ":hover": {
      border: "1px solid var(--maq-red)",
      boxShadow: "0 6px 16px rgba(0,0,0,0.06)",
    },
  },
  panelContent: {
    flex: 1,
  },
  panelSubhead: {
    fontSize: "20px",
    fontWeight: 700,
    color: "var(--maq-black)",
    margin: "0 0 12px",
  },
  panelDesc: {
    fontSize: "14px",
    lineHeight: 1.65,
    color: "var(--maq-gray-700)",
    margin: "0 0 16px",
  },
  bulletList: {
    margin: "0 0 20px 20px",
    padding: 0,
    listStyleType: "disc",
  },
  bulletItem: {
    fontSize: "14px",
    color: "var(--maq-gray-700)",
    lineHeight: 1.65,
    marginBottom: "6px",
  },
});

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------
const whySnowflake = [
  { icon: <Checkmark24Regular />, title: "Easy", desc: "Managed platform that adapts to your business and teams" },
  { icon: <Link24Regular />, title: "Connected", desc: "Join, share and leverage data in friction free ecosystem" },
  { icon: <Shield24Regular />, title: "Trusted", desc: "Interoperability of data across clouds, with universal governance at scale" },
  { icon: <Money24Regular />, title: "Cost-Effective", desc: "Pay-as-you-use pricing—eliminating overprovisioning and reducing total cost of ownership." },
  { icon: <LockClosed24Regular />, title: "Secure", desc: "Ensure enterprise-grade data protection with end-to-end encryption, robust access controls, and compliance with global security standards." },
  { icon: <ScaleFill24Regular />, title: "Flexible", desc: "Seamlessly scale storage and compute independently to match your workload needs, whether for batch processing or real-time analytics." },
];

const highlights = [
  { metric: "150+", label: "SnowPro Core Certified Associates" },
  { metric: "25+", label: "SnowPro Advanced Certified Associates" },
  { metric: "10+", label: "Implementations for Enterprise Clients" },
  { metric: "1", label: "Marketplace Offerings" },
];

const offerings = [
  {
    eyebrow: "Fast, Secure, and Hassle-Free",
    title: "Data Warehouse Migration to Snowflake",
    desc: "Simplify your data migration journey with MAQ Software's end-to-end Snowflake migration solutions—ensuring a seamless, secure, and high-performance transition through automated frameworks, optimized ETL, and zero-downtime execution from on-prem, legacy, or cloud sources.",
  },
  {
    eyebrow: "Faster Insights, Smarter Decisions",
    title: "Business Intelligence with Snowflake & Power BI",
    desc: "We help organizations unlock the full potential of Power BI on Snowflake by delivering lightning-fast query execution and highly optimized data models. By leveraging Snowflake's intelligent caching and elastic compute scaling, we ensure seamless, real-time analytics and interactive dashboards—empowering swift data-driven decisions.",
  },
  {
    eyebrow: "Transforming Data into Instant Insights",
    title: "Real-Time Analytics",
    desc: "With real-time analytics in Snowflake, we help businesses ingest, process, and analyze streaming data for faster decision-making. Our expertise in Snowflake Stream, Tasks, and external integrations like Kafka and Azure Event Hubs ensures organizations can act on insights in real time.",
  },
  {
    eyebrow: "Powering Intelligent Business Decisions",
    title: "Advanced Analytics and AI/ML",
    desc: "We leverage Snowflake's AI/ML capabilities—integrating Snowpark, Python, and ML models—to drive predictive analytics, anomaly detection, and intelligent automation. From customer segmentation and fraud detection to demand forecasting, we turn raw data into actionable insights that enhance decision-making and operational efficiency.",
  },
  {
    eyebrow: "Turning Data into Revenue",
    title: "Embedded Analytics and Data Monetization",
    desc: "We enable organizations to monetize their data assets by embedding Snowflake-powered analytics into applications and customer portals. Our expertise in API-based data sharing, multi-tenant architectures, and white-labeled analytics solutions helps businesses create scalable, revenue-generating insights.",
  },
];

const dataValidatorBullets = [
  {
    title: "Core Capabilities",
    items: [
      <><strong>Row Count Check:</strong> Validates if row counts between source and target tables are within a ±5% tolerance.</>,
      <><strong>Grain Check:</strong> Ensures the uniqueness of primary keys across both source and destination tables.</>,
      <><strong>KPI Check:</strong> Compares the results of custom KPI SQL logic or aggregated column values between the source and destination. Passes if the difference is within ±5%.</>,
    ],
  },
  {
    title: "Scheduling Support",
    items: [
      "Test cases are scheduled using Snowflake tasks for automatic execution.",
      "Offers full CRON-style configuration with time zone support.",
      "Automatically log results, including comparison values, pass/fail status, and metadata for analysis in dashboards or the \"Show Test Cases\" view.",
    ],
  },
  {
    title: "User Interface Capabilities",
    items: [
      <><strong>Add Test Case:</strong> Intuitive interface to define test parameters (e.g., databases, tables, columns, SQL queries).</>,
      <><strong>Show Test Cases:</strong> Displays existing test cases based on selected filters like table type and test type.</>,
      <><strong>Execute Test Case:</strong> On-demand Execution of test cases.</>,
      <><strong>View Test Results:</strong> Offers detailed visibility into execution status, timestamps, result IDs, and pass/fail outcomes, enabling historical trend analysis.</>,
      <><strong>Schedule Test Cases:</strong> Allows to setup a customized schedule to run the checks automatically.</>,
    ],
  },
];

const blogs = [
  {
    title: "Optimizing data management by integrating Snowflake and Microsoft Fabric",
    href: "https://blog.maqsoftware.com/2025/03/optimizing-data-management-by.html",
  },
  {
    title: "Transforming supply chain analytics with Power BI on Snowflake for a specialty retailer",
    href: "https://blog.maqsoftware.com/2025/03/transforming-supply-chain-analytics.html",
  },
  {
    title: "Enabling sales insights for global operations with Power BI and Snowflake",
    href: "https://blog.maqsoftware.com/2025/06/enabling-sales-insights-for-global.html",
  },
  {
    title: "Optimizing data refresh by integrating Snowflake iceberg tables with Microsoft Fabric",
    href: "https://blog.maqsoftware.com/2025/08/optimizing-data-refresh-by-integrating.html",
  },
];

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export function PartnershipSnowflake() {
  const s = useStyles();
  return (
    <>
      <PartnershipHero
        h1="MAQ Software and Snowflake"
        subhead="Are you thinking about how to unify siloed data, scale analytics, and drive smarter decisions across your organization? At MAQ Software, we harness the power of Snowflake to help businesses mobilize data, enable secure collaboration, and unlock real-time, AI-powered insights across clouds and regions."
        ctaLabel="Contact Us"
        ctaHref="mailto:CustomerSuccess@MAQSoftware.com?subject=Contact%20Us&body=Hello,%20I%20would%20like%20to%20get%20in%20touch%20with%20you."
        imageUrl="/logos/Snowflake-hero.png"
        imageAlt="MAQ Software and Snowflake"
      />

      {/* <PartnershipValueProps
        title="Why Snowflake?"
        items={whySnowflake}
      /> */}
      <PartnershipHighlights
        title="Partnership Highlights"
        stats={highlights}
      />
      <PartnershipOverview
        badgeUrl="/logos/Snowflake-Services-Select.png"
        badgeAlt="Snowflake Service Partner"
        description="As a Snowflake Technology Partner, we specialize in end-to-end Snowflake implementations, performance and cost optimization, and AI-driven analytics for modern business needs. Our deep expertise enables organizations to unlock seamless data integration, transformation, reporting, and AI-powered insights, ensuring they stay ahead in an evolving digital landscape. From migration to advanced analytics integrated with Power BI, we empower businesses to maximize their data potential and achieve unparalleled success with Snowflake's industry-leading platform."
      />
      <PartnershipOfferings
        eyebrow="Our Offerings"
        title="Driving Data Strategy Excellence Through Our Global Snowflake Partnership"
        sectionId="snowflake-offerings"
        offerings={offerings}
      />
      <PartnershipInsights
        eyebrow="Insights"
        title="Related blogs and case studies"
        items={blogs}
      />
      <PartnershipMarketplace
        title="Data Validator"
        sectionId="snowflake-marketplace"
        intro="Begin your RTI journey today"
        bulletGroups={dataValidatorBullets}
        ctaLabel="Learn more"
        ctaHref="https://app.snowflake.com/marketplace/listing/GZ1MBZD8CA9/maq-software-data-validator?originPage=app"
      />
    </>
  );
}
