import {
    Beaker24Regular,
    Chat24Regular,
    HeartPulse24Regular,
    PersonHeart24Regular,
} from "@fluentui/react-icons";
import { SolutionShowcase } from "./SolutionShowcase";

const agents = [
    {
        name: "Clinical Knowledge Copilot",
        tagline: "Cited answers without leaving the EHR",
        icon: <Chat24Regular />,
        description:
            "Natural-language Copilot grounded in your clinical guidelines, formulary data, and policy library. Care teams ask plain-English questions and get citation-backed answers in seconds — without leaving the EHR workflow. Built on Azure OpenAI with role-based access controls aligned to your HIPAA and HITECH program.",
    },
    {
        name: "Care Coordination Agent",
        tagline: "Close cross-team gaps for high-risk patients",
        icon: <PersonHeart24Regular />,
        description:
            "Autonomous agent that watches admission, discharge, and transfer events across systems, then orchestrates the right next action — referrals, follow-ups, social-work outreach — so high-risk patients do not fall through cross-team gaps. Integrates with Epic, Cerner, and Microsoft Fabric to produce a single longitudinal view of every patient.",
    },
    {
        name: "Population Health Insights Agent",
        tagline: "Risk stratification on live data, not last year's report",
        icon: <HeartPulse24Regular />,
        description:
            "Risk-stratification and outcome-forecasting agent that runs on Microsoft Fabric or Databricks. Combines claims, clinical, and social determinants of health (SDoH) data to surface rising-risk cohorts and quantify intervention impact — so population health and value-based care teams act on live signals, not stale quality reports.",
    },
    {
        name: "Life Sciences Research Agent",
        tagline: "Cohort discovery from question to insight",
        icon: <Beaker24Regular />,
        description:
            "Unifies lab, clinical-trial, and real-world-evidence data into a governed research workspace on Microsoft Fabric and Databricks. The agent accelerates cohort discovery, study-feasibility analysis, and 21 CFR Part 11–ready audit trails so research teams move from question to insight without manual data wrangling.",
    },
];

export function HealthcareLifeSciencesSolutions() {
    return (
        <SolutionShowcase
            sectionId="hls-solutions"
            eyebrow="Agentic AI"
            title="Bring AI to the care continuum and the research lifecycle"
            agents={agents}
        />
    );
}