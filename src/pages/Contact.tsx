import { makeStyles } from "@fluentui/react-components";
import {
  ArrowRight16Regular,
  ChartMultiple24Regular,
  DataPie24Regular,
  Lightbulb24Regular,
  Location24Regular,
  Shield24Regular,
} from "@fluentui/react-icons";
import { PrimaryButton } from "../components/buttons";

const MAIL_TO =
  "mailto:CustomerSuccess@MAQSoftware.com?subject=Contact%20Us&body=Hello,%20I%20would%20like%20to%20get%20in%20touch%20with%20you.";

const useStyles = makeStyles({
  page: {
    backgroundColor: "var(--maq-gray-50)",
  },
  hero: {
    backgroundColor: "#f7f8fb",
    backgroundImage: "url('/images/ContactUs/bg.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center 50%",
    backgroundSize: "cover",
    borderBottom: "1px solid var(--maq-border)",
    "@media (max-width: 960px)": {
      backgroundPosition: "center 50%",
    },
  },
  heroInner: {
    maxWidth: "1240px",
    margin: "0 auto",
    padding: "18px 32px 28px",
    "@media (max-width: 960px)": {
      padding: "16px 20px 24px",
    },
  },
  heroContent: {
    maxWidth: "720px",
  },
  eyebrow: {
    margin: "0 0 10px",
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "var(--maq-red)",
  },
  title: {
    margin: "0 0 10px",
    fontSize: "58px",
    lineHeight: 1.03,
    letterSpacing: "-0.02em",
    fontWeight: 700,
    color: "var(--maq-black)",
    "@media (max-width: 1080px)": {
      fontSize: "50px",
    },
    "@media (max-width: 960px)": {
      fontSize: "42px",
      lineHeight: 1.08,
    },
    "@media (max-width: 560px)": {
      fontSize: "34px",
    },
  },
  titleAccent: {
    color: "var(--maq-red)",
  },
  summary: {
    margin: "0 0 14px",
    fontSize: "18px",
    lineHeight: 1.5,
    color: "#2f3a4f",
    maxWidth: "640px",
    "@media (max-width: 960px)": {
      fontSize: "17px",
      lineHeight: 1.6,
    },
  },
  cta: {
    minHeight: "38px",
    width: "122px",
    justifyContent: "center",
    whiteSpace: "nowrap",
  },

  featureShell: {
    maxWidth: "1240px",
    margin: "10px auto 0",
    padding: "0 32px",
    "@media (max-width: 960px)": {
      marginTop: "8px",
      padding: "0 20px",
    },
  },
  featureRow: {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    backgroundColor: "#fff",
    border: "1px solid var(--maq-border)",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 8px 20px rgba(15, 23, 42, 0.08)",
    "@media (max-width: 1000px)": {
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    },
    "@media (max-width: 560px)": {
      gridTemplateColumns: "1fr",
    },
  },
  featureItem: {
    display: "grid",
    gridTemplateColumns: "34px 1fr",
    alignItems: "center",
    gap: "10px",
    padding: "8px 14px",
    borderRight: "1px solid var(--maq-border)",
    ":last-child": {
      borderRight: "none",
    },
    "@media (max-width: 1000px)": {
      ":nth-child(2n)": {
        borderRight: "none",
      },
      ":nth-child(-n + 2)": {
        borderBottom: "1px solid var(--maq-border)",
      },
    },
    "@media (max-width: 560px)": {
      borderRight: "none",
      borderBottom: "1px solid var(--maq-border)",
      ":last-child": {
        borderBottom: "none",
      },
    },
  },
  featureIconWrap: {
    width: "30px",
    height: "30px",
    borderRadius: "999px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "var(--maq-red)",
    backgroundColor: "#fff5f7",
    border: "1px solid rgba(200, 16, 46, 0.18)",
  },
  featureTitle: {
    margin: "0 0 1px",
    fontSize: "14px",
    fontWeight: 700,
    lineHeight: 1.2,
    color: "var(--maq-black)",
  },
  featureDesc: {
    margin: 0,
    fontSize: "12px",
    lineHeight: 1.3,
    color: "var(--maq-ink)",
  },

  officesSection: {
    maxWidth: "1240px",
    margin: "0 auto",
    padding: "12px 32px 16px",
    "@media (max-width: 960px)": {
      padding: "18px 20px 20px",
    },
  },
  officesTitle: {
    margin: "0 0 10px",
    fontSize: "36px",
    lineHeight: 1.1,
    letterSpacing: "-0.02em",
    fontWeight: 700,
    color: "var(--maq-black)",
    "@media (max-width: 960px)": {
      fontSize: "28px",
      marginBottom: "12px",
    },
  },
  officeGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
    gap: "10px",
    "@media (max-width: 1100px)": {
      gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
      gap: "12px",
    },
    "@media (max-width: 860px)": {
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    },
    "@media (max-width: 620px)": {
      gridTemplateColumns: "1fr",
    },
  },
  officeCard: {
    backgroundColor: "#fff",
    border: "1px solid var(--maq-border)",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(15, 23, 42, 0.05)",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    minHeight: "238px",
  },
  officeMedia: {
    height: "74px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "relative",
  },
  locationPin: {
    position: "absolute",
    top: "7px",
    left: "7px",
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    backgroundColor: "#fff",
    color: "var(--maq-red)",
    border: "1px solid rgba(200, 16, 46, 0.18)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 2px 5px rgba(15, 23, 42, 0.18)",
  },
  officeBody: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
    padding: "8px 10px 9px",
    flex: 1,
  },
  officeCity: {
    margin: 0,
    fontSize: "12.5px",
    lineHeight: 1.25,
    fontWeight: 700,
    color: "var(--maq-black)",
  },
  officeAddress: {
    margin: 0,
    fontSize: "12px",
    lineHeight: 1.4,
    whiteSpace: "pre-line" as const,
    color: "var(--maq-ink)",
  },
  officePhone: {
    margin: 0,
    fontSize: "11px",
    lineHeight: 1.3,
    color: "var(--maq-gray-500)",
  },
  directionsLink: {
    marginTop: "auto",
    display: "inline-flex",
    alignItems: "center",
    gap: "3px",
    fontSize: "12px",
    lineHeight: 1.2,
    fontWeight: 700,
    color: "var(--maq-red)",
    textDecoration: "none",
    ":hover": {
      color: "var(--maq-red-dark)",
    },
  },
  hiddenText: {
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: 0,
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    border: 0,
  },
});

