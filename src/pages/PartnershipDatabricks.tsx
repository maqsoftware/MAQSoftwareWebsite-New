import {
  Checkmark24Regular,
  Link24Regular,
  Shield24Regular,
  Sparkle24Regular,
  Lightbulb24Regular,
  People24Regular,
} from "@fluentui/react-icons";
import { TrustBanner } from "../components/TrustBanner";
import { PartnershipHero } from "../components/partnerships/PartnershipHero";
import { PartnershipValueProps } from "../components/partnerships/PartnershipValueProps";
import { PartnershipHighlights } from "../components/partnerships/PartnershipHighlights";
import { PartnershipOverview } from "../components/partnerships/PartnershipOverview";
import { PartnershipOfferings } from "../components/partnerships/PartnershipOfferings";
import { PartnershipMarketplace } from "../components/partnerships/PartnershipMarketplace";
import { PartnershipInsights } from "../components/partnerships/PartnershipInsights";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------
const whyDatabricks = [
  { icon: <Checkmark24Regular />, title: "Unified", desc: "One platform for all your data, analytics, and AI needs." },
  { icon: <Sparkle24Regular />, title: "Scalable", desc: "Effortlessly grow with your business and data demands." },
  { icon: <People24Regular />, title: "Collaborative", desc: "Empower teams to innovate together in real time." },
  { icon: <Shield24Regular />, title: "Secure", desc: "Enterprise-grade security to safeguard your information." },
  { icon: <Lightbulb24Regular />, title: "Fast", desc: "Accelerate insights with lightning-speed processing." },
  { icon: <Link24Regular />, title: "Innovative", desc: "Stay ahead with the latest AI and analytics advancements." },
];

const highlights = [
  { metric: "34+", label: "Databricks Data Engineering Associates" },
  { metric: "7+", label: "Databricks Data Engineering Professionals" },
  { metric: "66+", label: "Databricks Sales Badges" },
  { metric: "", label: "Global client engagements" },
];

const offerings = [
  {
    eyebrow: "Data-first engineering",
    title: "Data Engineering",
    desc: "We build and optimize data pipelines for seamless integration and processing, ensuring reliable data transformations and efficient workflows on Databricks.",
  },
  {
    eyebrow: "ML lifecycles made practical",
    title: "Data Science and Machine Learning",
    desc: "We develop, train, and deploy machine learning models with Databricks, uncovering predictive insights and integrating them into business systems.",
  },
  {
    eyebrow: "Insights at scale",
    title: "Business Intelligence",
    desc: "We create interactive dashboards and analytics, helping organizations visualize data and make informed, data-driven decisions with confidence.",
  },
  {
    eyebrow: "Massive scale analytics",
    title: "Big Data Analytics",
    desc: "We analyze large datasets quickly with Databricks, enabling real-time analytics and empowering businesses with actionable insights.",
  },
  {
    eyebrow: "Governance & security",
    title: "Unity Catalog for Data Security and Governance",
    desc: "We ensure data integrity, security, and compliance with robust governance frameworks and continuous monitoring.",
  },
  {
    eyebrow: "Flexible storage",
    title: "Data Lakes and Warehousing",
    desc: "We implement scalable data lakes and warehouses, allowing cost-effective storage and quick access to large datasets.",
  },
  {
    eyebrow: "Real-time",
    title: "Real-Time Data Processing",
    desc: "We enable real-time streaming data solutions, letting businesses respond instantly to data changes and market trends.",
  },
];

const guides = [
  { title: "Explore Mosaic AI on Databricks for enterprise-ready generative AI", href: "https://blog.maqsoftware.com/2026/02/explore-mosaic-ai-on-databricks-for.html" },
  { title: "Databricks best practice guide", href: "https://maqsoftware.com/insights/databricks-best-practices.html" },
  { title: "Azure Databricks best practice guide", href: "https://maqsoftware.com/insights/azure-databricks-best-practices.html" },
  { title: "Unlocking advanced analytics with Databricks", href: "https://blog.maqsoftware.com/2025/07/unlocking-advanced-analytics-with.html" },
  { title: "Integrating Databricks with Power BI", href: "https://blog.maqsoftware.com/2025/08/unlocking-business-insights-integrating.html" },
  { title: "Real-time structured streaming in Databricks: Powering modern data applications", href: "https://blog.maqsoftware.com/2025/09/real-time-structured-streaming-in.html" },
  { title: "Databricks Genie and AI/BI Dashboards: Revolutionizing data analytics", href: "https://blog.maqsoftware.com/2025/09/databricks-genie-and-aibi-dashboards.html" },
];

const guideBulletGroups = [
  {
    title: "Guides",
    items: guides.map((g) => (
      <a key={g.href} href={g.href} target="_blank" rel="noreferrer">
        {g.title}
      </a>
    )),
  },
];

const blogs = [
  { title: "Delivering personalization intelligence with MLOps and Databricks CI/CD framework", href: "https://blog.maqsoftware.com/2025/08/delivering-personalization-intelligence.html" },
  { title: "Explore Mosaic AI on Databricks for enterprise-ready generative AI", href: "https://blog.maqsoftware.com/2026/02/explore-mosaic-ai-on-databricks-for.html" },
  { title: "Unlocking advanced analytics with Databricks", href: "https://blog.maqsoftware.com/2025/07/unlocking-advanced-analytics-with.html" },
  { title: "Integrating Databricks with Power BI", href: "https://blog.maqsoftware.com/2025/08/unlocking-business-insights-integrating.html" },
];

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export function PartnershipDatabricks() {
  return (
    <>
      <PartnershipHero
        h1="MAQ Software and Databricks"
        subhead="Unlock the power of your data with MAQ Software and Databricks—where innovation meets intelligence. Together, we transform data into actionable insights through next-generation analytics, seamless integration, and AI-driven accelerators. Experience agility, scalability, and security like never before as we propel your business to new heights in the data-driven era."
        ctaLabel="Contact our team"
        ctaHref="mailto:CustomerSuccess@MAQSoftware.com?subject=Contact%20Us&body=Hello,%20I%20would%20like%20to%20get%20in%20touch%20with%20you."
        imageUrl="https://maqsoftware.com/images-new/isv/databricks.jpg"
        imageAlt="MAQ Software and Databricks"
      />

      <TrustBanner />

      <PartnershipValueProps eyebrow="Why Databricks?" title="Why Databricks?" items={whyDatabricks} />

      <PartnershipHighlights eyebrow="Partnership Highlights" title="Our proven expertise" stats={highlights} />

      <PartnershipOverview
        badgeUrl="https://maqsoftware.com/images-new/Databricks/databricks-partner.png"
        badgeAlt="Databricks partner"
        description="As a Databricks Technology Partner, MAQ Software brings deep expertise in helping organizations unlock the full potential of Databricks. Whether you're looking for guidance on implementing data solutions or optimizing your existing platform, we’re here to support you every step of the way."
      />

      <PartnershipOfferings eyebrow="Our Capabilities" title="Our capabilities" sectionId="databricks-offerings" offerings={offerings} />

      <PartnershipMarketplace eyebrow="Databricks Guides" title="Databricks guides" sectionId="databricks-guides" intro="" bulletGroups={guideBulletGroups} ctaLabel="Learn more" ctaHref="/insights" />

      <PartnershipInsights eyebrow="Insights" title="Related blogs and case studies" items={blogs} />

    </>
  );
}
