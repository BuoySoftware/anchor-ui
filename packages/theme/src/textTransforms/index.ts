import { Base, base } from "./base";
import { TableAliases, tableAliases } from "./tableAliases";
import { TextAliases, textAliases } from "./textAliases";

export interface TextTransforms extends Base {
  table: TableAliases;
  text: TextAliases;
}

export const textTransforms: TextTransforms = {
  ...base,
  table: tableAliases,
  text: textAliases,
};
