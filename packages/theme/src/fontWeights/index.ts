import { Base, base } from "./base";
import { TableAliases, tableAliases } from "./tableAliases";
import { TextAliases, textAliases } from "./textAliases";

export interface FontWeights extends Base {
  table: TableAliases;
  text: TextAliases;
}

export const fontWeights: FontWeights = {
  ...base,
  table: tableAliases,
  text: textAliases,
};
