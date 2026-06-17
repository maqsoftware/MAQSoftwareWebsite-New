import type { ReactNode } from "react";
import { makeStyles, tokens } from "@fluentui/react-components";
import {
  Layer24Regular,
  Sparkle24Regular,
  DataBarVertical24Regular,
  Grid24Regular,
  Cloud24Regular,
  ShieldCheckmark24Regular,
  TopSpeed24Regular,
  ArrowSwap24Regular,
  Chat24Regular,
  Window24Regular,
  Pulse24Regular,
  CheckmarkCircle24Regular,
  ArrowUpRight16Regular,
  Shield24Regular,
  ShoppingBag24Regular,
  BuildingBank24Regular,
  HeartPulse24Regular,
  Wrench24Regular,
  Laptop24Regular,
  BuildingGovernment24Regular,
} from "@fluentui/react-icons";
import { Link, useNavigate } from "react-router-dom";
import { PrimaryButton, OutlineButton } from "../components/buttonsV2";
import { useContactAction } from "../lib/contact";

/* ==================================================================
   HomeV2 — replica of "MAQ Homepage - Bento" (folder design (3))
   ------------------------------------------------------------------
   Infosys-style bento language: editorial hero, capabilities mosaic,
   impact-driven product cards, a case-studies media bento, dark CTA.
   Routed at /homev2; uses the app's global Header + FooterV2.
   Squared cards, MAQ red + ink + grays, Roboto, no photography.
   ================================================================== */

/* ---------- Geometric art (featured case background) -------------- */
function CardArt({ idx = 0 }: { idx?: number }) {
  const motifs: ReactNode[] = [
    <g key="m0">
      <circle cx="150" cy="155" r="92" fill="none" stroke={tokens.colorNeutralStroke2} strokeWidth="14" />
      <path d="M150 63 A92 92 0 0 1 242 155" fill="none" stroke="#BA141A" strokeWidth="14" strokeLinecap="round" />
      <circle cx="150" cy="155" r="56" fill="none" stroke={tokens.colorNeutralForeground1} strokeWidth="3" />
    </g>,
    <g key="m1">
      {Array.from({ length: 24 }).map((_, i) => (
        <circle key={i} cx={70 + (i % 6) * 34} cy={70 + Math.floor(i / 6) * 34} r="4.5" fill={i === 14 ? "#BA141A" : tokens.colorNeutralStroke1} />
      ))}
    </g>,
    <g key="m2">
      <rect x="96" y="86" width="120" height="120" rx="14" fill="none" stroke={tokens.colorNeutralForeground1} strokeWidth="3" />
      <rect x="150" y="130" width="120" height="120" rx="14" fill="#F2D0D1" />
      <circle cx="150" cy="130" r="22" fill="#BA141A" />
    </g>,
    <g key="m3">
      <line x1="70" y1="240" x2="330" y2="240" stroke={tokens.colorNeutralStroke2} strokeWidth="3" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={84 + i * 64} y={210 - i * 44} width="40" height={30 + i * 44} rx="8" fill={i === 3 ? "#BA141A" : tokens.colorNeutralForeground1} opacity={i === 3 ? 1 : 0.86 - i * 0.12} />
      ))}
      <polyline points="104,150 168,120 232,96 296,58" fill="none" stroke="#BA141A" strokeWidth="3" strokeDasharray="4 6" strokeLinecap="round" />
    </g>,
  ];
  return (
    <svg viewBox="0 0 400 310" preserveAspectRatio="xMidYMid slice" style={{ display: "block", width: "100%", height: "100%" }}>
      <rect width="400" height="310" style={{ fill: "var(--maq-gray-50)" }} />
      {motifs[idx % motifs.length]}
    </svg>
  );
}

/* ---------- Content ----------------------------------------------- */
type CapVariant = "dark" | "red" | "light" | "tint";
interface Capability {
  area: string; variant: CapVariant; kicker: string;
  title: string; desc: string; to: string;
  tags?: string[]; bigIcon: ReactNode;
}

const CAPS: Capability[] = [
  { area: "a", variant: "light", kicker: "Data & AI platforms",
    title: "Build the foundation enterprise AI runs on",
    desc: "Unify fragmented data, shorten time-to-insight, and make AI production-ready.",
    tags: ["Microsoft Fabric", "Azure Databricks", "Snowflake", "Data Factory"], bigIcon: <Layer24Regular />,
    to: "/services/data-and-analytics" },
  { area: "b", variant: "light", kicker: "AI solutions & agents",
    title: "Deploy copilots and autonomous agents at scale",
    desc: "Automate decisions, lift productivity, and ship AI with guardrails built in.",
    tags: ["Azure AI Foundry", "Azure OpenAI", "Copilot Studio", "Agentic AI"], bigIcon: <Sparkle24Regular />,
    to: "/services/agentic-ai" },
  { area: "c", variant: "light", kicker: "Insights & analytics",
    title: "Decide at the speed of your data", desc: "Surface trends sooner, act on them faster, and compound growth quarter over quarter.",
    tags: ["Power BI", "Microsoft Fabric", "Databricks SQL", "Predictive Analytics"], bigIcon: <DataBarVertical24Regular />, to: "/services/reporting-bi" },
  { area: "d", variant: "light", kicker: "Business apps",
    title: "Run modern operations on intelligent apps", desc: "Automate workflows end to end and scale without adding headcount.",
    tags: ["Dynamics 365", "Power Platform", "Power Apps", "Power Automate"], bigIcon: <Grid24Regular />, to: "/services/business-apps" },
  { area: "e", variant: "light", kicker: "Cloud modernization",
    title: "Modernize faster, innovate without limits",
    desc: "Migrate securely, retire legacy cost, and scale with confidence on Azure.",
    tags: ["Microsoft Azure", "Azure Kubernetes", "Cloud Migration", "FinOps"], bigIcon: <Cloud24Regular />,
    to: "/services/cloud" },
  { area: "f", variant: "light", kicker: "Security & governance",
    title: "Turn trust into a competitive advantage",
    desc: "Protect data and AI, satisfy regulators, and accelerate adoption across the business.",
    tags: ["Microsoft Purview", "Microsoft Defender", "Microsoft Entra", "Unity Catalog"], bigIcon: <ShieldCheckmark24Regular />,
    to: "/services/security-compliance" },
];

