import { buildThemeAliases } from "../utils/buildThemeAliases";
import { base } from "./base";

const baseTextAliases = buildThemeAliases(base, {
  badge: "9",
  bodyLargeBold: "16",
  bodyLargeMedium: "16",
  bodyMediumBold: "14",
  bodyMediumMedium: "14",
  bodySmallRegular: "12",
  bodySmallRegularBold: "12",
  bodySmallRegularItalic: "12",
  caption: "12",
  headline1: "20",
  headline2: "18",
  headline3: "14",
  overline: "12",
  subtitle: "14",
});

const variantAliases = buildThemeAliases(baseTextAliases, {
  badge: "badge",
  button: "overline",
  input: "subtitle",
  error: "caption",
  label: "caption",
});

export type TextAliases = Record<
  keyof typeof baseTextAliases | keyof typeof variantAliases,
  string
>;

export const textAliases: TextAliases = {
  ...baseTextAliases,
  ...variantAliases,
};
