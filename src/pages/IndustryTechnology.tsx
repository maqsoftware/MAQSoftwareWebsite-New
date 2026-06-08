import { makeStyles } from "@fluentui/react-components";
import {
  Lightbulb24Regular,
  ChartMultiple24Regular,
  Search24Regular,
  Bot24Regular,
  Code24Regular,
  BranchFork24Regular,
} from "@fluentui/react-icons";
// import { TrustBanner } from "../components/TrustBanner";

import { IndustryHero } from "../components/industry/IndustryHero";
import { ImpactStats } from "../components/industry/ImpactStats";
import { SolutionShowcase } from "../components/industry/SolutionShowcase";
import { IndustryCaseStudies } from "../components/industry/IndustryCaseStudies";
import { MarketplaceOffers } from "../components/industry/MarketplaceOffers";
import { CTA } from "../components/CTA";
const useVisualStyles = makeStyles({
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
  pipelineBars: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },
  pipelineRow: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  pipelineLabel: { fontSize: "10px", color: "var(--maq-gray-500)", width: "50px" },
  pipelineTrack: { flex: 1, height: "8px", background: "var(--maq-gray-100)", borderRadius: "4px" },
  pipelineFill: { height: "100%", borderRadius: "4px" },
  spark: { display: "flex", alignItems: "flex-end", gap: "4px", height: "36px" },
  bar: { width: "10px", background: "var(--maq-gray-500)", borderRadius: "2px" },
  scoreBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: "4px",
  },
  scoreValue: {
    fontSize: "28px",
    fontWeight: 700,
    color: "var(--maq-red)",
    lineHeight: 1,
  },
  scoreLabel: { fontSize: "10px", color: "var(--maq-gray-500)" },
});

const sparkHeights = [35, 55, 45, 70, 60, 85, 75, 92];

