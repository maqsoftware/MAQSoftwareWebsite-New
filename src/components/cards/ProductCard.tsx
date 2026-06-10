import type { ReactNode } from "react";
import { makeStyles, tokens } from "@fluentui/react-components";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  card: {
    backgroundColor: "#fff",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "14px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    textDecoration: "none",
    color: "inherit",
    transition: "all 0.2s",
    ":hover": {
      border: "1px solid var(--maq-red)",
      boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
    },
  },
  imageWrap: {
    background: "var(--maq-surface-cream)",
    borderBottom: "1px solid var(--maq-red-pale)",
    padding: "16px 16px 0",
  },
  image: { width: "100%", height: "auto", display: "block", borderRadius: "8px" },
  body: { padding: "22px 24px 24px", display: "flex", flexDirection: "column", flex: 1 },
  logoRow: { display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" },
  logoBox: {
    width: "52px",
    height: "52px",
    borderRadius: "12px",
    background: "linear-gradient(135deg, var(--maq-red) 0%, #6a0a0e 100%)",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    fontSize: "20px",
    letterSpacing: "-0.02em",
    flexShrink: 0,
  },
  name: { fontSize: "18px", fontWeight: 700, color: "var(--maq-black)" },
  tagline: {
    fontSize: "12px",
    color: "var(--maq-red)",
    fontWeight: 600,
    marginBottom: "8px",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    alignSelf: "flex-start",
  },
  desc: {
    fontSize: "13.5px",
    color: "var(--maq-gray-700)",
    lineHeight: 1.6,
    flex: 1,
    margin: 0,
  },
  cta: {
    display: "inline-block",
    fontSize: "13px",
    fontWeight: 700,
    lineHeight: 1.4,
    color: "var(--maq-red)",
    textDecoration: "none",
    marginTop: "16px",
  },
  buttonCard: {
    width: "100%",
    textAlign: "left",
    cursor: "pointer",
  },
});

export interface ProductCardProps {
  name: string;
  tagline?: string;
  description: string;
  ctaLabel?: string;
  imageUrl?: string;
  imageAlt?: string;
  logoInitials?: string;
  logoNode?: ReactNode;
  to?: string;
  href?: string;
  openInNewTab?: boolean;
  onClick?: () => void;
  className?: string;
}

export function ProductCard({
  name,
  tagline,
  description,
  ctaLabel = "Learn more",
  imageUrl,
  imageAlt,
  logoInitials,
  logoNode,
  to,
  href,
  openInNewTab = true,
  onClick,
  className,
}: ProductCardProps) {
  const s = useStyles();
  const rootClass = `${s.card}${onClick ? ` ${s.buttonCard}` : ""}${className ? ` ${className}` : ""}`;

  const content = (
    <>
      {imageUrl ? (
        <div className={s.imageWrap}>
          <img className={s.image} src={imageUrl} alt={imageAlt ?? `${name} preview`} loading="lazy" />
        </div>
      ) : null}
      <div className={s.body}>
        {(logoNode || logoInitials) ? (
          <div className={s.logoRow}>
            <div className={s.logoBox}>{logoNode ?? logoInitials}</div>
            <div className={s.name}>{name}</div>
          </div>
        ) : (
          <div className={s.name} style={{ marginBottom: "12px" }}>
            {name}
          </div>
        )}
        {tagline ? <div className={s.tagline}>{tagline}</div> : null}
        <p className={s.desc}>{description}</p>
        <span className={s.cta}>{ctaLabel}</span>
      </div>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={rootClass}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        target={openInNewTab ? "_blank" : undefined}
        rel={openInNewTab ? "noopener noreferrer" : undefined}
        className={rootClass}
      >
        {content}
      </a>
    );
  }

  if (onClick) {
    return (
      <button type="button" className={rootClass} onClick={onClick}>
        {content}
      </button>
    );
  }

  return <div className={rootClass}>{content}</div>;
}
