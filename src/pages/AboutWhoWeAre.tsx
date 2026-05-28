import { makeStyles, tokens } from "@fluentui/react-components";
import { Button } from "@fluentui/react-components";
import {
  Checkmark24Regular,
  Clock24Regular,
  Money24Regular,
  Chat24Regular,
  Star24Filled,
  ShieldCheckmark24Regular,
} from "@fluentui/react-icons";
import { TrustBanner } from "../components/TrustBanner";

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------
const useStyles = makeStyles({
  // ── Hero ──────────────────────────────────────────────────────────────────
  hero: {
    backgroundColor: "var(--maq-off-white)",
    padding: "48px 32px 56px",
    backgroundImage: "url('/logos/wave_dots.svg')",
    backgroundPosition: "bottom left",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  heroInner: {
    maxWidth: "1240px",
    margin: "0 auto",
  },
  eyebrow: {
    display: "block",
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    color: "var(--maq-red)",
    marginBottom: "12px",
  },
  h1: {
    display: "block",
    fontSize: "40px",
    fontWeight: 700,
    lineHeight: 1.15,
    color: "var(--maq-black)",
    letterSpacing: "-0.02em",
    margin: "0 0 16px",
  },
  heroSub: {
    display: "block",
    fontSize: "15px",
    lineHeight: 1.65,
    color: "var(--maq-gray-700)",
    maxWidth: "600px",
    marginBottom: "28px",
  },


  // ── Driven by expertise section ──────────────────────────────────────────
  drivenSection: {
    padding: "56px 32px 64px",
    backgroundColor: "#fff",
  },
  drivenInner: {
    maxWidth: "1240px",
    margin: "0 auto",
  },
  drivenHeading: {
    fontSize: "32px",
    fontWeight: 700,
    color: "var(--maq-black)",
    letterSpacing: "-0.01em",
    margin: "0 0 48px",
    textAlign: "center",
  },
  drivenGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "32px",
    "@media (max-width: 960px)": { gridTemplateColumns: "repeat(2, 1fr)", gap: "28px" },
    "@media (max-width: 560px)": { gridTemplateColumns: "1fr" },
  },
  drivenStatItem: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  drivenStatNumber: {
    fontSize: "52px",
    fontWeight: 700,
    lineHeight: 1,
    color: "var(--maq-black)",
    letterSpacing: "-0.02em",
  },
  drivenStatLine: {
    width: "40px",
    height: "3px",
    backgroundColor: "var(--maq-red)",
    borderRadius: "2px",
  },
  drivenStatLabel: {
    fontSize: "14px",
    color: "var(--maq-gray-700)",
    lineHeight: 1.45,
    maxWidth: "180px",
  },

  // ── Shared section shell ──────────────────────────────────────────────────
  sectionWhite: {
    padding: "48px 32px",
    backgroundColor: "#fff",
  },
  sectionGray: {
    padding: "48px 32px",
    backgroundColor: "var(--maq-off-white)",
  },
  inner: {
    maxWidth: "1240px",
    margin: "0 auto",
  },
  sectionEyebrow: {
    display: "block",
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    color: "var(--maq-red)",
    marginBottom: "8px",
  },
  h2: {
    display: "block",
    fontSize: "30px",
    fontWeight: 700,
    color: "var(--maq-black)",
    letterSpacing: "-0.01em",
    margin: "0 0 32px",
  },

  // ── Excellence ────────────────────────────────────────────────────────────
  excellenceSection: {
    padding: "72px 32px",
    backgroundColor: "var(--maq-surface-soft)",
  },
  excellenceInner: {
    maxWidth: "1240px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "64px",
    alignItems: "center",
    "@media (max-width: 780px)": { gridTemplateColumns: "1fr", gap: "24px" },
  },
  excellenceH2: {
    fontSize: "44px",
    fontWeight: 700,
    color: "var(--maq-black)",
    letterSpacing: "-0.02em",
    lineHeight: 1.15,
    margin: 0,
  },
  excellenceBody: {
    fontSize: "16px",
    lineHeight: 1.7,
    color: "var(--maq-gray-700)",
    margin: 0,
  },

  // ── Designations ─────────────────────────────────────────────────────────
  designationGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "24px",
    "@media (max-width: 960px)": { gridTemplateColumns: "repeat(2, 1fr)" },
    "@media (max-width: 560px)": { gridTemplateColumns: "1fr" },
  },
  designationCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
    padding: "28px 20px",
    background: "#fff",
    border: "1px solid var(--maq-border)",
    borderRadius: "12px",
    textDecoration: "none",
    transition: "all 0.2s",
    textAlign: "center",
    ":hover": {
      border: "1px solid var(--maq-red)",
      boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
    },
  },
  designationImg: {
    width: "140px",
    height: "auto",
    display: "block",
  },
  designationLabel: {
    fontSize: "13px",
    fontWeight: 600,
    color: "var(--maq-black)",
    lineHeight: 1.4,
  },

  // ── Specializations ───────────────────────────────────────────────────────
  specGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "12px",
    marginBottom: "28px",
    "@media (max-width: 960px)": { gridTemplateColumns: "repeat(2, 1fr)" },
    "@media (max-width: 560px)": { gridTemplateColumns: "1fr" },
  },
  specChip: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "14px 16px",
    background: "#fff",
    border: "1px solid var(--maq-border)",
    borderRadius: "8px",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: 500,
    color: "var(--maq-black)",
    transition: "all 0.2s",
    ":hover": {
      border: "1px solid var(--maq-red)",
      color: "var(--maq-red)",
      boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    },
  },
  specNumber: {
    fontSize: "11px",
    fontWeight: 700,
    color: "var(--maq-red)",
    minWidth: "16px",
  },
  specFooter: {
    fontSize: "14px",
    color: "var(--maq-gray-700)",
    lineHeight: 1.6,
  },
  specLink: {
    color: "var(--maq-red)",
    textDecoration: "none",
    fontWeight: 600,
    ":hover": { textDecoration: "underline" },
  },

  // ── Why MAQ ───────────────────────────────────────────────────────────────
  whyGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "20px",
    "@media (max-width: 960px)": { gridTemplateColumns: "repeat(2, 1fr)" },
    "@media (max-width: 560px)": { gridTemplateColumns: "1fr" },
  },
  whyCard: {
    padding: "24px",
    background: "#fff",
    border: "1px solid var(--maq-border)",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  whyIconWrap: {
    width: "40px",
    height: "40px",
    borderRadius: "8px",
    backgroundColor: "var(--maq-red-pale)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "var(--maq-red)",
  },
  whyTitle: {
    fontSize: "15px",
    fontWeight: 700,
    color: "var(--maq-black)",
    margin: 0,
  },
  whyDesc: {
    fontSize: "13.5px",
    lineHeight: 1.6,
    color: "var(--maq-gray-700)",
    margin: 0,
  },

  // ── Partners ──────────────────────────────────────────────────────────────
  partnerGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "20px",
    "@media (max-width: 960px)": { gridTemplateColumns: "repeat(2, 1fr)" },
    "@media (max-width: 560px)": { gridTemplateColumns: "1fr" },
  },
  partnerCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    padding: "28px 20px",
    background: "#fff",
    border: "1px solid var(--maq-border)",
    borderRadius: "12px",
    textDecoration: "none",
    textAlign: "center",
    transition: "all 0.2s",
    ":hover": {
      border: "1px solid var(--maq-red)",
      boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
    },
  },
  partnerImg: {
    width: "140px",
    height: "60px",
    objectFit: "contain" as const,
    display: "block",
  },
  partnerLogoBox: {
    width: "140px",
    height: "60px",
    borderRadius: "8px",
    backgroundColor: "var(--maq-gray-100)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    fontWeight: 800,
    color: "var(--maq-gray-500)",
    letterSpacing: "0.02em",
  },
  partnerLabel: {
    fontSize: "13px",
    fontWeight: 600,
    color: "var(--maq-black)",
    lineHeight: 1.4,
  },

  // ── Recognitions ─────────────────────────────────────────────────────────
  recognitionStack: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  recognitionCard: {
    display: "grid",
    gridTemplateColumns: "120px 1fr",
    gap: "32px",
    alignItems: "center",
    padding: "28px 32px",
    background: "#fff",
    border: "1px solid var(--maq-border)",
    borderRadius: "12px",
    "@media (max-width: 640px)": { gridTemplateColumns: "1fr" },
  },
  recognitionImgWrap: {
    width: "120px",
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  recognitionImg: {
    width: "120px",
    height: "auto",
    maxHeight: "120px",
    objectFit: "contain" as const,
    display: "block",
  },
  recognitionIconWrap: {
    width: "56px",
    height: "56px",
    borderRadius: "12px",
    backgroundColor: "var(--maq-red-pale)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "var(--maq-red)",
    flexShrink: 0,
  },
  recognitionTitle: {
    fontSize: "15px",
    fontWeight: 700,
    color: "var(--maq-black)",
    margin: "0 0 8px",
    textDecoration: "none",
    display: "block",
    ":hover": { color: "var(--maq-red)" },
  },
  recognitionDesc: {
    fontSize: "13.5px",
    lineHeight: 1.65,
    color: "var(--maq-gray-700)",
    margin: 0,
  },

  // ── Certifications ────────────────────────────────────────────────────────
  certStack: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  certCard: {
    display: "grid",
    gridTemplateColumns: "120px 1fr",
    gap: "32px",
    alignItems: "flex-start",
    padding: "28px 32px",
    background: "#fff",
    border: "1px solid var(--maq-border)",
    borderRadius: "12px",
    "@media (max-width: 640px)": { gridTemplateColumns: "1fr" },
  },
  certIconWrap: {
    width: "120px",
    minHeight: "80px",
    borderRadius: "8px",
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    padding: "8px",
  },
  certTitle: {
    fontSize: "15px",
    fontWeight: 700,
    color: "var(--maq-black)",
    margin: "0 0 8px",
    textDecoration: "none",
    display: "block",
    ":hover": { color: "var(--maq-red)" },
  },
  certDesc: {
    fontSize: "13.5px",
    lineHeight: 1.65,
    color: "var(--maq-gray-700)",
    margin: 0,
  },
});

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------
const heroStats = [
  { metric: "9", label: "Microsoft specializations" },
  { metric: "4", label: "Microsoft solution partner designations" },
  { metric: "5K+", label: "Microsoft technical certifications" },
  { metric: "200+", label: "Microsoft Fabric solutions implemented" },
];

