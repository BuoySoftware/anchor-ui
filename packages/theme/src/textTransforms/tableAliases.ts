import { buildThemeAliases } from "../utils/buildThemeAliases";
import { base } from "./base";

const defaultAliases = buildThemeAliases(base, {
  td: "none",
  th: "uppercase",
});

export const tableAliases = {
  default: defaultAliases,
  condensed: defaultAliases,
};

export type TableAliases = typeof tableAliases;
