import { buildThemeAliases } from "../../utils/buildThemeAliases";
import { base } from "./base";

const baseTextAliases = buildThemeAliases(base, {
  bodySmallRegularItalic: "italic",
});

export const textAliases = {
  ...baseTextAliases,
};

export type TextAliases = Record<keyof typeof textAliases, string>;