function TechnologyHeroVisual() {
  const v = useVisualStyles();
  return (
    <>
      <div className={v.tile}>
        <div className={v.tileTitle}>
          <BranchFork24Regular /> CI/CD Pipeline
        </div>
        <div className={v.pipelineBars}>
          <div className={v.pipelineRow}>
            <span className={v.pipelineLabel}>Build</span>
            <div className={v.pipelineTrack}>
              <div className={v.pipelineFill} style={{ width: "92%", background: "#16a34a" }} />
            </div>
          </div>
          <div className={v.pipelineRow}>
            <span className={v.pipelineLabel}>Test</span>
            <div className={v.pipelineTrack}>
              <div className={v.pipelineFill} style={{ width: "78%", background: "var(--maq-red)" }} />
            </div>
          </div>
          <div className={v.pipelineRow}>
            <span className={v.pipelineLabel}>Deploy</span>
            <div className={v.pipelineTrack}>
              <div className={v.pipelineFill} style={{ width: "65%", background: "#2563eb" }} />
            </div>
          </div>
        </div>
      </div>
      <div className={v.tile}>
        <div className={v.tileTitle}>
          <Code24Regular /> Developer Velocity
        </div>
        <div className={v.spark}>
          {sparkHeights.map((h, i) => (
            <div key={i} className={v.bar} style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
      <div className={v.tile}>
        <div className={v.tileTitle}>Test Coverage</div>
        <div className={v.scoreBox}>
          <span className={v.scoreValue}>94%</span>
          <span className={v.scoreLabel}>Overall coverage</span>
        </div>
      </div>
    </>
  );
}

// --- Technology content data ---
const technologyStats = [
  {
    metric: "~70%",
    label: "Faster feature delivery via AI-assisted rapid prototyping at a global software company",
    sourceLabel: "Modernizing the software development lifecycle with GitHub Copilot",
    sourceHref: "https://blog.maqsoftware.com/2025/11/modernizing-software-development.html",
  },
  {
    metric: "4×",
    label: "Faster embedded analytics rollout — 12-month roadmap delivered in 3 months",
    sourceLabel: "Delivering embedded Power BI reporting with EmbedFAST",
    sourceHref: "https://blog.maqsoftware.com/2025/07/delivering-embedded-power-bi-reporting.html",
  },
  {
    metric: "~90%",
    label: "Bug resolution planning time cut from 5 hours to 30 minutes with DevelopFAST",
    sourceLabel: "Get ideas to code from months to hours with DevelopFAST",
    sourceHref: "https://blog.maqsoftware.com/2025/07/streamlining-developer-productivity.html",
  },
  {
    metric: "~50%",
    label: "Test case creation time savings with AI-generated test suites",
    sourceLabel: "Modernizing the software development lifecycle with GitHub Copilot",
    sourceHref: "https://blog.maqsoftware.com/2025/11/modernizing-software-development.html",
  },
];

const technologyAgents = [
  {
    name: "DevelopFAST",
    tagline: "From feature idea to production-ready code",
    icon: <Lightbulb24Regular />,
    description:
      "Transforms raw feature inputs into structured user stories, technical plans, test cases, and code using generative AI. A reflection phase interprets requirements, proposes three solution approaches, and auto-generates pseudocode and production-grade code. Bug resolution planning reduced from 5 hours to 30 minutes (~90% improvement). Test case creation achieves ~50% time savings.",
  },
  {
    name: "EmbedFAST",
    tagline: "Enterprise-grade Power BI embedding in weeks",
    icon: <ChartMultiple24Regular />,
    description:
      "Production-ready accelerator for Power BI embedded analytics. Ships export, bookmark, subscription, paginated reporting, and admin-level controls for managing subscriptions and report authoring. Reduced implementation timeline from 12 months to 3 months for a global software company. Minimizes custom development through prebuilt, scalable components.",
  },
  {
    name: "PR Review & Coding Standards Agent",
    tagline: "Consistent quality across every commit",
    icon: <Search24Regular />,
    description:
      "Evaluates PRs, flags style violations, detects anti-patterns, and drafts review comments. Improves code quality and reduces review effort across teams. Part of MAQ Software's agentic AI suite for accelerating software development workflows.",
  },
  {
    name: "Test Case Generation Agent",
    tagline: "Automated test design from requirements",
    icon: <Bot24Regular />,
    description:
      "Generates test cases from requirements and code changes, and links them to user stories. Improves coverage and reduces test planning time. Integrated into CI/CD workflows to speed up releases by ~30%.",
  },
];

const technologyCases = [
  {
    tag: "Agentic AI",
    title: "Accelerating software development with agentic AI solutions",
    teaser:
      "Agentic AI woven through SDLC to accelerate coding, review and release.",
    href: "https://blog.maqsoftware.com/2026/02/accelerating-software-development-with.html",
  },
  {
    tag: "GitHub Copilot",
    title: "Modernizing the software development lifecycle with GitHub Copilot",
    teaser:
      "Adopt GitHub Copilot at scale to lift dev productivity and quality.",
    href: "https://blog.maqsoftware.com/2025/11/modernizing-software-development.html",
  },
  {
    tag: "AI scaling",
    title: "Scaling AI for every customer and every developer with MAQ Software",
    teaser:
      "A reference architecture and delivery model for scaling agentic AI and Copilot adoption to every developer in the enterprise.",
    href: "https://blog.maqsoftware.com/2025/08/scaling-ai-for-every-customer-and-every.html",
  },
];

export function IndustryTechnology() {
  return (
    <>
      <IndustryHero
        eyebrow="Technology & Software"
        h1="Accelerate Software Delivery with AI-Powered Engineering"
        subhead="AI is reshaping how technology organizations build, test, and ship software. At MAQ Software, we help ISVs, cloud-native teams, and enterprise software organizations embed intelligence across the SDLC — from agentic code review to embedded analytics — so engineering teams spend less time on rework and more time on innovation."
        mailSubject="Technology - MAQ Software"
        visual={<TechnologyHeroVisual />}
      />

      <ImpactStats
        eyebrow="Proven outcomes"
        title="Real impact for technology leaders"
        sub="Numbers from MAQ Software engagements with global ISVs and enterprise software organizations."
        stats={technologyStats}
      />
      <SolutionShowcase
        sectionId="technology-solutions"
        eyebrow="Agentic AI"
        title="Make your engineering teams smarter with our Technology Agents"
        agents={technologyAgents}
        industryLabel="Technology"
      />
      <IndustryCaseStudies
        eyebrow="Technology case studies"
        title="How technology organizations move faster with MAQ Software"
        cases={technologyCases}
        seeAllLabel="See all technology case studies"
        seeAllHref="/insights/case-studies"
      />
      <CTA />
    </>
  );
}
