import { Button } from "@fluentui/react-components";
import { Mail24Regular, ArrowRight20Regular, Chat24Regular, Person24Regular, Search24Regular, ChartMultiple24Regular, Lightbulb24Regular, DatabaseSearch24Regular } from "@fluentui/react-icons";
import { TrustBanner } from "../components/TrustBanner";
import { useProductPageStyles } from "./productPageStyles";
import { CaseStudiesPlaceholder, TestimonialsPlaceholder } from "./productPlaceholders";

const benefits = [
  { title: "Informed decisions", desc: "Move beyond guesswork — leverage data-backed insights to make informed decisions that reduce risk and accelerate growth." },
  { title: "Streamlined operations", desc: "Automate processes and reduce manual effort with insights that keep your operations running smoothly." },
  { title: "Plug-and-play extensibility", desc: "Quickly connect to your existing tools and systems with plug-and-play extensibility, so your data workflows stay seamless and scalable." },
];

const features = [
  { icon: <Chat24Regular />, title: "Chat with structured data", desc: "Interact with enterprise datasets using natural language. No SQL or DAX — just ask questions and get instant answers." },
  { icon: <Person24Regular />, title: "User guidance", desc: "Intelligent question suggestions and personalized investigative recommendations help new users explore data from day one." },
  { icon: <Search24Regular />, title: "Semantic relevance", desc: "Understands the true intent behind user questions by analyzing metadata and context for accurate, meaningful responses." },
  { icon: <ChartMultiple24Regular />, title: "Automated visual generation", desc: "Automatically generates relevant charts and visuals from user queries — quick interpretation, zero manual effort." },
  { icon: <Lightbulb24Regular />, title: "Insight generation", desc: "Beyond raw data — generates narratives, titles, summaries, and recommendations in a business-friendly format." },
  { icon: <DatabaseSearch24Regular />, title: "Metadata agent & column pruning", desc: "Transforms raw data into an intelligent, indexed schema — faster, more accurate queries with minimal effort." },
];

const resources = [
  { pill: "Consulting offers", title: "MAQ Software offers on Azure Marketplace", desc: "Browse all Azure Marketplace consulting offers from MAQ Software.", href: "https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services?page=1&search=maq%20software" },
  { pill: "Case studies", title: "AI-DataLens and analytics outcomes", desc: "Real customer stories on natural-language data interaction and AI-driven analytics.", href: "https://maqsoftware.com/case-studies" },
  { pill: "Best practices", title: "Data & AI best-practice guides", desc: "Patterns for natural-language data interaction, semantic modeling, and AI governance.", href: "https://maqsoftware.com/community/best-practices" },
  { pill: "Talk to us", title: "Request a personalized demo", desc: "Email customersuccess@maqsoftware.com and we'll set up a tailored walkthrough.", href: "mailto:customersuccess@maqsoftware.com?subject=Demo%20-%20AI-DataLens" },
];

export function ProductAIDataLens() {
  const s = useProductPageStyles();
  return (
    <>
      <section className={s.hero}>
        <div className={s.heroGrid}>
          <div>
            <span className={s.eyebrow}>Intelligent data interaction</span>
            <h1 className={s.h1}>AI-DataLens</h1>
            <p className={s.heroSub}>
              Transform how users interact with data by enabling natural-language queries and delivering instant, intelligent insights. Unlock a new way to interact with your data.
            </p>
            <div className={s.btns}>
              <Button appearance="primary" size="large" icon={<Mail24Regular />} as="a" href="mailto:customersuccess@maqsoftware.com?subject=Demo%20-%20AI-DataLens&body=Hello,%20I%20would%20like%20to%20request%20a%20demo%20for%20AI-DataLens.">
                Request a demo
              </Button>
              <Button appearance="outline" size="large" icon={<ArrowRight20Regular />} iconPosition="after" onClick={() => document.getElementById("ai-datalens-features")?.scrollIntoView({ behavior: "smooth" })}>
                See key features
              </Button>
            </div>
          </div>
          <div className={s.heroImageWrap} aria-hidden="true">
            <img className={s.heroImage} src="https://maqsoftware.com/images-new/isv/ai-datalens-hero-img-2.svg" alt="" loading="eager" decoding="async" />
          </div>
        </div>
      </section>

      <TrustBanner />

      <section className={s.section}>
        <div className={s.inner}>
          <div className={s.head}>
            <span className={s.secEyebrow}>Why AI-DataLens</span>
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

      <section className={s.sectionAlt} id="ai-datalens-features">
        <div className={s.inner}>
          <div className={s.headLeft}>
            <span className={s.secEyebrow}>Capabilities</span>
            <h2 className={s.titleLg}>Key features</h2>
          </div>
          <div className={s.featGrid}>
            {features.map((f) => (
              <div key={f.title} className={s.feat}>
                <div className={s.featHead}>
                  <span className={s.featIconBox}>{f.icon}</span>
                  <div className={s.featTitle}>{f.title}</div>
                </div>
                <p className={s.featDesc}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={s.section}><CaseStudiesPlaceholder heading="Real-world AI-DataLens wins" /></section>

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
