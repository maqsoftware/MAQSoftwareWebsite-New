import { Button, makeStyles, tokens } from "@fluentui/react-components";
import { ArrowLeft16Regular, ArrowRight16Regular, Open16Regular } from "@fluentui/react-icons";
import { Link, useParams } from "react-router-dom";
import { CTA } from "../components/CTA";
import {
  findVisualGuideItem,
  visualGuideItems,
  visualGuideSlug,
  type VisualGuideItem,
} from "../data/insights";
import { appSourceUrl, findVisualGuideContent } from "../data/visualGuideContent";

const useStyles = makeStyles({
  hero: {
    backgroundColor: "var(--maq-off-white)",
    padding: "48px 32px",
    borderBottom: `1px solid ${tokens.colorNeutralStroke2}`,
  },
  heroInner: { maxWidth: "1240px", margin: "0 auto" },
  back: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "13px",
    fontWeight: 600,
    color: "var(--maq-red)",
    textDecoration: "none",
    marginBottom: "20px",
    ":hover": { textDecoration: "underline" },
  },
  layout: {
    display: "grid",
    gridTemplateColumns: "1.1fr 1fr",
    gap: "40px",
    alignItems: "center",
    "@media (max-width: 960px)": { gridTemplateColumns: "1fr" },
  },
  eyebrow: {
    fontSize: "12px",
    fontWeight: 700,
    color: "var(--maq-red)",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    marginBottom: "12px",
    display: "block",
  },
  h1: {
    fontSize: "40px",
    lineHeight: 1.15,
    fontWeight: 700,
    color: "var(--maq-black)",
    letterSpacing: "-0.02em",
    margin: "0 0 16px",
  },
  description: {
    fontSize: "16px",
    lineHeight: 1.6,
    color: "var(--maq-gray-600)",
    marginBottom: "20px",
  },
  badges: { display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "20px" },
  pill: {
    fontSize: "11px",
    fontWeight: 700,
    color: "var(--maq-red)",
    background: "var(--maq-red-pale)",
    padding: "4px 10px",
    borderRadius: "4px",
    textTransform: "uppercase",
  },
  catPill: {
    fontSize: "11px",
    fontWeight: 700,
    color: "var(--maq-gray-600)",
    background: "#fff",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    padding: "4px 10px",
    borderRadius: "4px",
    textTransform: "uppercase",
  },
  ctas: { display: "flex", gap: "12px", flexWrap: "wrap" },
  imageWrap: {
    background: "#fff",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "16px",
    padding: "28px",
    boxShadow: "0 12px 32px rgba(15, 23, 42, 0.06)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: { width: "100%", maxWidth: "420px", height: "auto", display: "block" },
  section: { padding: "48px 32px", backgroundColor: "#fff" },
  inner: { maxWidth: "1240px", margin: "0 auto" },
  sectionTitle: {
    fontSize: "24px",
    fontWeight: 700,
    color: "var(--maq-black)",
    margin: "0 0 16px",
  },
  factGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
    "@media (max-width: 760px)": { gridTemplateColumns: "1fr" },
  },
  fact: {
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "12px",
    padding: "18px",
    background: "var(--maq-off-white)",
  },
  factLabel: {
    fontSize: "11px",
    fontWeight: 700,
    color: "var(--maq-gray-500)",
    textTransform: "uppercase",
    letterSpacing: "0.06em",
    marginBottom: "6px",
  },
  factValue: { fontSize: "15px", color: "var(--maq-black)", fontWeight: 600 },
  related: { padding: "48px 32px", backgroundColor: "var(--maq-off-white)" },
  relatedGrid: {
    marginTop: "18px",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "16px",
    "@media (max-width: 1180px)": { gridTemplateColumns: "repeat(2, 1fr)" },
    "@media (max-width: 700px)": { gridTemplateColumns: "1fr" },
  },
  card: {
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "12px",
    background: "#fff",
    padding: "16px",
    textDecoration: "none",
    color: "inherit",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    transition: "all 0.2s",
    ":hover": { border: "1px solid var(--maq-red)", boxShadow: "0 6px 16px rgba(0,0,0,0.06)" },
  },
  cardImg: { width: "100%", aspectRatio: "16/9", objectFit: "contain", background: "#fff" },
  cardTitle: { fontSize: "15px", fontWeight: 600, color: "var(--maq-black)", margin: 0 },
  read: {
    display: "inline-flex",
    alignItems: "center",
    gap: "4px",
    color: "var(--maq-red)",
    fontWeight: 600,
    fontSize: "13px",
  },
  notFound: {
    padding: "80px 32px",
    textAlign: "center",
    color: "var(--maq-gray-600)",
  },
  bullets: {
    margin: 0,
    padding: "0 0 0 20px",
    display: "grid",
    gap: "8px",
  },
  bulletItem: {
    fontSize: "14px",
    lineHeight: 1.6,
    color: "var(--maq-gray-700, #4b5563)",
  },
  contentGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "32px",
    "@media (max-width: 880px)": { gridTemplateColumns: "1fr" },
  },
  block: {
    background: "var(--maq-off-white)",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "12px",
    padding: "22px",
  },
  blockTitle: {
    fontSize: "16px",
    fontWeight: 700,
    color: "var(--maq-black)",
    margin: "0 0 12px",
  },
  whatsNewTag: {
    display: "inline-block",
    fontSize: "11px",
    fontWeight: 700,
    color: "var(--maq-red)",
    background: "var(--maq-red-pale)",
    padding: "2px 8px",
    borderRadius: "4px",
    marginLeft: "8px",
    textTransform: "uppercase",
  },
  longText: {
    fontSize: "15px",
    lineHeight: 1.7,
    color: "var(--maq-gray-700, #4b5563)",
    margin: "0 0 16px",
  },
  contact: {
    background: "#fff",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "12px",
    padding: "22px",
    marginTop: "24px",
    fontSize: "14px",
    lineHeight: 1.6,
    color: "var(--maq-gray-700, #4b5563)",
  },
  contactLink: {
    color: "var(--maq-red)",
    fontWeight: 600,
    textDecoration: "none",
    ":hover": { textDecoration: "underline" },
  },
});

