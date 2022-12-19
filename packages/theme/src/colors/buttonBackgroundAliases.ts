import { buildThemeAliases } from "../../utils/buildThemeAliases";
import { base } from "./base";

export const buttonBackgroundAliases = buildThemeAliases(base, {
  link: "none",
  primary: "blue",
  secondary: "none",
});

export type ButtonBackgroundAliases = Record<
  keyof typeof buttonBackgroundAliases,
  string
>;
