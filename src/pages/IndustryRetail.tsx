import { makeStyles } from "@fluentui/react-components";
import {
  ArrowTrendingLines20Filled,
  ThumbLike20Filled,
  ArrowTrendingLines24Regular,
  Clock24Regular,
  Chat24Regular,
  BuildingShop24Regular,
} from "@fluentui/react-icons";
// import { TrustBanner } from "../components/TrustBanner";

import { IndustryHero } from "../components/industry/IndustryHero";
import { ImpactStats } from "../components/industry/ImpactStats";
import { SolutionShowcase } from "../components/industry/SolutionShowcase";
import { IndustryCaseStudies } from "../components/industry/IndustryCaseStudies";
import { CTA } from "../components/CTA";

// --- Retail hero visual ---
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
  spark: { display: "flex", alignItems: "flex-end", gap: "4px", height: "36px" },
  bar: { width: "10px", background: "var(--maq-gray-500)", borderRadius: "2px" },
  shelfGrid: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "4px" },
  shelfCell: { aspectRatio: "1.4", background: "var(--maq-gray-100)", borderRadius: "3px" },
  recoRow: { display: "flex", alignItems: "center", gap: "10px", marginTop: "6px" },
  recoLabel: { fontSize: "11px", width: "70px", color: "var(--maq-gray-500)" },
  recoTrack: { flex: 1, height: "6px", background: "var(--maq-gray-100)", borderRadius: "3px" },
  recoFill: { height: "100%", background: "var(--maq-red)", borderRadius: "3px" },
});

const sparkHeights = [40, 60, 50, 78, 65, 90, 72, 95];
const shelf = Array.from({ length: 12 });

