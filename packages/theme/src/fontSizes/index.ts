import { Base, base } from "./base";
import { TableAliases, tableAliases } from "./tableAliases";

export interface FontSizes extends Base {
  table: TableAliases;
}

export const fontSizes: FontSizes = {
  ...base,
  table: tableAliases,
};