const designations = [
  {
    label: "Solutions Partner for Data & AI (Azure)",
    imgSrc: "/logos/solutions-partner-data-and-AI.png",
    href: "https://partner.microsoft.com/en-rs/asset/collection/solutions-partner-for-data-and-ai-azure#/",
  },
  {
    label: "Solutions Partner for Digital & App Innovation (Azure)",
    imgSrc: "/logos/solutions-partner-digital-and-apps-innovation.png",
    href: "https://partner.microsoft.com/en-US/asset/collection/solutions-partner-for-digital-and-app-innovation-azure#/",
  },
  {
    label: "Solutions Partner for Infrastructure (Azure)",
    imgSrc: "/logos/solutions-partner-infrastructure.png",
    href: "https://partner.microsoft.com/en-US/asset/collection/solutions-partner-for-infrastructure-azure#/",
  },
  {
    label: "Solutions Partner for Security",
    imgSrc: "/logos/solutions-partner-security.png",
    href: "https://partner.microsoft.com/en-US/asset/collection/solutions-partner-for-security#/",
  },
];

const specializations = [
  { label: "AI platform on Microsoft Azure", href: "https://partner.microsoft.com/en-us/partnership/specialization/ai-platform-on-microsoft-azure" },
  { label: "Analytics on Microsoft Azure", href: "https://partner.microsoft.com/en-us/partnership/specialization/analytics-on-microsoft-azure" },
  { label: "Build AI Apps on Microsoft Azure", href: "https://partner.microsoft.com/en-us/partnership/specialization/build-and-modernize-ai-apps" },
  { label: "Data Warehouse Migration to Microsoft Azure", href: "https://partner.microsoft.com/en-us/partnership/specialization/data-warehouse-migration" },
  { label: "Migrate Enterprise Applications to Microsoft Azure", href: "https://partner.microsoft.com/en-us/partnership/specialization/migrate-enterprise-applications" },
  { label: "Kubernetes on Microsoft Azure", href: "https://partner.microsoft.com/en-us/partnership/specialization/kubernetes" },
  { label: "Copilot", href: "https://partner.microsoft.com/en-us/partnership/specialization/microsoft-copilot" },
  { label: "Cloud Security", href: "https://partner.microsoft.com/en-us/partnership/specialization/cloud-security" },
  { label: "Threat Protection", href: "https://partner.microsoft.com/en-us/partnership/specialization/threat-protection" },
];

