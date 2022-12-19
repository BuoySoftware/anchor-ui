import { buildThemeAliases } from "../../utils/buildThemeAliases";
import { base } from "./base";

export const textAliases = buildThemeAliases(base, {
  bodyLargeBold: "0.01",
  bodyLargeMedium: "0.01",
  bodyMediumBold: "0.01",
  bodyMediumMedium: "0.01",
  bodySmallRegular: "0.01",
  bodySmallRegularItalic: "0.01",
  caption: "0.01",
  error: "normal",
  headline1: "normal",
  headline2: "normal",
  headline3: "0.01",
  input: "normal",
  label: "normal",
  overline: "0.1",
  subtitle: "0.02",
});

export type TextAliases = Record<keyof typeof textAliases, string>;
