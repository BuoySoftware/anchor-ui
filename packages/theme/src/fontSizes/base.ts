import { rem } from "polished";

import { buildThemeAliases } from "../utils/buildThemeAliases";

const baseFontSizes = {
  "font-size-700": rem("40px"),
  "font-size-600": rem("32px"),
  "font-size-500": rem("28px"),
  "font-size-400": rem("24px"),
  "font-size-300": rem("20px"),
  "font-size-200": rem("16px"),
  "font-size-100": rem("14px"),
  "font-size-75": rem("12px"),
  "8": rem("8px"),
  "9": rem("9px"),
  "10": rem("10px"),
  "12": rem("12px"),
  "14": rem("14px"),
  "16": rem("16px"),
  "18": rem("18px"),
  "20": rem("20px"),
  "22": rem("22px"),
  "24": rem("24px"),
  "26": rem("26px"),
  "28": rem("28px"),
  "30": rem("30px"),
  "32": rem("32px"),
  "42": rem("42px"),
};

const baseAliases = buildThemeAliases(baseFontSizes, {
  alert: "16",
  link: "14",
  step: "14",
  subText: "12",
});

export const base = {
  ...baseFontSizes,
  ...baseAliases,
};

export type Base = Record<keyof typeof base, string>;
