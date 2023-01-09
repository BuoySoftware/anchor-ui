import { buildThemeAliases } from "../utils/buildThemeAliases";
import { base } from "./base";

export const interactiveAliases = buildThemeAliases(base, {
  default: "blue50",
  hover: "blue60",
  pressed: "blue70",
  critical: "red60",
  criticalHover: "red70",
  criticalPressed: "red80",
});

export type InteractiveAliases = Record<
  keyof typeof interactiveAliases,
  string
>;