type Capability = {
  title: string;
  description: string;
  icon: JSX.Element;
};

type Office = {
  city: string;
  address: string;
  phone?: string;
  maps: string;
  image: string;
};

const capabilities: Capability[] = [
  {
    title: "Customer-Centric Delivery",
    description: "Trusted by global enterprises for measurable outcomes",
    icon: <Lightbulb24Regular />,
  },
  {
    title: "Innovation at Scale",
    description: "Modernizing legacy BI and driving AI-powered insights",
    icon: <ChartMultiple24Regular />,
  },
  {
    title: "Data & AI Expertise",
    description: "End-to-end capabilities across analytics, AI and cloud",
    icon: <DataPie24Regular />,
  },
  {
    title: "Security & Compliance",
    description: "Enterprise-grade security with global compliance standards",
    icon: <Shield24Regular />,
  },
];

const offices: Office[] = [
  {
    city: "Redmond, Washington, USA",
    address: "2027 152nd Avenue NE\nRedmond, WA 98052",
    phone: "+1 425-526-5399",
    maps: "https://maps.app.goo.gl/Bu9iNvKvn7m9Wvkb6",
    image: "/images/ContactUs/redmond.jpg",
  },
  {
    city: "Plano, Texas, USA",
    address:
      "Lincoln Legacy Two\n5810 Tennyson Parkway, Suite 100\nPlano, TX 75024",
    phone: "+1 425-526-5399",
    maps: "https://maps.app.goo.gl/bipnas8wN2V8Uqst5",
    image: "/images/ContactUs/plano.jpg",
  },
  {
    city: "Noida, Uttar Pradesh, India",
    address:
      "A3, Sector 145, Near Metro Station\nNoida\nG. B. Nagar, UP 201 301",
    phone: "+91 908 256 1327",
    maps: "https://maps.app.goo.gl/GZT67ZkYkp1ajCux6",
    image: "/images/ContactUs/noida.webp",
  },
  {
    city: "Hyderabad, Telangana, India",
    address:
      "Level 7, Astro, aVance Business Hub\nBehind Dell Campus\nHITEC City, Madhapur\nHyderabad 500 081",
    phone: "+91 40 4010 0570",
    maps: "https://maps.app.goo.gl/oUZoswcXNcEiiBmk8",
    image: "/images/ContactUs/Hyderabad.jpg",
  },
  {
    city: "Mumbai, Maharashtra, India",
    address:
      "201, Meadows Building\nSahar Plaza, Andheri Kurla Road\nAndheri East\nMumbai 400 059",
    phone: "+91 908 256 1327",
    maps: "https://maps.app.goo.gl/dnkW8CJhJF9fbZWT9",
    image: "/images/ContactUs/mumbai.jpg",
  },
];

export function Contact() {
  const s = useStyles();

  return (
    <main className={s.page}>
      <section className={s.hero}>
        <div className={s.heroInner}>
          <div className={s.heroContent}>
            <p className={s.eyebrow}>Contact Us</p>
            <h1 className={s.title}>
              Let&apos;s build what&apos;s next,
              <br />
              <span className={s.titleAccent}>together.</span>
            </h1>
            <p className={s.summary}>
              MAQ Software helps organizations unlock the full potential of data
              and AI to drive intelligent decisions and measurable business
              outcomes.
            </p>
            <PrimaryButton size="large" className={s.cta} href={MAIL_TO}>
              Contact Us
            </PrimaryButton>
          </div>
        </div>
      </section>

      <div className={s.featureShell}>
        <section className={s.featureRow} aria-label="Core capabilities">
          {capabilities.map((capability) => (
            <article key={capability.title} className={s.featureItem}>
              <span className={s.featureIconWrap} aria-hidden="true">
                {capability.icon}
              </span>
              <div>
                <p className={s.featureTitle}>{capability.title}</p>
                <p className={s.featureDesc}>{capability.description}</p>
              </div>
            </article>
          ))}
        </section>
      </div>

      <section className={s.officesSection} aria-labelledby="global-offices-heading">
        <h2 id="global-offices-heading" className={s.officesTitle}>
          Our Global Offices
        </h2>
        <div className={s.officeGrid}>
          {offices.map((office) => (
            <article className={s.officeCard} key={office.city}>
              <div
                className={s.officeMedia}
                style={{ backgroundImage: `url('${office.image}')` }}
                aria-hidden="true"
              >
                <span className={s.locationPin}>
                  <Location24Regular fontSize={13} />
                  <span className={s.hiddenText}>Location</span>
                </span>
              </div>

              <div className={s.officeBody}>
                <h3 className={s.officeCity}>{office.city}</h3>
                <p className={s.officeAddress}>{office.address}</p>
                {office.phone && <p className={s.officePhone}>{office.phone}</p>}
                <a
                  className={s.directionsLink}
                  href={office.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Directions
                  <ArrowRight16Regular fontSize={12} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
