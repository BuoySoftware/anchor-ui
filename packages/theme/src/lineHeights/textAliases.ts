import { buildThemeAliases } from "../../utils/buildThemeAliases";
import { base } from "./base";

const baseTextAliases = buildThemeAliases(base, {
  badge: "19",
  bodyLargeBold: "24",
  bodyLargeMedium: "24",
  bodyMediumBold: "21",
  bodyMediumMedium: "21",
  bodySmallRegular: "18",
  bodySmallRegularBold: "18",
  bodySmallRegularItalic: "18",
  caption: "18",
  headline1: "30",
  headline2: "27",
  headline3: "21",
  overline: "18",
  subtitle: "21",
});

const variantAliases = buildThemeAliases(baseTextAliases, {
  badge: "badge",
  input: "bodyMediumMedium",
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
