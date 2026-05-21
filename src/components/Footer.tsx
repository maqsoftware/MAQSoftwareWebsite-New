import { makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
  footer: {
    backgroundColor: "var(--maq-gray-600)",
    color: "#fff",
    padding: "56px 32px 24px",
  },
  inner: { maxWidth: "1240px", margin: "0 auto" },
  top: {
    display: "grid",
    gridTemplateColumns: "1.4fr repeat(4, 1fr)",
    gap: "40px",
    marginBottom: "40px",
    "@media (max-width: 960px)": { gridTemplateColumns: "1fr 1fr", gap: "32px" },
  },
  brand: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" },
  logoMark: {
    width: "32px",
    height: "32px",
    backgroundColor: "var(--maq-red)",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 800,
    color: "#fff",
    fontSize: "14px",
  },
  logoName: { fontSize: "16px", fontWeight: 700, color: "#fff" },
  about: {
    fontSize: "13px",
    color: "rgba(255,255,255,0.55)",
    lineHeight: 1.6,
  },
  colTitle: {
    fontSize: "12px",
    fontWeight: 700,
    color: "rgba(255,255,255,0.5)",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    marginBottom: "16px",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  link: {
    fontSize: "13.5px",
    color: "rgba(255,255,255,0.65)",
    textDecoration: "none",
    transition: "color 0.15s",
    ":hover": { color: "#fff" },
  },
  bottom: {
    paddingTop: "24px",
    borderTop: "1px solid rgba(255,255,255,0.1)",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "12px",
  },
  bottomText: { fontSize: "12px", color: "rgba(255,255,255,0.4)" },
});

const cols = [
  {
    title: "Services",
    items: [
      "AI solutions & agentic automation",
      "Data engineering & analytics",
      "Reporting & business intelligence",
      "Cloud infrastructure & modernization",
      "Security & compliance",
    ],
  },
  {
    title: "Products",
    items: [
      "AI-DataLens",
      "Fabric Admin Agent",
      "MigrateFAST",
      "EmbedFAST",
      "CertyFAST",
      "LoadFAST",
    ],
  },
  {
    title: "Resources",
    items: ["Case studies", "Power BI custom visuals", "Best practice guides", "Webinars"],
  },
  {
    title: "Company",
    items: ["Who we are", "Careers", "News", "Sustainability", "Contact us"],
  },
];

export function Footer() {
  const s = useStyles();
  return (
    <footer className={s.footer}>
      <div className={s.inner}>
        <div className={s.top}>
          <div>
            <div className={s.brand}>
              <div className={s.logoMark}>M</div>
              <div className={s.logoName}>MAQ Software</div>
            </div>
            <p className={s.about}>
              Microsoft Fabric Featured Partner. 26 years of enterprise
              delivery. 1,800+ engineers turning data into decisions for the
              Fortune 500.
            </p>
            <p className={s.about} style={{ marginTop: 12 }}>
              2027 152nd Avenue NE, Redmond, WA 98052
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <div className={s.colTitle}>{c.title}</div>
              <ul className={s.list}>
                {c.items.map((i) => (
                  <li key={i}>
                    <a href="#" className={s.link}>
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={s.bottom}>
          <span className={s.bottomText}>
            © {new Date().getFullYear()} MAQ Software. All rights reserved.
          </span>
          <span className={s.bottomText}>
            Microsoft, Azure, Fabric, and Power BI are trademarks of Microsoft
            Corporation.
          </span>
        </div>
      </div>
    </footer>
  );
}
