import {
  Shield24Regular,
  Globe24Regular,
  LockClosed24Regular,
  ArrowReset24Regular,
  ArrowSync24Regular,
} from "@fluentui/react-icons";
import type { Capability } from "../../components/service/ServiceCapabilities";
import type { OutcomeItem } from "../../components/service/ServiceOutcomes";
import type { CaseStudyItem } from "../../components/service/ServiceCaseStudies";
import type { InsightItem } from "../../components/service/ServiceInsights";
import type { TestimonialItem } from "../../components/service/ServiceTestimonials";

export const capabilities: Capability[] = [
  {
    name: "Microsoft Purview",
    tagline: "Unified governance across enterprise data",
    icon: <LockClosed24Regular />,
    description:
      "Enable enterprise-wide data governance with comprehensive data cataloging, lineage, classification, and compliance management.",
    tags: ["Microsoft Purview", "Data Catalog", "Lineage", "Compliance"],
  },
  {
    name: "Microsoft Defender",
    tagline: "Intelligent protection against cyber threats",
    icon: <Shield24Regular />,
    description:
      "Protect enterprise environments with advanced threat detection, endpoint security, identity protection, and automated incident response.",
    tags: ["Microsoft Defender", "Threat Detection", "Endpoint Security", "Incident Response"],
  },
  {
    name: "Microsoft Entra",
    tagline: "Modern identity and access security",
    icon: <Globe24Regular />,
    description:
      "Secure digital identities and access through modern identity management, authentication, and Zero Trust security practices.",
    tags: ["Microsoft Entra", "Identity Management", "Authentication", "Zero Trust"],
  },
  {
    name: "Unity Catalog (Databricks)",
    tagline: "Centralized governance for data and AI",
    icon: <ArrowSync24Regular />,
    description:
      "Govern data and AI assets centrally with fine-grained access control, lineage tracking, and unified metadata management.",
    tags: ["Unity Catalog", "Databricks", "Access Control", "Metadata"],
  },
  {
    name: "Data Governance & Compliance",
    tagline: "Govern data with confidence",
    icon: <ArrowReset24Regular />,
    description:
      "Establish governance frameworks that ensure enterprise data remains secure, compliant, discoverable, and trusted.",
    tags: ["Data Governance", "Compliance", "Data Security", "Trust"],
  },
  {
    name: "Identity, Access & AI Governance",
    tagline: "Secure identities. Govern intelligent systems.",
    icon: <Shield24Regular />,
    description:
      "Implement identity management and AI governance controls that safeguard enterprise assets while enabling responsible AI adoption.",
    tags: ["Identity", "Access Control", "AI Governance", "Responsible AI"],
  },
];

export const outcomes: OutcomeItem[] = [
  {
    icon: <Shield24Regular />,
    title: "Increased threat protection",
    desc: "Strengthen your defense against cyber threats. Reduce the risk of breaches and downtime.",
  },
  {
    icon: <LockClosed24Regular />,
    title: "Data integrity",
    desc: "Ensure the confidentiality and integrity of your data. Safeguard your most valuable assets.",
  },
  {
    icon: <ArrowSync24Regular />,
    title: "Operational continuity",
    desc: "Maintain business continuity with robust security measures that protect against disruptions and ensure ongoing operations, even in the face of cyber-attacks.",
  },
];

export const caseStudies: CaseStudyItem[] = [
  {
    tag: "Secure Copilot",
    title: "Building a secure Copilot: Addressing key security challenges",
    teaser:
      "Reference design for shipping enterprise Copilots safely — patterns, guardrails, and identity controls for production deployment.",
    href: "https://blog.maqsoftware.com/2024/08/building-secure-copilot-addressing-key.html",
  },
  {
    tag: "Cybersecurity",
    title: "Strengthening cybersecurity with Managed Identity and RBAC",
    teaser:
      "Eliminating credential sprawl with Azure Managed Identity and enforcing least-privilege access using RBAC across the cloud estate.",
    href: "https://blog.maqsoftware.com/2024/08/strengthening-cybersecurity.html",
  },
  {
    tag: "Data governance",
    title: "Unifying data management with a centralized framework",
    teaser:
      "Establishing centralized data governance and access controls across distributed systems for improved compliance posture.",
    href: "https://blog.maqsoftware.com/2024/08/unifying-data-management-with.html",
  },
];

export const insights: InsightItem[] = [
  {
    title: "Strengthen your cloud security and protect your assets with 19 security best practices",
    teaser:
      "Field-tested Azure security best practices covering identity, network, data, and operations layers.",
    href: "https://maqsoftware.com/insights/azure-security-best-practices.html",
  },
  {
    title: "Building a secure Copilot: Addressing key security challenges",
    teaser:
      "Patterns, guardrails, and identity controls for shipping a secure enterprise Copilot.",
    href: "https://blog.maqsoftware.com/2024/08/building-secure-copilot-addressing-key.html",
  },
  {
    title: "Strengthening cybersecurity with Managed Identity and RBAC",
    teaser:
      "Eliminate credential sprawl with Azure Managed Identity and enforce least-privilege access with RBAC.",
    href: "https://blog.maqsoftware.com/2024/08/strengthening-cybersecurity.html",
  },
];

export const testimonials: TestimonialItem[] = [
  {
    body: "MAQ Software implemented a zero-trust architecture across our Azure tenant in under six weeks — our compliance audit passed with zero findings for the first time.",
    cite: "CISO — Enterprise financial services",
  },
  {
    body: "Their Sentinel deployment and custom detection rules cut our mean time to detect from days to minutes. The team operates like an extension of our own security org.",
    cite: "VP of IT Security — Global retailer",
  },
];
