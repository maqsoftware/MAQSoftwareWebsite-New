import { useCallback, useEffect, useMemo, useState } from "react";
import { makeStyles, Spinner } from "@fluentui/react-components";
import { ArrowRight16Regular } from "@fluentui/react-icons";
import { useNavigate } from "react-router-dom";
import { EventCard as StandardEventCard } from "../components/cards/EventCard";
import {
  fetchPastEventsFromNews,
  getUpcomingEventTag,
  mapPastUpcomingToCard,
  splitUpcomingAndPast,
  upcomingEvents,
  type EventCard as EventCardData,
} from "../data/events";
import { TextButton } from "../components/buttons";
import { InsightsResourceNav } from "../components/insights/InsightsResourceNav";

const INITIAL_PREVIOUS_VISIBLE = 9;
const INITIAL_NEWS_FETCH = 12;

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
    marginBottom: "22px",
    flexWrap: "wrap",
  },
  sectionTitle: {
    fontSize: "28px",
    fontWeight: 700,
    lineHeight: 1.2,
    color: "var(--maq-black)",
    margin: 0,
    letterSpacing: "-0.01em",
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
      <TextButton
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        iconAfter={<ArrowRight16Regular />}
        className={className}
      >
        {children}
      </TextButton>
    );
  }

  return (
    <TextButton
      iconAfter={<ArrowRight16Regular />}
      onClick={() => navigate(href)}
      className={className}
    >
      {children}
    </TextButton>
  );
}

export function AboutEvents() {
  const s = useStyles();
  const [previousFromNews, setPreviousFromNews] = useState<EventCardData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAllPrevious, setShowAllPrevious] = useState(false);

  const loadPrevious = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchPastEventsFromNews(INITIAL_NEWS_FETCH);
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
  const hasPreviousEvents = previousEvents.length > 0;

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

      <InsightsResourceNav active="events" />

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
                <StandardEventCard
                  key={event.id}
                  tag={getUpcomingEventTag(event) === "Ongoing" ? "Ongoing" : undefined}
                  date={`${new Date(event.startDate).toLocaleDateString(undefined, {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}${event.endDate !== event.startDate
                    ? ` - ${new Date(event.endDate).toLocaleDateString(undefined, {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}`
                    : ""}`}
                  title={event.title}
                  location={event.location}
                  summary={event.summary}
                  actionNode={<EventLink href={event.href} className={s.eventLinkAction}>View details</EventLink>}
                />
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

          {loading && !hasPreviousEvents && (
            <div className={s.state}>
              <Spinner label="Loading previous events..." />
            </div>
          )}

          {error && !loading && !hasPreviousEvents && (
            <div className={s.state}>
              {error}{" "}
              <TextButton size="small" onClick={() => void loadPrevious()}>
                Retry
              </TextButton>
            </div>
          )}

          {!loading && !error && !hasPreviousEvents && (
            <div className={s.empty}>No previous events found.</div>
          )}

          {hasPreviousEvents && (
            <>
              <div className={s.pastGrid}>
                {visiblePreviousEvents.map((event, idx) => (
                  <StandardEventCard
                    key={`${event.source}-${event.id}-${idx}`}
                    date={event.date}
                    title={event.title}
                    summary={event.summary}
                    actionNode={<EventLink href={event.href} className={s.eventLinkAction}>View details</EventLink>}
                  />
                ))}
              </div>

              {loading && previousFromNews.length === 0 && (
                <div className={s.state}>
                  <Spinner label="Loading more previous events..." />
                </div>
              )}

              {error && (
                <div className={s.state}>
                  Could not load additional previous events. {" "}
                  <TextButton size="small" onClick={() => void loadPrevious()}>
                    Retry
                  </TextButton>
                </div>
              )}

              {previousEvents.length > INITIAL_PREVIOUS_VISIBLE && (
                <div className={s.paginationControls}>
                  <span className={s.controlsText}>
                    Showing {visiblePreviousEvents.length} of {previousEvents.length} previous events
                  </span>
                  {!showAllPrevious ? (
                    <TextButton onClick={() => setShowAllPrevious(true)}>
                      Show more
                    </TextButton>
                  ) : (
                    <TextButton onClick={() => setShowAllPrevious(false)}>
                      Show less
                    </TextButton>
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
