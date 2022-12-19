import { buildThemeAliases } from "../../utils/buildThemeAliases";
import { base } from "./base";

export const buttonTextAliases = buildThemeAliases(base, {
  link: "blue",
  primary: "white",
  secondary: "textDefault",
});

export type ButtonTextAliases = Record<keyof typeof buttonTextAliases, string>;