interface ProductItem { icon: ReactNode; name: string; impact: string; desc: string; to: string; }
const PRODUCTS: ProductItem[] = [
  { icon: <TopSpeed24Regular />, name: "Fabric Admin Agent", impact: "Lower Fabric capacity cost",
    desc: "Predict demand, prevent throttling, and cut Fabric capacity cost with AI-driven management.", to: "/products/fabric-admin-agent" },
  { icon: <ArrowSwap24Regular />, name: "MigrateFAST", impact: "Migrate in weeks, not quarters",
    desc: "Move from Tableau, Cognos, Qlik, or MicroStrategy to Fabric in weeks, not quarters.", to: "/products/migratefast" },
  { icon: <Chat24Regular />, name: "AI-DataLens", impact: "Answers in plain language, instantly",
    desc: "Ask questions in plain language and get instant answers — with row-level security intact.", to: "/products/ai-datalens" },
  { icon: <Window24Regular />, name: "EmbedFAST", impact: "Embed analytics at any scale",
    desc: "Embed analytics for unlimited tenants with role-based access, out of the box.", to: "/products/embedfast" },
  { icon: <Pulse24Regular />, name: "LoadFAST", impact: "Launch with zero surprises",
    desc: "Simulate real load on Fabric and Power BI to launch with zero performance surprises.", to: "/products/loadfast" },
  { icon: <CheckmarkCircle24Regular />, name: "CertyFAST", impact: "Ship error-free models",
    desc: "Detect errors and standardize DAX automatically to ship production-ready models faster.", to: "/products/certyfast" },
];

interface CaseStudy { idx: number; tag: string; title: string; desc: string; href: string; }
const CASES: CaseStudy[] = [
  { idx: 3, tag: "Agentic AI", title: "Reshaping industries with agentic AI",
    desc: "Agentic AI in production across retail, finance, healthcare, and manufacturing — a reference pattern for regulated, multi-system enterprises.",
    href: "https://blog.maqsoftware.com/2025/08/reshaping-industries-with-agentic-ai.html" },
  { idx: 0, tag: "Data Platform", title: "Snowflake + Microsoft Fabric, unified",
    desc: "Streamlined data movement, governance, and cost — without rewriting pipelines.",
    href: "https://blog.maqsoftware.com/2025/03/optimizing-data-management-by.html" },
  { idx: 3, tag: "Analytics", title: "Modernizing retail BI on Fabric",
    desc: "Re-platformed a global retailer onto Fabric and Power BI with a unified model.",
    href: "https://blog.maqsoftware.com/2025/12/modernizing-retail-business.html" },
];

interface Industry { label: string; sub?: string; to: string; icon: ReactNode; }
const INDUSTRIES: Industry[] = [
  { label: "Retail & consumer goods", sub: "Stores, e-commerce & consumer brands", to: "/industries/retail", icon: <ShoppingBag24Regular /> },
  { label: "Financial services", sub: "Banking, insurance & capital markets", to: "/industries/financial-services", icon: <BuildingBank24Regular /> },
  { label: "Technology", sub: "Software & digital natives", to: "/industries/technology", icon: <Laptop24Regular /> },
  { label: "Manufacturing", sub: "Industrial & supply chain", to: "/industries/manufacturing", icon: <Wrench24Regular /> },
  { label: "Healthcare & life sciences", sub: "Providers, payers & life sciences", to: "/industries/healthcare-life-sciences", icon: <HeartPulse24Regular /> },
  { label: "Public sector", sub: "Government & mission", to: "/industries/public-sector", icon: <BuildingGovernment24Regular /> },
];
/* Per-variant color scheme for capability tiles (applied inline). */
const CAP_TONE: Record<CapVariant, {
  card: string; border: string; kicker: string; title: string; desc: string;
  arrowBg: string; arrowFg: string; arrowBd: string; tileBg: string; tileBd: string; tileFg: string;
  titleSize: string;
}> = {
  dark: { card: "var(--maq-surface-ink)", border: "transparent", kicker: "rgba(255,255,255,.7)", title: "#fff", desc: "rgba(255,255,255,.74)",
    arrowBg: "var(--maq-red)", arrowFg: "#fff", arrowBd: "transparent", tileBg: "rgba(255,255,255,.12)", tileBd: "transparent", tileFg: "#fff", titleSize: "1.875rem" },
  red: { card: "var(--maq-red)", border: "transparent", kicker: "rgba(255,255,255,.82)", title: "#fff", desc: "rgba(255,255,255,.88)",
    arrowBg: "rgba(255,255,255,.16)", arrowFg: "#fff", arrowBd: "transparent", tileBg: "rgba(255,255,255,.16)", tileBd: "transparent", tileFg: "#fff", titleSize: "1.5rem" },
  light: { card: tokens.colorNeutralBackground2, border: "var(--maq-border)", kicker: "var(--maq-red)", title: "var(--maq-black)", desc: "var(--maq-muted-color)",
    arrowBg: "var(--maq-gray-100)", arrowFg: "var(--maq-black)", arrowBd: "transparent", tileBg: tokens.colorNeutralBackground4, tileBd: "transparent", tileFg: tokens.colorNeutralForeground4, titleSize: "1.375rem" },
  tint: { card: "var(--maq-gray-50)", border: "var(--maq-border)", kicker: "var(--maq-red)", title: "var(--maq-black)", desc: "var(--maq-muted-color)",
    arrowBg: "#fff", arrowFg: "var(--maq-black)", arrowBd: "var(--maq-border)", tileBg: "#fff", tileBd: "var(--maq-border)", tileFg: "var(--maq-black)", titleSize: "1.375rem" },
};

// This page runs wider than the app's --maq-container (1240px) by design,
// using the shared --maq-container-wide token (kept in sync with FooterV2).
const HOME_MAXW = "var(--maq-container-wide)";

