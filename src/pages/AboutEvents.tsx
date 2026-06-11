import { useCallback, useEffect, useMemo, useState } from "react";
import { Button, makeStyles, Spinner, tokens } from "@fluentui/react-components";
import { ArrowRight16Regular } from "@fluentui/react-icons";
import { useNavigate } from "react-router-dom";
import { CTA } from "../components/CTA";
import { InsightsHero } from "../components/insights/InsightsHero";
import { InsightsResourceNav } from "../components/insights/InsightsResourceNav";
import {
  fetchPastEventsFromNews,
  getUpcomingEventTag,
  mapPastUpcomingToCard,
  splitUpcomingAndPast,
  upcomingEvents,
  type EventCard,
} from "../data/events";

const INITIAL_PREVIOUS_VISIBLE = 9;

const useStyles = makeStyles({
  section: { padding: "48px 32px", backgroundColor: "var(--maq-off-white)" },
  sectionAlt: { padding: "48px 32px", backgroundColor: "#fff" },
  inner: { maxWidth: "1240px", margin: "0 auto" },
  head: { textAlign: "center", marginBottom: "18px" },
  title: {
    fontSize: "30px",
    fontWeight: 700,
    color: "var(--maq-black)",
    margin: "0 0 10px",
  },
  subtitle: {
    fontSize: "14px",
    color: "var(--maq-gray-700)",
    margin: 0,
  },
  grid: {
    marginTop: "18px",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
    "@media (max-width: 1080px)": { gridTemplateColumns: "repeat(2, 1fr)" },
    "@media (max-width: 700px)": { gridTemplateColumns: "1fr" },
  },
  card: {
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "12px",
    background: "#fff",
    padding: "20px",
    textDecoration: "none",
    color: "inherit",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    transition: "all 0.2s",
    ":hover": {
      border: "1px solid var(--maq-red)",
      boxShadow: "0 6px 16px rgba(0,0,0,0.06)",
    },
  },
  meta: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "8px",
    flexWrap: "wrap",
  },
  pill: {
    fontSize: "11px",
    fontWeight: 700,
    color: "var(--maq-red)",
    background: "var(--maq-red-pale)",
    padding: "3px 8px",
    borderRadius: "4px",
    textTransform: "uppercase",
    letterSpacing: "0.04em",
  },
  date: {
    fontSize: "12px",
    color: "var(--maq-gray-500)",
    fontWeight: 600,
  },
  cardTitle: {
    fontSize: "17px",
    lineHeight: 1.35,
    color: "var(--maq-black)",
    margin: 0,
  },
  location: {
    fontSize: "13px",
    color: "var(--maq-ink)",
    fontWeight: 600,
    margin: 0,
  },
  teaser: {
    fontSize: "14px",
    color: "var(--maq-gray-600)",
    lineHeight: 1.55,
    margin: 0,
    flex: 1,
  },
  read: {
    display: "inline-flex",
    alignItems: "center",
    gap: "4px",
    color: "var(--maq-red)",
    fontWeight: 600,
    fontSize: "13px",
  },
  state: {
    textAlign: "center",
    color: "var(--maq-gray-700)",
    padding: "24px",
  },
  empty: {
    border: "1px dashed var(--maq-border)",
    borderRadius: "12px",
    padding: "28px",
    textAlign: "center",
    color: "var(--maq-gray-700)",
    backgroundColor: "#fff",
  },
  paginationControls: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    flexWrap: "wrap",
  },
  controlsText: {
    fontSize: "13px",
    color: "var(--maq-gray-700)",
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
});

function EventCardLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  const navigate = useNavigate();
  if (href.startsWith("http")) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }
  return (
    <a
      href={href}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        navigate(href);
      }}
    >
      {children}
    </a>
  );
}

