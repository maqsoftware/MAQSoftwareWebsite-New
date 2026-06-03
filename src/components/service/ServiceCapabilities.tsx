import { useState } from "react";
import type { ReactNode } from "react";
import { Button, makeStyles, tokens } from "@fluentui/react-components";
import {
  Bot24Regular,
  ChartMultiple24Regular,
  Sparkle24Regular,
  BranchFork24Regular,
  ArrowRight16Regular,
} from "@fluentui/react-icons";

export interface Capability {
  name: string;
  tagline: string;
  description: string;
  icon: ReactNode;
  tags: string[];
}

export interface ServiceCapabilitiesProps {
  sectionId?: string;
  title?: string;
  subhead?: string;
  capabilities?: Capability[];
  footerLabel?: string;
  footerHref?: string;
  mailSubjectSuffix?: string;
}

const useStyles = makeStyles({
  section: { padding: "48px 32px", backgroundColor: "#fff" },
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
    margin: "0 0 6px",
    letterSpacing: "-0.01em",
  },
  sub: { fontSize: "14px", color: "var(--maq-gray-600)", margin: 0, maxWidth: "780px" },

  panel: {
    marginTop: "20px",
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
    marginBottom: "16px",
  },
  tagRow: { display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" },
  tag: {
    fontSize: "11px",
    fontWeight: 600,
    color: "var(--maq-red)",
    background: "var(--maq-red-pale)",
    padding: "4px 8px",
    borderRadius: "4px",
    letterSpacing: "0.02em",
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

  footerLink: {
    marginTop: "20px",
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "14px",
    fontWeight: 600,
    color: "var(--maq-red)",
    textDecoration: "none",
    ":hover": { textDecoration: "underline" },
  },
});

interface CapabilityInternal {
  name: string;
  tagline: string;
  description: string;
  icon: ReactNode;
  tags: string[];
}

const defaultCapabilities: CapabilityInternal[] = [
  {
    name: "Foundry agents",
    tagline: "Production agents on Microsoft Foundry",
    icon: <Bot24Regular />,
    description:
      "Design, build, and operate GenAI agents on Microsoft Foundry and the Microsoft Agent Framework. Multi-agent orchestration with grounded RAG, plugin actions, full observability, governance, and human-in-the-loop controls — ready for production on day one.",
    tags: ["Microsoft Foundry", "Agent Framework", "Multi-agent", "RAG"],
  },
  {
    name: "Advanced analytics",
    tagline: "Decisions backed by predictive models",
    icon: <ChartMultiple24Regular />,
    description:
      "Move from descriptive dashboards to predictive and prescriptive insight. We design feature stores, forecasting models, and recommendation engines tuned to your data and operating reality.",
    tags: ["Forecasting", "Recommendation", "Feature stores", "Azure ML"],
  },
  {
    name: "Intelligent automation",
    tagline: "Automate the busywork, not the judgment",
    icon: <Sparkle24Regular />,
    description:
      "Embed AI inside the workflows your teams already live in — Power Platform, Microsoft 365 Copilot, custom apps — so repetitive work disappears and people focus on decisions.",
    tags: ["Copilot Studio", "Power Automate", "M365 Copilot", "Custom agents"],
  },
  {
    name: "AgentOps & evaluation",
    tagline: "Production-grade agent lifecycle",
    icon: <BranchFork24Regular />,
    description:
      "End-to-end AgentOps so agents stay accurate, safe, and cost-controlled in production — CI/CD, drift detection, Foundry continuous evaluation, and responsible AI guardrails wired into every release.",
    tags: ["Foundry evals", "Continuous Evaluation", "AgentOps", "Responsible AI"],
  },
];

export function ServiceCapabilities({
  sectionId = "ai-capabilities",
  title = "Our agentic AI capabilities",
  subhead = "Four capability pillars that turn Microsoft Foundry and the Agent Framework into governed, production-grade business automation.",
  capabilities = defaultCapabilities,
  footerLabel = "See agentic AI case studies",
  footerHref = "/insights/case-studies?filter=Agentic%20AI%20%26%20Machine%20Learning#insights-content",
  mailSubjectSuffix = "Agentic AI & ML",
}: ServiceCapabilitiesProps = {}) {
  const s = useStyles();
  const [active, setActive] = useState(0);
  const sel = capabilities[active];
  return (
    <section className={s.section} id={sectionId}>
      <div className={s.inner}>
        <div className={s.head}>
          <span className={s.eyebrow}>Our expertise</span>
          <h2 className={s.title}>{title}</h2>
          <p className={s.sub}>{subhead}</p>
        </div>
        <div className={s.panel}>
          <div>
            <div className={s.iconBox}>{sel.icon}</div>
            <div className={s.detailName}>{sel.name}</div>
            <p className={s.detailDesc}>{sel.description}</p>
            <div className={s.tagRow}>
              {sel.tags.map((t) => (
                <span key={t} className={s.tag}>
                  {t}
                </span>
              ))}
            </div>
            <Button
              appearance="outline"
              className={s.knowMore}
              as="a"
              href={`mailto:customersuccess@maqsoftware.com?subject=${encodeURIComponent(
                sel.name + " - " + mailSubjectSuffix
              )}`}
            >
              Know more
            </Button>
          </div>
          <div className={s.rail}>
            {capabilities.map((c, i) => (
              <button
                key={c.name}
                type="button"
                aria-current={i === active}
                onClick={() => setActive(i)}
                className={`${s.railBtn} ${i === active ? s.railBtnActive : ""}`}
              >
                <span className={s.railIcon}>{c.icon}</span>
                <span className={s.railText}>
                  <span className={s.railName}>{c.name}</span>
                  <span className={s.railTagline}>{c.tagline}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
        <a
          className={s.footerLink}
          href={footerHref}
          target="_blank"
          rel="noreferrer"
        >
          {footerLabel} <ArrowRight16Regular />
        </a>
      </div>
    </section>
  );
}
