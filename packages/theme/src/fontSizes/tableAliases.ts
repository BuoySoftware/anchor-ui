import { buildThemeAliases } from "../utils/buildThemeAliases";
import { base } from "./base";

const deprecatedTableAliases = buildThemeAliases(base, {
  td: "14",
  th: "12",
});

export const tableAliases = {
  ...deprecatedTableAliases,
  default: buildThemeAliases(base, {
    td: "16",
    th: "12",
  }),
  condensed: buildThemeAliases(base, {
    td: "12",
    th: "12",
  }),
};

export type TableAliases = typeof tableAliases;
