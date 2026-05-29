import {
    Shield24Regular,
    Globe24Regular,
    LockClosed24Regular,
    ArrowReset24Regular,
} from "@fluentui/react-icons";
import { ServiceCapabilities } from "../service/ServiceCapabilities";
import type { Capability } from "../service/ServiceCapabilities";

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

export function SecurityComplianceCapabilities() {
    return (
        <ServiceCapabilities
            sectionId="security-capabilities"
            title="Our security & compliance capabilities"
            subhead="Four capability pillars that protect your data, systems, and users — from threat detection to full incident recovery."
            capabilities={capabilities}
            footerLabel="See security case studies"
            footerHref="https://maqsoftware.com/case-studies.html?filter=security"
            mailSubjectSuffix="Security & Compliance"
        />
    );
}
