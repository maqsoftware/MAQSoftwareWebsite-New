import { useState } from "react";
import { Link } from "react-router-dom";
import { useContactAction } from "../../lib/contact";
import { PrimaryButton } from "../../components/buttons";
import { ArrowRight16Regular } from "@fluentui/react-icons";

import { CTA } from "../../components/CTA";
// import { TrustBanner } from "../../components/TrustBanner";
import { useStyles } from "./styles";
import { capabilities, outcomes, caseStudies, insights } from "./data";

// ---------------------------------------------------------------------------
// Self-contained page — does not share components with /services/agentic-ai
// so concurrent edits to src/components/service/* won't conflict here.
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Placeholders — keep in sync when sales delivers final content
// ---------------------------------------------------------------------------
// Products section: source page has no products listed. To enable, add a
// Products section block in the JSX below (between Outcomes and Case Studies).
//
// Testimonials section: awaiting signed quotes. When ready, define
//   const testimonials = [{ body: "...", cite: "..." }, ...];
// and render a Testimonials section immediately before <CTA /> (site-wide rule).
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export function ServiceBusinessApps() {
    const s = useStyles();
    const handleContactClick = useContactAction();
    const [activeCap, setActiveCap] = useState(0);
    const sel = capabilities[activeCap];

    return (
        <>
            {/* HERO */}
            <section className={s.hero}>
                <div className={s.heroGrid}>
                    <div>
                        <span className={s.eyebrow}>Business Applications &amp; Automation</span>
                        <h1 className={s.h1}>AI-native business apps on Microsoft Power Platform</h1>
                        <p className={s.heroSub}>
                            Low-code and pro-code apps built on Power Apps, Dynamics 365, and
                            Microsoft 365 — paired with Copilot Studio agents and Power Automate
                            flows that retire manual handoffs and embed AI into everyday operations.
                        </p>
                        <div className={s.btns}>
                            <PrimaryButton
                                size="large"
                                onClick={() =>
                                    handleContactClick(
                                        "Business Applications & Automation - MAQ Software"
                                    )
                                }
                            >
                                Contact Us
                            </PrimaryButton>
                        </div>
                    </div>

                    <div className={s.visual}>
                        <img
                            className={s.heroImage}
                            src="/images/Service%20cards/Apps.png"
                            alt="Business Applications and Automation"
                        />
                    </div>
                </div>
            </section>



            {/* CAPABILITIES */}
            <section className={s.section} id="business-apps-capabilities">
                <div className={s.inner}>
                    <div className={s.head}>
                        <span className={s.secEyebrow}>Our expertise</span>
                        <h2 className={s.title}>Our business applications &amp; automation capabilities</h2>
                        {/* <p className={s.secSub}>
                            Four capability pillars that modernize legacy applications and automate
                            operations across the Microsoft business apps stack.
                        </p> */}
                    </div>
                    <div className={s.panel}>
                        <div>
                            <div className={s.iconBox}>{sel.icon}</div>
                            <div className={s.detailName}>{sel.name}</div>
                            <p className={s.detailDesc}>{sel.description}</p>
                            <PrimaryButton
                                size="large"
                                className="maq-secondary-btn maq-equal-cta"
                                onClick={() =>
                                    handleContactClick(
                                        `${sel.name} - Business Applications & Automation`
                                    )
                                }
                            >
                                Know more
                            </PrimaryButton>
                        </div>
                        <div className={s.rail}>
                            {capabilities.map((c, i) => (
                                <button
                                    key={c.name}
                                    type="button"
                                    aria-current={i === activeCap}
                                    onClick={() => setActiveCap(i)}
                                    className={`${s.railBtn} ${i === activeCap ? s.railBtnActive : ""}`}
                                >
                                    <span className={s.railIcon}>{c.icon}</span>
                                    <span className={s.railText}>
                                        <span className={s.railName}>{c.name}</span>
                                        <span className={s.railTagline}>{c.tagline}</span>
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                    <Link
                        className={s.footerLink}
                        to="/insights/case-studies?filter=Application%20modernization#insights-content"
                    >
                        See business applications case studies
                        <ArrowRight16Regular />
                    </Link>
                </div>
            </section>

            {/* OUTCOMES */}
            <section className={s.sectionAlt}>
                <div className={s.inner}>
                    <div className={s.headCentered}>
                        <span className={s.secEyebrow}>Business outcomes</span>
                        <h2 className={s.titleSm}>Your business outcomes</h2>
                        {/* <p className={s.secSub}>
                            What organizations gain when legacy apps and manual processes are modernized
                            with engineering discipline.
                        </p> */}
                    </div>
                    <div className={s.outcomesGrid}>
                        {outcomes.map((o) => (
                            <div key={o.title} className={s.outcomeCard}>
                                <div className={s.outcomeIcon}>{o.icon}</div>
                                <div className={s.outcomeName}>{o.title}</div>
                                <p className={s.outcomeDesc}>{o.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CASE STUDIES */}
            <section className={s.sectionAlt}>
                <div className={s.inner}>
                    <div className={s.head}>
                        <span className={s.secEyebrow}>Related case studies</span>
                        <h2 className={s.titleSm}>How clients are modernizing their business apps</h2>
                    </div>
                    <div className={s.caseGrid}>
                        {caseStudies.map((c) => (
                            <a
                                key={c.title}
                                className={s.caseCard}
                                href={c.href}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <h3 className={s.caseTitle}>{c.title}</h3>
                                <p className={s.caseTeaser}>{c.teaser}</p>
                                <span className={s.caseRead}>
                                    Read full case study
                                </span>
                            </a>
                        ))}
                    </div>
                    <Link
                        className={s.footerLink}
                        to="/insights/case-studies#insights-content"
                    >
                        See all case studies
                        <ArrowRight16Regular />
                    </Link>
                </div>
            </section>

            {/* INSIGHTS */}
            <section className={s.section}>
                <div className={s.inner}>
                    <div className={s.head}>
                        <span className={s.secEyebrow}>Insights</span>
                        <h2 className={s.titleSm}>Our business apps and process automation insights</h2>
                        {/* <p className={s.secSub}>
                            See our research that goes into optimizing our business apps and process
                            automation service.
                        </p> */}
                    </div>
                    <div className={s.insGrid}>
                        {insights.map((i) => (
                            <a
                                key={i.title}
                                className={s.insCard}
                                href={i.href}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className={s.insCover} aria-hidden="true" />
                                <div className={s.insBody}>
                                    <h3 className={s.insTitle}>{i.title}</h3>
                                    <p className={s.insTeaser}>{i.teaser}</p>
                                    <span className={s.caseRead}>
                                        Read more
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS — placeholder, hidden until signed quotes are available.
          When ready, render immediately before <CTA /> (site-wide rule). */}

            <CTA />
        </>
    );
}
