import type { ReactNode } from "react";
import {
  Bot24Regular,
  Settings24Regular,
  ArrowSwap24Regular,
  Code24Regular,
  ShieldCheckmark24Regular,
  CloudArrowUp24Regular,
} from "@fluentui/react-icons";

export interface ProductFeature {
  title: string;
  desc: string;
}

export interface ProductUseCase {
  industry: string;
  scenario: string;
}

export interface ProductImpact {
  value: string;
  label: string;
}

export interface Product {
  slug: string;
  initials: string;
  name: string;
  tagline: string;
  shortDesc: string;
  longDesc: string;
  heroIcon: ReactNode;
  image: string;
  tags: string[];
  features: ProductFeature[];
  useCases: ProductUseCase[];
  platforms: string[];
  impact: ProductImpact[];
}

// Theme-aligned inline SVG illustration (no external assets). Cool neutral
// dominant with red used as a single accent — matches Editorial Red palette.
function illustration(motif: "chat" | "gauge" | "swap" | "embed" | "shield" | "ingest") {
  const RED = "#c8102e";
  const RED_PALE = "#fde7ea";
  const CREAM = "#f7f8fa";
  const SLATE = "#475467";
  const GRAY_100 = "#eef0f3";
  const GRAY_200 = "#dde1e7";
  const BORDER = "#e4e7ec";
  const INK = "#0f172a";

  const chrome = `
    <rect x="20" y="20" width="520" height="320" rx="18" fill="#ffffff" stroke="${BORDER}" stroke-width="1.5"/>
    <rect x="20" y="20" width="520" height="44" rx="18" fill="${CREAM}"/>
    <circle cx="42" cy="42" r="5" fill="${GRAY_200}"/>
    <circle cx="60" cy="42" r="5" fill="${GRAY_200}"/>
    <circle cx="78" cy="42" r="5" fill="${GRAY_200}"/>
  `;

  let body = "";
  switch (motif) {
    case "chat":
      body = `
        <rect x="44" y="88" width="240" height="34" rx="17" fill="${GRAY_100}"/>
        <rect x="44" y="134" width="180" height="34" rx="17" fill="${GRAY_100}"/>
        <rect x="276" y="184" width="240" height="34" rx="17" fill="${CREAM}" stroke="${BORDER}"/>
        <rect x="44" y="232" width="300" height="34" rx="17" fill="${GRAY_100}"/>
        <rect x="44" y="280" width="80" height="34" rx="17" fill="${RED}"/>
        <text x="84" y="302" text-anchor="middle" fill="#fff" font-family="Segoe UI, system-ui" font-size="13" font-weight="600">Ask</text>
      `;
      break;
    case "gauge":
      body = `
        <circle cx="160" cy="200" r="78" fill="none" stroke="${GRAY_100}" stroke-width="14"/>
        <path d="M 160 122 A 78 78 0 0 1 232 244" fill="none" stroke="${RED}" stroke-width="14" stroke-linecap="round"/>
        <text x="160" y="208" text-anchor="middle" fill="${INK}" font-family="Segoe UI, system-ui" font-size="34" font-weight="700">98%</text>
        <text x="160" y="232" text-anchor="middle" fill="${SLATE}" font-family="Segoe UI, system-ui" font-size="12">Healthy</text>
        <rect x="300" y="120" width="220" height="14" rx="7" fill="${GRAY_100}"/>
        <rect x="300" y="120" width="170" height="14" rx="7" fill="${SLATE}"/>
        <rect x="300" y="150" width="220" height="14" rx="7" fill="${GRAY_100}"/>
        <rect x="300" y="150" width="120" height="14" rx="7" fill="${SLATE}"/>
        <rect x="300" y="180" width="220" height="14" rx="7" fill="${GRAY_100}"/>
        <rect x="300" y="180" width="200" height="14" rx="7" fill="${SLATE}"/>
        <rect x="300" y="220" width="220" height="80" rx="10" fill="${CREAM}" stroke="${BORDER}"/>
      `;
      break;
    case "swap":
      body = `
        <rect x="44" y="100" width="180" height="220" rx="12" fill="${CREAM}" stroke="${BORDER}"/>
        <text x="134" y="128" text-anchor="middle" fill="${SLATE}" font-family="Segoe UI, system-ui" font-size="12" font-weight="700">LEGACY</text>
        <rect x="60" y="146" width="148" height="10" rx="5" fill="${GRAY_200}"/>
        <rect x="60" y="166" width="120" height="10" rx="5" fill="${GRAY_200}"/>
        <rect x="60" y="186" width="140" height="10" rx="5" fill="${GRAY_200}"/>
        <rect x="60" y="206" width="100" height="10" rx="5" fill="${GRAY_200}"/>
        <rect x="60" y="226" width="130" height="10" rx="5" fill="${GRAY_200}"/>
        <rect x="336" y="100" width="180" height="220" rx="12" fill="#fff" stroke="${BORDER}"/>
        <text x="426" y="128" text-anchor="middle" fill="${INK}" font-family="Segoe UI, system-ui" font-size="12" font-weight="700">FABRIC</text>
        <rect x="352" y="146" width="148" height="10" rx="5" fill="${SLATE}"/>
        <rect x="352" y="166" width="120" height="10" rx="5" fill="${SLATE}"/>
        <rect x="352" y="186" width="140" height="10" rx="5" fill="${SLATE}"/>
        <rect x="352" y="206" width="100" height="10" rx="5" fill="${SLATE}"/>
        <rect x="352" y="226" width="130" height="10" rx="5" fill="${SLATE}"/>
        <circle cx="280" cy="210" r="26" fill="${RED}"/>
        <path d="M 268 204 L 292 204 M 286 198 L 292 204 L 286 210 M 292 218 L 268 218 M 274 224 L 268 218 L 274 212" stroke="#fff" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      `;
      break;
    case "embed":
      body = `
        <rect x="44" y="88" width="472" height="44" rx="8" fill="${CREAM}" stroke="${BORDER}"/>
        <rect x="60" y="104" width="100" height="12" rx="6" fill="${RED}"/>
        <rect x="180" y="104" width="60" height="12" rx="6" fill="${GRAY_200}"/>
        <rect x="252" y="104" width="60" height="12" rx="6" fill="${GRAY_200}"/>
        <rect x="44" y="146" width="225" height="170" rx="10" fill="#fff" stroke="${BORDER}"/>
        <rect x="60" y="162" width="80" height="10" rx="5" fill="${SLATE}"/>
        <rect x="60" y="190" width="193" height="110" rx="6" fill="${CREAM}"/>
        <rect x="76" y="220" width="20" height="64" fill="${SLATE}"/>
        <rect x="108" y="240" width="20" height="44" fill="${SLATE}"/>
        <rect x="140" y="200" width="20" height="84" fill="${SLATE}"/>
        <rect x="172" y="232" width="20" height="52" fill="${SLATE}"/>
        <rect x="204" y="216" width="20" height="68" fill="${SLATE}"/>
        <rect x="291" y="146" width="225" height="170" rx="10" fill="#fff" stroke="${BORDER}"/>
        <rect x="307" y="162" width="80" height="10" rx="5" fill="${SLATE}"/>
        <circle cx="403" cy="240" r="56" fill="none" stroke="${GRAY_100}" stroke-width="16"/>
        <path d="M 403 184 A 56 56 0 0 1 459 240" fill="none" stroke="${RED}" stroke-width="16" stroke-linecap="round"/>
        <text x="403" y="246" text-anchor="middle" fill="${INK}" font-family="Segoe UI, system-ui" font-size="20" font-weight="700">62%</text>
      `;
      break;
    case "shield":
      body = `
        <path d="M 200 100 L 280 130 L 280 220 Q 280 270 200 300 Q 120 270 120 220 L 120 130 Z" fill="${CREAM}" stroke="${SLATE}" stroke-width="2"/>
        <path d="M 170 200 L 195 224 L 240 178" stroke="${RED}" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
        <rect x="320" y="120" width="200" height="40" rx="8" fill="#fff" stroke="${BORDER}"/>
        <circle cx="340" cy="140" r="8" fill="${SLATE}"/>
        <rect x="358" y="134" width="140" height="12" rx="6" fill="${GRAY_200}"/>
        <rect x="320" y="172" width="200" height="40" rx="8" fill="#fff" stroke="${BORDER}"/>
        <circle cx="340" cy="192" r="8" fill="${SLATE}"/>
        <rect x="358" y="186" width="120" height="12" rx="6" fill="${GRAY_200}"/>
        <rect x="320" y="224" width="200" height="40" rx="8" fill="#fff" stroke="${BORDER}"/>
        <circle cx="340" cy="244" r="8" fill="${SLATE}"/>
        <rect x="358" y="238" width="150" height="12" rx="6" fill="${GRAY_200}"/>
        <rect x="320" y="276" width="200" height="40" rx="8" fill="#fff" stroke="${RED}" stroke-width="1.5"/>
        <text x="420" y="302" text-anchor="middle" fill="${RED}" font-family="Segoe UI, system-ui" font-size="13" font-weight="700">CERTIFIED</text>
      `;
      break;
    case "ingest":
      body = `
        <rect x="44" y="100" width="100" height="60" rx="8" fill="${CREAM}" stroke="${BORDER}"/>
        <text x="94" y="136" text-anchor="middle" fill="${SLATE}" font-family="Segoe UI, system-ui" font-size="11" font-weight="700">SOURCE</text>
        <rect x="44" y="180" width="100" height="60" rx="8" fill="${CREAM}" stroke="${BORDER}"/>
        <text x="94" y="216" text-anchor="middle" fill="${SLATE}" font-family="Segoe UI, system-ui" font-size="11" font-weight="700">SOURCE</text>
        <rect x="44" y="260" width="100" height="60" rx="8" fill="${CREAM}" stroke="${BORDER}"/>
        <text x="94" y="296" text-anchor="middle" fill="${SLATE}" font-family="Segoe UI, system-ui" font-size="11" font-weight="700">SOURCE</text>
        <path d="M 144 130 C 200 130 200 210 256 210" stroke="${GRAY_200}" stroke-width="2.5" fill="none"/>
        <path d="M 144 210 L 256 210" stroke="${GRAY_200}" stroke-width="2.5" fill="none"/>
        <path d="M 144 290 C 200 290 200 210 256 210" stroke="${GRAY_200}" stroke-width="2.5" fill="none"/>
        <rect x="256" y="160" width="120" height="100" rx="10" fill="#fff" stroke="${RED}" stroke-width="2"/>
        <text x="316" y="200" text-anchor="middle" fill="${INK}" font-family="Segoe UI, system-ui" font-size="12" font-weight="700">LoadFAST</text>
        <text x="316" y="218" text-anchor="middle" fill="${SLATE}" font-family="Segoe UI, system-ui" font-size="10">metadata-driven</text>
        <rect x="276" y="232" width="80" height="14" rx="4" fill="${RED_PALE}"/>
        <path d="M 376 210 L 420 210" stroke="${GRAY_200}" stroke-width="2.5" fill="none"/>
        <rect x="420" y="142" width="96" height="44" rx="8" fill="#fff" stroke="${BORDER}"/>
        <text x="468" y="170" text-anchor="middle" fill="${SLATE}" font-family="Segoe UI, system-ui" font-size="11" font-weight="700">BRONZE</text>
        <rect x="420" y="194" width="96" height="44" rx="8" fill="#fff" stroke="${BORDER}"/>
        <text x="468" y="222" text-anchor="middle" fill="${SLATE}" font-family="Segoe UI, system-ui" font-size="11" font-weight="700">SILVER</text>
        <rect x="420" y="246" width="96" height="44" rx="8" fill="${CREAM}" stroke="${RED}" stroke-width="1.5"/>
        <text x="468" y="274" text-anchor="middle" fill="${RED}" font-family="Segoe UI, system-ui" font-size="11" font-weight="700">GOLD</text>
      `;
      break;
  }

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 360">${chrome}${body}</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export const products: Product[] = [
  {
    slug: "fabric-admin-agent",
    initials: "FA",
    name: "Fabric Admin Agent",
    tagline: "Fabric capacity AI",
    shortDesc:
      "AI-powered capacity management for Microsoft Fabric admins. Detects anomalies and spikes in real time, forecasts demand, and recommends actions to reduce throttling, eliminate waste, and optimize cost.",
    longDesc:
      "Fabric Admin Agent gives Microsoft Fabric administrators an AI copilot for capacity. It detects anomalies and usage spikes in real time, forecasts upcoming demand, and recommends concrete actions to reduce throttling, eliminate idle waste, and right-size spend — so platform teams stay ahead of capacity issues instead of firefighting them.",
    heroIcon: <Settings24Regular />,
    image: illustration("gauge"),
    tags: ["Fabric", "AI Agent", "Governance"],
    features: [
      { title: "24/7 health monitoring", desc: "Capacity utilization, refresh SLAs, and item failures tracked across every workspace." },
      { title: "Proactive risk alerts", desc: "Surface issues before business users hit broken reports or throttled queries." },
      { title: "One-click remediation", desc: "Suggested fixes (resize, reassign, archive) execute with full audit trail." },
      { title: "Tenant-wide visibility", desc: "Single pane across capacities, domains, workspaces, lakehouses, and warehouses." },
    ],
    useCases: [
      { industry: "Enterprise IT", scenario: "Platform owners prevent Friday-afternoon capacity outages." },
      { industry: "FinOps", scenario: "Right-size F-SKUs based on observed peak workloads, not guesses." },
      { industry: "Data governance", scenario: "Catch sprawl — orphaned workspaces, unused items, drifted permissions." },
    ],
    platforms: ["Microsoft Fabric", "Power BI", "Microsoft Purview"],
    impact: [
      { value: "60%", label: "Reduction in capacity incidents" },
      { value: "24/7", label: "Autonomous monitoring coverage" },
      { value: "5 min", label: "Mean time to detect drift" },
    ],
  },
  {
    slug: "migratefast",
    initials: "MF",
    name: "MigrateFAST",
    tagline: "Migration accelerator",
    shortDesc:
      "AI-powered migration of legacy ETL (Alteryx, Informatica) and BI workloads (Tableau, SAP BO, SAP Crystal, Qlik, Cognos) to Microsoft Fabric and Power BI — up to 70–80% faster.",
    longDesc:
      "MigrateFAST is an AI-assisted migration factory for enterprises moving off legacy BI and data-prep stacks. It parses your existing estate — Tableau workbooks, SAP BusinessObjects universes and Web Intelligence reports, Crystal Reports, Qlik apps, Alteryx workflows, and Informatica mappings — and generates equivalent Power BI semantic models, Microsoft Fabric pipelines, and Fabric Warehouse objects with traceable lineage and side-by-side validation.",
    heroIcon: <ArrowSwap24Regular />,
    image: illustration("swap"),
    tags: ["Power BI", "Fabric", "Tableau", "SAP BO", "Qlik"],
    features: [
      { title: "Multi-source coverage", desc: "Tableau, SAP BusinessObjects (Web Intelligence, Crystal), Qlik Sense / QlikView, Alteryx, and Informatica PowerCenter parsed by a single toolchain." },
      { title: "AI-assisted code conversion", desc: "70%+ of legacy SQL, ETL flows, and report definitions converted automatically with human-in-the-loop QA." },
      { title: "Side-by-side validation", desc: "Row-level and aggregate parity checks between the legacy report and the new Power BI / Fabric output." },
      { title: "Lineage preserved", desc: "Every Power BI measure, Fabric pipeline, and warehouse table traces back to its source object for auditability." },
      { title: "Phased cutover", desc: "Move workloads incrementally by domain or business unit — no big-bang weekends." },
    ],
    useCases: [
      { industry: "Enterprise BI", scenario: "Retire Tableau Server and SAP BusinessObjects to Power BI on Microsoft Fabric." },
      { industry: "Data engineering", scenario: "Convert Informatica PowerCenter mappings and Alteryx workflows into Fabric Data Factory pipelines." },
      { industry: "Public sector", scenario: "Move Crystal Reports and Qlik estates to Power BI with a full compliance and lineage trail." },
    ],
    platforms: ["Power BI", "Microsoft Fabric", "Fabric Data Factory", "Fabric Warehouse", "Azure SQL"],
    impact: [
      { value: "120+", label: "Enterprise migrations delivered" },
      { value: "70%", label: "Faster than manual rewrite" },
      { value: "$4M+", label: "Average legacy license retired" },
    ],
  },
  {
    slug: "embedfast",
    initials: "EF",
    name: "EmbedFAST",
    tagline: "Power BI embedding",
    shortDesc:
      "Seamlessly embed Power BI into your applications with role-based access, unlimited tenant/workspace onboarding, and tailored features — without heavy integration or licensing overhead.",
    longDesc:
      "EmbedFAST is a production-grade framework for embedding Power BI into SaaS products. It handles tenant isolation, token lifecycle, theming, and usage telemetry — so your engineering team focuses on product, not on plumbing.",
    heroIcon: <Code24Regular />,
    image: illustration("embed"),
    tags: ["Power BI", "SaaS", "Embedded analytics"],
    features: [
      { title: "Multi-tenant security", desc: "RLS, OLS, and workspace partitioning patterns proven across enterprise SaaS deployments." },
      { title: "Token management", desc: "Automated embed-token rotation and capacity assignment." },
      { title: "White-label theming", desc: "Match your product's brand without forking Power BI themes." },
      { title: "Usage telemetry", desc: "Built-in instrumentation for adoption, performance, and feature usage." },
    ],
    useCases: [
      { industry: "SaaS ISVs", scenario: "Ship customer-facing analytics in weeks instead of quarters." },
      { industry: "Enterprise apps", scenario: "Embed governed Power BI into internal portals at scale." },
    ],
    platforms: ["Power BI Embedded", "Azure", "React / .NET"],
    impact: [
      { value: "10×", label: "Faster than building embedding from scratch" },
      { value: "40+", label: "SaaS products shipped" },
      { value: "99.95%", label: "Embed-token availability SLO" },
    ],
  },
  {
    slug: "ai-datalens",
    initials: "AI",
    name: "AI-DataLens",
    tagline: "Conversational analytics",
    shortDesc:
      "Interact with enterprise datasets in natural language. No SQL or DAX — ask questions and get instant answers, with row-level security and audit preserved.",
    longDesc:
      "AI-DataLens turns Power BI semantic models into a chat interface. Business users ask questions in plain English; the agent returns governed, citation-backed answers — respecting every row-level security rule, workspace permission, and audit policy you already have in place.",
    heroIcon: <Bot24Regular />,
    image: illustration("chat"),
    tags: ["GenAI", "Power BI", "Azure OpenAI"],
    features: [
      { title: "Natural language over Power BI", desc: "Ask questions across any certified semantic model — no DAX, no report-hopping." },
      { title: "Row-level security preserved", desc: "Every answer respects RLS, OLS, and workspace permissions out of the box." },
      { title: "Citations and lineage", desc: "Each response links back to the measure, table, and report it came from." },
      { title: "Audit-ready", desc: "Full prompt + response logging into your Microsoft Purview tenant." },
    ],
    useCases: [
      { industry: "Retail", scenario: "Merchants ask basket and shrink questions during weekly reviews." },
      { industry: "Financial services", scenario: "Analysts query portfolio exposure without writing DAX." },
      { industry: "Healthcare", scenario: "Operations leaders ask census and staffing questions from their phone." },
    ],
    platforms: ["Microsoft Fabric", "Power BI", "Azure OpenAI"],
    impact: [
      { value: "85%", label: "Faster time to answer vs. report search" },
      { value: "30+", label: "Enterprise tenants deployed" },
      { value: "100%", label: "RLS & audit policies preserved" },
    ],
  },
  {
    slug: "loadfast",
    initials: "LF",
    name: "LoadFAST",
    tagline: "Power BI load testing",
    shortDesc:
      "Web-based load-testing for Power BI on Microsoft Fabric — simulates real-time user traffic to right-size capacity, prevent slowdowns, and cut over-provisioning.",
    longDesc:
      "LoadFAST is a web application that load-tests Power BI environments on Microsoft Fabric. Build collections of reports and pages, simulate concurrent users and real interactions (slicers, filters, RLS), and get capacity-sizing insights — so you avoid both throttling and over-provisioning.",
    heroIcon: <CloudArrowUp24Regular />,
    image: illustration("ingest"),
    tags: ["Power BI", "Fabric", "Performance"],
    features: [
      { title: "Optimize capacity", desc: "Identify the ideal capacity setup across multiple reports — no under- or over-provisioning." },
      { title: "Simulate real-time user traffic", desc: "Model concurrent users, slicers, filters, and RLS to replicate real-world workloads on your capacity." },
      { title: "Track user interactions", desc: "See how real-time actions like slicing and filtering impact report load time." },
      { title: "Automated accuracy", desc: "Precise capacity insights from automated runs — eliminate human error." },
    ],
    useCases: [
      { industry: "Enterprise BI", scenario: "Right-size F-SKU capacity before a major report rollout." },
      { industry: "Platform teams", scenario: "Prevent Friday-afternoon capacity throttling for high-traffic dashboards." },
    ],
    platforms: ["Power BI", "Microsoft Fabric", "Azure"],
    impact: [
      { value: "50+", label: "Concurrent users on the Free plan" },
      { value: "F-SKU", label: "Right-sized Fabric capacity with confidence" },
      { value: "Real", label: "Real-time user traffic simulated — not synthetic load" },
    ],
  },
  {
    slug: "certyfast",
    initials: "CF",
    name: "CertyFAST",
    tagline: "Power BI quality control",
    shortDesc:
      "Streamlining Power BI model development with automated error detection, DAX measure formatting, and simplified documentation. Ensure top-quality reports and adherence to best practices.",
    longDesc:
      "CertyFAST runs your Power BI certification gate as code. Every promoted report passes through automated lineage, performance, accessibility, and data-quality checks — so your certified badge actually means something.",
    heroIcon: <ShieldCheckmark24Regular />,
    image: illustration("shield"),
    tags: ["Governance", "Power BI", "Quality"],
    features: [
      { title: "Automated certification gates", desc: "Lineage, perf, accessibility, and DQ checks run on every promotion." },
      { title: "Lineage at scale", desc: "Trace any visual back to its measure, table, source — and back again." },
      { title: "Performance budgets", desc: "Block reports that exceed render or refresh thresholds." },
      { title: "Approver workflows", desc: "Reviewers see exactly what changed and why it passes or fails." },
    ],
    useCases: [
      { industry: "Enterprise BI", scenario: "Make certified a real bar, not a vibes-based label." },
      { industry: "Center of Excellence", scenario: "Govern hundreds of analysts without manual review queues." },
    ],
    platforms: ["Power BI", "Microsoft Fabric", "Azure DevOps"],
    impact: [
      { value: "3×", label: "Faster certification turnaround" },
      { value: "500+", label: "Reports certified per month" },
      { value: "0", label: "Manual review bottlenecks" },
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
