import { buildThemeAliases } from "../utils/buildThemeAliases";
import { base } from "./base";

export const inputAliases = buildThemeAliases(base, {
  bg: "white",
  border: "gray",
  default: "textDefault",
  disabledBg: "grayLight",
  label: "textDefault",
  notice: "navy",
  placeholder: "gray",
  warning: "magenta",
});

export type InputAliases = Record<keyof typeof inputAliases, string>;
