import { rem } from "polished";

import { buildThemeAliases } from "../utils/buildThemeAliases";

const baseSpace = {
  "-68": rem("-68px"),
  "-64": rem("-64px"),
  "-60": rem("-60px"),
  "-56": rem("-56px"),
  "-52": rem("-52px"),
  "-48": rem("-48px"),
  "-44": rem("-44px"),
  "-40": rem("-40px"),
  "-35": rem("-36px"),
  "-34": rem("-34px"),
  "-32": rem("-32px"),
  "-28": rem("-28px"),
  "-24": rem("-24px"),
  "-20": rem("-20px"),
  "-16": rem("-16px"),
  "-12": rem("-12px"),
  "-8": rem("-8px"),
  "-4": rem("-4px"),
  "0": rem("0px"),
  "4": rem("4px"),
  "8": rem("8px"),
  "12": rem("12px"),
  "16": rem("16px"),
  "20": rem("20px"),
  "24": rem("24px"),
  "28": rem("28px"),
  "32": rem("32px"),
  "34": rem("34px"),
  "36": rem("36px"),
  "40": rem("40px"),
  "44": rem("44px"),
  "48": rem("48px"),
  "52": rem("52px"),
  "56": rem("56px"),
  "60": rem("60px"),
  "64": rem("64px"),
  "68": rem("68px"),
};

const baseAliases = buildThemeAliases(baseSpace, {
  "-xxxl": "-32",
  "-xxl": "-28",
  "-xl": "-24",
  "-l": "-20",
  "-m": "-16",
  "-s": "-12",
  "-xs": "-8",
  "-xxs": "-4",
  xxs: "4",
  xs: "8",
  s: "12",
  m: "16",
  l: "20",
  xl: "24",
  xxl: "28",
  xxxl: "32",
});

export const base = {
  ...baseSpace,
  ...baseAliases,
};

export type Base = Record<keyof typeof base, string>;
