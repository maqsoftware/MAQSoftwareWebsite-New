import { useState } from "react";
import { Button, makeStyles } from "@fluentui/react-components";
import { Dismiss20Regular } from "@fluentui/react-icons";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles({
  bar: {
    backgroundColor: "var(--maq-red-pale)",
    color: "var(--maq-ink)",
    fontSize: "13px",
    padding: "8px 24px",
    letterSpacing: "0.01em",
    borderBottom: "1px solid var(--maq-red-pale)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  message: { textAlign: "center" },
  link: {
    color: "var(--maq-red)",
    marginLeft: "8px",
    fontWeight: 600,
    textDecoration: "none",
    ":hover": {
      textDecoration: "underline",
    },
  },
  strong: { color: "var(--maq-red)", fontWeight: 700 },
  dismiss: {
    position: "absolute",
    right: "max(12px, calc(50% - 620px))",
    top: "50%",
    transform: "translateY(-50%)",
    color: "var(--maq-ink)",
    minWidth: "auto",
  },
});

export function Announcement() {
  const s = useStyles();
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;
  return (
    <div className={s.bar} role="status">
      <div className={s.message}>
        MAQ Software is at TechCon 365, DATACON &amp; PWRCON
        Chicago 2026, taking place June 15–19, 2026, in Chicago, IL.{" "}
        <RouterLink to="/techcon365" className={s.link}>
          Learn more
        </RouterLink>
      </div>
      <Button
        appearance="subtle"
        size="small"
        className={s.dismiss}
        icon={<Dismiss20Regular />}
        aria-label="Dismiss announcement"
        onClick={() => setDismissed(true)}
      />
    </div>
  );
}
