import type { ReactNode } from "react";
import { Button, makeStyles } from "@fluentui/react-components";
import { Mail24Regular } from "@fluentui/react-icons";

const useStyles = makeStyles({
  wrap: { backgroundColor: "var(--maq-off-white)", padding: "48px 32px 56px" },
  grid: {
    maxWidth: "1240px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1.3fr 1fr",
    gap: "48px",
    alignItems: "start",
    "@media (max-width: 960px)": { gridTemplateColumns: "1fr" },
  },
  h1: {
    display: "block",
    fontSize: "40px",
    lineHeight: 1.15,
    fontWeight: 700,
    color: "var(--maq-black)",
    letterSpacing: "-0.02em",
    margin: "0 0 16px",
  },
  sub: {
    display: "block",
    fontSize: "15px",
    lineHeight: 1.6,
    color: "var(--maq-gray-600)",
    marginBottom: "24px",
    maxWidth: "640px",
  },
  btns: { display: "flex", gap: "12px", flexWrap: "wrap" },
  imageWrap: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    alignSelf: "start",
    width: "100%",
    padding: "20px",
    backgroundColor: "#f7f8fa",
    border: "1px solid var(--maq-border)",
    borderRadius: "20px",
    boxShadow: "0 18px 36px rgba(15, 23, 42, 0.08)",
  },
  image: {
    width: "100%",
    maxWidth: "520px",
    maxHeight: "320px",
    height: "auto",
    display: "block",
    objectFit: "contain",
    objectPosition: "top left",
  },
});

export interface PartnershipHeroProps {
  h1: string;
  subhead: string;
  ctaLabel: string;
  ctaHref: string;
  imageUrl: string;
  imageAlt: string;
  extraCta?: ReactNode;
}

export function PartnershipHero({
  h1,
  subhead,
  ctaLabel,
  ctaHref,
  imageUrl,
  imageAlt,
  extraCta,
}: PartnershipHeroProps) {
  const s = useStyles();
  return (
    <section className={s.wrap}>
      <div className={s.grid}>
        <div>
          <h1 className={s.h1}>{h1}</h1>
          <p className={s.sub}>{subhead}</p>
          <div className={s.btns}>
            <Button
              appearance="primary"
              size="large"
              icon={<Mail24Regular />}
              as="a"
              href={ctaHref}
            >
              {ctaLabel}
            </Button>
            {extraCta}
          </div>
        </div>
        <div className={s.imageWrap}>
          <img
            className={s.image}
            src={imageUrl}
            alt={imageAlt}
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