const useStyles = makeStyles({
  page: {
    fontFamily: "Roboto, system-ui, -apple-system, sans-serif",
    color: "var(--maq-black)",
    backgroundColor: "#fff",
    // Use pure Fluent neutral grays on this page instead of the global
    // cool-tinted brand grays. Scoped here, so other pages keep the brand
    // palette. Cascades through the heading/muted/faint roles too.
    "--maq-black": tokens.colorNeutralForeground1,
    "--maq-gray-50": tokens.colorNeutralBackground2,
    "--maq-gray-100": tokens.colorNeutralBackground3,
    "--maq-border": tokens.colorNeutralStroke2,
    "--maq-text-soft": tokens.colorNeutralForeground3,
    "--maq-text-faint": tokens.colorNeutralForeground4,
  },
  wrap: { maxWidth: HOME_MAXW, margin: "0 auto" },

  /* Hero */
  hero: {
    position: "relative", overflow: "hidden", backgroundColor: tokens.colorNeutralBackground3,
    padding: "116px 32px 104px", "@media (max-width: 720px)": { padding: "72px 22px 64px" },
  },
  heroDots: {
    position: "absolute", right: 0, bottom: 0, width: "296px", height: "296px",
    pointerEvents: "none", zIndex: 0,
    "@media (max-width: 1024px)": { display: "none" },
  },
  heroTop: {
    display: "grid", gridTemplateColumns: "1.25fr 1fr", gap: "64px", alignItems: "end", position: "relative", zIndex: 1,
    "@media (max-width: 1024px)": { gridTemplateColumns: "1fr", gap: "26px", alignItems: "start" },
  },
  h1em: { fontStyle: "normal", color: "var(--maq-red)" },
  hbr: { display: "none", "@media (min-width: 1120px)": { display: "inline" } },
  heroAside: { paddingBottom: "6px" },
  sub: { margin: 0, fontSize: "1.125rem", lineHeight: 1.55, color: "var(--maq-muted-color)", maxWidth: "50ch" },
  heroCta: { marginTop: "26px", display: "flex", gap: "12px", flexWrap: "wrap" },

  /* Section + header */
  section: { padding: "96px 32px", "@media (max-width: 720px)": { padding: "64px 22px" } },
  // Accelerators band — same neutral gray as the capability cards.
  sectionGray: { backgroundColor: tokens.colorNeutralBackground2 },
  bhead: {
    display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "28px", marginBottom: "34px",
    "@media (max-width: 680px)": { flexDirection: "column", alignItems: "flex-start", gap: "16px" },
  },
  // Unique "explore" CTA under a section title: label + arrow in a red rounded square.
  exploreBtn: {
    display: "inline-flex", alignItems: "center", gap: "12px", marginTop: "16px",
    textDecoration: "none", color: "var(--maq-heading-color)", fontSize: "0.95rem", fontWeight: 700, cursor: "pointer",
    ":hover .explore-sq": { backgroundColor: "var(--maq-red)", color: "#fff", transform: "translateX(4px)" },
  },
  exploreSq: {
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    width: "26px", height: "26px", borderRadius: "50%",
    backgroundColor: tokens.colorNeutralBackground5, color: "var(--maq-black)", border: `1px solid ${tokens.colorNeutralStroke3}`, flexShrink: 0,
    transition: "background-color .18s, color .18s, transform .18s",
    "& svg": { width: "13px", height: "13px" },
  },
  /* Capabilities bento */
  bento: {
    display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px",
    gridAutoRows: "minmax(320px, auto)",
    "@media (max-width: 980px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    "@media (max-width: 680px)": {
      gridTemplateColumns: "1fr", gridAutoRows: "auto",
    },
  },
  tile: {
    position: "relative", overflow: "hidden", borderRadius: tokens.borderRadiusXLarge, padding: tokens.spacingHorizontalXXL,
    display: "flex", flexDirection: "column", textDecoration: "none", cursor: "pointer",
    transition: "transform .2s cubic-bezier(.2,.7,.3,1), box-shadow .2s",
    ":hover": { transform: "translateY(-4px)", boxShadow: "var(--maq-shadow-lift)" },
    ":hover .m3-arrow": { transform: "translate(3px,-3px)" },
  },
  tileArrow: {
    position: "absolute", top: "24px", right: "24px", zIndex: 2,
    width: "38px", height: "38px", borderRadius: "50%",
    display: "flex", alignItems: "center", justifyContent: "center",
    transition: "transform .18s",
  },
  // Left content column. Sits above the illustration (zIndex 1), so text/tags
  // may flow over it; the description keeps its own measure via maxWidth.
  tileContent: {
    position: "relative", zIndex: 1, display: "flex", flexDirection: "column", flexGrow: 1, minWidth: 0,
  },
  tileTitle: { fontWeight: 600, letterSpacing: "-.5px", lineHeight: 1.18, margin: "auto 0 0", position: "relative", zIndex: 1, "@media (max-width: 680px)": { marginTop: "16px" } },
  tileDesc: { fontSize: "0.9rem", lineHeight: 1.55, margin: "10px 0 0", maxWidth: "40ch", position: "relative", zIndex: 1 },
  tileChips: { marginTop: "18px", display: "flex", flexWrap: "wrap", gap: "8px", position: "relative", zIndex: 1 },
  tileChip: { fontSize: "0.75rem", fontWeight: 600, padding: "5px 12px", borderRadius: "999px", border: "1px solid var(--maq-border)", backgroundColor: "#fff", color: "var(--maq-muted-color)" },
  // Subtle translucent backing so a bleeding corner motif can't reduce text
  // legibility on narrow cards. Pinned to the card bottom with the text.
  // Feathered translucent backing for the hero headline + sub-text (legibility
  // over the decorative dot grid). Hugs the text; edges fade via a mask.
  heroScrim: {
    position: "relative", zIndex: 1, display: "inline-block", justifySelf: "start",
    padding: "10px 26px", margin: "-10px -26px",
    "::before": {
      content: '""',
      position: "absolute", inset: 0, borderRadius: "14px", zIndex: -1,
      backgroundColor: tokens.colorNeutralBackground3, opacity: 0.7,
      WebkitMaskImage: "linear-gradient(to right, transparent, #000 26px, #000 calc(100% - 26px), transparent), linear-gradient(to bottom, transparent, #000 10px, #000 calc(100% - 10px), transparent)",
      WebkitMaskComposite: "source-in",
      maskImage: "linear-gradient(to right, transparent, #000 26px, #000 calc(100% - 26px), transparent), linear-gradient(to bottom, transparent, #000 10px, #000 calc(100% - 10px), transparent)",
      maskComposite: "intersect",
    },
  },
  // Full-width gradient spanning the card bottom (like the case-study media card):
  // solid card-gray at the bottom for legibility, fading up to reveal the motif.
  // Sits above the motif (same zIndex, later in DOM), below the text.
  tileScrim: {
    position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
    backgroundColor: tokens.colorNeutralBackground2,
    WebkitMaskImage: "linear-gradient(to top, #000 35%, transparent 85%)",
    maskImage: "linear-gradient(to top, #000 35%, transparent 85%)",
  },

  // Same feathered backing as heroScrim/textScrim, but tinted with the band's
  // own bg color (translucent) instead of white — so the oversized Us behind
  // don't bleed through the CTA copy. Hugs the text via inline-block.
  bandScrim: {
    position: "relative", zIndex: 1, display: "inline-block",
    padding: "12px 26px", margin: "-12px -26px",
    "::before": {
      content: '""',
      position: "absolute", inset: 0, borderRadius: "14px", zIndex: -1,
      backgroundColor: tokens.colorNeutralBackground5, opacity: 0.7,
      WebkitMaskImage: "linear-gradient(to right, transparent, #000 26px, #000 calc(100% - 26px), transparent), linear-gradient(to bottom, transparent, #000 12px, #000 calc(100% - 12px), transparent)",
      WebkitMaskComposite: "source-in",
      maskImage: "linear-gradient(to right, transparent, #000 26px, #000 calc(100% - 26px), transparent), linear-gradient(to bottom, transparent, #000 12px, #000 calc(100% - 12px), transparent)",
      maskComposite: "intersect",
    },
  },

  /* Products — impact cards */
  pcard: {
    backgroundColor: "#fff", borderRadius: tokens.borderRadiusXLarge, border: "1px solid var(--maq-border)", padding: tokens.spacingHorizontalXXL,
    display: "flex", flexDirection: "column", textDecoration: "none", color: "inherit", cursor: "pointer",
    transition: "transform .2s cubic-bezier(.2,.7,.3,1), box-shadow .2s, border-color .2s",
    ":hover": { transform: "translateY(-4px)", boxShadow: "var(--maq-shadow-lift)", border: `1px solid ${tokens.colorNeutralStroke3}` },
    ":hover .m3-foot": { color: "var(--maq-red)" },
    ":hover .m3-foot-arrow": { transform: "translateX(4px)" },
  },
  pcardTop: { display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "14px", marginBottom: "20px" },
  pcardTile: {
    width: "40px", height: "40px", borderRadius: tokens.borderRadiusLarge, backgroundColor: tokens.colorNeutralBackground3, color: tokens.colorNeutralForeground4,
    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
  },
  pcardName: { fontSize: "0.75rem", fontWeight: 700, letterSpacing: ".2px", color: "var(--maq-red)" },
  pcardImpact: { fontSize: "1.45rem", fontWeight: 600, letterSpacing: "-.5px", color: "var(--maq-heading-color)", lineHeight: 1.2, margin: 0 },
  pcardDesc: { marginTop: "11px", fontSize: "0.875rem", lineHeight: 1.55, color: "var(--maq-muted-color)", flex: 1, margin: "11px 0 0" },
  // Products: title column + a 2×3 card grid column.
  prodLayout: {
    display: "grid", gridTemplateColumns: "1fr 2fr", gap: "64px", alignItems: "start",
    "@media (max-width: 900px)": { gridTemplateColumns: "1fr", gap: "32px" },
  },
  prodGrid2: {
    display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px",
    "@media (max-width: 680px)": { gridTemplateColumns: "1fr" },
  },

  foot: { marginTop: "20px", fontSize: "0.85rem", fontWeight: 700, color: "var(--maq-faint-color)", display: "inline-flex", alignItems: "center", gap: "7px", transition: "color .18s" },
  footArrow: { display: "inline-flex", transition: "transform .18s" },

  /* Case studies — media bento */
  cases: {
    display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", gridAutoRows: "232px",
    gridTemplateAreas: `"c0 c0 c1" "c0 c0 c2"`,
    "@media (max-width: 1040px)": { gridTemplateColumns: "repeat(2, 1fr)", gridTemplateAreas: `"c0 c0" "c1 c2"` },
    "@media (max-width: 680px)": { gridTemplateColumns: "1fr", gridAutoRows: "auto", gridTemplateAreas: `"c0" "c1" "c2"` },
  },
  caseMedia: {
    gridArea: "c0", position: "relative", overflow: "hidden", borderRadius: tokens.borderRadiusXLarge, border: "1px solid var(--maq-border)",
    display: "flex", flexDirection: "column", justifyContent: "flex-end", textDecoration: "none", cursor: "pointer",
    transition: "transform .2s cubic-bezier(.2,.7,.3,1), box-shadow .2s",
    ":hover": { transform: "translateY(-4px)", boxShadow: "var(--maq-shadow-lift)", border: `1px solid ${tokens.colorNeutralStroke3}` },
    ":hover .m3-foot": { color: "var(--maq-red)" },
    ":hover .m3-foot-arrow": { transform: "translateX(4px)" },
    "@media (max-width: 680px)": { minHeight: "300px" },
  },
  caseArt: { position: "absolute", inset: 0 },
  caseScrim: { position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(255,255,255,.96) 18%, rgba(255,255,255,.82) 48%, rgba(255,255,255,.45) 78%, rgba(255,255,255,.12) 100%)" },
  caseBody: { position: "relative", zIndex: 1, padding: tokens.spacingHorizontalXXL, color: "var(--maq-heading-color)" },
  caseTag: { display: "inline-flex", alignItems: "center", height: "28px", padding: "0 13px", backgroundColor: "var(--maq-red)", color: "#fff", fontSize: "0.75rem", fontWeight: 700, letterSpacing: ".2px", marginBottom: "14px" },
  caseMediaTitle: { fontSize: "1.75rem", fontWeight: 600, letterSpacing: "-.6px", lineHeight: 1.16, margin: 0, color: "var(--maq-heading-color)" },
  caseMediaDesc: { marginTop: "10px", fontSize: "0.9rem", lineHeight: 1.5, color: "var(--maq-muted-color)", maxWidth: "46ch", margin: "10px 0 0" },
  caseTile: {
    position: "relative", backgroundColor: "#fff", borderRadius: tokens.borderRadiusXLarge, border: "1px solid var(--maq-border)", padding: tokens.spacingHorizontalXXL,
    display: "flex", flexDirection: "column", textDecoration: "none", color: "inherit", cursor: "pointer",
    transition: "transform .2s cubic-bezier(.2,.7,.3,1), box-shadow .2s, border-color .2s",
    ":hover": { transform: "translateY(-4px)", boxShadow: "var(--maq-shadow-lift)", border: `1px solid ${tokens.colorNeutralStroke3}` },
    ":hover .m3-foot": { color: "var(--maq-red)" },
    ":hover .m3-foot-arrow": { transform: "translateX(4px)" },
  },
  caseTileKick: { fontSize: "0.75rem", fontWeight: 700, letterSpacing: ".2px", color: "var(--maq-red)", marginBottom: "10px" },
  caseTileTitle: { fontSize: "1.2rem", fontWeight: 600, letterSpacing: "-.3px", lineHeight: 1.22, color: "var(--maq-heading-color)", margin: 0 },
  caseTileDesc: { marginTop: "8px", fontSize: "0.875rem", lineHeight: 1.5, color: "var(--maq-muted-color)", flex: 1, margin: "8px 0 0" },

  /* CTA — full-bleed black band that hugs the footer (no white gap) */
  cta: { position: "relative", overflow: "hidden", backgroundColor: tokens.colorNeutralBackground5, padding: "104px 32px", "@media (max-width: 720px)": { padding: "68px 22px" } },
  bandInner: { position: "relative", zIndex: 1, maxWidth: HOME_MAXW, margin: "0 auto" },
  bandText: { position: "relative", zIndex: 1, maxWidth: "620px" },
  bandCta: { marginTop: "28px" },
  // Nested line-art arches on the right of the CTA band.
  ctaArt: {
    position: "absolute", top: "50%", right: 0, transform: "translateY(-50%)",
    width: "400px", height: "400px", pointerEvents: "none", zIndex: 0,
    "@media (max-width: 880px)": { display: "none" },
  },
  bandSub: { marginTop: "10px", fontSize: "1.05rem", lineHeight: 1.5, color: "var(--maq-muted-color)", maxWidth: "34em", margin: "10px 0 0" },

  /* Capability arrow — base colors per variant + on-card-hover overrides */
  arrowDark: { backgroundColor: "var(--maq-red)", color: "#fff", border: "1px solid transparent" },
  arrowRed: { backgroundColor: "rgba(255,255,255,.16)", color: "#fff", border: "1px solid transparent" },
  arrowLight: { backgroundColor: tokens.colorNeutralBackground5, color: "var(--maq-black)", border: `1px solid ${tokens.colorNeutralStroke3}` },
  arrowTint: { backgroundColor: "#fff", color: "var(--maq-black)", border: "1px solid var(--maq-border)" },
  capRedHover: { ":hover .m3-arrow": { backgroundColor: "#fff", color: "var(--maq-red)", border: "1px solid #fff" } },
  capLightHover: { ":hover .m3-arrow": { backgroundColor: "var(--maq-red)", color: "#fff", border: "1px solid var(--maq-red)" } },
  capTintHover: { ":hover .m3-arrow": { backgroundColor: "var(--maq-red)", color: "#fff", border: "1px solid var(--maq-red)" } },
  /* Industries we serve — left-aligned title + underlined link grid on a soft gradient */
  gradientBand: { background: "transparent" },
  indSection: {
    background: "transparent",
    padding: "96px 32px",
    "@media (max-width: 720px)": { padding: "64px 22px" },
  },
  indInner: { maxWidth: HOME_MAXW, margin: "0 auto" },
  // Partnerships — centered, white band with placeholder logo slots.
  partnerSection: {
    position: "relative", backgroundColor: "#fff", padding: "128px 32px", textAlign: "center",
    "@media (max-width: 720px)": { padding: "80px 22px" },
  },
  partnerInner: { maxWidth: "var(--maq-container-wide)", margin: "0 auto" },
  // Sits midway between the section's top edge and the title.
  partnerDivider: { position: "absolute", top: "64px", left: "50%", transform: "translateX(-50%)", width: "48px", height: "2px", borderRadius: "999px", backgroundColor: tokens.colorNeutralStroke2 },
  partnerLogos: {
    display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "48px", marginTop: "44px", marginBottom: "44px",
  },
  partnerLogo: {
    display: "flex", alignItems: "center", justifyContent: "center",
    height: "140px", minWidth: "300px", padding: "0 32px",
    borderRadius: tokens.borderRadiusLarge, border: `1px dashed ${tokens.colorNeutralStroke2}`,
    color: "var(--maq-muted-color)", fontSize: "1.5rem", fontWeight: 600,
  },
  indTitle: { margin: 0 },
  indSubtitle: { marginTop: "20px", fontSize: "1.25rem", lineHeight: 1.5, color: "var(--maq-muted-color)", maxWidth: "34ch" },
  indGrid: {
    display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginTop: "36px",
    "@media (max-width: 680px)": { gridTemplateColumns: "repeat(2, 1fr)" },
    "@media (max-width: 460px)": { gridTemplateColumns: "1fr" },
  },
  indCard: {
    backgroundColor: "#fff", borderRadius: tokens.borderRadiusXLarge, border: "1px solid var(--maq-border)", padding: tokens.spacingHorizontalXXL,
    display: "flex", alignItems: "center", gap: "16px",
    textDecoration: "none", color: "inherit", cursor: "pointer",
    transition: "transform .2s cubic-bezier(.2,.7,.3,1), box-shadow .2s, border-color .2s",
    ":hover": { transform: "translateY(-4px)", boxShadow: "var(--maq-shadow-lift)", border: `1px solid ${tokens.colorNeutralStroke3}` },
  },
  indTile: {
    color: tokens.colorNeutralForeground4,
    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
  },
  indCardTitle: { fontSize: "1.125rem", fontWeight: 600, letterSpacing: "-.3px", color: "var(--maq-heading-color)", lineHeight: 1.25, margin: 0 },

  /* ── Legacy capability card (abstract corner motif) ── */
  // Motifs bleed off the top-left corner (text sits at the bottom).
  motifTl: { position: "absolute", left: "-45px", top: "-45px", width: "280px", height: "280px", pointerEvents: "none", zIndex: 0 },
  // Security dots sit a bit closer in than the other top-left motifs.
  motifTlDots: { position: "absolute", left: "-10px", top: "-10px", width: "280px", height: "280px", pointerEvents: "none", zIndex: 0 },
  // Insights arcs (larger box) — anchored to the top-left corner.
  motifArcs: { position: "absolute", top: "-5px", left: "-120px", width: "336px", height: "336px", pointerEvents: "none", zIndex: 0 },
  // Cloud — square box, enlarged, shifted further left.
  motifCloud: { position: "absolute", top: "-20px", left: "28%", transform: "translateX(-50%)", width: "280px", height: "199px", pointerEvents: "none", zIndex: 0 },
});

