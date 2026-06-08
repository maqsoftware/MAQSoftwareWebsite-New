import { Button } from "@fluentui/react-components";
import { Mail24Regular, ArrowRight20Regular } from "@fluentui/react-icons";

import { useProductPageStyles } from "./productPageStyles";
import { useContactAction } from "../lib/contact";
// import { TrustBanner } from "../components/TrustBanner";
import { ProductCaseStudies /*, TestimonialsPlaceholder */ } from "./productPlaceholders";

const benefits = [
  { title: "Large-scale migration", desc: "Enables large-scale migration of reports from Tableau to Power BI." },
  { title: "Cost savings", desc: "Reduces the time and resources required to migrate reports using AI, resulting in cost savings of 40%." },
  { title: "Optimization", desc: "Optimizes the migration process to ensure high-quality and accurate report conversion." },
];

const steps = [
  { n: 1, title: "Inventory analysis", desc: "Extract metadata, analyze reports, and assess data compatibility for a structured migration plan." },
  { n: 2, title: "Estimation and planning", desc: "Estimate costs, finalize architecture, identify risks, and define roles." },
  { n: 3, title: "Semantic model and report creation", desc: "Build a Power BI model, optimize data, and replicate report interactions for seamless functionality." },
  { n: 4, title: "Review", desc: "Optimize performance, ensure uniformity, verify data accuracy, and certify reports." },
  { n: 5, title: "Governance", desc: "Track data lineage, maintain best practices, monitor performance, and set alerts." },
  { n: 6, title: "Center of Excellence (CoE)", desc: "Ongoing support, user training, troubleshooting, and KPI tracking post-migration." },
];

const capabilities = [
  "Upload Tableau reports and auto-extract metadata",
  "Get timeline estimates for the migration",
  "Analyze report similarity to remove duplicates",
  "Auto-convert LOD to DAX and check for errors",
  "Customize Power BI report UI",
];

const resources = [
  { pill: "Marketplace offers", title: "MAQ Software offers on Azure Marketplace", desc: "Browse migration and Fabric marketplace offers.", href: "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services?page=1&search=maq%20software" },
  { pill: "Case studies", title: "Fabric migration outcomes", desc: "Real customer stories on Tableau-to-Power-BI and platform migration.", href: "/insights/case-studies" },
  { pill: "Best practices", title: "Migration patterns and standards", desc: "MAQ Software's authoritative migration guidance.", href: "/insights/best-practice-guides" },
];

export function ProductMigrateFAST() {
  const s = useProductPageStyles();
  const handleContactClick = useContactAction();
  return (
    <>
      <section className={s.hero}>
        <div className={s.heroGrid}>
          <div>
            <span className={s.eyebrow}>Microsoft Fabric migration</span>
            <h1 className={s.h1}>MigrateFAST</h1>
            <p className={s.heroSub}>
              Accelerate your migration journey to Microsoft Fabric. Simplify data and reporting platform migration with AI-powered tools for faster and easier transitions.
            </p>
            <div className={s.btns}>
              <Button appearance="primary" size="large" icon={<Mail24Regular />} onClick={() => handleContactClick("Contact Us - MigrateFAST")}>Contact Us</Button>
            </div>
          </div>
          <div className={s.heroImageWrap} aria-hidden="true">
            <img className={s.heroImage} src="https://maqsoftware.com/images-new/isv/migrate-fast.jpg" alt="" loading="eager" decoding="async" />
          </div>
        </div>
      </section>



      <section className={s.section}>
        <div className={s.inner}>
          <div className={s.head}>
            <span className={s.secEyebrow}>Why MigrateFAST</span>
            <h2 className={s.title}>Benefits</h2>
          </div>
          <div className={s.benGrid3}>
            {benefits.map((b) => (
              <div key={b.title} className={s.benCard}>
                <div className={s.benTitle}>{b.title}</div>
                <p className={s.benDesc}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={s.sectionAlt} id="migratefast-process">
        <div className={s.inner}>
          <div className={s.headLeft}>
            <span className={s.secEyebrow}>How it works</span>
            <h2 className={s.titleLg}>Our 6-step migration process</h2>
          </div>
          <div className={s.stepGrid6}>
            {steps.map((st) => (
              <div key={st.n} className={s.stepCard}>
                <div className={s.stepNum}>{st.n}</div>
                <div className={s.stepTitle}>{st.title}</div>
                <p className={s.stepDesc}>{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={s.section}>
        <div className={s.inner}>
          <div className={s.headLeft}>
            <span className={s.secEyebrow}>Automation</span>
            <h2 className={s.titleLg}>Tableau → Power BI automation capabilities</h2>
          </div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "12px" }}>
            {capabilities.map((c) => (
              <li key={c} style={{ fontSize: "14px", color: "var(--maq-gray-700)", lineHeight: 1.6, paddingLeft: "20px", position: "relative" }}>
                <span style={{ position: "absolute", left: 0, color: "var(--maq-red)", fontWeight: 700 }}>✓</span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={s.sectionAlt}><ProductCaseStudies heading="Migration success stories" studies={[
        { tag: "SQL migration", title: "Modernizing reporting platforms through AI-driven SQL Migration", teaser: "AI-assisted SQL conversion accelerates legacy reporting platform migration while preserving security and compliance.", href: "https://blog.maqsoftware.com/2024/08/modernizing-reporting-platforms-through.html" },
        { tag: "Qlik → Power BI", title: "Transitioning legacy reports from Qlik to Power BI", teaser: "AI-assisted Qlik to Power BI migration rebuilding semantic models, RLS, and pixel-perfect layouts on Fabric.", href: "https://blog.maqsoftware.com/2025/06/transitioning-legacy-reports-from-qlik.html" },
        { tag: "Fabric migration", title: "Migrating to Microsoft Fabric to Unlock One Source of Truth (OSOT)", teaser: "Consolidating fragmented data estates onto Microsoft Fabric to unlock a single governed source of truth across the enterprise.", href: "https://blog.maqsoftware.com/2025/07/migrating-to-microsoft-fabric-to-unlock.html" },
      ]} /></section>

      <section className={s.section}>
        <div className={s.inner}>
          <div className={s.headLeft}>
            <span className={s.secEyebrow}>Insights</span>
            <h2 className={s.titleLg}>Resources & Marketplace</h2>
          </div>
          <div className={s.mktGrid}>
            {resources.map((o) => (
              <a
                key={o.title}
                className={s.mktCard}
                href={o.href}
                target={o.href.startsWith("http") ? "_blank" : undefined}
                rel={o.href.startsWith("http") ? "noreferrer" : undefined}
              >
                <div className={s.mktImg} aria-hidden="true" />
                <div className={s.mktBody}>
                  <span className={s.mktPill}>{o.pill}</span>
                  <div className={s.mktTitle}>{o.title}</div>
                  <p className={s.mktDesc}>{o.desc}</p>
                  <span className={s.mktRead}>
                    Read more <ArrowRight20Regular fontSize={14} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* <section className={s.sectionAlt}><TestimonialsPlaceholder /></section> */}
    </>
  );
}
