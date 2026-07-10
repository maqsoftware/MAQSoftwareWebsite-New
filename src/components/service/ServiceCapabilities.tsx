import { useState } from "react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { makeStyles, tokens } from "@fluentui/react-components";
import { useContactAction } from "../../lib/contact";
import { SecondaryButton } from "../buttons";
import {
  Bot24Regular,
  ChartMultiple24Regular,
  Sparkle24Regular,
  BranchFork24Regular,
  AppFolder24Regular,
  ShieldCheckmark24Regular,
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
  head: { textAlign: "center", marginBottom: "20px" },
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
    fontSize: "36px",
    lineHeight: 1.15,
    fontWeight: 700,
    color: "var(--maq-navy)",
    margin: "0 0 6px",
    letterSpacing: "-0.02em",
  },
  sub: { fontSize: "14px", color: "var(--maq-gray-600)", margin: "0 auto", maxWidth: "780px", textAlign: "center" },

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
    ":hover": { border: "1px solid var(--maq-card-hover-border)", boxShadow: "var(--maq-shadow-lift)", transform: "translateY(-2px)" },
  },
  railBtnActive: {
    border: "1px solid var(--maq-card-hover-border)",
    borderLeftWidth: "3px",
    boxShadow: "var(--maq-shadow-sm)",
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
    name: "Azure AI Foundry",
    tagline: "Production AI on Azure Foundry",
    icon: <Bot24Regular />,
    description:
      "Design, build, and manage production-ready AI applications and intelligent agents using Azure AI Foundry with enterprise governance and scalability.",
    tags: ["Azure AI Foundry", "Production AI", "Governance"],
  },
  {
    name: "Azure OpenAI Service",
    tagline: "Enterprise generative AI applications",
    icon: <Sparkle24Regular />,
    description:
      "Develop secure generative AI applications powered by OpenAI models with enterprise-grade security, compliance, and Azure integration.",
    tags: ["Azure OpenAI", "Generative AI", "Enterprise Security"],
  },
  {
    name: "Microsoft Copilot Studio",
    tagline: "Custom copilots for business workflows",
    icon: <AppFolder24Regular />,
    description:
      "Create custom copilots and AI assistants that automate business processes and deliver conversational experiences across enterprise applications.",
    tags: ["Copilot Studio", "Custom Copilots", "Workflow Automation"],
  },
  {
    name: "Agentic AI & Multi-Agent Systems",
    tagline: "Autonomous agents for complex workflows",
    icon: <BranchFork24Regular />,
    description:
      "Build autonomous AI systems that coordinate specialized agents to execute complex workflows, make decisions, and accomplish business objectives.",
    tags: ["Agentic AI", "Multi-Agent", "Autonomous Workflows"],
  },
  {
    name: "Retrieval-Augmented Generation (RAG)",
    tagline: "Grounded AI with enterprise knowledge",
    icon: <ChartMultiple24Regular />,
    description:
      "Enhance AI responses by grounding large language models with enterprise knowledge using secure retrieval from structured and unstructured data.",
    tags: ["RAG", "Knowledge Grounding", "LLM"],
  },
  {
    name: "AI Governance & Responsible AI",
    tagline: "Trusted, secure, and compliant AI",
    icon: <ShieldCheckmark24Regular />,
    description:
      "Implement governance frameworks that ensure AI systems remain secure, compliant, transparent, explainable, and aligned with responsible AI principles.",
    tags: ["Responsible AI", "AI Governance", "Compliance"],
  },
];

export function ServiceCapabilities({
  sectionId = "ai-capabilities",
  title = "Our agentic AI capabilities",
  subhead = "Capabilities that help you design, deploy, and govern enterprise AI systems at scale.",
  capabilities = defaultCapabilities,
  footerLabel = "See agentic AI case studies",
  footerHref = "/insights/case-studies?filter=Agentic%20AI%20%26%20Machine%20Learning#insights-content",
  mailSubjectSuffix = "Agentic AI & ML",
}: ServiceCapabilitiesProps = {}) {
  const s = useStyles();
  const handleContactClick = useContactAction();
  const [active, setActive] = useState(0);
  const sel = capabilities[active];
  return (
    <section className={s.section} id={sectionId}>
      <div className={s.inner}>
        <div className={s.head}>
          <span className={s.eyebrow}>Our expertise</span>
          <h2 className={s.title}>{title}</h2>
          {/* <p className={s.sub}>{subhead}</p> */}
        </div>
        <div className={s.panel}>
          <div>
            <div className={s.iconBox}>{sel.icon}</div>
            <div className={s.detailName}>{sel.name}</div>
            <p className={s.detailDesc}>{sel.description}</p>
            <SecondaryButton
              size="large"
              className="maq-secondary-btn maq-equal-cta"
              onClick={() =>
                handleContactClick(sel.name + " - " + mailSubjectSuffix)
              }
            >
              Know more
            </SecondaryButton>
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
        <Link
          className={s.footerLink}
          to={footerHref}
        >
          {footerLabel} <ArrowRight16Regular />
        </Link>
      </div>
    </section>
  );
}
