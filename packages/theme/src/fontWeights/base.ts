import { buildThemeAliases } from "../utils/buildThemeAliases";

const baseFontWeights = {
  "400": 400,
  "600": 600,
  "700": 700,
};

const baseAliases = buildThemeAliases(baseFontWeights, {
  regular: "400",
  semibold: "600",
  bold: "700",
});

export const base = {
  ...baseFontWeights,
  ...baseAliases,
};

export type Base = Record<keyof typeof base, number>;
