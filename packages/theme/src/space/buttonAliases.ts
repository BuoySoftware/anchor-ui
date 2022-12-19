import { buildThemeAliases } from "../../utils/buildThemeAliases";
import { base } from "./base";

export const buttonAliases = buildThemeAliases(base, {
  gutterX: "40",
  gutterY: "s",
  smallGutterX: "s",
  smallGutterY: "xxs",
});

export type ButtonAliases = Record<keyof typeof buttonAliases, string>;
