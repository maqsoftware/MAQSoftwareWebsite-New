import { Button, makeStyles } from "@fluentui/react-components";
import { Mail24Regular } from "@fluentui/react-icons";

const useStyles = makeStyles({
  band: {
    padding: "56px 32px",
    backgroundColor: "var(--maq-black)",
    textAlign: "center",
  },
  inner: { maxWidth: "720px", margin: "0 auto" },
  title: {
    fontSize: "30px",
    fontWeight: 700,
    color: "#fff",
    margin: "0 0 16px",
    letterSpacing: "-0.01em",
  },
  desc: {
    fontSize: "15px",
    lineHeight: 1.65,
    color: "rgba(255,255,255,0.8)",
    marginBottom: "24px",
  },
});

export interface PartnershipConnectProps {
  title: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

export function PartnershipConnect({
  title,
  description,
  ctaLabel,
  ctaHref,
}: PartnershipConnectProps) {
  const s = useStyles();
  return (
    <section className={s.band}>
      <div className={s.inner}>
        <h2 className={s.title}>{title}</h2>
        <p className={s.desc}>{description}</p>
        <Button
          appearance="primary"
          size="large"
         
          as="a"
          href={ctaHref}
        >
          {ctaLabel}
        </Button>
      </div>
    </section>
  );
}
