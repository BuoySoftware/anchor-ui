import { Base, base } from "./base";
import { TableAliases, tableAliases } from "./tableAliases";

export interface LineHeights extends Base {
  table: TableAliases;
}

export const lineHeights = {
  ...base,
  table: tableAliases,
};
