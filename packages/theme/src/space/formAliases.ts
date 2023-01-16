import { buildThemeAliases } from "../utils/buildThemeAliases";
import { base } from "./base";

export const formAliases = buildThemeAliases(base, {
  fieldGap: "xl",
  labelGap: "xxs",
});

export type FormAliases = Record<keyof typeof formAliases, string>;
