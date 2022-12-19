import { buildThemeAliases } from "../../utils/buildThemeAliases";
import { base } from "./base";

const deprecatedTableAliases = buildThemeAliases(base, {
  th: "600",
});

const defaultAliases = buildThemeAliases(base, {
  td: "500",
  th: "600",
});

export const tableAliases = {
  ...deprecatedTableAliases,
  default: defaultAliases,
  condensed: defaultAliases,
};

export type TableAliases = typeof tableAliases;
