import { useCallback, useEffect, useMemo, useState } from "react";
import { Button, makeStyles, Spinner } from "@fluentui/react-components";
import { ArrowRight16Regular } from "@fluentui/react-icons";
import { useNavigate } from "react-router-dom";
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
  hero: {
    backgroundColor: "var(--maq-off-white)",
    padding: "56px 32px 40px",
    backgroundImage: "url('/logos/wave_dots.svg')",
    backgroundPosition: "bottom left",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  heroInner: { maxWidth: "1240px", margin: "0 auto" },
  eyebrow: {
    display: "block",
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "var(--maq-red)",
    marginBottom: "12px",
  },
  h1: {
    fontSize: "40px",
    fontWeight: 700,
    lineHeight: 1.15,
    color: "var(--maq-black)",
    letterSpacing: "-0.02em",
    margin: "0 0 12px",
  },
  heroSub: {
    fontSize: "15px",
    lineHeight: 1.65,
    color: "var(--maq-gray-700)",
    maxWidth: "760px",
    margin: 0,
  },
  section: {
    padding: "40px 32px 64px",
    backgroundColor: "#fff",
  },
  sectionAlt: {
    padding: "40px 32px 64px",
    backgroundColor: "var(--maq-off-white)",
  },
  inner: { maxWidth: "1240px", margin: "0 auto" },
  sectionHead: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "16px",
    flexDirection: "column",
    marginBottom: "22px",
    flexWrap: "wrap",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: "28px",
    fontWeight: 700,
    lineHeight: 1.2,
    color: "var(--maq-black)",
    margin: 0,
    letterSpacing: "-0.01em",
  },
  sectionDesc: {
    fontSize: "14px",
    color: "var(--maq-gray-700)",
    margin: 0,
    textAlign: "center",
  },
  upcomingGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "16px",
    "@media (max-width: 1080px)": { gridTemplateColumns: "repeat(2, minmax(0, 1fr))" },
    "@media (max-width: 700px)": { gridTemplateColumns: "1fr" },
  },
  pastGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "16px",
    "@media (max-width: 1080px)": { gridTemplateColumns: "repeat(2, minmax(0, 1fr))" },
    "@media (max-width: 700px)": { gridTemplateColumns: "1fr" },
  },
  card: {
    border: "1px solid var(--maq-border)",
    borderRadius: "12px",
    padding: "24px",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    gap: "10px",
    transition: "all 0.2s",
    ":hover": {
      border: "1px solid var(--maq-red)",
      transform: "translateY(-3px)",
      boxShadow: "var(--maq-shadow-sm)",
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
  body: {
    margin: 0,
    fontSize: "14px",
    lineHeight: 1.6,
    color: "var(--maq-gray-700)",
    flex: 1,
  },
  location: {
    margin: 0,
    fontSize: "13px",
    color: "var(--maq-ink)",
    fontWeight: 600,
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
  eventLinkAction: {
    color: "var(--maq-red)",
    fontWeight: 700,
    alignSelf: "flex-start",
    marginTop: "auto",
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

function EventLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const navigate = useNavigate();
  if (href.startsWith("http")) {
    return (
      <Button
        as="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        appearance="subtle"
        icon={<ArrowRight16Regular />}
        iconPosition="after"
        className={className}
      >
        {children}
      </Button>
    );
  }

  return (
    <Button
      appearance="subtle"
      icon={<ArrowRight16Regular />}
      iconPosition="after"
      onClick={() => navigate(href)}
      className={className}
    >
      {children}
    </Button>
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
      <section className={s.hero}>
        <div className={s.heroInner}>
          <span className={s.eyebrow}>EVENTS</span>
          <h1 className={s.h1}>Connect With MAQ Software</h1>
          <p className={s.heroSub}>
            Stay informed about upcoming conferences, webinars, workshops, and industry events where MAQ Software experts share insights on Data, AI, Analytics, and Cloud technologies.
          </p>
        </div>
      </section>

      <section className={s.section}>
        <div className={s.inner}>
          <div className={s.sectionHead}>
            <h2 className={s.sectionTitle}>Upcoming Events</h2>
           
          </div>

          {upcoming.length === 0 ? (
            <div className={s.empty}>No upcoming events right now. Please check back soon.</div>
          ) : (
            <div className={s.upcomingGrid}>
              {upcoming.map((event) => (
                <article key={event.id} className={s.card}>
                  <div className={s.metaRow}>
                    {getUpcomingEventTag(event) === "Ongoing" && (
                      <span className={s.tag}>Ongoing</span>
                    )}
                    <span className={s.date}>
                      {new Date(event.startDate).toLocaleDateString(undefined, {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                      {event.endDate !== event.startDate
                        ? ` - ${new Date(event.endDate).toLocaleDateString(undefined, {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}`
                        : ""}
                    </span>
                  </div>
                  <h3 className={`${s.title} ${s.titleClamp}`}>{event.title}</h3>
                  <p className={s.location}>{event.location}</p>
                  <p className={`${s.body} ${s.summaryClamp}`}>{event.summary}</p>
                  <EventLink href={event.href} className={s.eventLinkAction}>View details</EventLink>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className={s.sectionAlt}>
        <div className={s.inner}>
          <div className={s.sectionHead}>
            <h2 className={s.sectionTitle}>Previous Events</h2>
          </div>

          {loading && (
            <div className={s.state}>
              <Spinner label="Loading previous events..." />
            </div>
          )}

          {error && !loading && (
            <div className={s.state}>
              {error}{" "}
              <Button size="small" appearance="subtle" onClick={() => void loadPrevious()}>
                Retry
              </Button>
            </div>
          )}

          {!loading && !error && previousEvents.length === 0 && (
            <div className={s.empty}>No previous events found.</div>
          )}

          {!loading && !error && previousEvents.length > 0 && (
            <>
              <div className={s.pastGrid}>
                {visiblePreviousEvents.map((event) => (
                  <article key={event.id} className={s.card}>
                    <div className={s.metaRow}>
                      <span className={s.date}>{event.date}</span>
                    </div>
                    <h3 className={`${s.title} ${s.titleClamp}`}>{event.title}</h3>
                    <p className={`${s.body} ${s.summaryClamp}`}>{event.summary}</p>
                    <EventLink href={event.href} className={s.eventLinkAction}>View details</EventLink>
                  </article>
                ))}
              </div>

              {previousEvents.length > INITIAL_PREVIOUS_VISIBLE && (
                <div className={s.paginationControls}>
                  <span className={s.controlsText}>
                    Showing {visiblePreviousEvents.length} of {previousEvents.length} previous events
                  </span>
                  {!showAllPrevious ? (
                    <Button appearance="subtle" onClick={() => setShowAllPrevious(true)}>
                      Show more
                    </Button>
                  ) : (
                    <Button appearance="subtle" onClick={() => setShowAllPrevious(false)}>
                      Show less
                    </Button>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
