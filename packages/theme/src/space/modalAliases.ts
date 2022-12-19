import { buildThemeAliases } from "../utils/buildThemeAliases";
import { base } from "./base";

export const modalAliases = buildThemeAliases(base, {
  gutterX: "xxxl",
  gutterT: "68",
});

export type ModalAliases = Record<keyof typeof modalAliases, string>;