const whyItems = [
  {
    icon: <Checkmark24Regular />,
    title: "Continuous delivery",
    desc: "Receive high-quality solutions through daily build and testing with frequent status updates.",
  },
  {
    icon: <Clock24Regular />,
    title: "Faster implementation",
    desc: "Implement solutions faster with 24/7 support from our globally integrated teams.",
  },
  {
    icon: <Money24Regular />,
    title: "Cost effective process",
    desc: "Optimized solutions at every stage of development to ensure minimal cost at maximum efficiency.",
  },
  {
    icon: <Chat24Regular />,
    title: "Immediate response",
    desc: "Flexibility to adapt solutions to changing business needs through our daily delivery and feedback model.",
  },
];

const partners = [
  {
    imgSrc: "/logos/microsoft-logo.png" as string | null,
    initials: "MS",
    label: "Microsoft Preferred Supplier, Since 2000",
    href: "https://marketplace.microsoft.com/en-us/partners/e4d98dd2-9199-42e5-ba8b-da3e763ede2e/overview",
  },
  {
    imgSrc: "/logos/Snowflake-Services-Select.png" as string | null,
    initials: "SF",
    label: "Snowflake Technology Partner",
    href: "https://www.snowflake.com/en/why-snowflake/partners/all-partners/maq-llc-dba-maq-software/",
  },
  {
    imgSrc: "/logos/databricks-logo.png" as string | null,
    initials: "DB",
    label: "Databricks Technology Partner",
    href: "https://partners.databricks.com/s/directory/listing?recordId=0016100001F00jXAAR",
  },
  {
    imgSrc: "/logos/AWS_Partner.png" as string | null,
    initials: "AWS",
    label: "Amazon Consulting Partner",
    href: "http://www.aws-partner-directory.com/PartnerDirectory/PartnerDetail?Name=MAQ+LLC+dba+MAQ+Software",
  },
];

