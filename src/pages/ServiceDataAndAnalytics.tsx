import {
  Layer24Regular,
  Database24Regular,
  Cloud24Regular,
  ArrowSwap24Regular,
  DataPie24Regular,
  ShieldCheckmark24Regular,
  Lightbulb24Regular,
  Settings24Regular,
  Rocket24Regular,
} from "@fluentui/react-icons";
import { ServiceHeroData } from "../components/service/ServiceHeroData";
// import { TrustBanner } from \"../components/TrustBanner\";

import { ServiceCapabilities } from "../components/service/ServiceCapabilities";
import { ServiceOutcomes } from "../components/service/ServiceOutcomes";
import { ServiceCaseStudiesData } from "../components/service/ServiceCaseStudiesData";
import { ServiceInsightsData } from "../components/service/ServiceInsightsData";
// import { ServiceTestimonialsData } from "../components/service/ServiceTestimonialsData";
import type { Capability } from "../components/service/ServiceCapabilities";
import type { OutcomeItem } from "../components/service/ServiceOutcomes";

const DATA_ANALYTICS_CASE_STUDIES_CONFIG = {
  serviceFilter: "Data & AI platforms",
  allCasesLabel: "See all case studies",
  serviceSpecificLabel: "See data & AI platforms case studies",
};

const capabilities: Capability[] = [
  {
    name: "Microsoft Fabric",
    icon: <Layer24Regular />,
    description:
      "Build a unified analytics platform on Microsoft Fabric that brings data engineering, warehousing, real-time analytics, and business intelligence into one AI-ready environment.",
  },
  {
    name: "Databricks",
    icon: <Database24Regular />,
    description:
      "Engineer data pipelines and AI on Databricks for analytics, machine learning, collaborative notebooks, and large-scale data processing.",
  },
  {
    name: "Snowflake AI Data Cloud",
    icon: <Cloud24Regular />,
    description:
      "Modernize enterprise data on Snowflake with secure data sharing, analytics, AI workloads, and cross-cloud collaboration.",
  },
  {
    name: "Azure Data Factory",
    icon: <ArrowSwap24Regular />,
    description:
      "Automate data integration pipelines that ingest, transform, and orchestrate enterprise data across hybrid and cloud environments.",
  },
  {
    name: "Lakehouse & Data Warehouse Modernization",
    icon: <DataPie24Regular />,
    description:
      "Replace legacy data platforms with lakehouse and warehouse architectures built for analytics, governance, and AI.",
  },
  {
    name: "Master Data Management (MDM)",
    icon: <ShieldCheckmark24Regular />,
    description:
      "Centralize and govern master records across business systems to keep enterprise data consistent and trusted.",
  },
];

const outcomes: OutcomeItem[] = [
  {
    icon: <Lightbulb24Regular />,
    title: "Optimized data usage",
    desc: "Get more from your data with analytics built around how your teams actually make decisions.",
  },
  {
    icon: <Settings24Regular />,
    title: "Boundless scalability",
    desc: "Scale data operations as demand grows, without re-architecting every time.",
  },
  {
    icon: <Rocket24Regular />,
    title: "Increase in efficiency",
    desc: "Cut manual work and speed up time to insight by streamlining data processes.",
  },
];

export function ServiceDataAndAnalytics() {
  return (
    <>
      <ServiceHeroData />

      <ServiceCapabilities
        sectionId="data-analytics-capabilities"
        title="What you can build with data & AI platforms"
        capabilities={capabilities}
        footerLabel="See data & AI platforms case studies"
        footerHref="/insights/case-studies?filter=Data%20%26%20AI%20platforms#insights-content"
        ariaLabel="Data and AI platform capabilities"
      />
      <ServiceOutcomes outcomes={outcomes} />
      <ServiceCaseStudiesData {...DATA_ANALYTICS_CASE_STUDIES_CONFIG} />
      <ServiceInsightsData />
      {/* <ServiceTestimonialsData /> */}
    </>
  );
}
