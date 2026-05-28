import type { ReactNode } from "react";
import { Button, makeStyles } from "@fluentui/react-components";
import { ArrowRight20Regular } from "@fluentui/react-icons";

const useStyles = makeStyles({
  section: { padding: "48px 32px", backgroundColor: "var(--maq-off-white)" },
  inner: { maxWidth: "1240px", margin: "0 auto" },
  headLeft: { marginBottom: "20px" },
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
    fontSize: "30px",
    fontWeight: 700,
    color: "var(--maq-black)",
    margin: 0,
    letterSpacing: "-0.01em",
  },
  intro: {
    fontSize: "16px",
    fontWeight: 600,
    color: "var(--maq-black)",
    marginBottom: "20px",
  },
  bulletGroup: { marginBottom: "20px" },
  bulletGroupTitle: {
    fontSize: "15px",
    fontWeight: 700,
    color: "var(--maq-black)",
    marginBottom: "8px",
  },
  bulletList: { margin: "0 0 0 20px", padding: 0, listStyleType: "disc" },
  bulletItem: {
    fontSize: "14px",
    color: "var(--maq-gray-700)",
    lineHeight: 1.65,
    marginBottom: "6px",
  },
});

export interface BulletGroup {
  title: string;
  items: ReactNode[];
}

export interface PartnershipMarketplaceProps {
  eyebrow: string;
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
          <span className={s.eyebrow}>{eyebrow}</span>
          <h2 className={s.titleLg}>{title}</h2>
        </div>

        <p className={s.intro}>{intro}</p>

        {bulletGroups.map((group) => (
          <div key={group.title} className={s.bulletGroup}>
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

        <Button
          appearance="primary"
          size="large"
          icon={<ArrowRight20Regular />}
          iconPosition="after"
          as="a"
          href={ctaHref}
          target="_blank"
          rel="noreferrer"
        >
          {ctaLabel}
        </Button>
      </div>
    </section>
  );
}
