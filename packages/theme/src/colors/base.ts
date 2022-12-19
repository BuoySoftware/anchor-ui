import { rgba } from "polished";

import { buildThemeAliases } from "../utils/buildThemeAliases";

const NAVY = "#0B1D2D";

const baseColors = {
  amber: "#FFCB69",
  aqua: "#63B7CA",
  black: "#000000",
  blue: "#4361EE",
  blueLight: "#ECF0FC",
  charcoal: "#979DAC",
  clementine: "#FF9D6C",
  cloud: "#F2F2F2",
  coral: "#EA8689",
  gray: "#9B9B9B",
  grayLight: "#E2E2E2",
  green: "#8DD4BD",
  greenLight: "#EFFAF6",
  greenTransparent: "rgba(95, 201, 165, 0.1)",
  magenta: "#9E0059",
  magentaLight: "#EFD6E4",
  mauve: "#9C89B8",
  navy: NAVY,
  navyTransparent: rgba(NAVY, 0.8),
  none: "none",
  offWhite: "#F9F9F9",
  olive: "#AABA78",
  rose: "#BF5F7D",
  rust: "#C87D57",
  slate: "#7BA0C4",
  taupe: "#DAB38D",
  teal: "#509EA7",
  white: "#FFFFFF",
};

const baseAliases = buildThemeAliases(baseColors, {
  acceptableBg: "greenLight",
  acceptableBorder: "green",
  consigneeActive: "olive",
  consigneeInactive: "grayLight",
  danger: "magenta",
  donorStatusActive: "blue",
  donorStatusDeferred: "magenta",
  donorStatusDeferredPermanently: "magenta",
  donorStatusInactive: "gray",
  donorStatusNew: "navy",
  sortSorted: "black",
  sortUnsorted: "gray",
  tab: "navy",
  textDefault: "navy",
  errorBg: "magentaLight",
  successBg: "greenLight",
  unacceptableBg: "magentaLight",
  unacceptableBorder: "magenta",
});

export const base = {
  ...baseColors,
  ...baseAliases,
};

export type Base = Record<keyof typeof base, string>;
