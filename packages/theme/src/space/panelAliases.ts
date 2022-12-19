import { buildThemeAliases } from "../../utils/buildThemeAliases";
import { base } from "./base";

export const panelAliases = buildThemeAliases(base, {
  gutterX: "xxl",
  gutterY: "m",
});

export type PanelAliases = Record<keyof typeof panelAliases, string>;
