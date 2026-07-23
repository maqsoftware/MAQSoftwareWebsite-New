import { useState } from "react";
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
import { FeatureCard } from "../cards/FeatureCard";

/* Microsoft specializations — the 11 advanced specializations MAQ Software
   holds, shown on /who-we-are.

   Why a carousel: eleven items is too many for a static grid on a page that
   already stacks Recognitions and Certifications below it — a 3-column grid
   would run four rows deep and bury the sections that follow. The carousel
   keeps the section to one card-height while still exposing all eleven.

   The mechanics mirror ServiceCapabilities (same Fluent Carousel, same Embla
   slide-padding trick for gap-across-the-loop, same nav + autoplay footer), so
   the two read as one component family. See ServiceCapabilities for the long
   form of why slide spacing is padding-based rather than a container `gap`.

   Names come from partner.microsoft.com and are trademarked — do not
   paraphrase them. Two use the name marketing asked for rather than the
   current page title: "Microsoft 365 Copilot" (page reads "Microsoft
   Copilot") and "Migrate Enterprise Applications to Microsoft Azure" (page
   reads "Modernization of Web Applications to Microsoft Azure"). Descriptions
   are ours, written in customer voice — Microsoft's own copy addresses
   partners earning the specialization, not the customers buying the work.
   Each card links to the Microsoft page so the claim is verifiable. */

interface Specialization {
  name: string;
  description: string;
  href: string;
}

// Ordered by service area — AI, then data, then cloud, then security — rather
// than by Microsoft's own alphabetical listing, so the strongest and most
// current capabilities lead.
const SPECIALIZATIONS: Specialization[] = [
  {
    name: "AI Platform on Microsoft Azure",
    description:
      "Design and run AI and machine learning platforms on Azure, from data preparation through model deployment and monitoring.",
    href: "https://partner.microsoft.com/en-us/partnership/specialization/ai-platform-on-microsoft-azure",
  },
  {
    name: "AI Apps on Microsoft Azure",
    description:
      "Build and modernize applications with AI built in, using Azure AI Foundry and Azure OpenAI Service.",
    href: "https://partner.microsoft.com/en-us/partnership/specialization/ai-apps-on-microsoft-azure",
  },
  {
    name: "Microsoft 365 Copilot",
    description:
      "Roll out Microsoft 365 Copilot, Copilot Chat, and Copilot Studio agents, grounded in your data and governed for compliance.",
    href: "https://partner.microsoft.com/en-us/partnership/specialization/microsoft-copilot",
  },
  {
    name: "Agentic DevOps with Microsoft Azure and GitHub",
    description:
      "Shorten delivery cycles with agentic DevOps practices across Azure and GitHub, from planning through automated deployment.",
    href: "https://partner.microsoft.com/en-us/partnership/specialization/agenticdevops-microsoftazure-github",
  },
  {
    name: "Analytics on Microsoft Azure",
    description:
      "Deliver analytics platforms on Azure Databricks, Data Factory, and Data Lake, tuned for enterprise-scale workloads.",
    href: "https://partner.microsoft.com/en-us/partnership/specialization/analytics-on-microsoft-azure",
  },
  {
    name: "Data Warehouse Migration to Microsoft Azure",
    description:
      "Move legacy data warehouses to Azure with workload analysis, schema modeling, and validated ETL cutover.",
    href: "https://partner.microsoft.com/en-us/partnership/specialization/data-warehouse-migration",
  },
  {
    name: "Kubernetes on Microsoft Azure",
    description:
      "Run containerized production workloads on Azure Kubernetes Service, with scaling, monitoring, and cost control.",
    href: "https://partner.microsoft.com/en-us/partnership/specialization/kubernetes",
  },
  {
    name: "Migrate Enterprise Applications to Microsoft Azure",
    description:
      "Migrate and modernize web applications on Azure, applying DevOps practices and managed application services.",
    href: "https://partner.microsoft.com/en-us/partnership/specialization/migrate-enterprise-applications",
  },
  {
    name: "Cloud Security",
    description:
      "Implement end-to-end security controls across Azure, hybrid, and multicloud environments.",
    href: "https://partner.microsoft.com/en-us/partnership/specialization/cloud-security",
  },
  {
    name: "Identity and Access Management",
    description:
      "Secure access with Microsoft Entra ID, covering identity governance, conditional access, and single sign-on.",
    href: "https://partner.microsoft.com/en-us/partnership/specialization/identity-and-access-management",
  },
  {
    name: "Threat Protection",
    description:
      "Detect and respond to threats across your estate with Microsoft Defender and Microsoft Sentinel.",
    href: "https://partner.microsoft.com/en-us/partnership/specialization/threat-protection",
  },
];

