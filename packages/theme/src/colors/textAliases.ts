import { buildThemeAliases } from "../utils/buildThemeAliases";
import { base } from "./base";

export const textAliases = buildThemeAliases(base, {
  primary: "grey100",
  secondary: "grey70",
  tertiary: "grey50",
  link: "blue50",
  linkHover: "blue60",
  linkPressed: "blue70",
});

export type TextAliases = Record<keyof typeof textAliases, string>;
