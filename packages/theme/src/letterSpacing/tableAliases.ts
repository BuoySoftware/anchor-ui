import { buildThemeAliases } from "../../utils/buildThemeAliases";
import { base } from "./base";

const defaultAliases = buildThemeAliases(base, {
  td: "0",
  th: "0.1",
});

export const tableAliases = {
  default: defaultAliases,
  condensed: defaultAliases,
};

export type TableAliases = typeof tableAliases;
