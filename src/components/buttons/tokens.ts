export const buttonSizeTokens = {
  small: {
    height: "32px",
    paddingInline: "14px",
    fontSize: "13px",
    borderRadius: "8px",
  },
  medium: {
    height: "36px",
    paddingInline: "16px",
    fontSize: "14px",
    borderRadius: "8px",
  },
  large: {
    height: "40px",
    paddingInline: "18px",
    fontSize: "14px",
    borderRadius: "8px",
  },
} as const;

export const buttonStateTokens = {
  transition: "background-color 180ms ease, color 180ms ease, border-color 180ms ease, box-shadow 180ms ease, transform 120ms ease",
  focusRing: "0 0 0 3px rgba(200, 16, 46, 0.22)",
} as const;

export type ButtonSize = keyof typeof buttonSizeTokens;
