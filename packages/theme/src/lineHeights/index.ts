import { Base, base } from "./base";
import { TableAliases, tableAliases } from "./tableAliases";
import { TextAliases, textAliases } from "./textAliases";

export interface LineHeights extends Base {
  table: TableAliases;
  text: TextAliases;
}

export const lineHeights = {
  ...base,
  table: tableAliases,
  text: textAliases,
};
