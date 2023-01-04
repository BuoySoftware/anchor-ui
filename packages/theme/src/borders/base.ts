import { buildThemeAliases } from "../utils/buildThemeAliases";
import { colors } from "../colors";

const baseBorders = {
  none: "none",
  "1SolidCritical": `1px solid ${colors.border.critical}`,
  "1SolidDefault": `1px solid ${colors.border.default}`,
  "1SolidSubdued": `1px solid ${colors.border.subdued}`,
  "1SolidSuccess": `1px solid ${colors.border.success}`,
  "1SolidWhite": `1px solid ${colors.white}`,
  "2SolidSubdued": `2px solid ${colors.border.subdued}`,
};

const baseAliases = buildThemeAliases(baseBorders, {
  critical: "1SolidCritical",
  error: "1SolidCritical", // Deprecated use critical
  success: "1SolidSuccess",
});

export const base = {
  ...baseBorders,
  ...baseAliases,
};

export type Base = Record<keyof typeof base, string>;
