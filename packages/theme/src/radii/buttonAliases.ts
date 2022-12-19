import { buildThemeAliases } from "../../utils/buildThemeAliases";
import { base } from "./base";

export const buttonAliases = buildThemeAliases(base, {
  primary: "pill",
  secondary: "pill",
  link: "none",
});

export type ButtonAliases = Record<keyof typeof buttonAliases, string>;
