import { makeStyles } from "@fluentui/react-components";
import {
  Bot24Regular,
  Lightbulb24Regular,
  ChartMultiple24Regular,
  Search24Regular,
  ArrowTrendingLines20Filled,
} from "@fluentui/react-icons";
import { IndustryHero } from "../components/industry/IndustryHero";
import { TrustBanner } from "../components/TrustBanner";
import { ImpactStats } from "../components/industry/ImpactStats";
import { SolutionShowcase } from "../components/industry/SolutionShowcase";
import { IndustryCaseStudies } from "../components/industry/IndustryCaseStudies";
import { CTA } from "../components/CTA";

// ---------------------------------------------------------------------------
// Hero visual — technology-themed dashboard tiles
// ---------------------------------------------------------------------------

const pipelineSteps = [
  { label: "Commit", pct: 100 },
  { label: "Build", pct: 100 },
  { label: "Test", pct: 82 },
  { label: "Deploy", pct: 68 },
];

const sparkHeights = [55, 72, 60, 88, 70, 95, 78, 99];

const useVisualStyles = makeStyles({
  grid: { display: "grid", gap: "12px" },
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
  spark: { display: "flex", alignItems: "flex-end", gap: "4px", height: "36px" },
  bar: { width: "10px", background: "var(--maq-red)", borderRadius: "2px", opacity: "0.7" },
  pipelineRow: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "6px",
  },
  pipelineLabel: {
    fontSize: "11px",
    width: "52px",
    color: "var(--maq-gray-500)",
    flexShrink: 0,
  },
  pipelineTrack: {
    flex: 1,
    height: "6px",
    background: "var(--maq-off-white)",
    borderRadius: "3px",
  },
  pipelineFill: { height: "100%", background: "var(--maq-red)", borderRadius: "3px" },
  coverageScore: {
    fontSize: "28px",
    fontWeight: 700,
    color: "var(--maq-red)",
    lineHeight: 1,
    marginBottom: "4px",
  },
  coverageLabel: {
    fontSize: "11px",
    color: "var(--maq-gray-500)",
    textTransform: "uppercase",
    letterSpacing: "0.06em",
  },
});

function TechHeroVisual() {
  const s = useVisualStyles();
  return (
    <div className={s.grid}>
      <div className={s.tile}>
        <div className={s.tileTitle}>
          <ArrowTrendingLines20Filled /> Developer velocity
        </div>
        <div className={s.spark}>
          {sparkHeights.map((h, i) => (
            <div key={i} className={s.bar} style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
      <div className={s.tile}>
        <div className={s.tileTitle}>CI/CD pipeline health</div>
        {pipelineSteps.map((step) => (
          <div key={step.label} className={s.pipelineRow}>
            <span className={s.pipelineLabel}>{step.label}</span>
            <div className={s.pipelineTrack}>
              <div className={s.pipelineFill} style={{ width: `${step.pct}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className={s.tile}>
        <div className={s.coverageScore}>87%</div>
        <div className={s.coverageLabel}>Automated test coverage</div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Section data — sourced from published blog posts & case-studies.md
// ---------------------------------------------------------------------------

const techStats = [
  {
    metric: "~70%",
    label: "Faster feature delivery via AI-assisted rapid prototyping at a global software company",
    sourceLabel: "GitHub Copilot SDLC case study",
    sourceHref: "https://blog.maqsoftware.com/2025/11/modernizing-software-development.html",
  },
  {
    metric: "4×",
    label: "Faster embedded analytics rollout — 12-month roadmap delivered in 3 months",
    sourceLabel: "EmbedFAST ISV case study",
    sourceHref: "https://blog.maqsoftware.com/2025/07/delivering-embedded-power-bi-reporting.html",
  },
  {
    metric: "~90%",
    label: "Bug resolution planning time cut from 5 hours to 30 minutes with DevelopFAST",
    sourceLabel: "DevelopFAST case study",
    sourceHref: "https://blog.maqsoftware.com/2025/07/streamlining-developer-productivity.html",
  },
  {
    metric: "~50%",
    label: "Test case creation time savings with AI-generated test suites",
    sourceLabel: "GitHub Copilot SDLC case study",
    sourceHref: "https://blog.maqsoftware.com/2025/11/modernizing-software-development.html",
  },
];

const techAgents = [
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

const techCases = [
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
    tag: "Power BI Embedded",
    title: "Delivering embedded Power BI reporting with EmbedFAST",
    teaser:
      "ISV embeds Power BI into SaaS product using EmbedFAST accelerator.",
    href: "https://blog.maqsoftware.com/2025/07/delivering-embedded-power-bi-reporting.html",
  },
];

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export function IndustryTechnology() {
  return (
    <>
      <IndustryHero
        eyebrow="Technology & Software"
        h1="Accelerate Software Delivery with AI-Powered Engineering"
        subhead="AI is reshaping how technology organizations build, test, and ship software. At MAQ Software, we help ISVs, cloud-native teams, and enterprise software organizations embed intelligence across the SDLC — from agentic code review to embedded analytics — so engineering teams spend less time on rework and more time on innovation."
        mailSubject="Technology - MAQ Software"
        scrollTargetId="technology-solutions"
        scrollLabel="Explore tech solutions"
        visual={<TechHeroVisual />}
      />
      <TrustBanner />
      <ImpactStats
        stats={techStats}
        title="Real impact for technology leaders"
        sub="Numbers from MAQ Software engagements with global ISVs and enterprise software organizations."
      />
      <SolutionShowcase
        agents={techAgents}
        sectionId="technology-solutions"
        title="Make your engineering teams smarter with our Technology Agents"
        industryLabel="Technology"
      />
      <IndustryCaseStudies
        cases={techCases}
        eyebrow="Technology case studies"
        title="How technology organizations move faster with MAQ Software"
        seeAllHref="https://maqsoftware.com/case-studies"
        seeAllLabel="See all technology case studies"
      />
      <CTA />
    </>
  );
}
