import { buildThemeAliases } from "../utils/buildThemeAliases";

export const baseColors = {
  brandCoral: "#F2AA6A",
  brandPrimary: "#1C4957",

  grey100: "#101112",
  grey90: "#2B2D2F",
  grey80: "#46494D",
  grey70: "#62666A",
  grey60: "#7F8387",
  grey50: "#9CA1A5",
  grey40: "#BABEC3",
  grey30: "#D9DDE1",
  grey20: "#EBEDF0",
  grey10: "#F5F6F7",
  grey05: "#FAFBFC",
  white: "#FFFFFF",

  blue100: "#0A1935",
  blue90: "#0B2046",
  blue80: "#102C60",
  blue70: "#174291",
  blue60: "#1E54B7",
  blue50: "#276EF1",
  blue40: "#5B91F4",
  blue30: "#A0BFF9",
  blue20: "#D4E2FC",
  blue10: "#EEF3FE",

  green100: "#0F2E1D",
  green90: "#133723",
  green80: "#1C472F",
  green70: "#2B6B46",
  green60: "#2E8554",
  green50: "#3AA76D",
  green40: "#73C496",
  green30: "#AEDDC2",
  green20: "#DAF0E3",
  green10: "#F0F9F4",

  yellow100: "#392A0B",
  yellow90: "#503B12",
  yellow80: "#664D1B",
  yellow70: "#997328",
  yellow60: "#BC8B2C",
  yellow50: "#FFC043",
  yellow40: "#FFD279",
  yellow30: "#FFE3AC",
  yellow20: "#FFF2D9",
  yellow10: "#FFFAF0",

  red100: "#21130D",
  red90: "#481912",
  red80: "#6B1F14",
  red70: "#942619",
  red60: "#BF2F1D",
  red50: "#E75F4D",
  red40: "#F58C7F",
  red30: "#FCC0B6",
  red20: "#FFDED9",
  red10: "#FFEDEB",
};

export const baseAliases = buildThemeAliases(baseColors, {
  acceptableBg: "green60", // Deprecated, use background.success
  acceptableBorder: "green60", // Deprecated use border.success
  backgroundCritical: "red60",
  backgroundSuccess: "green60",
  consigneeActive: "green20",
  consigneeInactive: "grey40",
  critical: "red40",
  danger: "red40", // Deprecated, use critical
  errorBg: "red60", // Deprecated use background.critical
  successBg: "green60", // Deprecated use background.success
  textDefault: "grey100", // Deprecated use text.primary
  unacceptableBg: "red60", // Deprecated use background.ritical
  unacceptableBorder: "red60", // Deprecated use border.critical
});

export const base = {
  ...baseColors,
  ...baseAliases,
};

export type Base = Record<keyof typeof base, string>;