export function AboutEvents() {
  const s = useStyles();
  const [previousFromNews, setPreviousFromNews] = useState<EventCard[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAllPrevious, setShowAllPrevious] = useState(false);

  const loadPrevious = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchPastEventsFromNews(30);
      setPreviousFromNews(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load previous events.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadPrevious();
  }, [loadPrevious]);

  const { upcoming, past } = useMemo(
    () => splitUpcomingAndPast(upcomingEvents),
    [],
  );

  const previousEvents = useMemo(
    () => [...past.map(mapPastUpcomingToCard), ...previousFromNews],
    [past, previousFromNews],
  );

  const visiblePreviousEvents = useMemo(
    () =>
      showAllPrevious
        ? previousEvents
        : previousEvents.slice(0, INITIAL_PREVIOUS_VISIBLE),
    [previousEvents, showAllPrevious],
  );

  return (
    <>
      <InsightsHero
        title="Connect With MAQ Software"
        subhead="Stay informed about upcoming conferences, webinars, workshops, and industry events where MAQ Software experts share insights on Data, AI, Analytics, and Cloud technologies."
        ctaLabel="Talk to our team"
      />

      <InsightsResourceNav active="events" />

      <section className={s.sectionAlt} id="insights-content">
        <div className={s.inner}>
          <div className={s.head}>
            <h2 className={s.title}>Upcoming Events</h2>
            {/* <p className={s.subtitle}>
              Meet MAQ Software at upcoming conferences and live sessions.
            </p> */}
          </div>

          {upcoming.length === 0 ? (
            <div className={s.empty}>
              No upcoming events right now. Please check back soon.
            </div>
          ) : (
            <div className={s.grid}>
              {upcoming.map((event) => {
                const dateLabel = `${new Date(event.startDate).toLocaleDateString(
                  undefined,
                  { month: "short", day: "numeric", year: "numeric" },
                )}${
                  event.endDate !== event.startDate
                    ? ` - ${new Date(event.endDate).toLocaleDateString(undefined, {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}`
                    : ""
                }`;
                const tag = getUpcomingEventTag(event);
                return (
                  <EventCardLink
                    key={event.id}
                    href={event.href}
                    className={s.card}
                  >
                    <div className={s.meta}>
                      <span className={s.pill}>{tag}</span>
                      <span className={s.date}>{dateLabel}</span>
                    </div>
                    <h3 className={`${s.cardTitle} ${s.titleClamp}`}>
                      {event.title}
                    </h3>
                    <p className={s.location}>{event.location}</p>
                    <p className={`${s.teaser} ${s.summaryClamp}`}>
                      {event.summary}
                    </p>
                    <span className={s.read}>
                      {event.ctaLabel || "View event details"}
                      <ArrowRight16Regular />
                    </span>
                  </EventCardLink>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section className={s.section}>
        <div className={s.inner}>
          <div className={s.head}>
            <h2 className={s.title}>Previous Events</h2>
            {/* <p className={s.subtitle}>
              Recaps and coverage from past conferences and sessions.
            </p> */}
          </div>

          {loading && (
            <div className={s.state}>
              <Spinner label="Loading previous events..." />
            </div>
          )}

          {error && !loading && (
            <div className={s.state}>
              {error}{" "}
              <Button
                size="small"
                appearance="subtle"
                onClick={() => void loadPrevious()}
              >
                Retry
              </Button>
            </div>
          )}

          {!loading && !error && previousEvents.length === 0 && (
            <div className={s.empty}>No previous events found.</div>
          )}

          {!loading && !error && previousEvents.length > 0 && (
            <>
              <div className={s.grid}>
                {visiblePreviousEvents.map((event) => (
                  <EventCardLink
                    key={event.id}
                    href={event.href}
                    className={s.card}
                  >
                    <div className={s.meta}>
                      {event.tag && (
                        <span className={s.pill}>{event.tag}</span>
                      )}
                      <span className={s.date}>{event.date}</span>
                    </div>
                    <h3 className={`${s.cardTitle} ${s.titleClamp}`}>
                      {event.title}
                    </h3>
                    {event.location && (
                      <p className={s.location}>{event.location}</p>
                    )}
                    <p className={`${s.teaser} ${s.summaryClamp}`}>
                      {event.summary}
                    </p>
                    <span className={s.read}>
                      Read full article
                      <ArrowRight16Regular />
                    </span>
                  </EventCardLink>
                ))}
              </div>

              {previousEvents.length > INITIAL_PREVIOUS_VISIBLE && (
                <div className={s.paginationControls}>
                  <span className={s.controlsText}>
                    Showing {visiblePreviousEvents.length} of{" "}
                    {previousEvents.length} previous events
                  </span>
                  {!showAllPrevious ? (
                    <Button
                      appearance="subtle"
                      onClick={() => setShowAllPrevious(true)}
                    >
                      Show more
                    </Button>
                  ) : (
                    <Button
                      appearance="subtle"
                      onClick={() => setShowAllPrevious(false)}
                    >
                      Show less
                    </Button>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      <CTA />
    </>
  );
}
