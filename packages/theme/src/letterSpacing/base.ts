import { buildThemeAliases } from "../utils/buildThemeAliases";

const baseLetterSpacings = {
  "0.01": "0.01em",
  "0.02": "0.02em",
  "0.1": "0.1em",
  "0": "0",
  normal: "normal",
};

const baseAliases = buildThemeAliases(baseLetterSpacings, {
  button: "0.02",
  link: "0.02",
});

export const base = {
  ...baseLetterSpacings,
  ...baseAliases,
};

export type Base = Record<keyof typeof base, string>;
