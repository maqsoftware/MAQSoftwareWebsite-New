import { Button } from "@fluentui/react-components";
import { Mail24Regular, ArrowRight20Regular, PlugConnected24Regular, Color24Regular, Money24Regular, ShieldKeyhole24Regular, CloudArrowUp24Regular, ArrowSync24Regular } from "@fluentui/react-icons";
import { TrustBanner } from "../components/TrustBanner";
import { useProductPageStyles } from "./productPageStyles";
import { CaseStudiesPlaceholder, TestimonialsPlaceholder } from "./productPlaceholders";

const APPSOURCE = "https://azuremarketplace.microsoft.com/en-us/marketplace/apps/maqsoftware.embedfastpowerbi?tab=PlansAndPrice";

const benefits = [
  { icon: <PlugConnected24Regular />, title: "Seamless integration", desc: "Easily integrate our API into your applications. Embed Power BI without the time or resource complexities." },
  { icon: <Color24Regular />, title: "Fully customizable", desc: "Adapt EmbedFAST to your unique requirements, ensuring features that align perfectly with your workflows." },
  { icon: <Money24Regular />, title: "Cut licensing cost", desc: "No need for individual Power BI user licenses — only capacity licenses (F SKUs). Save costs without assigning user licenses." },
  { icon: <ShieldKeyhole24Regular />, title: "Simplified access control", desc: "Effortlessly control user permissions and secure data with built-in role-based access." },
  { icon: <CloudArrowUp24Regular />, title: "Scalable and secure", desc: "Onboard unlimited tenants/workspaces with privacy and scalable growth built-in." },
  { icon: <ArrowSync24Regular />, title: "Automatic updates", desc: "Enjoy automatic updates, ensuring you're always on the latest version without manual effort." },
];

const plans = [
  { name: "Subscription — API Only", price: "$2,500", term: "per month + $10,000 setup", items: ["Single instance with API", "Complete installation setup", "No limit on the number of users", "Free upgrades"], href: APPSOURCE, cta: "Get it now" },
  { name: "Subscription — API + UI", price: "$3,500", term: "per month + $10,000 setup", items: ["Single instance with API and UI", "Complete installation setup", "No limit on the number of users", "Free upgrades"], href: APPSOURCE, cta: "Get it now" },
  { name: "Code Share — API + UI", price: "$250,000", term: "fixed one-time", items: ["Shared solution IP with API and UI", "4-week consulting service to integrate", "Code walkthrough and handover", "Personalized technical documentation", "Additional features on demand"], href: "mailto:customersuccess@maqsoftware.com?subject=Contact%20Us%20-%20EmbedFAST%20Code%20Share", cta: "Talk to us" },
];

const supportRows = [
  { feature: "Guaranteed response time", silver: "Within 48 hours", gold: "Within 24 hours", platinum: "Varies based on defined SLA" },
  { feature: "Knowledge base + online docs", silver: "✓", gold: "✓", platinum: "✓" },
  { feature: "Software updates & bug fixes", silver: "✓", gold: "✓", platinum: "✓" },
  { feature: "Remote troubleshooting", silver: "✓", gold: "✓", platinum: "✓" },
  { feature: "Dedicated support representative", silver: "—", gold: "—", platinum: "✓" },
  { feature: "Priority for new feature requests", silver: "—", gold: "—", platinum: "✓" },
  { feature: "Customized team training", silver: "—", gold: "—", platinum: "✓" },
];

const resources = [
  { pill: "AppSource", title: "EmbedFAST on Azure Marketplace", desc: "Purchase plans and licensing.", href: "https://azuremarketplace.microsoft.com/en-us/marketplace/apps/maqsoftware.embedfastpowerbi" },
  { pill: "Consulting offers", title: "MAQ Software offers on Azure Marketplace", desc: "Browse all Azure Marketplace consulting offers.", href: "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services?page=1&search=maq%20software" },
  { pill: "Case studies", title: "Power BI embedding outcomes", desc: "Real-world wins from EmbedFAST customers.", href: "https://maqsoftware.com/case-studies" },
  { pill: "Best practices", title: "Power BI embedding best practices", desc: "Authoritative guidance from MAQ Software engineers.", href: "https://maqsoftware.com/community/best-practices" },
];

