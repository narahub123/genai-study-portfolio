import type { FontSizeToken, RoundedToken, SizeToken } from "../types";

const fontSizeMap: Record<FontSizeToken, string> = {
  xs: "var(--font-size-xs)",
  sm: "var(--font-size-sm)",
  md: "var(--font-size-md)",
  lg: "var(--font-size-lg)",
  xl: "var(--font-size-xl)",
  "2xl": "var(--font-size-2xl)",
  "3xl": "var(--font-size-3xl)",
};

const sizeMap: Record<SizeToken, string> = {
  xs: "var(--size-xs)",
  sm: "var(--size-sm)",
  md: "var(--size-md)",
  lg: "var(--size-lg)",
  xl: "var(--size-xl)",
  "2xl": "var(--size-2xl)",
  "3xl": "var(--size-3xl)",
};

const roundedMap: Record<RoundedToken, string> = {
  none: "var(--rounded-none)",
  xs: "var(--rounded-xs)",
  sm: "var(--rounded-sm)",
  md: "var(--rounded-md)",
  lg: "var(--rounded-lg)",
  xl: "var(--rounded-xl)",
  "2xl": "var(--rounded-2xl)",
  "3xl": "var(--rounded-3xl)",
  full: "var(--rounded-full)",
};

export { fontSizeMap, sizeMap, roundedMap };
