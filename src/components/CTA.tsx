import {
  makeStyles,
  Button,
} from "@fluentui/react-components";
import { Mail24Regular, ArrowRight20Regular } from "@fluentui/react-icons";
import { useNavigate, useLocation } from "react-router-dom";

const useStyles = makeStyles({
  section: { padding: "32px 32px", backgroundColor: "#fff" },
  inner: {
    maxWidth: "1100px",
    margin: "0 auto",
    background: "var(--maq-surface-cream)",
    border: "1px solid var(--maq-red-pale)",
    borderRadius: "20px",
    padding: "32px 32px",
    color: "var(--maq-ink)",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(186, 20, 26, 0.06)",
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
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <section className={s.section} id="contact">
      <div className={s.inner}>
        <span className={s.eyebrow}>Talk to us</span>
        <h2 className={s.title}>
          Ready to move faster?
        </h2>
        <p className={s.sub}>
          Tell us where you are. We'll show you what's possible in 30 minutes —
          no obligation.
        </p>
        <div className={s.btns}>
          <Button
            appearance="primary"
            size="large"
            icon={<Mail24Regular />}
            as="a"
            href="mailto:customersuccess@maqsoftware.com?subject=Contact%20MAQ%20Software"
          >
            Contact us
          </Button>
          <Button
            appearance="outline"
            size="large"
            icon={<ArrowRight20Regular />}
            iconPosition="after"
            onClick={() => {
              if (location.pathname === "/insights/case-studies") {
                window.scrollTo({ top: 0 });
              } else {
                navigate("/insights/case-studies");
              }
            }}
          >
            Read case studies
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
