import type { ReactNode } from "react";
import { makeStyles, tokens } from "@fluentui/react-components";

const useStyles = makeStyles({
  card: {
    fontFamily: "Roboto, system-ui",
    border: "1px solid var(--maq-border)",
    borderRadius: "12px",
    padding: "24px",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    gap: "10px",
    contain: "layout paint",
    transition: "border-color 0.16s ease, box-shadow 0.16s ease, transform 0.16s ease",
    textDecoration: "none",
    color: "inherit",
    cursor: "pointer",
    ":hover": {
      border: "1px solid var(--maq-card-hover-border)",
      boxShadow: "var(--maq-shadow-lift)",
      transform: "translateY(-2px)",
    },
  },
  metaRow: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    flexWrap: "wrap",
  },
  tag: {
    display: "inline-block",
    padding: "2px 8px",
    borderRadius: "999px",
    backgroundColor: "var(--maq-red-pale)",
    color: "var(--maq-red)",
    fontWeight: 600,
    fontSize: "11px",
    letterSpacing: "0.04em",
    textTransform: "uppercase",
  },
  date: {
    fontSize: "12px",
    color: "var(--maq-gray-700)",
    fontWeight: 600,
  },
  title: {
    margin: 0,
    fontSize: "20px",
    lineHeight: 1.3,
    fontWeight: 700,
    color: "var(--maq-black)",
  },
  location: {
    margin: 0,
    fontSize: "13.5px",
    color: "var(--maq-ink)",
    fontWeight: 600,
  },
  summary: {
    margin: 0,
    fontSize: "13.5px",
    lineHeight: 1.6,
    color: "var(--maq-gray-700)",
    flex: 1,
  },
  titleClamp: {
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  },
  summaryClamp: {
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  },
  action: {
    color: "var(--maq-red)",
    fontWeight: 700,
    alignSelf: "flex-start",
    marginTop: "auto",
    fontSize: "13px",
    display: "inline-block",
    textDecoration: "none",
    paddingTop: "8px",
  },
});

export interface EventCardProps {
  date: string;
  title: string;
  summary: string;
  location?: string;
  tag?: string;
  href?: string;
  actionLabel?: string;
  actionNode?: ReactNode;
}

export function EventCard({
  date,
  title,
  summary,
  location,
  tag,
  href,
  actionLabel = "View details",
  actionNode,
}: EventCardProps) {
  const s = useStyles();

  const content = (
    <>
      <div className={s.metaRow}>
        {tag ? <span className={s.tag}>{tag}</span> : null}
        <span className={s.date}>{date}</span>
      </div>
      <h3 className={`${s.title} ${s.titleClamp}`}>{title}</h3>
      {location ? <p className={s.location}>{location}</p> : null}
      <p className={`${s.summary} ${s.summaryClamp}`}>{summary}</p>
      {actionNode ? (
        <div className={s.action}>{actionNode}</div>
      ) : (
        <div className={s.action}>{actionLabel}</div>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className={s.card}
      >
        {content}
      </a>
    );
  }

  return <article className={s.card}>{content}</article>;
}
