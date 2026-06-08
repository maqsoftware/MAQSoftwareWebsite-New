import { Button, makeStyles } from "@fluentui/react-components";
import {
  Location24Regular,
  Mail24Regular,
  People24Regular,
  Lightbulb24Regular,
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
    maxWidth: "1240px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1.05fr 0.95fr",
    gap: "40px",
    alignItems: "start",
    "@media (max-width: 980px)": {
      gridTemplateColumns: "1fr",
      gap: "28px",
    },
  },
  heroLeft: {
    maxWidth: "700px",
  },
  h1: {
    display: "block",
    fontSize: "50px",
    fontWeight: 700,
    lineHeight: 1.15,
    color: "var(--maq-black)",
    letterSpacing: "-0.02em",
    margin: "0 0 18px",
    "@media (max-width: 980px)": {
      fontSize: "38px",
    },
  },
  heroSub: {
    display: "block",
    fontSize: "16px",
    lineHeight: 1.2,
    fontWeight: 400,
    color: "var(--maq-black)",
    margin: "0 0 26px",
    maxWidth: "620px",
  },
  proofList: {
    display: "grid",
    gap: "14px",
    marginBottom: "28px",
  },
  proofItem: {
    display: "grid",
    gridTemplateColumns: "44px 1fr",
    gap: "12px",
    alignItems: "start",
  },
  proofIcon: {
    color: "var(--maq-red)",
    backgroundColor: "var(--maq-red-pale)",
    width: "44px",
    height: "44px",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  proofTitle: {
    margin: "0 0 4px",
    fontSize: "22px",
    lineHeight: 1.2,
    fontWeight: 700,
    color: "var(--maq-black)",
  },
  proofDesc: {
    margin: 0,
    fontSize: "14px",
    lineHeight: 1.6,
    color: "var(--maq-gray-700)",
  },
  heroRight: {
    backgroundColor: "#fff",
    border: "1px solid var(--maq-border)",
    borderRadius: "16px",
    padding: "18px",
    boxShadow: "0 8px 20px rgba(15, 23, 42, 0.06)",
    alignSelf: "start",
    display: "flex",
    flexDirection: "column",
  },
  rightTitle: {
    margin: "0 0 10px",
    fontSize: "18px",
    fontWeight: 700,
    color: "var(--maq-black)",
  },
  rightSub: {
    margin: "0 0 18px",
    fontSize: "14px",
    lineHeight: 1.6,
    color: "var(--maq-gray-700)",
  },
  miniLocationList: {
    display: "grid",
    gap: "8px",
  },
  miniLocation: {
    display: "grid",
    gridTemplateColumns: "28px 1fr auto",
    gap: "6px",
    alignItems: "start",
    padding: "8px 0",
    borderBottom: "1px solid var(--maq-border)",
    ":last-child": {
      borderBottom: "none",
    },
    "@media (max-width: 980px)": {
      gridTemplateColumns: "28px 1fr",
    },
  },
  miniLocationIcon: {
    color: "var(--maq-red)",
    marginTop: "2px",
  },
  miniLocationCity: {
    margin: "0 0 2px",
    fontSize: "14px",
    fontWeight: 700,
    color: "var(--maq-black)",
  },
  miniLocationAddress: {
    margin: 0,
    fontSize: "12px",
    lineHeight: 1.4,
    color: "var(--maq-gray-700)",
    whiteSpace: "pre-line" as const,
  },
  miniActionColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: "6px",
    minWidth: "150px",
    paddingLeft: "12px",
    "@media (max-width: 980px)": {
      gridColumnStart: 2,
      alignItems: "flex-start",
      minWidth: "auto",
      paddingLeft: 0,
      marginTop: "6px",
    },
  },
  miniLocationPhone: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "12px",
    lineHeight: 1.4,
    color: "var(--maq-gray-700)",
  },
  miniDirections: {
    display: "flex",
    alignItems: "center",
    fontFamily: "inherit",
    fontSize: "13px",
    lineHeight: 1.4,
    fontWeight: 600,
    color: "var(--maq-red)",
    textDecoration: "none",
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
    phone: "+1 425-526-5399",
    maps: "https://maps.app.goo.gl/Bu9iNvKvn7m9Wvkb6",
  },
  {
    city: "Plano, Texas, USA",
    address:
      "Lincoln Legacy Two\n5810 Tennyson Parkway, Suite 100\nPlano, TX 75024",
    phone: "+1 425-526-5399",
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

export function Contact() {
  const s = useStyles();

  return (
    <>
      {/* Hero */}
      <section className={s.hero}>
        <div className={s.heroInner}>
          <div className={s.heroLeft}>
            <p className={s.heroSub}>
           MAQ Software helps organizations unlock the full potential of their data through AI, intelligent automation, analytics, and cloud technologies. From modern data platforms to generative AI and agentic solutions, we enable businesses to transform information into real-time intelligence, accelerate innovation, and drive measurable outcomes at scale.
            </p>

            <div className={s.proofList}>
              <div className={s.proofItem}>
                <span className={s.proofIcon}>
                  <Lightbulb24Regular />
                </span>
                <div>
                  <p className={s.proofTitle}>Microsoft Solutions Partner</p>
                  <p className={s.proofDesc}>
                    Award-winning Power BI expertise recognized by Microsoft with
                    the 2021 Microsoft Power BI Partner of the Year Award.
                    Delivered frameworks for thousands of reports across 30 global
                    companies and accelerated adoption from years to months.
                  </p>
                </div>
              </div>

              <div className={s.proofItem}>
                <span className={s.proofIcon}>
                  <People24Regular />
                </span>
                <div>
                  <p className={s.proofTitle}>Commitment to Your Success</p>
                  <p className={s.proofDesc}>
                    End-to-end partnership from modernization and migration
                    planning to implementation, optimization, and scalable
                    analytics adoption.
                  </p>
                </div>
              </div>

              <div className={s.proofItem}>
                <span className={s.proofIcon}>
                  <People24Regular />
                </span>
                <div>
                  <p className={s.proofTitle}>Customer-Centric Delivery</p>
                  <p className={s.proofDesc}>
                    Trusted to modernize legacy BI platforms, improve report
                    performance by up to 90%, and enable self-service reporting and
                    embedded Power BI for ISVs.
                  </p>
                </div>
              </div>

              <div className={s.proofItem}>
                <span className={s.proofIcon}>
                  <Lightbulb24Regular />
                </span>
                <div>
                  <p className={s.proofTitle}>Innovation at Scale</p>
                  <p className={s.proofDesc}>
                    Published 33 certified Power BI custom visuals with 2.3M+
                    downloads and expanded community expertise through best-practice
                    guides and training.
                  </p>
                </div>
              </div>
            </div>

            <Button
              appearance="primary"
              size="large"
              icon={<Mail24Regular />}
              as="a"
              href={MAIL_TO}
            >
              Get in Touch
            </Button>
          </div>

          <aside className={s.heroRight}>
            <h2 className={s.rightTitle}>Our global locations</h2>
            <div className={s.miniLocationList}>
              {offices.map((office) => (
                <div key={office.city} className={s.miniLocation}>
                  <span className={s.miniLocationIcon}>
                    <Location24Regular />
                  </span>
                  <div>
                    <p className={s.miniLocationCity}>{office.city}</p>
                    <p className={s.miniLocationAddress}>
                      {office.address}
                    </p>
                  </div>
                  <div className={s.miniActionColumn}>
                    {office.phone && (
                      <span className={s.miniLocationPhone}>
                        {office.phone}
                      </span>
                    )}
                    <a
                      className={s.miniDirections}
                      href={office.maps}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get directions
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
