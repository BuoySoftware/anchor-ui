import { buildThemeAliases } from "../../utils/buildThemeAliases";
import { base } from "./base";

const baseTextAliases = buildThemeAliases(base, {
  badge: "semiBold",
  bodyLargeBold: "bold",
  bodyLargeMedium: "medium",
  bodyMediumBold: "bold",
  bodyMediumMedium: "medium",
  bodySmallRegular: "regular",
  bodySmallRegularBold: "bold",
  bodySmallRegularItalic: "regular",
  caption: "regular",
  headline1: "bold",
  headline2: "semiBold",
  headline3: "bold",
  overline: "semiBold",
  subtitle: "semiBold",
});

const variantAliases = buildThemeAliases(baseTextAliases, {
  badge: "badge",
  label: "caption",
  input: "subtitle",
  error: "caption",
});

export type TextAliases = Record<
  keyof typeof baseTextAliases | keyof typeof variantAliases,
  number
>;

export const textAliases: TextAliases = {
  ...baseTextAliases,
  ...variantAliases,
};
