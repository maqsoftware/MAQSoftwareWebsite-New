import { makeStyles, tokens } from "@fluentui/react-components";

const useStyles = makeStyles({
  card: {
    padding: "20px",
    borderRadius: "12px",
    backgroundColor: "#fff",
    border: `1px solid ${tokens.colorNeutralStroke1}`,
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  logo: {
    height: "32px",
    objectFit: "contain",
    alignSelf: "flex-start",
  },
  headline: {
    fontSize: "14px",
    lineHeight: 1.5,
    color: "var(--maq-ink)",
    margin: 0,
    flex: 1,
  },
  link: {
    display: "inline-block",
    fontSize: "13px",
    fontWeight: 700,
    lineHeight: 1.4,
    color: "var(--maq-red)",
    textDecoration: "none",
  },
});

export interface PressCardProps {
  logo: string;
  outlet: string;
  headline: string;
  href: string;
  ctaLabel?: string;
}

export function PressCard({
  logo,
  outlet,
  headline,
  href,
  ctaLabel = "Read more",
}: PressCardProps) {
  const s = useStyles();
  return (
    <div className={s.card}>
      <img className={s.logo} src={logo} alt={outlet} />
      <p className={s.headline}>{headline}</p>
      <a className={s.link} href={href} target="_blank" rel="noopener noreferrer">
        {ctaLabel}
      </a>
    </div>
  );
}