export function ProductEmbedFAST() {
  const s = useProductPageStyles();
  return (
    <>
      <section className={s.hero}>
        <div className={s.heroGrid}>
          <div>
            <span className={s.eyebrow}>Power BI embedding</span>
            <h1 className={s.h1}>EmbedFAST</h1>
            <p className={s.heroSub}>
              Effortlessly embed Power BI into your apps without the complexity of writing your own code. Achieve faster time to market, improve operations, and elevate your workflow — all with EmbedFAST.
            </p>
            <div className={s.btns}>
              <Button appearance="primary" size="large" icon={<ArrowRight20Regular />} iconPosition="after" as="a" href={APPSOURCE} target="_blank" rel="noreferrer">Get it now</Button>
              <Button appearance="outline" size="large" icon={<Mail24Regular />} as="a" href="mailto:customersuccess@maqsoftware.com?subject=Contact%20Us%20-%20EmbedFAST">Talk to our team</Button>
            </div>
          </div>
          <div className={s.heroImageWrap} aria-hidden="true">
            <img className={s.heroImage} src="https://maqsoftware.com/images-new/isv/isv-top-image.jpg" alt="" loading="eager" decoding="async" />
          </div>
        </div>
      </section>

      <TrustBanner />

      <section className={s.section}>
        <div className={s.inner}>
          <div className={s.headLeft}>
            <span className={s.secEyebrow}>Why EmbedFAST</span>
            <h2 className={s.titleLg}>Benefits</h2>
          </div>
          <div className={s.featGrid}>
            {benefits.map((b) => (
              <div key={b.title} className={s.feat}>
                <div className={s.featHead}>
                  <span className={s.featIconBox}>{b.icon}</span>
                  <div className={s.featTitle}>{b.title}</div>
                </div>
                <p className={s.featDesc}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={s.sectionAlt}><CaseStudiesPlaceholder heading="Embedding success stories" /></section>

      <section className={s.section} id="embedfast-pricing">
        <div className={s.inner}>
          <div className={s.headLeft}>
            <span className={s.secEyebrow}>Pricing</span>
            <h2 className={s.titleLg}>Choose the plan that fits your team</h2>
          </div>
          <div className={s.priceGrid}>
            {plans.map((p) => (
              <div key={p.name} className={s.priceCard}>
                <div className={s.priceName}>{p.name}</div>
                <div className={s.priceAmount}>{p.price}</div>
                <div className={s.priceTerm}>{p.term}</div>
                <ul className={s.priceList}>
                  {p.items.map((i) => <li key={i} className={s.priceItem}>{i}</li>)}
                </ul>
                <Button appearance="primary" size="medium" as="a" href={p.href} target="_blank" rel="noreferrer">{p.cta}</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={s.section}>
        <div className={s.inner}>
          <div className={s.headLeft}>
            <span className={s.secEyebrow}>Support plans</span>
            <h2 className={s.titleLg}>Choose your support tier</h2>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table className={s.supportTable}>
              <thead>
                <tr>
                  <th className={s.supportTh}>Feature</th>
                  <th className={s.supportTh}>Silver ($500/mo)</th>
                  <th className={s.supportTh}>Gold ($1,500/mo)</th>
                  <th className={s.supportTh}>Platinum (varies by SLA)</th>
                </tr>
              </thead>
              <tbody>
                {supportRows.map((r) => (
                  <tr key={r.feature}>
                    <td className={s.supportTd}><strong>{r.feature}</strong></td>
                    <td className={s.supportTd}>{r.silver}</td>
                    <td className={s.supportTd}>{r.gold}</td>
                    <td className={s.supportTd}>{r.platinum}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className={s.sectionAlt}>
        <div className={s.inner}>
          <div className={s.headLeft}>
            <span className={s.secEyebrow}>Resources & marketplace</span>
            <h2 className={s.titleLg}>Resources & Marketplace</h2>
          </div>
          <div className={s.mktGrid}>
            {resources.map((o) => (
              <a key={o.title} className={s.mktCard} href={o.href} target="_blank" rel="noreferrer">
                <div className={s.mktImg} aria-hidden="true" />
                <div className={s.mktBody}>
                  <span className={s.mktPill}>{o.pill}</span>
                  <div className={s.mktTitleRow}>
                    <div className={s.mktTitle}>{o.title}</div>
                    <ArrowRight20Regular className={s.mktArrow} />
                  </div>
                  <p className={s.mktDesc}>{o.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className={s.section}><TestimonialsPlaceholder /></section>
    </>
  );
}