const recognitions = [
  {
    imgSrc: "/logos/Inc5000-2.png" as string | null,
    title: "Twelve-Time Honoree, Inc. 5000, Fastest Growing Companies in America",
    href: "http://www.inc.com/profile/maq-software",
    desc: "Inc. has honored MAQ Software on its prestigious Inc. 5000 list twelve times, a rare achievement. Since 2007, Inc. magazine has recognized more than 35,000 unique companies on its Inc. 5000 list based on the sales growth of the companies. Less than 0.5% of Inc. 5000 companies demonstrate sustained growth by appearing twelve or more times.",
  },
  {
    imgSrc: "/logos/Power_BI_Partner_Apr2023.png" as string | null,
    title: "2021 Microsoft Power BI Partner of the Year — Global Award Winner",
    href: "https://news.maqsoftware.com/2021/07/maq-software-honored-as-winner-of-2021.html",
    desc: "The Microsoft Partner of the Year award recognizes Microsoft partners that deliver outstanding solutions and innovations using Microsoft technologies. Microsoft awarded MAQ Software this global award for delivering innovative business intelligence and analytics solutions using Microsoft Power BI.",
  },
  {
    imgSrc: "/logos/Fastest_Growing_Companies.png" as string | null,
    title: "Puget Sound Business Journal's 100 Fastest-Growing Private Companies in Washington State",
    href: "http://www.bizjournals.com/seattle/stories/2009/10/19/focus2.html",
    desc: "MAQ Software is recognized as one of the fastest growing private companies in Washington State for five consecutive years. Because MAQ Software has earned a spot on the list four or more years, we are featured in the Business Journal Hall of Fame.",
  },
];

