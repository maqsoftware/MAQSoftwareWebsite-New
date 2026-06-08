import { ArrowRight20Regular } from "@fluentui/react-icons";
import { Button, makeStyles, tokens } from "@fluentui/react-components";
import { PartnershipHero } from "../components/partnerships/PartnershipHero";
import { PartnershipHighlights } from "../components/partnerships/PartnershipHighlights";
import { PartnershipOfferings } from "../components/partnerships/PartnershipOfferings";
import { PartnershipInsights } from "../components/partnerships/PartnershipInsights";

// ---------------------------------------------------------------------------
// Styles for custom sections (Overview + Marketplace)
// ---------------------------------------------------------------------------
const useStyles = makeStyles({
  // Partnership Overview — multi-badge layout
  overviewSection: {
    padding: "48px 32px",
    backgroundColor: "var(--maq-off-white)",
  },
  overviewInner: {
    maxWidth: "1240px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "auto 1fr",
    gap: "48px",
    alignItems: "center",
    "@media (max-width: 960px)": {
      gridTemplateColumns: "1fr",
      textAlign: "center",
    },
  },
  badgeGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 140px), 1fr))",
    gap: "12px",
    "@media (max-width: 960px)": {
      justifyItems: "center",
    },
  },
  badgeLink: {
    display: "inline-block",
    transition: "transform 0.2s ease",
    ":hover": {
      transform: "scale(1.05)",
    },
  },
  badgeImg: {
    width: "140px",
    height: "auto",
    display: "block",
  },
  overviewText: {
    fontSize: "15px",
    lineHeight: 1.7,
    color: "var(--maq-gray-700)",
    margin: 0,
  },
  designationRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginTop: "16px",
    "@media (max-width: 960px)": {
      justifyContent: "center",
    },
  },
  designationPill: {
    fontSize: "11px",
    fontWeight: 700,
    letterSpacing: "0.06em",
    textTransform: "uppercase" as const,
    padding: "4px 8px",
    borderRadius: "4px",
    backgroundColor: "var(--maq-red-pale)",
    color: "var(--maq-red)",
    textDecoration: "none",
    transition: "all 0.2s",
    ":hover": {
      backgroundColor: "var(--maq-red)",
      color: "#fff",
    },
  },

  // Marketplace section
  marketSection: {
    padding: "48px 32px",
    backgroundColor: "var(--maq-off-white)",
  },
  marketInner: {
    maxWidth: "1240px",
    margin: "0 auto",
  },
  marketHead: {
    marginBottom: "20px",
    textAlign: "center" as const,
  },
  marketEyebrow: {
    fontSize: "12px",
    fontWeight: 700,
    color: "var(--maq-red)",
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    display: "block",
    marginBottom: "8px",
    textAlign: "center" as const,
  },
  marketTitle: {
    display: "block",
    fontSize: "30px",
    fontWeight: 700,
    color: "var(--maq-black)",
    margin: 0,
    letterSpacing: "-0.01em",
    textAlign: "center" as const,
  },
  panelGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "24px",
    alignItems: "stretch",
    "@media (max-width: 960px)": {
      gridTemplateColumns: "1fr",
    },
  },
  panel: {
    display: "flex",
    flexDirection: "column",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "12px",
    padding: "28px",
    background: "#fff",
    transition: "all 0.2s",
    ":hover": {
      border: "1px solid var(--maq-red)",
      boxShadow: "0 6px 16px rgba(0,0,0,0.06)",
    },
  },
  panelContent: {
    flex: 1,
  },
  panelSubhead: {
    fontSize: "20px",
    fontWeight: 700,
    color: "var(--maq-black)",
    margin: "0 0 12px",
  },
  panelDesc: {
    fontSize: "14px",
    lineHeight: 1.65,
    color: "var(--maq-gray-700)",
    margin: "0 0 16px",
  },
  bulletList: {
    margin: "0 0 20px 20px",
    padding: 0,
    listStyleType: "disc",
  },
  bulletItem: {
    fontSize: "14px",
    color: "var(--maq-gray-700)",
    lineHeight: 1.65,
    marginBottom: "6px",
  },
  offerTable: {
    width: "100%",
    borderCollapse: "collapse" as const,
    marginBottom: "20px",
  },
  offerTh: {
    fontSize: "12px",
    fontWeight: 700,
    color: "var(--maq-gray-600)",
    textAlign: "left" as const,
    padding: "8px 8px 8px 0",
    borderBottom: "1px solid var(--maq-border)",
    textTransform: "uppercase" as const,
    letterSpacing: "0.04em",
  },
  offerTd: {
    fontSize: "13.5px",
    color: "var(--maq-gray-700)",
    padding: "8px 8px 8px 0",
    borderBottom: `1px solid ${tokens.colorNeutralStroke2}`,
    lineHeight: 1.45,
  },
});

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------
const highlights = [
  { metric: "9", label: "Microsoft Specializations" },
  { metric: "5K+", label: "Microsoft Technical Certifications" },
  { metric: "200+", label: "Microsoft Fabric Solutions Implemented" },
  { metric: "43", label: "Certified Power BI Custom Visuals" },
];

