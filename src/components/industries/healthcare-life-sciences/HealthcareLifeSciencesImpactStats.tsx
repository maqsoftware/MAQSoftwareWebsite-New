import { ImpactStats } from "../ImpactStats";

const stats = [
    {
        metric: "Agentic",
        label: "AI agents reshaping clinical, operational, and research workflows across healthcare and life sciences",
        sourceLabel: "Cross-industry agentic AI case study",
        sourceHref: "https://blog.maqsoftware.com/2025/08/reshaping-industries-with-agentic-ai.html",
    },
    {
        metric: "HIPAA-ready",
        label: "Secure-by-design Copilot patterns for environments handling PHI and other regulated data",
        sourceLabel: "Secure Copilot case study",
        sourceHref: "https://blog.maqsoftware.com/2024/08/building-secure-copilot-addressing-key.html",
    },
    {
        metric: "CoE-led",
        label: "Structured adoption playbook for moving healthcare AI pilots into production safely",
        sourceLabel: "AI Center of Excellence case study",
        sourceHref: "https://blog.maqsoftware.com/2026/02/transforming-ai-interest-into-adoption.html",
    },
    {
        metric: "Grounded",
        label: "Clinicians and researchers retrieve citation-backed answers from clinical content and policy libraries",
        sourceLabel: "AI Copilot information retrieval case study",
        sourceHref: "https://blog.maqsoftware.com/2024/07/streamlining-information-retrieval-with.html",
    },
];

export function HealthcareLifeSciencesImpactStats() {
    return (
        <ImpactStats
            eyebrow="Proven outcomes"
            title="Real impact for healthcare and life sciences leaders"
            sub="Patterns from MAQ Software cross-industry AI engagements applied to regulated, PHI-handling environments."
            stats={stats}
        />
    );
}