import {
    Chat24Regular,
    DocumentBulletList24Regular,
    Money24Regular,
    ShieldCheckmark24Regular,
} from "@fluentui/react-icons";
import { SolutionShowcase } from "../SolutionShowcase";

const agents = [
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

export function FinancialServicesSolutions() {
    return (
        <SolutionShowcase
            sectionId="fs-solutions"
            eyebrow="Agentic AI"
            title="Accelerate your financial operations with our Finance Agents"
            agents={agents}
        />
    );
}