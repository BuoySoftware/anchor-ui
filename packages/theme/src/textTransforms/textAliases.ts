import { buildThemeAliases } from "../../utils/buildThemeAliases";
import { base } from "./base";

export const textAliases = buildThemeAliases(base, {
  badge: "uppercase",
  bodyLargeBold: "none",
  bodyLargeMedium: "none",
  bodyMediumBold: "none",
  bodyMediumMedium: "none",
  bodySmallRegular: "none",
  bodySmallRegularItalic: "none",
  caption: "none",
  error: "none",
  headline1: "none",
  headline2: "none",
  headline3: "uppercase",
  input: "none",
  label: "none",
  overline: "uppercase",
  subtitle: "none",
});

export type TextAliases = Record<keyof typeof textAliases, string>;
