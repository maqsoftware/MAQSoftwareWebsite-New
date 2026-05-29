import { MarketplaceOffers } from "./MarketplaceOffers";

const offers = [
    {
        pill: "Clinical analytics",
        title: "Clinical Operations & Care Quality Analytics for Healthcare: 4-Week PoC",
        desc: "A 4-week proof of concept that unifies EHR, claims, and operational data on Microsoft Fabric to expose care-quality gaps and accelerate value-based care reporting.",
        href: "#",
    },
    {
        pill: "Patient experience",
        title: "Patient Engagement & Care Navigation for Healthcare: 2-Week Assessment",
        desc: "A 2-week assessment that maps the patient journey across digital and clinical touchpoints, identifying AI-driven engagement and navigation opportunities.",
        href: "#",
    },
    {
        pill: "Life sciences",
        title: "Research Data Unification for Life Sciences: 4-Week PoC",
        desc: "A 4-week proof of concept that unifies lab, clinical-trial, and real-world-evidence data on Microsoft Fabric and Databricks to accelerate cohort discovery and study feasibility.",
        href: "#",
    },
    {
        pill: "Compliance",
        title: "HIPAA & 21 CFR Part 11 Data Governance Assessment",
        desc: "A 2-week assessment of your data governance posture against HIPAA, HITECH, and 21 CFR Part 11 requirements with Microsoft Purview-aligned remediations.",
        href: "#",
    },
];

export function HealthcareLifeSciencesMarketplaceOffers() {
    return (
        <MarketplaceOffers
            sub="Accelerate healthcare and life sciences outcomes with ready-to-deploy Microsoft Azure Marketplace offerings — spanning clinical analytics, patient experience, research data unification, and regulated-data governance."
            offers={offers}
        />
    );
}