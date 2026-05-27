import { makeStyles } from "@fluentui/react-components";
import {
  Shield20Filled,
  LockClosed20Filled,
  ShieldCheckmark20Filled,
} from "@fluentui/react-icons";
import {
  Shield24Regular,
  Globe24Regular,
  LockClosed24Regular,
  ArrowReset24Regular,
  ArrowSync24Regular,
} from "@fluentui/react-icons";
import { ServiceHero } from "../components/service/ServiceHero";
import { TrustBanner } from "../components/TrustBanner";
import { ServiceCapabilities } from "../components/service/ServiceCapabilities";
import { ServiceOutcomes } from "../components/service/ServiceOutcomes";
import { ServiceProducts } from "../components/service/ServiceProducts";
import { ServiceCaseStudies } from "../components/service/ServiceCaseStudies";
import { ServiceInsights } from "../components/service/ServiceInsights";
import { ServiceTestimonials } from "../components/service/ServiceTestimonials";
import { CTA } from "../components/CTA";
import type { Capability } from "../components/service/ServiceCapabilities";
import type { OutcomeItem } from "../components/service/ServiceOutcomes";
import type { ProductItem } from "../components/service/ServiceProducts";
import type { CaseStudyItem } from "../components/service/ServiceCaseStudies";
import type { InsightItem } from "../components/service/ServiceInsights";
import type { TestimonialItem } from "../components/service/ServiceTestimonials";

const useVisualStyles = makeStyles({
  visual: {
    background: "var(--maq-surface-cream)",
    border: "1px solid var(--maq-red-pale)",
    borderRadius: "16px",
    padding: "20px",
    display: "grid",
    gap: "12px",
    boxShadow: "0 12px 32px rgba(15, 23, 42, 0.06)",
    color: "var(--maq-ink)",
  },
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
    marginBottom: "8px",
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },
  metricRow: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "12px",
    color: "var(--maq-ink)",
    marginTop: "4px",
  },
  bigNumber: {
    fontSize: "28px",
    fontWeight: 700,
    color: "var(--maq-red)",
    lineHeight: 1.2,
  },
  statusRow: {
    display: "flex",
    gap: "8px",
    alignItems: "center",
    marginTop: "4px",
  },
  dot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    background: "#22c55e",
  },
  statusLabel: { fontSize: "12px", color: "var(--maq-gray-600)" },
});

function SecurityVisual() {
  const s = useVisualStyles();
  return (
    <div className={s.visual} aria-hidden="true">
      <div className={s.tile}>
        <div className={s.tileTitle}>
          <Shield20Filled /> Threat alerts
        </div>
        <div className={s.metricRow}>
          <span>Blocked today</span>
          <span className={s.bigNumber}>2,847</span>
        </div>
      </div>
      <div className={s.tile}>
        <div className={s.tileTitle}>
          <ShieldCheckmark20Filled /> Compliance score
        </div>
        <div className={s.bigNumber}>98%</div>
        <div className={s.metricRow}>
          <span>ISO 27001 · SOC 2 · HIPAA</span>
        </div>
      </div>
      <div className={s.tile}>
        <div className={s.tileTitle}>
          <LockClosed20Filled /> Active policies
        </div>
        <div className={s.statusRow}>
          <span className={s.dot} />
          <span className={s.statusLabel}>142 policies enforced</span>
        </div>
        <div className={s.statusRow}>
          <span className={s.dot} />
          <span className={s.statusLabel}>Zero drift detected</span>
        </div>
      </div>
    </div>
  );
}

const capabilities: Capability[] = [
  {
    name: "Threat detection",
    tagline: "Detect and respond to threats in real-time",
    icon: <Shield24Regular />,
    description:
      "Protect your business with advanced threat detection solutions. Our rapid response capabilities ensure swift action to mitigate security incidents and breaches, keeping your assets and data secure. Leverage Microsoft Sentinel and Defender for Cloud to correlate signals across endpoints, identity, and cloud workloads.",
    tags: ["Microsoft Sentinel", "Defender for Cloud", "XDR", "SIEM"],
  },
  {
    name: "Network security",
    tagline: "Harden your perimeter and internal traffic",
    icon: <Globe24Regular />,
    description:
      "Design and enforce zero-trust network architectures with Azure Firewall, NSGs, and private endpoints. Segment workloads, inspect traffic, and prevent lateral movement — whether your estate is hybrid or cloud-native.",
    tags: ["Azure Firewall", "NSG", "Private Link", "Zero Trust"],
  },
  {
    name: "Data protection and encryption",
    tagline: "Safeguard data at rest and in transit",
    icon: <LockClosed24Regular />,
    description:
      "Classify, label, and encrypt sensitive data with Microsoft Purview and Azure Key Vault. Enforce DLP policies across M365, endpoints, and cloud storage to meet regulatory obligations (GDPR, HIPAA, SOC 2).",
    tags: ["Microsoft Purview", "Azure Key Vault", "DLP", "Encryption"],
  },
  {
    name: "Incident management and recovery",
    tagline: "Respond, contain, and recover without data loss",
    icon: <ArrowReset24Regular />,
    description:
      "Build playbooks and automated response workflows in Microsoft Sentinel and Defender XDR. When incidents strike, our runbooks orchestrate containment, forensics, communication, and recovery — minimizing downtime and preserving evidence for compliance audits.",
    tags: ["Sentinel SOAR", "Incident playbooks", "Azure Backup", "Disaster Recovery"],
  },
];

