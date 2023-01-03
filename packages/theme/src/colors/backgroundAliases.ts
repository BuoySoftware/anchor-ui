import { buildThemeAliases } from "../utils/buildThemeAliases";
import { base } from "./base";

export const backgroundAliases = buildThemeAliases(base, {
  default: "grey60",
  hover: "grey10",
  pressed: "grey30",
  disabled: "grey05",
  secondary: "grey10",
  secondaryHover: "grey10",
  secondaryPressed: "grey30",
  selected: "blue50",
  selectedSubdued: "blue20",
  success: "green60",
  successSubdued: "green20",
  warning: "yellow50",
  warningSubdued: "yellow20",
  critical: "red60",
  criticalSubdued: "red20",
});

export type BackgroundAliases = Record<keyof typeof backgroundAliases, string>;
