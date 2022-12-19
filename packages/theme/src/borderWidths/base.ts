import { rem } from "polished";

import { buildThemeAliases } from "../utils/buildThemeAliases";

const baseBorderWidths = {
  0: rem("0px"),
  1: rem("1px"),
  2: rem("2px"),
  3: rem("3px"),
  4: rem("4px"),
};

const baseAliases = buildThemeAliases(baseBorderWidths, {
  tab: 4,
  thead: 1,
  tr: 1,
});

export const base = {
  ...baseBorderWidths,
  ...baseAliases,
};

export type Base = Record<keyof typeof base, string>;
