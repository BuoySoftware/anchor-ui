import { Base, base } from "./base";
import { TableAliases, tableAliases } from "./tableAliases";
import { TextAliases, textAliases } from "./textAliases";

export interface FontSizes extends Base {
  table: TableAliases;
  text: TextAliases;
}

export const fontSizes: FontSizes = {
  ...base,
  table: tableAliases,
  text: textAliases,
};
