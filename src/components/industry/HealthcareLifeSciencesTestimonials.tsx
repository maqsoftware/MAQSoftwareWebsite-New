import { Testimonials } from "./Testimonials";

const quotes = [
    {
        body: "MAQ Software's HIPAA-aligned Copilot rollout let our care teams retrieve cited policy and guideline answers without leaving the EHR. Information retrieval that used to take minutes now takes seconds.",
        cite: "VP, Clinical Informatics — Integrated health system (placeholder)",
    },
    {
        body: "Our research data was scattered across labs, trial systems, and partner repositories. MAQ Software unified it on Microsoft Fabric with 21 CFR Part 11-aligned audit trails — cohort discovery cycles dropped from weeks to days.",
        cite: "Director, Research Informatics — Global life sciences company (placeholder)",
    },
];

export function HealthcareLifeSciencesTestimonials() {
    return <Testimonials quotes={quotes} />;
}