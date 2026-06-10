import { makeStyles, tokens } from "@fluentui/react-components";

const useStyles = makeStyles({
  card: {
    background: "#fff",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "10px",
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
  image: {
    height: "100px",
    background:
      "linear-gradient(135deg, var(--maq-red-pale) 0%, var(--maq-off-white) 60%, var(--maq-surface-cream) 100%)",
    borderBottom: "1px solid var(--maq-border)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  body: {
    padding: "16px 18px 20px",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    gap: "8px",
  },
  title: {
    fontSize: "14px",
    fontWeight: 700,
    color: "var(--maq-black)",
    lineHeight: 1.4,
  },
  desc: {
    fontSize: "12.5px",
    color: "var(--maq-gray-600)",
    lineHeight: 1.55,
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
    marginTop: "4px",
  },
});

export interface MarketplaceCardProps {
  title: string;
  description: string;
  href: string;
  imageUrl?: string;
  ctaLabel?: string;
  className?: string;
  openInNewTab?: boolean;
}

export function MarketplaceCard({
  title,
  description,
  href,
  imageUrl,
  ctaLabel = "Read more",
  className,
  openInNewTab = true,
}: MarketplaceCardProps) {
  const s = useStyles();

  return (
    <a
      className={`${s.card}${className ? ` ${className}` : ""}`}
      href={href}
      target={openInNewTab ? "_blank" : undefined}
      rel={openInNewTab ? "noopener noreferrer" : undefined}
    >
      <div
        className={s.image}
        aria-hidden="true"
        style={imageUrl ? { backgroundImage: `url('${imageUrl}')` } : undefined}
      />
      <div className={s.body}>
        <div className={s.title}>{title}</div>
        <p className={s.desc}>{description}</p>
        <span className={s.cta}>{ctaLabel}</span>
      </div>
    </a>
  );
}
