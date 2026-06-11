import { Mail24Regular, Server24Regular, Money24Regular, ChartMultiple24Regular, Search24Regular } from "@fluentui/react-icons";

import { Button, CardButton, PrimaryButton } from "../components/buttons";
import { useProductPageStyles } from "./productPageStyles";
import { useContactAction } from "../lib/contact";
// import { TrustBanner } from "../components/TrustBanner";
import { ProductCaseStudies /*, TestimonialsPlaceholder */ } from "./productPlaceholders";

const APPSOURCE = "https://azuremarketplace.microsoft.com/en/marketplace/apps/maqsoftware.powerbiloadanalyzer?tab=Overview";
const APPSOURCE_PLANS = "https://azuremarketplace.microsoft.com/en-us/marketplace/apps/maqsoftware.powerbiloadanalyzer?tab=PlansAndPrice";
const MARKETPLACE_OVERVIEW = "https://marketplace.microsoft.com/en-us/product/maqsoftware.powerbiloadanalyzer?tab=Overview";
const LOADFAST_VIDEO_EMBED_URL = "https://www.youtube.com/embed/yAQm1giPHt0?si=zEG1RU_aJKICXGic";

const benefits = [
  { icon: <Server24Regular />, title: "Evaluate Fabric Capacity", desc: "Simulate real-world concurrent user load to understand exactly how much Fabric capacity your reporting workloads need." },
  { icon: <Money24Regular />, title: "Optimize Capacity Costs", desc: "Right-size your Fabric capacity based on actual performance data, preventing over-provisioning and reducing unnecessary spend." },
  { icon: <ChartMultiple24Regular />, title: "Analyze Report Performance", desc: "Measure page load time at the report and visual level to surface bottlenecks before they impact your users." },
  { icon: <Search24Regular />, title: "Identify Expensive Reports", desc: "Pinpoint resource-intensive reports and visuals that consume disproportionate capacity so you know exactly where to optimize." },
];

const steps = [
  { n: 1, title: "Set Up Your Load Test", desc: "Select reports and pages from your workspaces, and specify the actions they will perform." },
  { n: 2, title: "Run the Load Test", desc: "Set the number of simulated users and trigger the test to measure how your reports perform under real-world load." },
  { n: 3, title: "Review Performance Results", desc: "Instantly access page load times, Fabric capacity utilization, and report-level insights to identify bottlenecks and optimize performance." },
];

const plans = [
  { name: "Free Plan", price: "$0", term: "+ Azure infrastructure costs", items: ["Perform load tests with up to 50 users", "Free upgrades", "Complete installation setup"], href: APPSOURCE_PLANS, cta: "Marketplace" },
  { name: "Pro Plan", price: "$1,500", term: "per month + Azure infrastructure costs", items: ["No limit on the number of users", "Free upgrades", "Complete installation setup", "First response within 2 business days"], href: APPSOURCE_PLANS, cta: "Marketplace" },
];

const resources = [
  { pill: "Marketplace", title: "Microsoft Marketplace", desc: "View LoadFAST on Microsoft Marketplace.", href: APPSOURCE },
  { pill: "Docs", title: "LoadFAST: Technical Documentation", desc: "Integration and usage reference on GitBook.", href: "https://maqsoftware.gitbook.io/loadfast-technical-documentation" },
];

export function ProductLoadFAST() {
  const s = useProductPageStyles();
  const handleContactClick = useContactAction();
  return (
    <>
      <section className={s.hero}>
        <div className={s.heroGrid}>
          <div>
            <span className={s.eyebrow}>Automated Power BI load testing accelerator</span>
            <h1 className={s.h1}>LoadFAST</h1>
            <p className={s.heroSub}>
              Microsoft Fabric adoption is growing fast, but estimating the right capacity for reporting workloads remains a challenge. LoadFAST automates Power BI load testing by simulating concurrent users, measuring page load time, and identifying slow reports and visuals so teams can validate performance and plan Fabric capacity with confidence.
            </p>
            <div className={s.btns}>
              <PrimaryButton size="large" className="maq-equal-cta" onClick={() => handleContactClick("Contact Us - LoadFAST")}>Contact Us</PrimaryButton>
              <Button variant="tertiary" size="large" className="maq-equal-cta" href={APPSOURCE} target="_blank" rel="noopener noreferrer">Marketplace</Button>
            </div>
          </div>
          <div className={s.heroImageWrap}>
            <div style={{ width: "100%", maxWidth: "560px", aspectRatio: "16 / 9", overflow: "hidden", borderRadius: "12px", background: "#000", border: "1px solid var(--maq-border)" }}>
              <iframe
                title="LoadFAST demo video"
                src={LOADFAST_VIDEO_EMBED_URL}
                style={{ width: "100%", height: "100%", border: 0, display: "block" }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
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
            <h2 className={s.titleLg}>3 step process</h2>
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
        { tag: "Blog", title: "Optimize your Power BI Reports and Usage with LoadFAST", teaser: "See how LoadFAST helps identify bottlenecks and right-size Fabric capacity for reporting workloads.", href: "https://blog.maqsoftware.com/2024/03/transform-your-power-bi.html" },
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
                <CardButton size="medium" href={p.href} target="_blank" rel="noopener noreferrer">{p.cta}</CardButton>
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
                    Read more
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
