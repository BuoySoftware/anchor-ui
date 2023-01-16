import { buildThemeAliases } from "../utils/buildThemeAliases";
import { base } from "./base";

export const pageAliases = buildThemeAliases(base, {
  gutterX: "xxxl",
  gutterY: "40",
  pageGutterX: "xxxl", // Deprecated use gutterX
  pageGutterY: "xxxl", // Deprecated use gutterY
});

export type PageAliases = Record<keyof typeof pageAliases, string>;
