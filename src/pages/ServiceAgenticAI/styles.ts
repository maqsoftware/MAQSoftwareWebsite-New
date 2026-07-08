import type { CSSProperties } from "react";

export const heroVisualShellStyle: CSSProperties = {
  background: "var(--maq-surface-cream)",
  border: "1px solid var(--maq-red-pale)",
  borderRadius: "16px",
  padding: "20px",
  boxShadow: "0 12px 32px rgba(15, 23, 42, 0.06)",
};

export const heroVisualImageStyle: CSSProperties = {
  width: "100%",
  aspectRatio: "16 / 10",
  objectFit: "contain",
  display: "block",
  borderRadius: "10px",
};
