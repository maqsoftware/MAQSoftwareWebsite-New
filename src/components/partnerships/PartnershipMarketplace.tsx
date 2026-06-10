import type { ReactNode } from "react";
import { Button, makeStyles, tokens } from "@fluentui/react-components";
import { ArrowRight20Regular } from "@fluentui/react-icons";

const useStyles = makeStyles({
  section: {
    padding: "64px 32px",
    backgroundColor: "var(--maq-off-white)",
  },
  inner: {
    maxWidth: "1240px",
    margin: "0 auto",
  },
  headLeft: {
    marginBottom: "32px",
  },
  eyebrow: {
    fontSize: "12px",
    fontWeight: 700,
    color: "var(--maq-red)",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    display: "block",
    marginBottom: "8px",
  },
  titleLg: {
    display: "block",
    fontSize: "32px",
    fontWeight: 700,
    color: "var(--maq-black)",
    margin: 0,
    letterSpacing: "-0.0125em",
  },
  intro: {
    fontSize: "16px",
    color: "var(--maq-gray-700)",
    lineHeight: 1.6,
    marginTop: "12px",
    marginBottom: "0",
    maxWidth: "800px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "24px",
    marginTop: "32px",
    marginBottom: "40px",
  },
  card: {
    backgroundColor: "#fff",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: "12px",
    padding: "32px 28px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.015)",
    transition: "all 0.25s ease",
    ":hover": {
      border: "1px solid var(--maq-red)",
      boxShadow: "0 8px 24px rgba(0,0,0,0.04)",
    },
  },
  bulletGroupTitle: {
    fontSize: "18px",
    fontWeight: 700,
    color: "var(--maq-black)",
    marginBottom: "20px",
    position: "relative",
    paddingBottom: "8px",
    "::after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "32px",
      height: "2px",
      backgroundColor: "var(--maq-red)",
    },
  },
  bulletList: {
    margin: 0,
    padding: 0,
    listStyleType: "none",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  bulletItem: {
    fontSize: "14px",
    color: "var(--maq-gray-700)",
    lineHeight: 1.6,
    position: "relative",
    paddingLeft: "18px",
    "::before": {
      content: '"•"',
      color: "var(--maq-red)",
      fontWeight: "bold",
      position: "absolute",
      left: "2px",
      top: "0px",
    },
  },
  ctaContainer: {
    display: "flex",
    justifyContent: "flex-start",
  },
});

export interface BulletGroup {
  title: string;
  items: ReactNode[];
}

export interface PartnershipMarketplaceProps {
  eyebrow?: string;
  title: string;
  sectionId?: string;
  intro: string;
  bulletGroups: BulletGroup[];
  ctaLabel: string;
  ctaHref: string;
}

export function PartnershipMarketplace({
  eyebrow,
  title,
  sectionId,
  intro,
  bulletGroups,
  ctaLabel,
  ctaHref,
}: PartnershipMarketplaceProps) {
  const s = useStyles();
  return (
    <section className={s.section} id={sectionId}>
      <div className={s.inner}>
        <div className={s.headLeft}>
          {eyebrow && <span className={s.eyebrow}>{eyebrow}</span>}
          <h2 className={s.titleLg}>{title}</h2>
          {intro && <p className={s.intro}>{intro}</p>}
        </div>

        <div className={s.grid}>
          {bulletGroups.map((group) => (
            <div key={group.title} className={s.card}>
              <div className={s.bulletGroupTitle}>{group.title}</div>
              <ul className={s.bulletList}>
                {group.items.map((item, i) => (
                  <li key={i} className={s.bulletItem}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={s.ctaContainer}>
          <Button
            appearance="primary"
            size="large"
            icon={<ArrowRight20Regular />}
            iconPosition="after"
            as="a"
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            {ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
