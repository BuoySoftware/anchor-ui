import { Base, base } from "./base";
import { TableAliases, tableAliases } from "./tableAliases";
import { TextAliases, textAliases } from "./textAliases";

export interface LetterSpacings extends Base {
  table: TableAliases;
  text: TextAliases;
}

export const letterSpacings: LetterSpacings = {
  ...base,
  table: tableAliases,
  text: textAliases,
};
