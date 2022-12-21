import { Base, base } from "./base";
import { TableAliases, tableAliases } from "./tableAliases";

export interface FontWeights extends Base {
  table: TableAliases;
}

export const fontWeights: FontWeights = {
  ...base,
  table: tableAliases,
};
