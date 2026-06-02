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
import { ServiceCaseStudies } from "../components/service/ServiceCaseStudies";
import { ServiceInsights } from "../components/service/ServiceInsights";
// import { ServiceTestimonials } from "../components/service/ServiceTestimonials";
import { CTA } from "../components/CTA";
import type { Capability } from "../components/service/ServiceCapabilities";
import type { OutcomeItem } from "../components/service/ServiceOutcomes";
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
    name: "Data protection & AI governance",
    tagline: "Safeguard data and govern AI usage end to end",
    icon: <LockClosed24Regular />,
    description:
      "Classify, label, and encrypt sensitive data with Microsoft Purview and Azure Key Vault — and extend governance to GenAI with Purview AI Hub, monitoring prompt content, sensitivity, and DLP across Copilot and custom agents to meet GDPR, HIPAA, and SOC 2 obligations.",
    tags: ["Microsoft Purview", "Purview AI Hub", "Azure Key Vault", "DLP"],
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

const caseStudies: CaseStudyItem[] = [
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
        eyebrow="Security & compliance"
        heading="Zero Trust security and AI governance, end to end"
        subhead="ISO 27001 / 27701 / 27018 certified delivery. We implement Zero Trust, Defender, Sentinel, and Purview — including AI governance with Purview AI Hub — aligned to your regulatory landscape and Microsoft security stack."
        ctaMailSubject="Security%20%26%20Compliance%20-%20MAQ%20Software"
        scrollTargetId="security-capabilities"
        visual={<SecurityVisual />}
      />
      <TrustBanner />
      <ServiceCapabilities
        sectionId="security-capabilities"
        title="Our security & compliance capabilities"
        subhead="Four capability pillars that protect your data, systems, and users — from threat detection to full incident recovery."
        capabilities={capabilities}
        footerLabel="See security case studies"
        footerHref="/insights/case-studies?filter=Security#insights-content"
        mailSubjectSuffix="Security & Compliance"
      />
      <ServiceOutcomes
        title="Your business outcomes"
        subhead="What organizations gain when security and compliance are delivered with engineering discipline."
        outcomes={outcomes}
      />
      <ServiceCaseStudies
        title="How clients are strengthening their security posture"
        studies={caseStudies}
        serviceFilter="Security"
        allCasesLabel="See all case studies"
        serviceSpecificLabel="See security case studies"
      />
      <ServiceInsights
        title="Our security insights"
        subhead="See our research that goes into optimizing our security service."
        insights={insights}
      />
      {/* <ServiceTestimonials quotes={testimonials} /> */}
      <CTA />
    </>
  );
}