function categoryLabel(item: VisualGuideItem): string {
  return Array.isArray(item.category) ? item.category.join(", ") : item.category;
}

function categoryList(item: VisualGuideItem): string[] {
  return Array.isArray(item.category) ? item.category : [item.category];
}

export function InsightsCustomVisualDetail() {
  const s = useStyles();
  const { slug = "" } = useParams<{ slug: string }>();
  const item = findVisualGuideItem(slug);
  const content = findVisualGuideContent(slug);

  if (!item) {
    return (
      <>
        <section className={s.notFound}>
          <h1>Visual not found</h1>
          <p>We couldn't find a Power BI custom visual matching that link.</p>
          <Link to="/insights/power-bi-custom-visual-guide" className={s.back}>
            <ArrowLeft16Regular /> Back to all visuals
          </Link>
        </section>
        <CTA />
      </>
    );
  }

  const cats = categoryList(item);
  const related = visualGuideItems
    .filter(
      (other) =>
        visualGuideSlug(other.name) !== slug &&
        categoryList(other).some((c) => cats.includes(c)),
    )
    .slice(0, 4);

  const appSourceHref = content ? appSourceUrl(content.appSourceProductId) : item.href;
  const heroDescription = content?.tagline ?? item.description;
  const supportSubject = encodeURIComponent(`Support - ${item.name}`);
  const prioritySubject = encodeURIComponent(`Priority request - ${item.name}`);

  return (
    <>
      <section className={s.hero}>
        <div className={s.heroInner}>
          <Link to="/insights/power-bi-custom-visual-guide" className={s.back}>
            <ArrowLeft16Regular /> All Power BI custom visuals
          </Link>
          <div className={s.layout}>
            <div>
              <span className={s.eyebrow}>Power BI custom visual</span>
              <h1 className={s.h1}>{item.name}</h1>
              <p className={s.description}>{heroDescription}</p>
              <div className={s.badges}>
                {item.badges.map((badge) => (
                  <span key={badge} className={s.pill}>
                    {badge}
                  </span>
                ))}
                <span className={s.catPill}>{categoryLabel(item)}</span>
              </div>
              <div className={s.ctas}>
                <Button
                  appearance="primary"
                  size="large"
                  icon={<Open16Regular />}
                  iconPosition="after"
                  as="a"
                  href={appSourceHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  Get on Microsoft AppSource
                </Button>
                {content && (
                  <Button
                    appearance="outline"
                    size="large"
                    icon={<Open16Regular />}
                    iconPosition="after"
                    as="a"
                    href={appSourceHref}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Download sample report
                  </Button>
                )}
                <Button
                  appearance="outline"
                  size="large"
                  as="a"
                  href="/insights/visual-chooser"
                >
                  Open visual chooser guide
                </Button>
              </div>
            </div>
            <div className={s.imageWrap}>
              <img className={s.image} src={item.imageUrl} alt={item.name} />
            </div>
          </div>
        </div>
      </section>

      <section className={s.section}>
        <div className={s.inner}>
          <h2 className={s.sectionTitle}>Visual at a glance</h2>
          <div className={s.factGrid}>
            <div className={s.fact}>
              <div className={s.factLabel}>Category</div>
              <div className={s.factValue}>{categoryLabel(item)}</div>
            </div>
            <div className={s.fact}>
              <div className={s.factLabel}>Certification</div>
              <div className={s.factValue}>
                {item.badges.includes("Certified") ? "Power BI Certified" : "Marketplace listing"}
              </div>
            </div>
            <div className={s.fact}>
              <div className={s.factLabel}>Best used for</div>
              <div className={s.factValue}>{content?.tagline ?? item.description}</div>
            </div>
          </div>

          {content && (
            <>
              <h2 className={s.sectionTitle} style={{ marginTop: 36 }}>
                About {item.name}
              </h2>
              <p className={s.longText}>{content.description}</p>

              <div className={s.contentGrid}>
                <div className={s.block}>
                  <h3 className={s.blockTitle}>{content.benefitsLabel}</h3>
                  <ul className={s.bullets}>
                    {content.benefits.map((b) => (
                      <li key={b} className={s.bulletItem}>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={s.block}>
                  <h3 className={s.blockTitle}>{content.useCasesLabel}</h3>
                  <ul className={s.bullets}>
                    {content.useCases.map((u) => (
                      <li key={u} className={s.bulletItem}>
                        {u}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {content.whatsNew && (
                <div className={s.block} style={{ marginTop: 24 }}>
                  <h3 className={s.blockTitle}>
                    What&apos;s new
                    <span className={s.whatsNewTag}>v{content.whatsNew.version}</span>
                  </h3>
                  <ul className={s.bullets}>
                    {content.whatsNew.items.map((w) => (
                      <li key={w} className={s.bulletItem}>
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className={s.contact}>
                <strong>Contact us.</strong> Thank you for using {content.productName}. Have
                questions about this or any of our other Power BI custom visuals? Visit our community
                pages on{" "}
                <a
                  className={s.contactLink}
                  href="https://maqsoftware.zendesk.com/hc/en-us/community/topics"
                  target="_blank"
                  rel="noreferrer"
                >
                  Zendesk
                </a>
                . For issues, contact{" "}
                <a
                  className={s.contactLink}
                  href={`mailto:support@maqsoftware.com?subject=${supportSubject}`}
                >
                  Support@MAQSoftware.com
                </a>
                . For priority requests or custom builds, contact{" "}
                <a
                  className={s.contactLink}
                  href={`mailto:CustomerSuccess@MAQSoftware.com?subject=${prioritySubject}`}
                >
                  CustomerSuccess@MAQSoftware.com
                </a>
                .
              </div>
            </>
          )}
        </div>
      </section>

      {related.length > 0 && (
        <section className={s.related}>
          <div className={s.inner}>
            <h2 className={s.sectionTitle}>Related visuals</h2>
            <div className={s.relatedGrid}>
              {related.map((other) => (
                <Link
                  key={other.name}
                  className={s.card}
                  to={`/insights/power-bi-custom-visual-guide/${visualGuideSlug(other.name)}`}
                >
                  <img className={s.cardImg} src={other.imageUrl} alt={other.name} loading="lazy" />
                  <h3 className={s.cardTitle}>{other.name}</h3>
                  <span className={s.read}>
                    View visual <ArrowRight16Regular />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA />
    </>
  );
}
