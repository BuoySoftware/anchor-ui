import { buildThemeAliases } from "../../utils/buildThemeAliases";
import { base } from "./base";

const baseTextAliases = buildThemeAliases(base, {
  badge: "navy",
  error: "magenta",
  input: "textDefault",
  label: "textDefault",
  bodyLargeBold: "textDefault",
  bodyLargeMedium: "textDefault",
  bodyMediumBold: "textDefault",
  bodyMediumMedium: "textDefault",
  bodySmallRegular: "textDefault",
  bodySmallRegularBold: "textDefault",
  bodySmallRegularItalic: "textDefault",
  caption: "textDefault",
  headline1: "textDefault",
  headline2: "textDefault",
  headline3: "textDefault",
  overline: "textDefault",
  subtitle: "textDefault",
});

export const textAliases = {
  ...baseTextAliases,
};

export type TextAliases = Record<keyof typeof textAliases, string>;
