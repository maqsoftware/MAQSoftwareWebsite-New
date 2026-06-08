import {
  makeStyles,
  Button,
} from "@fluentui/react-components";
import { Mail24Regular } from "@fluentui/react-icons";
import { useContactAction } from "../lib/contact";

const useStyles = makeStyles({
  section: { padding: "32px 32px", backgroundColor: "var(--maq-surface-cream)" },
  inner: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "32px 32px",
    color: "var(--maq-ink)",
    textAlign: "center",
  },
  eyebrow: {
    fontSize: "12px",
    fontWeight: 700,
    color: "var(--maq-red)",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    marginBottom: "8px",
    display: "block",
  },
  title: {
    fontSize: "32px",
    fontWeight: 700,
    color: "var(--maq-black)",
    margin: "0 0 8px",
    letterSpacing: "-0.02em",
  },
  sub: {
    fontSize: "16px",
    color: "var(--maq-gray-700)",
    marginBottom: "20px",
    maxWidth: "640px",
    margin: "0 auto 20px",
    display: "block",
  },
  btns: {
    display: "flex",
    gap: "12px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  email: {
    marginTop: "12px",
    fontSize: "13px",
    color: "var(--maq-gray-700)",
  },
  emailLink: {
    color: "var(--maq-red)",
    fontWeight: 600,
    textDecoration: "underline",
  },
});

export function CTA() {
  const s = useStyles();
  const handleContactClick = useContactAction();
  return (
    <section className={s.section} id="contact">
      <div className={s.inner}>
        <span className={s.eyebrow}>Talk to us</span>
        <h2 className={s.title}>
          Ready to move faster?
        </h2>
        <div className={s.btns}>
          <Button
            appearance="primary"
            size="large"
            icon={<Mail24Regular />}
            onClick={() => handleContactClick()}
          >
            Contact Us
          </Button>
        </div>
        <div className={s.email}>
          Or email us directly at{" "}
          <a
            className={s.emailLink}
            href="mailto:customersuccess@maqsoftware.com"
          >
            customersuccess@maqsoftware.com
          </a>
        </div>
      </div>
    </section>
  );
}
