import { buildThemeAliases } from "../utils/buildThemeAliases";
import { base } from "./base";

const deprecatedTableAliases = buildThemeAliases(base, {
  th: "semibold",
});

const defaultAliases = buildThemeAliases(base, {
  td: "regular",
  th: "semibold",
});

export const tableAliases = {
  ...deprecatedTableAliases,
  default: defaultAliases,
  condensed: defaultAliases,
};

export type TableAliases = typeof tableAliases;
