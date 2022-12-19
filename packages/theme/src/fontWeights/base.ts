import { buildThemeAliases } from "../utils/buildThemeAliases";

const baseFontWeights = {
  "400": 400,
  "500": 500,
  "600": 600,
  "700": 700,
};

const baseAliases = buildThemeAliases(baseFontWeights, {
  bold: "700",
  button: "600",
  link: "600",
  medium: "500",
  menu: "600",
  regular: "400",
  semiBold: "600",
});

export const base = {
  ...baseFontWeights,
  ...baseAliases,
};

export type Base = Record<keyof typeof base, number>;
