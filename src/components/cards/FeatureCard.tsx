import type { ReactNode } from "react";
import { makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
  card: {
    backgroundColor: "#fff",
    fontFamily: "Roboto, system-ui",
    border: "0.5px solid var(--maq-border)",
    borderRadius: "12px",
    padding: "24px",
    transition: "box-shadow 0.16s ease, border-color 0.16s ease",
    display: "block",
    width: "100%",
    textAlign: "left",
  },
  clickable: { 
    cursor: "pointer",
    border: "1px solid var(--maq-red)",
    ":hover": {
      border: "1px solid var(--maq-red)",
      boxShadow: "0 6px 16px rgba(0, 0, 0, 0.08)",
    },
  },
  nonInteractive: {
    ":hover": {
      border: "0.5px solid rgba(186, 20, 26, 0.35)",
    },
  },
  titleRow: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "12px",
  },
  iconBox: {
    width: "44px",
    height: "44px",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  name: { fontSize: "20px", fontWeight: 700, lineHeight: 1.2, margin: 0 },
  heading: {
    fontSize: "12px",
    fontWeight: 500,
    marginBottom: "10px",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    lineHeight: 1.4,
  },
  tagline: {
    fontSize: "13.5px",
    lineHeight: 1.6,
    marginBottom: "12px",
  },
  desc: { fontSize: "13.5px", lineHeight: 1.6 },
  bulletList: {
    margin: "0",
    paddingLeft: "18px",
    display: "grid",
    gap: "6px",
  },
  bullet: {
    fontSize: "13.5px",
    lineHeight: 1.5,
  },
});

export interface FeatureCardProps {
  icon?: ReactNode;
  name: string;
  heading?: string;
  tagline?: string;
  description?: string;
  bullets?: ReactNode[];
  href?: string;
  onClick?: () => void;
  className?: string;
  tone?: "red" | "blue";
}

export function FeatureCard({
  icon,
  name,
  heading,
  tagline,
  description,
  bullets,
  href,
  onClick,
  className,
  tone = "red",
}: FeatureCardProps) {
  const s = useStyles();
  const interactive = Boolean(href || onClick);
  const accent = tone === "blue" ? "var(--maq-blue)" : "var(--maq-red)";
  const accentPale = tone === "blue" ? "var(--maq-blue-pale)" : "var(--maq-red-pale)";
  const titleColor = tone === "blue" ? "var(--maq-navy)" : "var(--maq-black)";
  const textColor = "var(--maq-gray-700)";
  const cardClass = `${s.card}${interactive ? ` ${s.clickable}` : ` ${s.nonInteractive}`}${className ? ` ${className}` : ""}`;

  const content = (
    <>
      <div className={s.titleRow}>
        {icon ? (
          <div className={s.iconBox} style={{ backgroundColor: accentPale, color: accent }}>
            {icon}
          </div>
        ) : null}
        <h3 className={s.name} style={{ color: titleColor }}>
          {name}
        </h3>
      </div>
      {heading ? (
        <div className={s.heading} style={{ color: accent }}>
          {heading}
        </div>
      ) : null}
      {tagline ? (
        <div className={s.tagline} style={{ color: textColor }}>
          {tagline}
        </div>
      ) : null}
      {bullets && bullets.length > 0 ? (
        <ul className={s.bulletList}>
          {bullets.map((item, index) => (
            <li key={index} className={s.bullet} style={{ color: textColor }}>
              {item}
            </li>
          ))}
        </ul>
      ) : description ? (
        <div className={s.desc} style={{ color: textColor }}>
          {description}
        </div>
      ) : null}
    </>
  );

  if (href) {
    return (
      <a className={cardClass} href={href}>
        {content}
      </a>
    );
  }

  if (onClick) {
    return (
      <button
        type="button"
        className={cardClass}
        onClick={onClick}
      >
        {content}
      </button>
    );
  }

  return <div className={cardClass}>{content}</div>;
}
