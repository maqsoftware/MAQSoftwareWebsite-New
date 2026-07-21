import DOMPurify from "dompurify";

// Force every link that opens in a new tab to also carry
// rel="noopener noreferrer" so the newly opened page cannot reach back and
// tamper with our tab (reverse tabnabbing).
let hookRegistered = false;
function ensureLinkHook() {
  if (hookRegistered) return;
  DOMPurify.addHook("afterSanitizeAttributes", (node) => {
    if (node.tagName === "A" && node.getAttribute("target") === "_blank") {
      node.setAttribute("rel", "noopener noreferrer");
    }
  });
  hookRegistered = true;
}

export function sanitizeExternalHtml(html: string): string {
  ensureLinkHook();
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