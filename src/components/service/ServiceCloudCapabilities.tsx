import { useState } from "react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { makeStyles, tokens } from "@fluentui/react-components";
import { useContactAction } from "../../lib/contact";
import { SecondaryButton } from "../buttons";
import {
  CloudArrowUp24Regular,
  ShieldLock24Regular,
  Cube24Regular,
  Server24Regular,
  ArrowRight16Regular,
} from "@fluentui/react-icons";

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
    fontSize: "30px",
    fontWeight: 700,
    color: "var(--maq-black)",
    margin: "0 0 6px",
    letterSpacing: "-0.01em",
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

interface Capability {
  name: string;
  tagline: string;
  description: string;
  icon: ReactNode;
  tags: string[];
}

const capabilities: Capability[] = [
  {
    name: "Migration & modernization",
    tagline: "Transform with cloud migration",
    icon: <CloudArrowUp24Regular />,
    description:
      "Migrate your workloads to the cloud with ease. We handle every step, from planning to execution, ensuring your systems are modernized and optimized for the cloud environment. End-to-end cloud migration with minimal downtime and risk.",
    tags: ["Azure Migration", "Workload optimization", "Data modernization", "Zero-downtime"],
  },
  {
    name: "Cloud security",
    tagline: "Protect at every layer",
    icon: <ShieldLock24Regular />,
    description:
      "Ensure robust cloud security with defense-in-depth strategies covering identity, network, data, and compliance. We help you implement security controls, manage access policies, and meet regulatory requirements across your cloud environment.",
    tags: ["IAM", "Network security", "Data encryption", "Compliance"],
  },
  {
    name: "Cloud native applications",
    tagline: "Build apps for the cloud",
    icon: <Cube24Regular />,
    description:
      "Design and deploy cloud-native applications using containerization, microservices, and serverless architectures. We help you build scalable, resilient applications that leverage the full potential of cloud infrastructure.",
    tags: ["Kubernetes", "Docker", "Microservices", "Serverless"],
  },
  {
    name: "Infrastructure services",
    tagline: "Manage cloud operations",
    icon: <Server24Regular />,
    description:
      "Optimize your cloud infrastructure with cost management, performance tuning, and operational best practices. We design and manage cloud platforms that scale with your business while controlling costs and ensuring high availability.",
    tags: ["IaC", "Cost optimization", "Performance", "HA/DR"],
  },
];

export function ServiceCloudCapabilities() {
  const s = useStyles();
  const handleContactClick = useContactAction();
  const [active, setActive] = useState(0);
  const sel = capabilities[active];
  return (
    <section className={s.section} id="cloud-capabilities">
      <div className={s.inner}>
        <div className={s.head}>
          <span className={s.eyebrow}>Our expertise</span>
          <h2 className={s.title}>Our cloud modernization capabilities</h2>
          {/* <p className={s.sub}>
            Four capability pillars that replatform on-premises workloads to Azure with
            FinOps discipline — scalable, secure, and cost-controlled.
          </p> */}
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
                handleContactClick(sel.name + " - Cloud Modernization")
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
        <Link className={s.footerLink} to="/insights/case-studies?filter=Cloud modernization#insights-content">
          See cloud case studies <ArrowRight16Regular />
        </Link>
      </div>
    </section>
  );
}