/* ---------- Themed line-art shapes (legacy capability cards) ------- */
const ART_SVG = { display: "block", width: "100%", height: "100%" } as const;
function CapArt({ kind, color }: { kind: string; color: string }) {
  if (kind === "dots") {
    return (
      <svg viewBox="0 0 200 200" fill="none" style={ART_SVG} aria-hidden>
        {Array.from({ length: 25 }).map((_, i) => {
          const col = i % 5;
          const row = Math.floor(i / 5);
          if (col === 4 || row === 4) return null; // drop bottom row + right column → 4×4
          if (i === 7) {
            // Fluent shield icon (no checkmark) — second row, second-to-last column.
            return <Shield24Regular key={i} x="81" y="47" width="14" height="14" style={{ color: "var(--maq-red)" }} />;
          }
          return <rect key={i} x={20 + col * 34 - 2.1} y={20 + row * 34 - 2.1} width="4.2" height="4.2" rx="1" fill={color} opacity={0.5} />;
        })}
      </svg>
    );
  }
  if (kind === "grid") {
    return (
      <svg viewBox="0 0 160 160" fill="none" style={ART_SVG} aria-hidden>
        <rect x="20" y="20" width="50" height="50" rx="8" stroke={color} strokeWidth="2" opacity={0.25} />
        <rect x="84" y="20" width="50" height="50" rx="8" stroke="var(--maq-red)" strokeWidth="2" opacity={1} />
        <rect x="84" y="84" width="50" height="50" rx="8" stroke={color} strokeWidth="2" opacity={0.25} />
        <rect x="20" y="84" width="50" height="50" rx="8" fill={color} opacity={0.1} />
      </svg>
    );
  }
  if (kind === "curve") {
    return (
      <svg viewBox="0 0 200 200" fill="none" style={ART_SVG} aria-hidden>
        <path d="M10 160 Q90 60 190 120" stroke="var(--maq-red)" strokeWidth="2.5" opacity={1} />
        <path d="M10 190 Q90 90 190 150" stroke={color} strokeWidth="2.5" opacity={0.2} />
      </svg>
    );
  }
  if (kind === "hex") {
    return (
      <svg viewBox="0 0 200 200" fill="none" style={ART_SVG} aria-hidden>
        <path d="M85.28 34.84 L126.72 57.16 Q132 60 132 66 L132 110 Q132 116 126.72 118.84 L85.28 141.16 Q80 144 74.72 141.16 L33.28 118.84 Q28 116 28 110 L28 66 Q28 60 33.28 57.16 L74.72 34.84 Q80 32 85.28 34.84 Z" fill={color} opacity={0.12} />
        <path d="M85.28 90.84 L126.72 113.16 Q132 116 132 122 L132 166 Q132 172 126.72 174.84 L85.28 197.16 Q80 200 74.72 197.16 L33.28 174.84 Q28 172 28 166 L28 122 Q28 116 33.28 113.16 L74.72 90.84 Q80 88 85.28 90.84 Z" stroke={color} strokeWidth="2.5" strokeLinejoin="round" fill="none" opacity={0.3} />
        <path d="M137.28 34.84 L178.72 57.16 Q184 60 184 66 L184 110 Q184 116 178.72 118.84 L137.28 141.16 Q132 144 126.72 141.16 L85.28 118.84 Q80 116 80 110 L80 66 Q80 60 85.28 57.16 L126.72 34.84 Q132 32 137.28 34.84 Z" stroke="var(--maq-red)" strokeWidth="2.5" strokeLinejoin="round" opacity={1} />
      </svg>
    );
  }
  if (kind === "stack") {
    return (
      <svg viewBox="0 0 200 200" fill="none" style={ART_SVG} aria-hidden>
        <g transform="translate(100 102) scale(1.2) translate(-100 -102)">
          <path d="M103.64 103.66 L162.36 130.34 Q166 132 162.36 133.66 L103.64 160.34 Q100 162 96.36 160.34 L37.64 133.66 Q34 132 37.64 130.34 L96.36 103.66 Q100 102 103.64 103.66 Z" stroke={color} strokeWidth="3.75" vectorEffect="non-scaling-stroke" opacity={0.3} />
          <path d="M103.64 75.66 L162.36 102.34 Q166 104 162.36 105.66 L103.64 132.34 Q100 134 96.36 132.34 L37.64 105.66 Q34 104 37.64 102.34 L96.36 75.66 Q100 74 103.64 75.66 Z" stroke="var(--maq-red)" strokeWidth="3.75" vectorEffect="non-scaling-stroke" opacity={1} />
          <path d="M103.64 43.66 L162.36 70.34 Q166 72 162.36 73.66 L103.64 100.34 Q100 102 96.36 100.34 L37.64 73.66 Q34 72 37.64 70.34 L96.36 43.66 Q100 42 103.64 43.66 Z" fill="var(--maq-black)" opacity={0.1} />
        </g>
      </svg>
    );
  }
  if (kind === "cloud") {
    return (
      <svg viewBox="0 0 48 34" fill="none" style={ART_SVG} aria-hidden>
        <path d="M21.5 0.5C15.2093 0.5 10.0492 5.34047 9.54107 11.5H9C4.30558 11.5 0.5 15.3056 0.5 20C0.5 24.6944 4.30558 28.5 9 28.5H34C38.6944 28.5 42.5 24.6944 42.5 20C42.5 15.3056 38.6944 11.5 34 11.5H33.4589C32.9508 5.34047 27.7907 0.5 21.5 0.5Z" transform="translate(2 1.5)" stroke="var(--maq-red)" strokeWidth="3.75" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
        <path d="M27 14.5C22.956 14.5 19.6388 17.6117 19.3121 21.5714H18.9643C15.9464 21.5714 13.5 24.0179 13.5 27.0357C13.5 30.0536 15.9464 32.5 18.9643 32.5H35.0357C38.0536 32.5 40.5 30.0536 40.5 27.0357C40.5 24.0179 38.0536 21.5714 35.0357 21.5714H34.6879C34.3612 17.6117 31.044 14.5 27 14.5Z" transform="translate(2 0)" fill="#E6E6E6" />
      </svg>
    );
  }
  // arcs (concentric circles)
  return (
    <svg viewBox="-25 -25 250 250" fill="none" style={ART_SVG} aria-hidden>
      <circle cx="100" cy="100" r="96" stroke="var(--maq-red)" strokeWidth="2.6" opacity={1} />
      <circle cx="100" cy="100" r="68" stroke={color} strokeWidth="2.6" opacity={0.25} />
      <circle cx="100" cy="100" r="38" fill={color} opacity={0.12} />
    </svg>
  );
}