function RetailHeroVisual() {
  const v = useVisualStyles();
  return (
    <>
      <div className={v.tile}>
        <div className={v.tileTitle}>
          <ArrowTrendingLines20Filled /> Live SKU velocity
        </div>
        <div className={v.spark}>
          {sparkHeights.map((h, i) => (
            <div key={i} className={v.bar} style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
      <div className={v.tile}>
        <div className={v.tileTitle}>Shelf execution</div>
        <div className={v.shelfGrid}>
          {shelf.map((_, i) => (
            <div key={i} className={v.shelfCell} />
          ))}
        </div>
      </div>
      <div className={v.tile}>
        <div className={v.tileTitle}>
          <ThumbLike20Filled /> Today&apos;s pricing recommendations
        </div>
        <div className={v.recoRow}>
          <span className={v.recoLabel}>SKU 4421</span>
          <div className={v.recoTrack}>
            <div className={v.recoFill} style={{ width: "78%" }} />
          </div>
        </div>
        <div className={v.recoRow}>
          <span className={v.recoLabel}>SKU 8127</span>
          <div className={v.recoTrack}>
            <div className={v.recoFill} style={{ width: "62%" }} />
          </div>
        </div>
      </div>
    </>
  );
}

// --- Retail content data ---
const retailStats = [
  {
    metric: "8×",
    label: "Faster Power BI refresh for a top-3 US retailer",
    sourceLabel: "Microsoft Fabric BI modernization",
    sourceHref: "https://blog.maqsoftware.com/2025/12/modernizing-retail-business.html",
  },
  {
    metric: "Real-time",
    label: "Direct Store Delivery visibility on Microsoft Fabric",
    sourceLabel: "Real-time DSD case study",
    sourceHref: "https://blog.maqsoftware.com/2024/05/enabling-real-time-visibility-how.html",
  },
  {
    metric: "< 1 min",
    label: "Live KPIs replacing nightly batches at an organic supermarket chain",
    sourceLabel: "Organic supermarket case study",
    sourceHref: "https://blog.maqsoftware.com/2022/06/real-time-reporting-for-organic.html",
  },
  {
    metric: "Personalized",
    label: "Loyalty program lift across millions of members",
    sourceLabel: "Loyalty program case study",
    sourceHref: "https://blog.maqsoftware.com/2024/02/empowering-retail-growth-with-optimized.html",
  },
];

const retailAgents = [
  {
    name: "What-If Pricing Agent",
    tagline: "Pricing simulation",
    icon: <ArrowTrendingLines24Regular />,
    description:
      "Simulate pricing decisions before execution using multi-agent AI. Explore the power of pricing without the risk. Our agent simulates real-world pricing shifts, demand patterns, competitive moves, and procurement scenarios before you make a single change. See how each decision impacts revenue, margins, and supplier costs in seconds.",
  },
  {
    name: "Monday Morning Intel",
    tagline: "Weekly briefings",
    icon: <Clock24Regular />,
    description:
      "Start every week with a curated executive briefing. The agent consolidates weekend sales, inventory movement, supply alerts, and competitive news into a one-page digest delivered before 9 a.m. Monday.",
  },
  {
    name: "FindFAST",
    tagline: "Chat with your data",
    icon: <Chat24Regular />,
    description:
      "Natural-language interface over your Microsoft Fabric estate. Ask retail questions the way you'd ask a colleague — basket mix, regional shrink, vendor performance — and get governed, citation-backed answers in seconds.",
  },
  {
    name: "Smart Store Agent",
    tagline: "Connected store operations",
    icon: <BuildingShop24Regular />,
    description:
      "Copilot-powered assistant for store managers. Surfaces live sales, inventory, and workforce signals, then suggests guided next actions — from re-merchandising slow movers to re-routing labor.",
  },
];

const retailCases = [
  {
    tag: "Agentic AI",
    title: "Reshaping retail with agentic AI solutions",
    teaser:
      "Agentic AI deployed across pricing, merchandising, and store operations \u2014 unlocking faster decisions and resilient supply chains for a global retailer.",
    href: "https://blog.maqsoftware.com/2026/02/reshaping-retail-with-agentic-ai.html",
  },
  {
    tag: "Grocery \u00b7 Fabric",
    title: "Transforming grocery retail analytics with Microsoft Fabric",
    teaser:
      "Modernize grocery analytics on Fabric for sharper category, basket and supply-chain insights.",
    href: "https://blog.maqsoftware.com/2025/07/transforming-analytics-with-microsoft.html",
  },
  {
    tag: "Direct Store Delivery",
    title: "Enabling real-time visibility: Direct Store Delivery with Microsoft Fabric",
    teaser:
      "Deliver real-time DSD visibility on Fabric so field operations can act on live route and stock data.",
    href: "https://blog.maqsoftware.com/2024/05/enabling-real-time-visibility-how.html",
  },
];

const retailTestimonials = [
  {
    body: "MAQ Software's team helped us move from overnight batches to live store KPIs in under a quarter. Our managers now act on minute-by-minute signals instead of yesterday's report.",
    cite: "VP, Retail Analytics — Global grocery chain",
  },
  {
    body: "The pricing simulation agent gave our merchants the confidence to test scenarios safely. We shipped three campaigns in the time it used to take to debate one.",
    cite: "Director, Pricing & Promotions — Specialty retailer",
  },
];

export function IndustryRetail() {
  return (
    <>
      <IndustryHero
        eyebrow="Retail & Consumer Goods"
        h1="Powering the Next Era of Retail with AI-Driven Intelligence"
        subhead="AI is redefining how retailers operate, compete, and grow. At MAQ Software, we help retail and CPG organizations embed intelligence across the enterprise, from real-time decision-making to autonomous operations. Backed by deep Microsoft expertise and advanced data platforms, we enable seamless customer experiences, resilient supply chains, and intelligent store ecosystems."
        mailSubject="Retail - MAQ Software"
        scrollTargetId="retail-solutions"
        scrollLabel="Explore retail solutions"
        visual={<RetailHeroVisual />}
      />

      <ImpactStats
        eyebrow="Proven outcomes"
        title="Real impact for retail leaders"
        sub="Numbers from MAQ Software engagements with global retailers and CPG brands."
        stats={retailStats}
      />
      <SolutionShowcase
        sectionId="retail-solutions"
        eyebrow="Agentic AI"
        title="Make your retail operations smarter with our Retail Agents"
        agents={retailAgents}
      />
      <IndustryCaseStudies
        eyebrow="Retail case studies"
        title="How retailers move faster with MAQ Software"
        cases={retailCases}
        seeAllLabel="See all retail case studies"
        seeAllHref="/insights/case-studies"
      />
      {/* <Testimonials quotes={retailTestimonials} /> */}
      <CTA />
    </>
  );
}
