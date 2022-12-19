import { buildThemeAliases } from "../utils/buildThemeAliases";
import { base } from "./base";

export const pageAliases = buildThemeAliases(base, {
  pageGutterX: "xxxl",
  pageGutterY: "xxxl",
});

export type PageAliases = Record<keyof typeof pageAliases, string>;
