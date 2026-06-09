import DOMPurify from "dompurify";

export function sanitizeExternalHtml(html: string): string {
  return DOMPurify.sanitize(html, {
    USE_PROFILES: { html: true },
    FORBID_TAGS: [
      "script",
      "style",
      "iframe",
      "object",
      "embed",
      "form",
      "input",
      "button",
      "textarea",
      "select",
      "link",
      "meta",
    ],
    FORBID_ATTR: ["onerror", "onload", "onclick", "onmouseover", "style"],
  });
}