const certifications = [
  {
    imgSrc: "/logos/ISO_27701_27001_Logo.png",
    title: "ISO/IEC 27701:2019 – Privacy Information Management",
    href: "https://www.bsigroup.com/en-IN/products-and-services/assessment-and-certification/validation-and-verification/client-directory-certificate/PM%20747130",
    desc: "MAQ Software is certified ISO 27701:2019 by British Standards Institution. ISO 27701 standards provide guidance for establishing, implementing, maintaining and continually improving a Privacy Information Management System (PIMS). They serve as an extension of ISO/IEC 27001 for privacy management within MAQ Software.",
  },
  {
    imgSrc: "/logos/ISO-icon-27001.png",
    title: "ISO 27001:2022 – Information Security",
    href: "https://www.bsigroup.com/en-IN/products-and-services/assessment-and-certification/validation-and-verification/client-directory-certificate/IS%20592346",
    desc: "MAQ Software is certified ISO 27001:2022 by British Standards Institution. ISO 27001 standards, the only auditable international standard, provide an Information Security Management Systems (ISMS) model for adequate and proportionate security controls to protect information assets.",
  },
  {
    imgSrc: "/logos/ISO-icon-27018.png",
    title: "ISO/IEC 27018:2019 – Cloud Security",
    href: "https://www.bsigroup.com/en-IN/products-and-services/assessment-and-certification/validation-and-verification/client-directory-certificate/PII%20732855",
    desc: "MAQ Software is certified ISO/IEC 27018:2019 by British Standards Institution. ISO/IEC 27018:2019 is a code of practice that focuses on protection of personal data in the cloud. It is based on ISO/IEC information security standard 27002 and provides implementation guidance on ISO/IEC 27002 controls applicable to public cloud Personally Identifiable Information (PII).",
  },
];

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------


// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export function AboutWhoWeAre() {
  const s = useStyles();

  function scrollToSpecializations(e: React.MouseEvent) {
    e.preventDefault();
    document.getElementById("specializations")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      {/* ── Hero ── */}
      <section className={s.hero}>
        <div className={s.heroInner}>
          <span className={s.eyebrow}>Who we are</span>
          <h1 className={s.h1}>Who we are</h1>
          <p className={s.heroSub}>
            We are a Microsoft Fabric Featured Partner who enables leading
            companies to accelerate their business intelligence and analytics
            initiatives. Our solutions enable our clients to improve their
            operations, reduce costs, increase sales, and build stronger
            customer relationships.
          </p>
          <Button
            appearance="primary"
            size="large"
            as="a"
            href="#specializations"
            onClick={scrollToSpecializations}
          >
            View our specializations
          </Button>
        </div>
      </section>

      <TrustBanner />

      {/* ── Driven by expertise ── */}
      <section className={s.drivenSection}>
        <div className={s.drivenInner}>
          <h2 className={s.drivenHeading}>Driven by expertise, proven by results</h2>
          <div className={s.drivenGrid}>
            {heroStats.map((stat) => (
              <div key={stat.label} className={s.drivenStatItem}>
                <span className={s.drivenStatNumber}>{stat.metric}</span>
                <div className={s.drivenStatLine} />
                <span className={s.drivenStatLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 25 Years of Excellence ── */}
      <section className={s.excellenceSection}>
        <div className={s.excellenceInner}>
          <h2 className={s.excellenceH2}>25 years<br />of excellence</h2>
          <p className={s.excellenceBody}>
            Our clients choose to work with us because they are confident in our
            software delivery. Their confidence results from our commitment to
            consistent outcomes, reduced time to market, and a transparent
            workflow.
          </p>
        </div>
      </section>

      {/* ── Microsoft Solutions Partner Designations ── */}
      <section className={s.sectionGray}>
        <div className={s.inner}>
          <span className={s.sectionEyebrow}>
            Our Microsoft Solutions Partner Designations
          </span>
          <span className={s.h2}>Our Microsoft Solutions Partner Designations</span>
          <div className={s.designationGrid}>
            {designations.map((d) => (
              <a
                key={d.label}
                className={s.designationCard}
                href={d.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className={s.designationImg}
                  src={d.imgSrc}
                  alt={d.label}
                  loading="lazy"
                />
                <span className={s.designationLabel}>{d.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Microsoft Specializations ── */}
      <section className={s.sectionWhite} id="specializations">
        <div className={s.inner}>
          <span className={s.sectionEyebrow}>Our Microsoft Specializations</span>
          <span className={s.h2}>Our Microsoft Specializations</span>
          <div className={s.specGrid}>
            {specializations.map((spec, i) => (
              <a
                key={spec.label}
                className={s.specChip}
                href={spec.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={s.specNumber}>{String(i + 1).padStart(2, "0")}</span>
                {spec.label}
              </a>
            ))}
          </div>
          <p className={s.specFooter}>
            Learn how you can benefit from our specialized expertise in delivering
            Microsoft solutions on our{" "}
            <a
              className={s.specLink}
              href="https://appsource.microsoft.com/en-us/marketplace/partner-dir/e4d98dd2-9199-42e5-ba8b-da3e763ede2e/overview?exp=ubp8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Partner Page
            </a>
            .
          </p>
        </div>
      </section>

      {/* ── Why Choose MAQ Software ── */}
      <section className={s.sectionGray}>
        <div className={s.inner}>
          <span className={s.sectionEyebrow}>Why choose MAQ Software</span>
          <span className={s.h2}>Why choose MAQ Software</span>
          <div className={s.whyGrid}>
            {whyItems.map((item) => (
              <div key={item.title} className={s.whyCard}>
                <div className={s.whyIconWrap}>{item.icon}</div>
                <p className={s.whyTitle}>{item.title}</p>
                <p className={s.whyDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Partners ── */}
      <section className={s.sectionWhite}>
        <div className={s.inner}>
          <span className={s.sectionEyebrow}>Our partners</span>
          <span className={s.h2}>Our partners</span>
          <div className={s.partnerGrid}>
            {partners.map((p) => (
              <a
                key={p.label}
                className={s.partnerCard}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {p.imgSrc ? (
                  <img
                    className={s.partnerImg}
                    src={p.imgSrc}
                    alt={p.label}
                    loading="lazy"
                  />
                ) : (
                  <div className={s.partnerLogoBox}>{p.initials}</div>
                )}
                <span className={s.partnerLabel}>{p.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Recognitions ── */}
      <section className={s.sectionGray}>
        <div className={s.inner}>
          <span className={s.sectionEyebrow}>Recognitions</span>
          <span className={s.h2}>Recognitions</span>
          <div className={s.recognitionStack}>
            {recognitions.map((r) => (
              <div key={r.title} className={s.recognitionCard}>
                {r.imgSrc ? (
                  <div className={s.recognitionImgWrap}>
                    <img
                      className={s.recognitionImg}
                      src={r.imgSrc}
                      alt={r.title}
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className={s.recognitionIconWrap}>
                    <Star24Filled style={{ fontSize: "24px" }} />
                  </div>
                )}
                <div>
                  <a
                    className={s.recognitionTitle}
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {r.title}
                  </a>
                  <p className={s.recognitionDesc}>{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section className={s.sectionWhite}>
        <div className={s.inner}>
          <span className={s.sectionEyebrow}>Certifications</span>
          <span className={s.h2}>Certifications</span>
          <div className={s.certStack}>
            {certifications.map((c) => (
              <div key={c.title} className={s.certCard}>
                {c.imgSrc ? (
                  <div className={s.certIconWrap}>
                    <img src={c.imgSrc} alt={c.title} style={{ width: "100px", height: "auto", maxHeight: "100px", objectFit: "contain" }} loading="lazy" />
                  </div>
                ) : (
                  <div className={s.certIconWrap}>
                    <ShieldCheckmark24Regular style={{ fontSize: "24px" }} />
                  </div>
                )}
                <div>
                  <a
                    className={s.certTitle}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {c.title}
                  </a>
                  <p className={s.certDesc}>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
