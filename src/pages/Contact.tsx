import { Button, makeStyles, Link as FluentLink } from "@fluentui/react-components";
import {
  Location24Regular,
  Mail24Regular,
  Call24Regular,
  ArrowRight16Regular,
  Person24Regular,
  Handshake24Regular,
  PeopleTeam24Regular,
} from "@fluentui/react-icons";

const MAIL_TO =
  "mailto:CustomerSuccess@MAQSoftware.com?subject=Contact%20Us&body=Hello,%20I%20would%20like%20to%20get%20in%20touch%20with%20you.";

const useStyles = makeStyles({
  // ── Hero ──────────────────────────────────────────────────────────────────
  hero: {
    backgroundColor: "var(--maq-off-white)",
    padding: "64px 32px 72px",
    backgroundImage: "url('/logos/wave_dots.svg')",
    backgroundPosition: "bottom left",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  heroInner: {
    maxWidth: "760px",
    margin: "0 auto",
    textAlign: "center" as const,
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
    fontSize: "16px",
    lineHeight: 1.65,
    color: "var(--maq-gray-700)",
    margin: "0 auto 28px",
    maxWidth: "560px",
  },
  heroEmail: {
    display: "block",
    fontSize: "14px",
    color: "var(--maq-gray-700)",
    marginTop: "16px",
  },

  // ── Inquiry options ───────────────────────────────────────────────────────
  inquirySection: {
    padding: "56px 32px",
    backgroundColor: "#fff",
  },
  inquiryInner: {
    maxWidth: "1240px",
    margin: "0 auto",
  },
  inquiryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "24px",
    "@media (max-width: 960px)": { gridTemplateColumns: "repeat(2, 1fr)" },
    "@media (max-width: 560px)": { gridTemplateColumns: "1fr" },
  },
  inquiryCard: {
    padding: "28px",
    borderRadius: "12px",
    backgroundColor: "var(--maq-off-white)",
    border: "1px solid var(--maq-border)",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    textDecoration: "none",
    color: "inherit",
    transition: "border-color 0.15s, box-shadow 0.15s",
    ":hover": {
      border: "1px solid var(--maq-red)",
      boxShadow: "0 4px 12px rgba(15, 23, 42, 0.06)",
    },
  },
  inquiryIcon: { color: "var(--maq-red)" },
  inquiryTitle: {
    fontSize: "16px",
    fontWeight: 700,
    color: "var(--maq-black)",
  },
  inquiryDesc: {
    fontSize: "14px",
    lineHeight: 1.6,
    color: "var(--maq-gray-700)",
  },

  // ── Locations ─────────────────────────────────────────────────────────────
  locationsSection: {
    padding: "64px 32px 80px",
    backgroundColor: "var(--maq-off-white)",
  },
  locationsInner: {
    maxWidth: "1240px",
    margin: "0 auto",
  },
  sectionHeading: {
    fontSize: "32px",
    fontWeight: 700,
    color: "var(--maq-black)",
    letterSpacing: "-0.01em",
    margin: "0 0 40px",
    textAlign: "center" as const,
  },
  locationGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "24px",
    "@media (max-width: 960px)": { gridTemplateColumns: "repeat(2, 1fr)" },
    "@media (max-width: 560px)": { gridTemplateColumns: "1fr" },
  },
  locationCard: {
    padding: "24px",
    borderRadius: "12px",
    backgroundColor: "#fff",
    border: "1px solid var(--maq-border)",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  pin: { color: "var(--maq-red)" },
  locationTitle: {
    fontSize: "16px",
    fontWeight: 700,
    color: "var(--maq-black)",
    margin: 0,
  },
  locationAddress: {
    fontSize: "14px",
    lineHeight: 1.6,
    color: "var(--maq-gray-700)",
    whiteSpace: "pre-line" as const,
    margin: 0,
  },
  locationPhone: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "14px",
    color: "var(--maq-gray-700)",
  },
  directions: {
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "14px",
    fontWeight: 600,
    color: "var(--maq-red)",
    marginTop: "auto",
    paddingTop: "3px",
  },
});

interface Office {
  city: string;
  address: string;
  phone?: string;
  maps: string;
}

