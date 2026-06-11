import { makeStyles, tokens } from "@fluentui/react-components";
import { ArrowRight20Regular } from "@fluentui/react-icons";

const useStyles = makeStyles({
  card: {
    display: "flex",
    flexDirection: "column",
    fontFamily: "Roboto, system-ui",
    border: "0.75px solid var(--maq-red-pale)",
    borderRadius: "12px",
    padding: "22px",
    background: "#fff",
    textDecoration: "none",
    color: "inherit",
    transition: "all 0.2s",
  },
  clickable: {
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    ":hover": {
      border: "1px solid var(--maq-red)",
      boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
    },
  },
  chip: {
    alignSelf: "flex-start",
    fontSize: "10px",
    fontWeight: 700,
    color: "var(--maq-red)",
    background: "var(--maq-red-pale)",
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    padding: "3px 8px",
    borderRadius: "4px",
    marginBottom: "12px",
  },
  metric: {
    fontSize: "32px",
    fontWeight: 700,
    color: "var(--maq-red)",
    lineHeight: 1.1,
    marginBottom: "8px",
    letterSpacing: "-0.02em",
  },
  title: {
    fontSize: "15px",
    fontWeight: 700,
    color: "var(--maq-black)",
    lineHeight: 1.4,
    marginBottom: "10px",
  },
  label: {
    fontSize: "13.5px",
    fontWeight: 400,
    color: "var(--maq-gray-700)",
    lineHeight: 1.55,
    marginBottom: "14px",
    flex: 1,
  },
  centeredLabel: {
    textAlign: "center",
    fontSize: "13.5px",
    fontWeight: 600,
    color: "var(--maq-black)",
    lineHeight: 1.4,
    marginBottom: 0,
  },
  link: {
    display: "inline-flex",
    alignItems: "center",
    gap: "4px",
    fontSize: "13.5px",
    fontWeight: 600,
    color: "var(--maq-red)",
    textDecoration: "none",
  },
});

export interface StatCardProps {
  metric?: string;
  chip?: string;
  title?: string;
  label: string;
  href?: string;
  sourceLabel?: string;
  className?: string;
  centerAlign?: boolean;
}

export function StatCard({
  metric,
  chip,
  title,
  label,
  href,
  sourceLabel,
  className,
  centerAlign = false,
}: StatCardProps) {
  const s = useStyles();
  const showLink = Boolean(href && sourceLabel);
  const rootClass = `${s.card}${showLink ? ` ${s.clickable}` : ""}${className ? ` ${className}` : ""}`;

  const content = (
    <>
      {chip ? <span className={s.chip}>{chip}</span> : null}
      {metric ? <div className={s.metric}>{metric}</div> : null}
      {title ? <div className={s.title}>{title}</div> : null}
      <div className={centerAlign ? s.centeredLabel : s.label}>{label}</div>
      {showLink ? (
        <span className={s.link}>
          {sourceLabel} <ArrowRight20Regular fontSize={14} />
        </span>
      ) : null}
    </>
  );

  if (showLink && href) {
    return (
      <a className={rootClass} href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return <div className={rootClass}>{content}</div>;
}
