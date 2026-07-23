import {
  CloudArrowUp24Regular,
  Cube24Regular,
  Code24Regular,
  ArrowSwap24Regular,
  CurrencyDollarEuro24Regular,
  Shield24Regular,
  Beaker24Regular,
} from "@fluentui/react-icons";
import { ServiceCloudHero } from "../components/service/ServiceCloudHero";
// import { TrustBanner } from "../components/TrustBanner";

import { ServiceCapabilities } from "../components/service/ServiceCapabilities";
import { ServiceOutcomes } from "../components/service/ServiceOutcomes";
import { ServiceCloudCaseStudies } from "../components/service/ServiceCloudCaseStudies";
import { ServiceCloudInsights } from "../components/service/ServiceCloudInsights";
// import { ServiceCloudTestimonials } from "../components/service/ServiceCloudTestimonials";
import type { Capability } from "../components/service/ServiceCapabilities";
import type { OutcomeItem } from "../components/service/ServiceOutcomes";

const CLOUD_CASE_STUDIES_CONFIG = {
  serviceFilter: "Cloud modernization",
  allCasesLabel: "See all case studies",
  serviceSpecificLabel: "See cloud modernization case studies",
};

const capabilities: Capability[] = [
  {
    name: "Microsoft Azure",
    tagline: "Secure and scalable cloud infrastructure",
    icon: <CloudArrowUp24Regular />,
    description:
      "Modernize enterprise infrastructure on Azure for secure, resilient application deployment that scales with demand.",
    tags: ["Microsoft Azure", "Cloud Infrastructure", "Scalability"],
  },
  {
    name: "Azure Kubernetes Service (AKS)",
    tagline: "Kubernetes simplified for the enterprise",
    icon: <Cube24Regular />,
    description:
      "Deploy and run containerized applications on Azure Kubernetes Service with the scaling, security, and operations enterprises need.",
    tags: ["AKS", "Kubernetes", "Containerization"],
  },
  {
    name: "Cloud-Native Application Development",
    tagline: "Modern applications built for the cloud",
    icon: <Code24Regular />,
    description:
      "Build cloud-native applications with microservices, containers, APIs, and DevOps practices.",
    tags: ["Microservices", "Containers", "APIs", "DevOps"],
  },
  {
    name: "Application & Data Platform Migration",
    tagline: "Seamless migration to modern platforms",
    icon: <ArrowSwap24Regular />,
    description:
      "Migrate enterprise applications and data platforms to the cloud with minimal disruption and better performance.",
    tags: ["Application Migration", "Data Migration", "Modern Platforms"],
  },
  {
    name: "Infrastructure Modernization",
    tagline: "Future-ready enterprise infrastructure",
    icon: <CloudArrowUp24Regular />,
    description:
      "Replace legacy infrastructure with secure, cloud-first environments built for modern workloads.",
    tags: ["Infrastructure Modernization", "Cloud-First", "Legacy Transformation"],
  },
  {
    name: "FinOps & Cloud Cost Optimization",
    tagline: "Maximize cloud value and efficiency",
    icon: <CurrencyDollarEuro24Regular />,
    description:
      "Optimize cloud spend with governance, cost monitoring, right-sizing, and financial accountability.",
    tags: ["FinOps", "Cost Optimization", "Cloud Governance"],
  },
];

const outcomes: OutcomeItem[] = [
  {
    icon: <CurrencyDollarEuro24Regular />,
    title: "Lower run cost",
    desc: "Cut cloud run cost 30–40% on average across enterprise workloads modernized on Azure, with FinOps discipline.",
  },
  {
    icon: <Shield24Regular />,
    title: "Enhanced security",
    desc: "Protect data and meet compliance with cloud security built into every layer.",
  },
  {
    icon: <Beaker24Regular />,
    title: "Operational resilience",
    desc: "Build infrastructure that adapts to disruptions and keeps operations running.",
  },
];

export function ServiceCloud() {
  return (
    <>
      <ServiceCloudHero />

      <ServiceCapabilities
        sectionId="cloud-capabilities"
        title="What you can achieve with cloud modernization"
        capabilities={capabilities}
        footerLabel="See cloud modernization case studies"
        footerHref="/insights/case-studies?filter=Cloud%20modernization#insights-content"
        ariaLabel="Cloud modernization capabilities"
      />
      <ServiceOutcomes outcomes={outcomes} />
      <ServiceCloudCaseStudies {...CLOUD_CASE_STUDIES_CONFIG} />
      <ServiceCloudInsights />
      {/* <ServiceCloudTestimonials /> */}
    </>
  );
}