const SHAPE_BY_AREA: Record<string, string | undefined> = {
  a: "stack", b: "hex", c: "arcs", d: "grid", e: "cloud", f: "dots",
};

/* Legacy capability tile — icon chip (top-left) + abstract corner motif. */
function CapTileLegacy({ c }: { c: Capability }) {
  const s = useStyles();
  const t = CAP_TONE[c.variant];
  const arrowClass = { dark: s.arrowDark, red: s.arrowRed, light: s.arrowLight, tint: s.arrowTint }[c.variant];
  const hoverClass = { dark: "", red: s.capRedHover, light: s.capLightHover, tint: s.capTintHover }[c.variant];
  const motif = SHAPE_BY_AREA[c.area];
  return (
    <Link to={c.to} className={`${s.tile} ${hoverClass}`} style={{ backgroundColor: t.card, border: `1px solid ${t.border}` }}>
      {motif ? (
        <span className={motif === "cloud" ? s.motifCloud : motif === "dots" ? s.motifTlDots : motif === "arcs" ? s.motifArcs : s.motifTl} aria-hidden>
          <CapArt kind={motif} color="var(--maq-black)" />
        </span>
      ) : null}
      <span className={`${s.tileArrow} ${arrowClass} m3-arrow`}>
        <ArrowUpRight16Regular />
      </span>
      <span className={s.tileScrim} aria-hidden />
      <div className={s.tileContent}>
        <h3 className={s.tileTitle} style={{ color: t.title, fontSize: t.titleSize }}>{c.kicker}</h3>
        <p className={s.tileDesc} style={{ color: t.desc }}>{c.desc}</p>
      </div>
    </Link>
  );
}