const outcomes: OutcomeItem[] = [
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

const products: ProductItem[] = [
  {
    name: "Fabric Admin Agent",
    initials: "FA",
    tagline: "Governance & administration",
    desc: "Automate Microsoft Fabric tenant administration, policy enforcement, and compliance monitoring with a Copilot-powered agent.",
    href: "/products/fabric-admin-agent",
  },
  {
    name: "CertyFAST",
    initials: "CF",
    tagline: "Automated certification testing",
    desc: "Validate Power BI reports against accessibility, performance, and governance rules before deployment — catch compliance gaps in CI/CD.",
    href: "/products/certyfast",
  },
  {
    name: "LoadFAST",
    initials: "LF",
    tagline: "Performance & reliability testing",
    desc: "Load-test Power BI capacity to ensure reports perform under peak demand — reduce outage risk before it reaches end users.",
    href: "/products/loadfast",
  },
];

const caseStudies: CaseStudyItem[] = [
  {
    tag: "Data modernization",
    title: "Modernizing reporting platforms through AI-driven SQL Migration",
    teaser:
      "Migrating legacy reporting platforms with AI-assisted SQL conversion while maintaining security and compliance standards.",
    href: "https://blog.maqsoftware.com/2024/08/modernizing-reporting-platforms-through.html",
  },
  {
    tag: "Data governance",
    title: "Unifying data management with a centralized framework",
    teaser:
      "Establishing centralized data governance and access controls across distributed systems for improved compliance posture.",
    href: "https://blog.maqsoftware.com/2024/08/unifying-data-management-with.html",
  },
  {
    tag: "Financial services",
    title: "Enhancing fintech analytics to provide millions of borrowers with better loan options",
    teaser:
      "Securing and optimizing analytics infrastructure for a fintech serving millions of borrowers with sensitive financial data.",
    href: "https://blog.maqsoftware.com/2022/06/enhancing-fintech-analytics-to-provide.html",
  },
  {
    tag: "Policy & compliance",
    title: "Software Company Monitors Global Affairs via Cloud-Based Policy Portal",
    teaser:
      "A cloud-based policy portal enabling a global software company to monitor geopolitical affairs with secure, role-based access controls.",
    href: "https://blog.maqsoftware.com/2018/07/case-study-software-company-monitors.html",
  },
];

const insights: InsightItem[] = [
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

const testimonials: TestimonialItem[] = [
  {
    body: "MAQ Software implemented a zero-trust architecture across our Azure tenant in under six weeks — our compliance audit passed with zero findings for the first time.",
    cite: "CISO — Enterprise financial services",
  },
  {
    body: "Their Sentinel deployment and custom detection rules cut our mean time to detect from days to minutes. The team operates like an extension of our own security org.",
    cite: "VP of IT Security — Global retailer",
  },
];

export function ServiceSecurityCompliance() {
  return (
    <>
      <ServiceHero
        eyebrow="Security & Compliance"
        heading="Secure your business, protect your data"
        subhead="Implement robust security measures with our expert solutions to safeguard your data, systems, and users from all threats."
        ctaMailSubject="Security%20%26%20Compliance%20-%20MAQ%20Software"
        scrollTargetId="security-capabilities"
        visual={<SecurityVisual />}
      />
      <TrustBanner />
      <ServiceCapabilities
        sectionId="security-capabilities"
        title="Our security capabilities"
        subhead="Four capability pillars that protect your data, systems, and users — from threat detection to full incident recovery."
        capabilities={capabilities}
        footerLabel="See security case studies"
        footerHref="https://maqsoftware.com/case-studies.html?filter=security"
        mailSubjectSuffix="Security & Compliance"
      />
      <ServiceOutcomes
        title="Your business outcomes"
        subhead="What organizations gain when security and compliance are delivered with engineering discipline."
        outcomes={outcomes}
      />
      <ServiceProducts
        title="Security & compliance products"
        subhead="Solutions designed to strengthen and automate your security posture."
        products={products}
      />
      <ServiceCaseStudies
        title="How clients are strengthening their security posture"
        studies={caseStudies}
        footerLabel="See all security case studies"
        footerHref="https://maqsoftware.com/case-studies.html?filter=security"
      />
      <ServiceInsights
        title="Our security insights"
        subhead="See our research that goes into optimizing our security service."
        insights={insights}
      />
      <ServiceTestimonials quotes={testimonials} />
      <CTA />
    </>
  );
}
