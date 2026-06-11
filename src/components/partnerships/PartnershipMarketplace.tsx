import type { ReactNode } from "react";
import { Button, makeStyles } from "@fluentui/react-components";
import { ArrowRight20Regular } from "@fluentui/react-icons";
import { FeatureCard } from "../cards/FeatureCard";

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
            <FeatureCard
              key={group.title}
              name={group.title}
              bullets={group.items}
            />
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
