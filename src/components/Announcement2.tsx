import { useState } from "react";
import { makeStyles } from "@fluentui/react-components";
import { Dismiss20Regular } from "@fluentui/react-icons";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { IconButton } from "./buttons";

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
//   const s = useStyles();
//   const [dismissed, setDismissed] = useState(
//   () => sessionStorage.getItem("announcement-dismissed") === "true"
// );
//   const dismiss = () => {
//   sessionStorage.setItem("announcement-dismissed", "true");
//   setDismissed(true);
// };
//   const { pathname } = useLocation();

//   if (dismissed || pathname === "/techcon365") return null;
  
//   return (
//     <div className={s.bar} role="status">
//       <div className={s.message}>
//        Microsoft 365 Power Platform & AI Conference in Chicago, IL.{""}
//         <RouterLink to="/techcon365" className={s.link} onClick={dismiss}>
//           Learn more
//         </RouterLink>
//       </div>
const s = useStyles();
  const [dismissed, setDismissed] = useState(false);
  const { pathname } = useLocation();

  if (dismissed || pathname === "/techcon365") return null;

  return (
    <div className={s.bar} role="status">
      <div className={s.message}>
        TechCon 365 – Chicago, IL, taking place June 17–18, 2026.{""}
        <RouterLink to="/techcon365" className={s.link}>
          Learn more
        </RouterLink>
      </div>
      <IconButton
        size="small"
        className={s.dismiss}
        iconBefore={<Dismiss20Regular />}
        ariaLabel="Dismiss announcement"
        onClick={() => setDismissed(true)}
      />
    </div>
  );
}