const offerings = [
  {
    eyebrow: "Accelerate Your Data Journey",
    title: "Microsoft Fabric & Power BI",
    desc: "We specialize in end-to-end Microsoft Fabric implementations, Power BI performance optimization, and enterprise-scale analytics. As a Fabric Featured Partner with 200+ implementations, we help organizations migrate to Fabric, optimize capacity utilization, and deliver near real-time insights through highly optimized data models and interactive dashboards.",
  },
  {
    eyebrow: "Intelligent Automation at Scale",
    title: "Agentic AI & Microsoft Copilot",
    desc: "Leverage our expertise in Microsoft Copilot Studio, Azure AI, and agentic architectures to build enterprise-grade AI agents. From legal contract management to sales automation and event management, we design and deploy intelligent agents that transform business processes and drive measurable efficiency gains.",
  },
  {
    eyebrow: "Modernize with Confidence",
    title: "Cloud Infrastructure & Migration",
    desc: "Simplify your cloud modernization journey with our proven migration frameworks for Azure. Whether migrating data warehouses, enterprise applications, or databases (Oracle, PostgreSQL, SQL Server to Azure), we ensure secure, high-performance transitions with minimal downtime and validated results.",
  },
  {
    eyebrow: "Empower Every Team",
    title: "Power Platform & Dynamics 365",
    desc: "We enable organizations to streamline operations with low-code solutions on Power Platform—from custom app development and process automation to Center of Excellence implementations. Our Dynamics 365 expertise extends to security audits, unified interface migrations, and intelligent business process optimization.",
  },
  {
    eyebrow: "Protect & Govern",
    title: "Security & Governance",
    desc: "With specializations in Cloud Security and Threat Protection, we help organizations implement robust security postures across Azure, Microsoft 365, and hybrid environments. Our solutions span Microsoft Purview governance, identity management, and end-to-end data protection aligned with global compliance standards.",
  },
];

const designations = [
  {
    label: "Data & AI",
    href: "https://partner.microsoft.com/en-rs/asset/collection/solutions-partner-for-data-and-ai-azure",
  },
  {
    label: "Digital & App Innovation",
    href: "https://partner.microsoft.com/en-US/asset/collection/solutions-partner-for-digital-and-app-innovation-azure",
  },
  {
    label: "Infrastructure",
    href: "https://partner.microsoft.com/en-US/asset/collection/solutions-partner-for-infrastructure-azure",
  },
  {
    label: "Security",
    href: "https://partner.microsoft.com/en-US/asset/collection/solutions-partner-for-security",
  },
];

const designationImageNames: Record<string, string> = {
  "Data & AI": "data-and-AI",
  "Digital & App Innovation": "digital-and-apps-innovation",
  Infrastructure: "infrastructure",
  Security: "security",
};

const featuredOffers = [
  { name: "Microsoft Fabric: 2-Hour Briefing", duration: "2 hours", price: "Free" },
  { name: "Microsoft Fabric: 4-Week Assessment", duration: "4 weeks", price: "$15,000" },
  { name: "Agentic AI Envisioning Workshop", duration: "1 day", price: "Free" },
  { name: "Power BI Performance Optimization: 1-Week Workshop", duration: "1 week", price: "$10,000" },
  { name: "Tableau to Power BI: Full Migration Engagement", duration: "Engagement", price: "$75,000" },
  { name: "Power BI Center of Excellence: 10-Week Implementation", duration: "10 weeks", price: "$35,000" },
];