const offices: Office[] = [
  {
    city: "Redmond, Washington, USA",
    address: "2027 152nd Avenue NE\nRedmond, WA 98052",
    maps: "https://maps.app.goo.gl/Bu9iNvKvn7m9Wvkb6",
  },
  {
    city: "Plano, Texas, USA",
    address:
      "Lincoln Legacy Two\n5810 Tennyson Parkway, Suite 100\nPlano, TX 75024",
    maps: "https://maps.app.goo.gl/bipnas8wN2V8Uqst5",
  },
  {
    city: "Noida, Uttar Pradesh, India",
    address:
      "A3, Sector 145\nNear Metro Station\nNoida\nG. B. Nagar, UP 201 301",
    phone: "+91 908 256 1327",
    maps: "https://maps.app.goo.gl/GZT67ZkYkp1ajCux6",
  },
  {
    city: "Hyderabad, Telangana, India",
    address:
      "Level 7, Astro, aVance Business Hub\nBehind Dell Campus\nHITEC City 2, Madhapur\nHyderabad 500 081",
    phone: "+91 40 4010 0570",
    maps: "https://maps.app.goo.gl/oUZoswcXNcEiiBmk8",
  },
  {
    city: "Mumbai, Maharashtra, India",
    address:
      "201, Meadows Building\nSahar Plaza on Andheri Kurla Road\nAndheri East\nMumbai 400 059",
    phone: "+91 908 256 1327",
    maps: "https://maps.app.goo.gl/dnkW8CJhJF9fbZWT9",
  },
];

const inquiries = [
  {
    icon: <Person24Regular />,
    title: "Talk to sales",
    desc: "Discuss a new engagement or project with our solutions team.",
    href: "mailto:CustomerSuccess@MAQSoftware.com?subject=Sales%20Inquiry",
  },
  {
    icon: <PeopleTeam24Regular />,
    title: "Customer success",
    desc: "Get support for an existing engagement or active project.",
    href: "mailto:CustomerSuccess@MAQSoftware.com?subject=Customer%20Success",
  },
  {
    icon: <Handshake24Regular />,
    title: "Partner with us",
    desc: "Explore strategic partnership and alliance opportunities.",
    href: "mailto:CustomerSuccess@MAQSoftware.com?subject=Partnership%20Inquiry",
  },
];

export function Contact() {
  const s = useStyles();

  return (
    <>
      {/* Hero */}
      <section className={s.hero}>
        <div className={s.heroInner}>
          <h1 className={s.h1}>Contact MAQ Software</h1>
          <p className={s.heroSub}>
            Contact us today—learn how MAQ Software can deliver the solutions that propel
            your business forward.
          </p>
          <Button
            appearance="primary"
            size="large"
            icon={<Mail24Regular />}
            as="a"
            href={MAIL_TO}
          >
            Email Customer Success
          </Button>
          <span className={s.heroEmail}>
            <FluentLink href={MAIL_TO}>CustomerSuccess@MAQSoftware.com</FluentLink>
          </span>
        </div>
      </section>

      {/* Inquiry options */}
      <section className={s.inquirySection}>
        <div className={s.inquiryInner}>
          <div className={s.inquiryGrid}>
            {inquiries.map((i) => (
              <a key={i.title} className={s.inquiryCard} href={i.href}>
                <span className={s.inquiryIcon}>{i.icon}</span>
                <span className={s.inquiryTitle}>{i.title}</span>
                <span className={s.inquiryDesc}>{i.desc}</span>
                <span className={s.directions}>
                  Send email <ArrowRight16Regular />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className={s.locationsSection}>
        <div className={s.locationsInner}>
          <h2 className={s.sectionHeading}>Our locations</h2>
          <div className={s.locationGrid}>
            {offices.map((o) => (
              <div key={o.city} className={s.locationCard}>
                <span className={s.pin}>
                  <Location24Regular />
                </span>
                <h3 className={s.locationTitle}>{o.city}</h3>
                <p className={s.locationAddress}>{o.address}</p>
                {o.phone && (
                  <span className={s.locationPhone}>
                    <Call24Regular />
                    {o.phone}
                  </span>
                )}
                <a
                  className={s.directions}
                  href={o.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get directions <ArrowRight16Regular />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
