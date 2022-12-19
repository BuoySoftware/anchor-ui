import { buildThemeAliases } from "../utils/buildThemeAliases";
import { base } from "./base";

export const tdAliases = buildThemeAliases(base, {
  default: "textDefault",
});

export type TdAliases = Record<keyof typeof tdAliases, string>;
