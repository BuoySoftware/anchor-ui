import { buildThemeAliases } from "../../utils/buildThemeAliases";
import { base } from "./base";

export const deprecatedTableAliases = buildThemeAliases(base, {
  td: "23",
  th: "19",
});

export const tableAliases = {
  ...deprecatedTableAliases,
  default: buildThemeAliases(base, {
    td: "25",
    th: "19",
  }),
  condensed: buildThemeAliases(base, {
    td: "19",
    th: "19",
  }),
};

export type TableAliases = typeof tableAliases;
