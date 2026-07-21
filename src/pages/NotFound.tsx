import { makeStyles } from "@fluentui/react-components";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  section: {
    minHeight: "60vh",
    padding: "96px 32px",
    backgroundColor: "var(--maq-off-white)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  inner: {
    maxWidth: "640px",
  },
  code: {
    display: "block",
    marginBottom: "12px",
    color: "var(--maq-red)",
    fontSize: "14px",
    fontWeight: 700,
    letterSpacing: "0.08em",
  },
  heading: {
    marginBottom: "16px",
    fontSize: "var(--fs-h1)",
    fontWeight: 700,
  },
  message: {
    marginBottom: "28px",
    color: "var(--maq-gray-700)",
    fontSize: "var(--fs-body)",
  },
  homeLink: {
    display: "inline-flex",
    minHeight: "44px",
    padding: "0 24px",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid var(--maq-red)",
    borderRadius: "4px",
    backgroundColor: "var(--maq-red)",
    color: "var(--maq-white)",
    fontSize: "15px",
    fontWeight: 600,
    textDecoration: "none",
    ":hover": {
      backgroundColor: "var(--maq-red-dark)",
    },
  },
});

export function NotFound() {
  const s = useStyles();

  return (
    <section className={s.section} aria-labelledby="not-found-heading">
      <div className={s.inner}>
        <span className={s.code}>404</span>
        <h1 id="not-found-heading" className={s.heading}>
          Page not found
        </h1>
        <p className={s.message}>
          The page you’re looking for doesn’t exist or may have moved.
        </p>
        <Link to="/" className={s.homeLink}>
          Return to homepage
        </Link>
      </div>
    </section>
  );
}
