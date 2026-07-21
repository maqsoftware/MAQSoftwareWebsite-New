import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  makeStyles,
  Carousel,
  CarouselAutoplayButton,
  CarouselCard,
  CarouselNav,
  CarouselNavButton,
  CarouselNavContainer,
  CarouselSlider,
  CarouselViewport,
} from "@fluentui/react-components";
import {
  ArrowRight16Regular,
  Layer24Regular,
  ArrowSwap24Regular,
  DataPie24Regular,
  ShieldCheckmark24Regular,
  Database24Regular,
  Cloud24Regular,
} from "@fluentui/react-icons";
import { FeatureCard } from "../cards/FeatureCard";

/* Data & AI Platforms "capabilities" — Fluent 2 Carousel showing several
   capability cards per view.

   Cards: we reuse the shared <FeatureCard> so these match the outcomes section
   below exactly (icon inline with the heading, description underneath, same
   border/padding/hover). FeatureCard is width/height:100%, so it fills its
   slide — and because slides stretch to the tallest in view, the cards stay
   equal height.

   Slide spacing (important):
   The Fluent Carousel is powered by embla-carousel, and Embla does not carry a
   container-level `gap` across the loop boundary — the spacing isn't part of a
   slide's own box, so the wrap point renders flush and the slide offsets drift
   (clipping the first card's edge). Embla's pattern is to make the spacing part
   of each slide: zero the slider's gap, give every slide a left padding, and
   cancel the first slide's padding with a negative margin on the slider. That
   keeps a consistent gap all the way around the loop. 16px matches the card
   grid gap in the section below (ServiceOutcomesData).

   `groupSize` is left at its default ('auto') so the nav regroups to match
   however many cards are visible at each breakpoint. */

const useStyles = makeStyles({
  section: { padding: "48px 32px", backgroundColor: "#fff" },
  inner: { maxWidth: "var(--maq-container-wide)", margin: "0 auto" },

  head: { marginBottom: "28px" },
  title: {
    fontSize: "36px",
    lineHeight: 1.15,
    fontWeight: 700,
    color: "var(--maq-navy)",
    margin: 0,
    letterSpacing: "-0.02em",
    textAlign: "left",
  },

  // Fluent puts `overflow-x: hidden` on the Carousel root, and the slider's
  // -16px margin parks the first card's left border exactly on that clip edge.
  // Slide widths are fractional (33.3333% of viewport+16px), so once Embla
  // starts translating past the first page the transform lands on a sub-pixel
  // and the rounding eats that border. Giving the root 1px of padding moves the
  // clip edge 1px further left, and the matching -1px margin puts the root back
  // where it was — so the cards still line up with the h2 above, but the clip
  // boundary now sits inside the slide's own transparent 16px gutter.
  carousel: {
    paddingLeft: "1px",
    marginLeft: "-1px",
  },
  slider: {
    // Spacing comes from each slide's padding-left (see note above), so the
    // container gap is zeroed and the first slide's padding is cancelled out.
    gap: 0,
    marginLeft: "-16px",
  },
  slide: {
    flex: "0 0 33.3333%",
    paddingLeft: "16px",
    boxSizing: "border-box",
    "@media (max-width: 1080px)": { flex: "0 0 50%" },
    "@media (max-width: 640px)": { flex: "0 0 100%" },
  },

  // Nav (left) + case-studies link (right) on one row under the cards.
  footerRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "24px",
    marginTop: "24px",
    "@media (max-width: 640px)": {
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "16px",
    },
  },
  // Play/pause + dots travel together on the left of the footer row.
  navGroup: {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    flexShrink: 0,
  },
  autoplayButton: {
    color: "var(--maq-navy)",
    ":hover": { color: "var(--maq-red)" },
  },
  // Fluent's nav container is width:100% + justify-content:center; shrink it so
  // it sits left in the footer row instead of stretching across it.
  nav: {
    width: "auto",
    justifyContent: "flex-start",
    marginTop: 0,
    flexShrink: 0,
  },
  // The dot is the button's ::after; selected already renders as a wider pill,
  // so we only recolor it to the brand red (matches the home page pills).
  navButton: {
    '&[aria-selected="true"]::after': {
      backgroundColor: "var(--maq-red)",
    },
  },
  footerLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "14px",
    fontWeight: 600,
    color: "var(--maq-red)",
    textDecoration: "none",
    flexShrink: 0,
    ":hover": { textDecoration: "underline" },
  },
});

