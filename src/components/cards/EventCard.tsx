import type { ReactNode } from "react";
import { makeStyles, tokens, Button } from "@fluentui/react-components";
import { ArrowRight16Regular } from "@fluentui/react-icons";

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
    transition: "border-color 0.16s ease, box-shadow 0.16s ease, background-color 0.16s ease",
    ":hover": {
      border: "1px solid var(--maq-card-hover-border)",
      boxShadow: "var(--maq-shadow-lift)",
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
  },
});

export interface EventCardProps {
  date: string;
  title: string;
  summary: string;
  location?: string;
  tag?: string;
  actionLabel?: string;
  actionHref?: string;
  actionNode?: ReactNode;
}

export function EventCard({
  date,
  title,
  summary,
  location,
  tag,
  actionLabel = "View details",
  actionHref,
  actionNode,
}: EventCardProps) {
  const s = useStyles();

  return (
    <article className={s.card}>
      <div className={s.metaRow}>
        {tag ? <span className={s.tag}>{tag}</span> : null}
        <span className={s.date}>{date}</span>
      </div>
      <h3 className={`${s.title} ${s.titleClamp}`}>{title}</h3>
      {location ? <p className={s.location}>{location}</p> : null}
      <p className={`${s.summary} ${s.summaryClamp}`}>{summary}</p>
      {actionNode ?? (
        actionHref ? (
          <Button
            as="a"
            href={actionHref}
            target={actionHref.startsWith("http") ? "_blank" : undefined}
            rel={actionHref.startsWith("http") ? "noopener noreferrer" : undefined}
            appearance="subtle"
            icon={<ArrowRight16Regular />}
            iconPosition="after"
            className={s.action}
          >
            {actionLabel}
          </Button>
        ) : null
      )}
    </article>
  );
}
