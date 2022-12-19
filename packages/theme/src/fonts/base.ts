import { buildThemeAliases } from "../../utils/buildThemeAliases";

const baseFonts = {
  poppins: "'Poppins', sans-serif",
};

const baseAliases = buildThemeAliases(baseFonts, {
  brand: "poppins",
});

export const base = {
  ...baseFonts,
  ...baseAliases,
};

export type Base = Record<keyof typeof base, string>;
