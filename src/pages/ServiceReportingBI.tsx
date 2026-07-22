import {
  ChartMultiple24Regular,
  Pulse24Regular,
  DataPie24Regular,
  Gauge24Regular,
  People24Regular,
  Eye24Regular,
  Timer24Regular,
} from "@fluentui/react-icons";
import { ReportingBIHero } from "../components/service-reporting-bi/ReportingBIHero";

import { ServiceCapabilities } from "../components/service/ServiceCapabilities";
import { ServiceOutcomes } from "../components/service/ServiceOutcomes";
import { ReportingBICaseStudies } from "../components/service-reporting-bi/ReportingBICaseStudies";
import { ReportingBIInsights } from "../components/service-reporting-bi/ReportingBIInsights";
// import { ReportingBITestimonials } from "../components/service-reporting-bi/ReportingBITestimonials";
// import { TrustBanner } from "../components/TrustBanner";
import type { Capability } from "../components/service/ServiceCapabilities";
import type { OutcomeItem } from "../components/service/ServiceOutcomes";

const REPORTING_BI_CASE_STUDIES_CONFIG = {
  serviceFilter: "Insights & Analytics",
  allCasesLabel: "See all case studies",
  serviceSpecificLabel: "See insights & analytics case studies",
};

const capabilities: Capability[] = [
  {
    name: "Power BI",
    tagline: "Interactive business intelligence dashboards",
    icon: <ChartMultiple24Regular />,
    description:
      "Build interactive dashboards and reporting that turn enterprise data into decisions people act on.",
    tags: ["Power BI", "Dashboards", "Business Intelligence"],
  },
  {
    name: "Microsoft Fabric Real-Time Intelligence",
    tagline: "Real-time insights from streaming data",
    icon: <Pulse24Regular />,
    description:
      "Monitor streaming data and operational events as they happen, so teams decide and respond faster.",
    tags: ["Microsoft Fabric", "Real-Time", "Streaming Analytics"],
  },
  {
    name: "Databricks SQL",
    tagline: "High-performance analytics with SQL",
    icon: <DataPie24Regular />,
    description:
      "Run SQL analytics on large datasets for enterprise reporting, dashboards, and collaborative data exploration.",
    tags: ["Databricks SQL", "Enterprise Reporting", "Large-Scale Analytics"],
  },
  {
    name: "Executive Dashboards & KPI Reporting",
    tagline: "Executive visibility into business performance",
    icon: <Gauge24Regular />,
    description:
      "Design executive dashboards that show business performance through clear KPIs and operational metrics.",
    tags: ["Executive Dashboards", "KPI Reporting", "Business Performance"],
  },
  {
    name: "Self-Service Analytics",
    tagline: "Analytics accessible to every business user",
    icon: <People24Regular />,
    description:
      "Give business users governed self-service analytics to explore data, build reports, and answer questions on their own.",
    tags: ["Self-Service", "Governed Analytics", "Business Users"],
  },
  {
    name: "Predictive & Prescriptive Analytics",
    tagline: "Forecast outcomes. Optimize decisions.",
    icon: <Gauge24Regular />,
    description:
      "Forecast outcomes and recommend next actions with machine learning and statistical models.",
    tags: ["Predictive Analytics", "Prescriptive Analytics", "Optimization"],
  },
];

const outcomes: OutcomeItem[] = [
  {
    icon: <Eye24Regular />,
    title: "Data clarity",
    desc: "Surface clear answers from complex data with visualizations teams can read at a glance.",
  },
  {
    icon: <Timer24Regular />,
    title: "Faster decision-making",
    desc: "Cut time to decision by putting real-time, easy-to-read visuals in front of stakeholders.",
  },
  {
    icon: <People24Regular />,
    title: "Improved data accessibility",
    desc: "Open access to critical insights across your organization, so every team works from the same numbers.",
  },
];

export function ServiceReportingBI() {
  return (
    <>
      <ReportingBIHero />

      <ServiceCapabilities
        sectionId="bi-capabilities"
        title="What you can build with analytics"
        capabilities={capabilities}
        footerLabel="See insights & analytics case studies"
        footerHref="/insights/case-studies?filter=Insights%20%26%20Analytics#insights-content"
        ariaLabel="Insights and analytics capabilities"
      />
      <ServiceOutcomes outcomes={outcomes} />
      <ReportingBICaseStudies {...REPORTING_BI_CASE_STUDIES_CONFIG} />
      <ReportingBIInsights />
      {/* <ReportingBITestimonials /> */}
    </>
  );
}
