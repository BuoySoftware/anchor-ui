import { buildThemeAliases } from "../utils/buildThemeAliases";
import { base } from "./base";

export const buttonAliases = buildThemeAliases(base, {
  primary: "none",
  secondary: "1SolidNavy",
  link: "none",
});

export type ButtonAliases = Record<keyof typeof buttonAliases, string>;
