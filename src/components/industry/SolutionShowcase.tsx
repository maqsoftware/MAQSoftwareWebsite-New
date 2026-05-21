import { useState } from "react";
import type { ReactNode } from "react";
import { Button, makeStyles, tokens } from "@fluentui/react-components";
import {
  ArrowTrendingLines24Regular,
  Clock24Regular,
  Chat24Regular,
  BuildingShop24Regular,
} from "@fluentui/react-icons";

const useStyles = makeStyles({
  section: { padding: "48px 32px", backgroundColor: "var(--maq-off-white)" },
  inner: { maxWidth: "1240px", margin: "0 auto" },
  head: { marginBottom: "20px" },
  eyebrow: {
    fontSize: "12px",
    fontWeight: 700,
    color: "var(--maq-red)",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    display: "block",
    marginBottom: "6px",
  },
  title: {
    fontSize: "30px",
    fontWeight: 700,
    color: "var(--maq-black)",
    margin: 0,
    letterSpacing: "-0.01em",
  },
  panel: {
    background: "#fff",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "14px",
    padding: "28px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "40px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
    "@media (max-width: 960px)": { gridTemplateColumns: "1fr" },
  },

  iconBox: {
    width: "48px",
    height: "48px",
    borderRadius: "10px",
    background: "var(--maq-off-white)",
    color: "var(--maq-red)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "18px",
  },
  detailName: {
    fontSize: "22px",
    fontWeight: 700,
    color: "var(--maq-black)",
    marginBottom: "10px",
  },
  detailDesc: {
    fontSize: "14px",
    color: "var(--maq-gray-600)",
    lineHeight: 1.65,
    marginBottom: "20px",
  },
  knowMore: {
    border: `1px solid var(--maq-red)`,
    color: "var(--maq-red)",
    background: "transparent",
    ":hover": { background: "var(--maq-red-pale)", color: "var(--maq-red)" },
  },

  rail: { display: "flex", flexDirection: "column", gap: "10px" },
  railBtn: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    width: "100%",
    padding: "14px 16px",
    background: "#fff",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderLeftWidth: "1px",
    borderRadius: "8px",
    cursor: "pointer",
    textAlign: "left",
    transition: "all 0.15s",
    ":hover": { border: `1px solid var(--maq-red)` },
  },
  railBtnActive: {
    border: `1px solid var(--maq-red)`,
    borderLeftWidth: "3px",
    boxShadow: "0 1px 4px rgba(186,20,26,0.10)",
  },
  railIcon: {
    width: "36px",
    height: "36px",
    borderRadius: "8px",
    background: "var(--maq-off-white)",
    color: "var(--maq-red)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  railText: { display: "flex", flexDirection: "column", gap: "2px" },
  railName: { fontSize: "14px", fontWeight: 700, color: "var(--maq-black)" },
  railTagline: { fontSize: "12px", color: "var(--maq-gray-600)" },
});

interface Agent {
  name: string;
  tagline: string;
  description: string;
  icon: ReactNode;
}

const agents: Agent[] = [
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

export function SolutionShowcase() {
  const s = useStyles();
  const [active, setActive] = useState(0);
  const sel = agents[active];
  return (
    <section className={s.section} id="retail-solutions">
      <div className={s.inner}>
        <div className={s.head}>
          <span className={s.eyebrow}>Agentic AI</span>
          <h2 className={s.title}>
            Make your retail operations smarter with our Retail Agents
          </h2>
        </div>
        <div className={s.panel}>
          <div>
            <div className={s.iconBox}>{sel.icon}</div>
            <div className={s.detailName}>{sel.name}</div>
            <p className={s.detailDesc}>{sel.description}</p>
            <Button
              appearance="outline"
              className={s.knowMore}
              as="a"
              href={`mailto:customersuccess@maqsoftware.com?subject=${encodeURIComponent(
                sel.name + " - Retail"
              )}`}
            >
              Know More
            </Button>
          </div>
          <div className={s.rail}>
            {agents.map((a, i) => (
              <button
                key={a.name}
                type="button"
                aria-current={i === active}
                onClick={() => setActive(i)}
                className={`${s.railBtn} ${i === active ? s.railBtnActive : ""}`}
              >
                <span className={s.railIcon}>{a.icon}</span>
                <span className={s.railText}>
                  <span className={s.railName}>{a.name}</span>
                  <span className={s.railTagline}>{a.tagline}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
