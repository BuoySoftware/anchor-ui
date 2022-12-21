import { Base, base } from "./base";
import { TableAliases, tableAliases } from "./tableAliases";

export interface TextTransforms extends Base {
  table: TableAliases;
}

export const textTransforms: TextTransforms = {
  ...base,
  table: tableAliases,
};