interface Capability {
  name: string;
  description: string;
  icon: ReactNode;
}

const capabilities: Capability[] = [
  {
    name: "Microsoft Fabric",
    icon: <Layer24Regular />,
    description:
      "Build a unified analytics platform on Microsoft Fabric that brings data engineering, warehousing, real-time analytics, and business intelligence into one AI-ready environment.",
  },
  {
    name: "Databricks",
    icon: <Database24Regular />,
    description:
      "Engineer data pipelines and AI on Databricks for analytics, machine learning, collaborative notebooks, and large-scale data processing.",
  },
  {
    name: "Snowflake AI Data Cloud",
    icon: <Cloud24Regular />,
    description:
      "Modernize enterprise data on Snowflake with secure data sharing, analytics, AI workloads, and cross-cloud collaboration.",
  },
  {
    name: "Azure Data Factory",
    icon: <ArrowSwap24Regular />,
    description:
      "Automate data integration pipelines that ingest, transform, and orchestrate enterprise data across hybrid and cloud environments.",
  },
  {
    name: "Lakehouse & Data Warehouse Modernization",
    icon: <DataPie24Regular />,
    description:
      "Replace legacy data platforms with lakehouse and warehouse architectures built for analytics, governance, and AI.",
  },
  {
    name: "Master Data Management (MDM)",
    icon: <ShieldCheckmark24Regular />,
    description:
      "Centralize and govern master records across business systems to keep enterprise data consistent and trusted.",
  },
];

export function ServiceCapabilitiesData() {
  const s = useStyles();

  // Two separate pieces of state, because "the user pressed pause" and "the
  // pointer is over the cards" have to be distinguishable — otherwise moving
  // the mouse away would silently undo an explicit pause.
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);
  const [pointerOverCards, setPointerOverCards] = useState(false);

  return (
    <section className={s.section} id="data-analytics-capabilities">
      <div className={s.inner}>
        <div className={s.head}>
          <h2 className={s.title}>What you can build on a modern data platform</h2>
        </div>

        <Carousel
          className={s.carousel}
          align="start"
          circular
          autoplayInterval={6000}
          aria-label="Data and AI platform capabilities"
          announcement={(index, totalSlides) =>
            `Capability ${index + 1} of ${totalSlides}`
          }
        >
          {/* Hover pause is scoped to the viewport (the cards) rather than the
              whole Carousel. If it covered the footer too, hovering the
              play/pause button would itself pause autoplay and invert what the
              button's next click means. */}
          <CarouselViewport
            onMouseEnter={() => setPointerOverCards(true)}
            onMouseLeave={() => setPointerOverCards(false)}
          >
            <CarouselSlider className={s.slider}>
              {capabilities.map((c) => (
                <CarouselCard key={c.name} className={s.slide} aria-label={c.name}>
                  <FeatureCard icon={c.icon} name={c.name} description={c.description} />
                </CarouselCard>
              ))}
            </CarouselSlider>
          </CarouselViewport>

          <div className={s.footerRow}>
            <div className={s.navGroup}>
              <CarouselNavContainer
                className={s.nav}
                layout="inline"
                next={{ "aria-label": "Next capabilities" }}
                prev={{ "aria-label": "Previous capabilities" }}
              >
                <CarouselNav>
                  {(index) => (
                    <CarouselNavButton
                      className={s.navButton}
                      aria-label={`Go to capability group ${index + 1}`}
                    />
                  )}
                </CarouselNav>
              </CarouselNavContainer>

              {/* Autoplay is only active while this button is mounted — Fluent
                  gates it deliberately, which also satisfies WCAG 2.2.2: content
                  that moves on its own needs a way to stop it. `checked` is
                  controlled, so hovering the cards pauses without clearing the
                  user's own play/pause choice. */}
              <CarouselAutoplayButton
                className={s.autoplayButton}
                appearance="transparent"
                checked={autoplayEnabled && !pointerOverCards}
                onCheckedChange={(_, data) => setAutoplayEnabled(data.checked)}
                aria-label={
                  autoplayEnabled
                    ? "Pause automatic rotation"
                    : "Start automatic rotation"
                }
              />
            </div>

            <Link
              className={s.footerLink}
              to="/insights/case-studies?filter=Data%20%26%20AI%20Platforms#insights-content"
            >
              See data &amp; analytics case studies <ArrowRight16Regular />
            </Link>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