export function HomeV2() {
  const s = useStyles();
  const navigate = useNavigate();
  const handleContactClick = useContactAction();

  return (
    <div className={s.page}>
      {/* HERO */}
      <header className={s.hero}>
        <svg className={s.heroDots} viewBox="0 0 296 296" aria-hidden>
          {Array.from({ length: 64 }).map((_, i) => {
            const col = i % 8;
            const row = Math.floor(i / 8);
            const o = 0.08 + (0.26 * (row + col)) / 14;
            return <circle key={i} cx={8 + col * 40} cy={8 + row * 40} r={3.5} fill="var(--maq-black)" opacity={o} />;
          })}
        </svg>
        <div className={s.wrap}>
          <div className={s.heroTop}>
            <div className={s.heroScrim}>
              <h1 className="maq-h1">
                Harness your data <br className={s.hbr} />to drive faster, <em className={s.h1em}>AI-<br className={s.hbr} />powered</em> decisions.
              </h1>
            </div>
            <div className={s.heroAside}>
              <p className={`${s.sub} ${s.heroScrim}`}>
                We help enterprises transform data and AI into measurable impact — with speed,
                quality, and confidence.
              </p>
              <div className={s.heroCta}>
                <PrimaryButton size="large" icon={<ArrowUpRight16Regular />} iconPosition="after" onClick={() => handleContactClick()}>
                  Contact us
                </PrimaryButton>
                <OutlineButton size="large" onClick={() => navigate("/insights/case-studies")}>
                  Case studies
                </OutlineButton>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* CAPABILITIES */}
      <section className={s.section}>
        <div className={s.wrap}>
          <div className={s.bhead} style={{ justifyContent: "center", textAlign: "center", marginBottom: "56px" }}>
            <div>
              <h2 className="maq-h2">Capabilities that drive growth</h2>
            </div>
          </div>
          <div className={s.bento}>
            {CAPS.map((c) => <CapTileLegacy key={c.area} c={c} />)}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className={`${s.section} ${s.sectionGray}`}>
        <div className={s.wrap}>
          <div className={s.prodLayout}>
            <div>
              <h2 className={`maq-h2 ${s.indTitle}`}>Accelerators that compress months into weeks</h2>
              <p className={s.indSubtitle}>
                Migrate to Microsoft Fabric faster, at lower cost, with predictable outcomes.
              </p>
              <Link className={s.exploreBtn} to="/products">
                Explore all products
                <span className={`${s.exploreSq} explore-sq`} aria-hidden><ArrowUpRight16Regular /></span>
              </Link>
            </div>
            <div className={s.prodGrid2}>
              {PRODUCTS.map((p) => (
              <Link key={p.name} to={p.to} className={s.pcard}>
                {/* Product icon hidden for simplicity. Add back if the site
                    starts looking too plain or the cards get hard to scan.
                <div className={s.pcardTop}>
                  <div className={s.pcardTile}>{p.icon}</div>
                </div>
                */}
                <h3 className={s.pcardImpact}>{p.name}</h3>
                <p className={s.pcardDesc}>{p.desc}</p>
                <span className={`${s.foot} m3-foot`}>
                  Learn more <span className={`${s.footArrow} m3-foot-arrow`}><ArrowUpRight16Regular /></span>
                </span>
              </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className={s.gradientBand}>
      {/* INDUSTRIES */}
      <section className={s.indSection}>
        <div className={s.indInner}>
          <h2 className={`maq-h2 ${s.indTitle}`}>Industries we serve</h2>
          <div className={s.indGrid}>
            {INDUSTRIES.map((ind) => (
              <Link to={ind.to} className={s.indCard} key={ind.label}>
                <div className={s.indTile}>{ind.icon}</div>
                <h3 className={s.indCardTitle}>{ind.label}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERSHIPS — centered white band with placeholder partner logos */}
      <section className={s.partnerSection}>
        <div className={s.partnerDivider} aria-hidden />
        <div className={s.partnerInner}>
          <h2 className="maq-h2">Partnered with the leaders in data and AI</h2>
          {/* TODO: replace these placeholders with the actual partner logos */}
          <div className={s.partnerLogos}>
            <div className={s.partnerLogo}>Microsoft</div>
            <div className={s.partnerLogo}>Databricks</div>
            <div className={s.partnerLogo}>Snowflake</div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section className={`${s.section} ${s.sectionGray}`}>
        <div className={s.wrap}>
          <div className={s.prodLayout}>
            <div>
              <h2 className={`maq-h2 ${s.indTitle}`}>What clients achieve with MAQ Software</h2>
              <p className={s.indSubtitle}>
                Outcomes from real engagements across data, analytics, and agentic AI.
              </p>
              <Link className={s.exploreBtn} to="/insights/case-studies">
                Explore case studies
                <span className={`${s.exploreSq} explore-sq`} aria-hidden><ArrowUpRight16Regular /></span>
              </Link>
            </div>
            <div className={s.cases}>
            <a className={s.caseMedia} href={CASES[0].href} target="_blank" rel="noopener noreferrer">
              <div className={s.caseArt}><CardArt idx={CASES[0].idx} /></div>
              <div className={s.caseScrim} />
              <div className={s.caseBody}>
                <span className={s.caseTag}>{CASES[0].tag}</span>
                <h3 className={s.caseMediaTitle}>{CASES[0].title}</h3>
                <p className={s.caseMediaDesc}>{CASES[0].desc}</p>
                <span className={`${s.foot} m3-foot`}>
                  Read full story <span className={`${s.footArrow} m3-foot-arrow`}><ArrowUpRight16Regular /></span>
                </span>
              </div>
            </a>
            {[CASES[1], CASES[2]].map((c, i) => (
              <a key={c.title} className={s.caseTile} href={c.href} target="_blank" rel="noopener noreferrer" style={{ gridArea: `c${i + 1}` }}>
                <span className={s.caseTileKick}>{c.tag}</span>
                <h3 className={s.caseTileTitle}>{c.title}</h3>
                <p className={s.caseTileDesc}>{c.desc}</p>
                <span className={`${s.foot} m3-foot`}>
                  Read full story <span className={`${s.footArrow} m3-foot-arrow`}><ArrowUpRight16Regular /></span>
                </span>
              </a>
            ))}
            </div>
          </div>
        </div>
      </section>

      </div>

      {/* CTA — light neutral band (Fluent neutral background 5) */}
      <div className={s.cta}>
        <div className={s.bandInner}>
          <span className={s.ctaArt} aria-hidden>
          {/* Interlinked dotted-U motif — previous version, commented out
          <svg viewBox="0 0 392 600" fill="none" style={{ display: "block", width: "100%", height: "100%" }}>
            <defs>
              <linearGradient id="uFadeA" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0.58" stopColor="#fff" stopOpacity="1" />
                <stop offset="0.69" stopColor="#fff" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="uFadeB" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0.32" stopColor="#fff" stopOpacity="0" />
                <stop offset="0.42" stopColor="#fff" stopOpacity="1" />
              </linearGradient>
              <mask id="uMaskA"><rect width="392" height="600" fill="url(#uFadeA)" /></mask>
              <mask id="uMaskB"><rect width="392" height="600" fill="url(#uFadeB)" /></mask>
            </defs>
            <g mask="url(#uMaskA)">
              {[140, 124, 108, 92, 76, 60].map((r, i) => (
                <path key={`ua${i}`} d={`M${150 - r} 410 L${150 - r} 150 A${r} ${r} 0 0 1 ${150 + r} 150 L${150 + r} 410`} stroke={tokens.colorNeutralForegroundDisabled} strokeWidth="2.6" strokeLinecap="round" strokeDasharray="0.1 14" opacity={0.6} />
              ))}
            </g>
            <g mask="url(#uMaskB)">
              {[140, 124, 108, 92, 76, 60].map((r, i) => (
                <path key={`ub${i}`} d={`M${250 - r} 190 L${250 - r} 450 A${r} ${r} 0 0 0 ${250 + r} 450 L${250 + r} 190`} stroke={tokens.colorNeutralForegroundDisabled} strokeWidth="2.6" strokeLinecap="round" strokeDasharray="0.1 14" opacity={0.6} />
              ))}
            </g>
          </svg>
          */}
          {/* Three 3×3 dot squares in an L-arrangement (mirrors the business-apps
              "grid" motif), built from faint dots like the hero header. */}
          <svg viewBox="0 0 150 150" fill="none" style={{ display: "block", width: "100%", height: "100%" }}>
            {[
              { x: 24, y: 24 },
              { x: 96, y: 24 },
              { x: 96, y: 96 },
            ].map((sq, si) =>
              Array.from({ length: 9 }).map((_, j) => {
                const col = j % 3;
                const row = Math.floor(j / 3);
                const cx = sq.x + col * 15;
                const cy = sq.y + row * 15;
                return <circle key={`${si}-${j}`} cx={cx} cy={cy} r={1.31} fill="var(--maq-black)" opacity={0.08 + (0.26 * (cx + cy)) / 252} />;
              })
            )}
          </svg>
          </span>
          <div className={s.bandText}>
            <div className={s.bandScrim}>
              <h2 className="maq-h2">Ready to move faster?</h2>
              <p className={s.bandSub}>
                Tell us your goals. We'll show you what's possible on Microsoft Azure and Fabric.
              </p>
            </div>
            <div className={s.bandCta}>
              <PrimaryButton size="large" icon={<ArrowUpRight16Regular />} iconPosition="after" onClick={() => handleContactClick()}>
                Contact us
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
