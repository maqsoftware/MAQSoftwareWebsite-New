import {
  createLightTheme,
  type BrandVariants,
  type Theme,
} from "@fluentui/react-components";

// MAQ red brand ramp — aligned with maqsoftware.com (primary brand color #BA141A).
const maqBrand: BrandVariants = {
  10: "#050000",
  20: "#260507",
  30: "#430A0D",
  40: "#5F0E12",
  50: "#7B1216",
  60: "#94171B",
  70: "#A8191E",
  80: "#BA141A", // logo / primary brand red
  90: "#C8262C",
  100: "#D43E43",
  110: "#DE5559",
  120: "#E76B6F",
  130: "#EE8285",
  140: "#F4A0A3",
  150: "#F9C0C2",
  160: "#FCE0E1",
};

export const maqLightTheme: Theme = {
  ...createLightTheme(maqBrand),
  fontFamilyBase:
    "Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif",
};
