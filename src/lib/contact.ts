import { useNavigate } from "react-router-dom";

export const CONTACT_EMAIL = "CustomerSuccess@MAQSoftware.com";

/** Builds a mailto: URL for the shared contact inbox. */
export function buildContactMailto(subject?: string, body?: string): string {
  const parts: string[] = [];
  if (subject) parts.push(`subject=${encodeURIComponent(subject)}`);
  if (body) parts.push(`body=${encodeURIComponent(body)}`);
  return `mailto:${CONTACT_EMAIL}${parts.length ? `?${parts.join("&")}` : ""}`;
}

/**
 * Returns a handler that gives every contact button the same behaviour:
 * navigate to the Contact page and open the mail compose window as an
 * overlay (via window.open) so the website stays visible underneath.
 *
 * Accepts either a ready-made mailto: string or a subject (+ optional body).
 */
export function useContactAction() {
  const navigate = useNavigate();
  return (subjectOrMailto?: string, body?: string) => {
    navigate("/contact");
    const mailto = subjectOrMailto?.startsWith("mailto:")
      ? subjectOrMailto
      : buildContactMailto(subjectOrMailto, body);
    // Open in a new window (keeps the website visible underneath). Some
    // browsers leave an empty blank tab behind after launching the mail
    // handler, so close it once the mailto has been handed off.
    const win = window.open(mailto, "_blank");
    if (win) {
      setTimeout(() => win.close(), 500);
    }
  };
}