const useStyles = makeStyles({
  section: { padding: "48px 32px", backgroundColor: "#fff" },
  inner: { maxWidth: "var(--maq-container-wide)", margin: "0 auto" },

  head: { marginBottom: "28px" },
  title: {
    display: "block",
    fontSize: "36px",
    lineHeight: 1.15,
    fontWeight: 700,
    color: "var(--maq-navy)",
    margin: "0 0 12px",
    letterSpacing: "-0.02em",
    textAlign: "left",
    "@media (max-width: 560px)": { fontSize: "24px", lineHeight: 1.2 },
  },
  sub: {
    display: "block",
    fontSize: "15px",
    lineHeight: 1.65,
    color: "var(--maq-gray-700)",
    margin: 0,
  },

  // Why the gutter is compensated on the root and not on the slider:
  //
  // Fluent's Embla config sets `inViewThreshold: 0.99` (useEmblaCarousel.js),
  // and CarouselCard marks any slide Embla reports as out-of-view with
  // `element.inert = true` (useCarouselCard.js). `inert` kills clicks, hover,
  // and focus. So a slide that is even 2% outside the viewport goes dead.
  //
  // Slide spacing lives in each slide's own left padding (see the note above),
  // which means the first slide carries a 16px gutter that has to be cancelled
  // for card 1 to line up with the heading. Cancelling it on the SLIDER hangs
  // that gutter outside the viewport, leaving slide 1 ~96% visible — under the
  // 0.99 threshold, so Embla calls it out-of-view and the first card in every
  // page position is inert. That is the bug, not clipping.
  //
  // Pulling the whole carousel left by a gutter instead keeps every slide fully
  // inside the viewport (all in view, none inert) and still lands card 1 on the
  // container edge. The last visible card then ends flush with the viewport's
  // right edge, so the next card stays hidden.
  carousel: { marginLeft: "-16px" },
  slider: { gap: 0 },
  slide: {
    flex: "0 0 33.3333%",
    paddingLeft: "16px",
    boxSizing: "border-box",
    "@media (max-width: 1080px)": { flex: "0 0 50%" },
    "@media (max-width: 640px)": { flex: "0 0 100%" },
  },

  navGroup: {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    marginTop: "24px",
  },
  autoplayButton: {
    color: "var(--maq-navy)",
    ":hover": { color: "var(--maq-red)" },
  },
  nav: {
    width: "auto",
    justifyContent: "flex-start",
    marginTop: 0,
    flexShrink: 0,
  },
  navButton: {
    '&[aria-selected="true"]::after': { backgroundColor: "var(--maq-red)" },
  },
});

export function AboutSpecializations() {
  const s = useStyles();

  // Kept distinct so hovering the cards pauses rotation without overwriting an
  // explicit play/pause choice (same reasoning as ServiceCapabilities).
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);
  const [pointerOverCards, setPointerOverCards] = useState(false);

  return (
    <section className={s.section} id="microsoft-specializations">
      <div className={s.inner}>
        <div className={s.head}>
          <span className={s.title}>Microsoft specializations</span>
          <p className={s.sub}>
            Microsoft audits customer references, certified engineers, and
            delivery evidence before awarding a specialization. MAQ Software
            holds {SPECIALIZATIONS.length}.
          </p>
        </div>

        <Carousel
          className={s.carousel}
          align="start"
          circular
          autoplayInterval={6000}
          aria-label="Microsoft specializations held by MAQ Software"
          announcement={(index, totalSlides) =>
            `Specialization ${index + 1} of ${totalSlides}`
          }
        >
          <CarouselViewport
            onMouseEnter={() => setPointerOverCards(true)}
            onMouseLeave={() => setPointerOverCards(false)}
          >
            <CarouselSlider className={s.slider}>
              {SPECIALIZATIONS.map((item) => (
                <CarouselCard
                  key={item.name}
                  className={s.slide}
                  aria-label={item.name}
                >
                  <FeatureCard
                    name={item.name}
                    description={item.description}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    ctaLabel="View on Microsoft"
                  />
                </CarouselCard>
              ))}
            </CarouselSlider>
          </CarouselViewport>

          <div className={s.navGroup}>
            <CarouselNavContainer
              className={s.nav}
              layout="inline"
              next={{ "aria-label": "Next specializations" }}
              prev={{ "aria-label": "Previous specializations" }}
            >
              <CarouselNav>
                {(index) => (
                  <CarouselNavButton
                    className={s.navButton}
                    aria-label={`Go to specialization group ${index + 1}`}
                  />
                )}
              </CarouselNav>
            </CarouselNavContainer>

            {/* Autoplay only runs while this button is mounted (Fluent gates it
                deliberately, satisfying WCAG 2.2.2 — moving content needs a
                stop control). */}
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
        </Carousel>
      </div>
    </section>
  );
}
