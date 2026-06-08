import { Button } from "@fluentui/react-components";
// import { TrustBanner } from \"../components/TrustBanner\";
import { Mail24Regular, ArrowRight20Regular, ArrowDownload24Regular } from "@fluentui/react-icons";

import { useProductPageStyles } from "./productPageStyles";
import { ProductCaseStudies /*, TestimonialsPlaceholder */ } from "./productPlaceholders";

const benefits = [
  { title: "Automate the review process", desc: "Save time and effort by easily identifying errors, formatting DAX measures, and creating knowledge base documents." },
  { title: "Error free reporting", desc: "Ensure your report aligns with organizational standards. Identify discrepancies that impact the report's size, performance, or user experience." },
  { title: "Accurate and uniform reports", desc: "Access detailed documentation of semantic models and report visuals, aiding developers in creating consistent knowledge documents." },
];

const steps = [
  { n: 1, title: "Analyze your report", desc: "Automatically detect errors, discrepancies, and performance issues impacting report quality." },
  { n: 2, title: "Review insights", desc: "Explore field lineage and generate detailed documentation of your Power BI models." },
  { n: 3, title: "Optimize and deploy", desc: "Fix alignment issues and ensure adherence to best practices for seamless report delivery." },
];

const resources = [
  { pill: "GitHub", title: "CertyFAST on GitHub", desc: "Download the tool from the official MAQ Software repository.", href: "https://github.com/maqsoftware/CertyFAST" },
  { pill: "Docs", title: "Installation & user guide", desc: "Step-by-step integration, best practices, and troubleshooting.", href: "https://maqsoftware.com/services/Power-BI/InstallationandUsageGuide" },
  { pill: "Best practices", title: "Power BI development standards", desc: "Authoritative guides from the MAQ Software community.", href: "/insights/best-practice-guides" },
  { pill: "Case studies", title: "Quality-control case studies", desc: "Real-world Power BI quality wins.", href: "/insights/case-studies" },
];

export function ProductCertyFAST() {
  const s = useProductPageStyles();
  return (
    <>
      <section className={s.hero}>
        <div className={s.heroGrid}>
          <div>
            <span className={s.eyebrow}>Power BI quality control</span>
            <h1 className={s.h1}>CertyFAST</h1>
            <p className={s.heroSub}>
              Streamline Power BI model development with automated error detection, DAX measure formatting, and simplified documentation. Ensure top-quality reports and adherence to best practices.
            </p>
            <div className={s.btns}>
              <Button appearance="primary" size="large" icon={<ArrowDownload24Regular />} as="a" href="https://github.com/maqsoftware/CertyFAST" target="_blank" rel="noreferrer">Download now</Button>
              <Button appearance="outline" size="large" icon={<Mail24Regular />} as="a" href="mailto:customersuccess@maqsoftware.com?subject=Contact%20Us%20-%20CertyFAST">Talk to our team</Button>
            </div>
          </div>
          <div className={s.heroImageWrap} aria-hidden="true">
            <img className={s.heroImage} src="https://maqsoftware.com/images-new/isv/who.jpg" alt="" loading="eager" decoding="async" />
          </div>
        </div>
      </section>



      <section className={s.section}>
        <div className={s.inner}>
          <div className={s.head}>
            <span className={s.secEyebrow}>Why CertyFAST</span>
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

      <section className={s.sectionAlt}>
        <div className={s.inner}>
          <div className={s.headLeft}>
            <span className={s.secEyebrow}>How it works</span>
            <h2 className={s.titleLg}>Three steps to certified Power BI reports</h2>
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

      <section className={s.section}><ProductCaseStudies heading="CertyFAST success stories" studies={[
        { tag: "Cybersecurity", title: "Strengthening cybersecurity with Managed Identity and RBAC", teaser: "Eliminating credential sprawl with Azure Managed Identity and enforcing least-privilege access — the security backbone CertyFAST automates.", href: "https://blog.maqsoftware.com/2024/08/strengthening-cybersecurity.html" },
        { tag: "Secure Copilot", title: "Building a secure Copilot: Addressing key security challenges", teaser: "Reference design for shipping enterprise Copilots safely — patterns and guardrails CertyFAST helps you continuously enforce.", href: "https://blog.maqsoftware.com/2024/08/building-secure-copilot-addressing-key.html" },
        { tag: "Data governance", title: "Unifying data management with a centralized framework", teaser: "Centralized governance and access controls across distributed systems — a model CertyFAST helps certify on an ongoing basis.", href: "https://blog.maqsoftware.com/2024/08/unifying-data-management-with.html" },
      ]} /></section>

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

      {/* <section className={s.section}><TestimonialsPlaceholder /></section> */}
    </>
  );
}
