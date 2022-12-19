import { base, Base } from "./base";
import { textAliases, TextAliases } from "./textAliases";

export interface FontStyles extends Base {
  text: TextAliases;
}

export const fontStyles: FontStyles = {
  ...base,
  text: textAliases,
};
