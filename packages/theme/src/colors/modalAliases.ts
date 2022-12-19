import { buildThemeAliases } from "../../utils/buildThemeAliases";
import { base } from "./base";

export const modalAliases = buildThemeAliases(base, {
  background: "navyTransparent",
});

export type ModalAliases = Record<keyof typeof modalAliases, string>;