const blogs = [
  {
    title: "Improving lead management and campaign optimization with Microsoft technologies",
    href: "https://blog.maqsoftware.com/2024/02/improving-lead-management-and-campaign.html",
  },
  {
    title: "Modernizing reporting platforms through AI-driven SQL Migration",
    href: "https://blog.maqsoftware.com/2024/08/modernizing-reporting-platforms-through.html",
  },
  {
    title: "Improving event experience for thousands using AI Agents",
    href: "https://blog.maqsoftware.com/2024/08/streamlining-event-information-access.html",
  },
  {
    title: "Transforming customer support with AIOps-driven Power BI Embedding",
    href: "https://blog.maqsoftware.com/2023/02/transforming-customer-support-with.html",
  },
];

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export function PartnershipMicrosoft() {
  const s = useStyles();
  return (
    <>
      <PartnershipHero
        h1="MAQ Software and Microsoft"
        subhead="As a Microsoft Fabric Featured Partner and Preferred Supplier since 2000, MAQ Software enables leading companies to accelerate their business intelligence, analytics, and AI initiatives. With 9 Microsoft specializations and 4 solution partner designations, we deliver enterprise-grade solutions across the Microsoft ecosystem—from Azure and Fabric to Power BI and Copilot."
        ctaLabel="Contact Us"
        ctaHref="mailto:CustomerSuccess@MAQSoftware.com?subject=Contact%20Us%20-%20Microsoft%20Partnership&body=Hello,%20I%20would%20like%20to%20get%20in%20touch%20with%20you."
        imageUrl="/logos/Power_BI_Partner_Apr2023.png"
        imageAlt="MAQ Software and Microsoft"
      />

      <PartnershipHighlights
        title="Partnership Highlights"
        stats={highlights}
      />

      {/* Partnership Overview — custom multi-badge layout */}
      <section className={s.overviewSection}>
        <div className={s.overviewInner}>
          <div className={s.badgeGrid}>
            {designations.map((d) => (
              <a
                key={d.label}
                href={d.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Solutions Partner for ${d.label}`}
                className={s.badgeLink}
              >
                <img
                  className={s.badgeImg}
                  src={`/logos/solutions-partner-${designationImageNames[d.label]}.png`}
                  alt={`Microsoft Solutions Partner - ${d.label}`}
                  loading="lazy"
                />
              </a>
            ))}
          </div>
          <div>
            <p className={s.overviewText}>
              As a Microsoft Fabric Featured Partner and Preferred Supplier since
              2000, MAQ Software holds 4 Microsoft Solution Partner
              designations—Data &amp; AI, Digital &amp; App Innovation,
              Infrastructure, and Security—along with 9 advanced specializations.
              Our 5,000+ Microsoft technical certifications and 200+ Fabric
              implementations demonstrate our deep expertise across Azure, Power
              BI, Microsoft Fabric, Copilot, and the broader Microsoft ecosystem.
              From AI-driven analytics to enterprise cloud modernization, we
              empower organizations to maximize their investment in Microsoft
              technologies.
            </p>
            <div className={s.designationRow}>
              {designations.map((d) => (
                <a
                  key={d.label}
                  className={s.designationPill}
                  href={d.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {d.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PartnershipOfferings
        eyebrow="Our Offerings"
        title="Accelerating Digital Transformation Through Our Microsoft Partnership"
        sectionId="microsoft-offerings"
        offerings={offerings}
      />

      <PartnershipInsights
        eyebrow="Insights"
        title="Related blogs and case studies"
        items={blogs}
      />

      {/* Marketplace Offerings — dual-panel */}
      <section className={s.marketSection} id="microsoft-marketplace">
        <div className={s.marketInner}>
          <div className={s.marketHead}>
            <h2 className={s.marketTitle}>Marketplace Offerings</h2>
          </div>

          <div className={s.panelGrid}>
            {/* Panel A — Power BI Custom Visuals */}
            <div className={s.panel}>
              <div className={s.panelContent}>
                <h3 className={s.panelSubhead}>Power BI Custom Visuals</h3>
                <p className={s.panelDesc}>
                  Expand your reporting capabilities with our 43 certified Power BI
                  custom visuals—the largest 3rd party publisher of certified Power
                  BI custom visuals worldwide. Our visuals have been downloaded
                  millions of times and include multiple Microsoft Editor's Picks.
                </p>
                <ul className={s.bulletList}>
                  <li className={s.bulletItem}>
                    43 certified Power BI custom visuals
                  </li>
                  <li className={s.bulletItem}>
                    Largest 3rd party publisher of certified Power BI custom visuals
                  </li>
                  <li className={s.bulletItem}>
                    Multiple Editor's Pick selections by Microsoft Power BI team
                  </li>
                  <li className={s.bulletItem}>
                    Categories: Change Over Time, Comparison, Distribution, KPI,
                    Part-to-Whole, Ranking, and more
                  </li>
                </ul>
              </div>
              <Button
                appearance="primary"
                size="large"
                icon={<ArrowRight20Regular />}
                iconPosition="after"
                as="a"
                href="/insights/power-bi-custom-visual-guide"
              >
                Explore custom visuals
              </Button>
            </div>

            {/* Panel B — Consulting Services */}
            <div className={s.panel}>
              <div className={s.panelContent}>
                <h3 className={s.panelSubhead}>
                  Consulting Services on Azure Marketplace
                </h3>
                <p className={s.panelDesc}>
                  Access 100+ marketplace offers across Microsoft Fabric, Power BI,
                  Azure AI, Copilot, Power Platform, and Dynamics 365—ranging from
                  free assessments and briefings to full migration engagements.
                </p>
                <table className={s.offerTable}>
                  <thead>
                    <tr>
                      <th className={s.offerTh}>Offer</th>
                      <th className={s.offerTh}>Duration</th>
                      <th className={s.offerTh}>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {featuredOffers.map((o) => (
                      <tr key={o.name}>
                        <td className={s.offerTd}>{o.name}</td>
                        <td className={s.offerTd}>{o.duration}</td>
                        <td className={s.offerTd}>{o.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Button
                appearance="primary"
                size="large"
                icon={<ArrowRight20Regular />}
                iconPosition="after"
                as="a"
                href="https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services?page=1&search=maq%20software"
                target="_blank"
                rel="noreferrer"
              >
                View all marketplace offers
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
