import { buildThemeAliases } from "../utils/buildThemeAliases";
import { base } from "./base";

export const borderAliases = buildThemeAliases(base, {
  critical: "red40",
  default: "grey60",
  focus: "blue40",
  hover: "grey80",
  subdued: "grey40",
  success: "green40",
});

export type BorderAliases = Record<keyof typeof borderAliases, string>;
