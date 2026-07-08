import { useState } from "react";
import { Link } from "react-router-dom";
import { useContactAction } from "../../lib/contact";
import { PrimaryButton, SecondaryButton } from "../../components/buttons";
import {
    ArrowRight16Regular,
    Sparkle20Filled,
    PeopleTeam20Filled,
    ArrowTrending20Filled,
} from "@fluentui/react-icons";

import { CTA } from "../../components/CTA";
// import { TrustBanner } from "../../components/TrustBanner";
import { useStyles } from "./styles";
import { capabilities, outcomes, caseStudies, insights } from "./data";

// ---------------------------------------------------------------------------
// Self-contained page — does not share components with /services/agentic-ai
// so concurrent edits to src/components/service/* won't conflict here.
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export function ServiceWorkplaceTransformation() {
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
                        <span className={s.eyebrow}>
                            Workplace transformation &amp; productivity
                        </span>
                        <h1 className={s.h1}>
                            Microsoft 365 and Copilot rollouts that drive real adoption
                        </h1>
                        <p className={s.heroSub}>
                            We deploy Microsoft 365, Teams, SharePoint, Viva, and Microsoft
                            Copilot — paired with structured adoption programs and change
                            management that turn rollouts into measurable usage, not shelfware.
                        </p>
                        <div className={s.btns}>
                            <PrimaryButton
                                size="large"
                                onClick={() =>
                                    handleContactClick(
                                        "Workplace Transformation - MAQ Software"
                                    )
                                }
                            >
                                Contact Us
                            </PrimaryButton>
                        </div>
                    </div>

                    <div className={s.visual} aria-hidden="true">
                        <div className={s.tile}>
                            <div className={s.tileTitle}>
                                <Sparkle20Filled /> Copilot adoption
                            </div>
                            <div className={s.autoRow}>
                                <span>Active users</span>
                                <span style={{ fontWeight: 700 }}>78%</span>
                            </div>
                            <div className={s.autoRow}>
                                <span>Prompts this week</span>
                                <span style={{ fontWeight: 700 }}>12,480</span>
                            </div>
                        </div>
                        <div className={s.tile}>
                            <div className={s.tileTitle}>
                                <PeopleTeam20Filled /> Collaboration score
                            </div>
                            <div className={s.radialWrap}>
                                <div className={s.radial}>92%</div>
                                <span className={s.radialLabel}>
                                    Cross-team collaboration index
                                </span>
                            </div>
                        </div>
                        <div className={s.tile}>
                            <div className={s.tileTitle}>
                                <ArrowTrending20Filled /> Today&apos;s productivity
                            </div>
                            <div className={s.autoRow}>
                                <span>Meetings summarized</span>
                                <span style={{ fontWeight: 700 }}>1,240</span>
                            </div>
                            <div className={s.autoRow}>
                                <span>Documents co-authored</span>
                                <span style={{ fontWeight: 700 }}>3,680</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* CAPABILITIES */}
            <section className={s.section} id="workplace-capabilities">
                <div className={s.inner}>
                    <div className={s.head}>
                        <span className={s.secEyebrow}>Our expertise</span>
                        <h2 className={s.title}>
                            Our workplace transformation capabilities
                        </h2>
                        {/* <p className={s.secSub}>
                            Four capability pillars that modernize employee experiences and unlock
                            the full value of your Microsoft 365 investment.
                        </p> */}
                    </div>
                    <div className={s.panel}>
                        <div>
                            <div className={s.iconBox}>{sel.icon}</div>
                            <div className={s.detailName}>{sel.name}</div>
                            <p className={s.detailDesc}>{sel.description}</p>
                            <SecondaryButton
                                className={s.knowMore}
                                onClick={() =>
                                    handleContactClick(
                                        "Workplace Transformation - MAQ Software"
                                    )
                                }
                            >
                                Know more
                            </SecondaryButton>
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
                        to="/insights/case-studies"
                    >
                        See Workplace Transformation case studies
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
                            What organizations gain when workplace tools are deployed with
                            adoption-first engineering discipline.
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
                        <h2 className={s.titleSm}>
                            How clients are transforming their digital workplace
                        </h2>
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
                        to="/insights/case-studies"
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
                        <h2 className={s.titleSm}>
                            Our workplace transformation insights
                        </h2>
                        {/* <p className={s.secSub}>
                            See our research that goes into optimizing workplace productivity and
                            collaboration.
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
