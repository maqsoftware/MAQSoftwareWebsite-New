import { Button } from "@fluentui/react-components";
import { Mail24Regular, ArrowRight20Regular, ArrowDownload24Regular, Server24Regular, Group24Regular, CursorClick24Regular, Bot24Regular, ChartMultiple24Regular, People24Regular } from "@fluentui/react-icons";

import { useProductPageStyles } from "./productPageStyles";
// import { TrustBanner } from "../components/TrustBanner";
import { ProductCaseStudies /*, TestimonialsPlaceholder */ } from "./productPlaceholders";

const APPSOURCE = "https://azuremarketplace.microsoft.com/en/marketplace/apps/maqsoftware.powerbiloadanalyzer?tab=Overview";
const APPSOURCE_PLANS = "https://azuremarketplace.microsoft.com/en-us/marketplace/apps/maqsoftware.powerbiloadanalyzer?tab=PlansAndPrice";

const benefits = [
  { icon: <Server24Regular />, title: "Optimize capacity", desc: "Identify the ideal capacity setup across multiple reports, ensuring no under- or over-provisioning." },
  { icon: <Group24Regular />, title: "Manage collections", desc: "Group pages across reports and collaboratively build and save custom load time test scenarios." },
  { icon: <CursorClick24Regular />, title: "Track user interactions", desc: "See how real-time user actions like slicing and filtering impact report load time." },
  { icon: <Bot24Regular />, title: "Automate accuracy", desc: "Benefit from precise capacity insights with automated processes, eliminating human error." },
  { icon: <ChartMultiple24Regular />, title: "Analyze system performance", desc: "Uncover actionable insights from data on application performance, resource allocation, CPU usage, and capacity." },
  { icon: <People24Regular />, title: "Simulate real-time user traffic", desc: "Modify user distribution across reports, RLS access, and more to replicate your real-world use case." },
];

const steps = [
  { n: 1, title: "Create a collection", desc: "Choose your desired Power BI reports and pages from your workspaces." },
  { n: 2, title: "Define user actions", desc: "Set the number of users and the actions they will be performing on your report." },
  { n: 3, title: "Get results", desc: "Run the tests and review insights on page and visual load time, user action impact, and Microsoft Fabric capacity usage." },
];

const plans = [
  { name: "Free Plan", price: "$0", term: "+ Azure infrastructure costs", items: ["Perform load tests with up to 50 users", "Free upgrades", "Complete installation setup"], href: APPSOURCE_PLANS, cta: "Get it now" },
  { name: "Pro Plan", price: "$1,500", term: "per month + Azure infrastructure costs", items: ["No limit on the number of users", "Free upgrades", "Complete installation setup", "First response within 2 business days"], href: APPSOURCE_PLANS, cta: "Get it now" },
];

const resources = [
  { pill: "AppSource", title: "LoadFAST on Azure Marketplace", desc: "Get LoadFAST and start load-testing today.", href: APPSOURCE },
  { pill: "Docs", title: "Technical documentation", desc: "Integration and usage reference on GitBook.", href: "https://maqsoftware.gitbook.io/loadfast-technical-documentation" },
  { pill: "Best practices", title: "Power BI performance patterns", desc: "Capacity sizing, refresh optimization, and performance tuning guides.", href: "/insights/best-practice-guides" },
  { pill: "Case studies", title: "Load-testing case studies", desc: "Real-world Power BI capacity wins.", href: "/insights/case-studies" },
];

export function ProductLoadFAST() {
  const s = useProductPageStyles();
  return (
    <>
      <section className={s.hero}>
        <div className={s.heroGrid}>
          <div>
            <span className={s.eyebrow}>Power BI performance</span>
            <h1 className={s.h1}>LoadFAST</h1>
            <p className={s.heroSub}>
              Optimize your Power BI environments for greater efficiency and lower costs with our web application. Empower your business with the dynamic capabilities of Power BI.
            </p>
            <div className={s.btns}>
              <Button appearance="primary" size="large" icon={<ArrowDownload24Regular />} as="a" href={APPSOURCE} target="_blank" rel="noreferrer">Download now</Button>
              <Button appearance="outline" size="large" icon={<Mail24Regular />} as="a" href="mailto:customersuccess@maqsoftware.com?subject=Contact%20Us%20-%20LoadFAST">Talk to our team</Button>
            </div>
          </div>
          <div className={s.heroImageWrap} aria-hidden="true">
            <img className={s.heroImage} src="https://maqsoftware.com/img/Microsoft-Fabric/Slider1.png" alt="" loading="eager" decoding="async" />
          </div>
        </div>
      </section>



      <section className={s.section}>
        <div className={s.inner}>
          <div className={s.headLeft}>
            <span className={s.secEyebrow}>Why LoadFAST</span>
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

      <section className={s.sectionAlt}>
        <div className={s.inner}>
          <div className={s.headLeft}>
            <span className={s.secEyebrow}>How it works</span>
            <h2 className={s.titleLg}>Three steps to optimized Power BI capacity</h2>
          </div>
          <div className={s.stepGrid}>
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

      <section className={s.section}><ProductCaseStudies heading="LoadFAST success stories" studies={[
        { tag: "Real-time streaming", title: "Increasing efficiency by switching from batch processing to real-time streaming", teaser: "Replacing overnight batch with real-time streaming pipelines — the LoadFAST sweet spot for high-volume ingestion.", href: "https://blog.maqsoftware.com/2024/07/increasing-efficiency-by-switching-from.html" },
        { tag: "Snowflake · Iceberg", title: "Optimizing data refresh by integrating Snowflake Iceberg tables with Microsoft Fabric", teaser: "Snowflake Iceberg tables integrated with Microsoft Fabric to dramatically reduce data refresh latency and storage cost.", href: "https://blog.maqsoftware.com/2025/08/optimizing-data-refresh-by-integrating.html" },
        { tag: "Databricks", title: "Unlocking advanced analytics with Databricks", teaser: "Building an advanced analytics platform on Databricks supporting ML, streaming, and large-scale data engineering workloads.", href: "https://blog.maqsoftware.com/2025/07/unlocking-advanced-analytics-with.html" },
      ]} /></section>

      <section className={s.sectionAlt}>
        <div className={s.inner}>
          <div className={s.headLeft}>
            <span className={s.secEyebrow}>Pricing</span>
            <h2 className={s.titleLg}>Pick the plan that fits your scale</h2>
          </div>
          <div className={s.priceGrid2}>
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

      <section className={s.sectionAlt}>
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

      {/* <section className={s.section}><TestimonialsPlaceholder /></section> */}
    </>
  );
}
