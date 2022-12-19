import { Base, base } from "./base";
import { ButtonAliases, buttonAliases } from "./buttonAliases";

export interface Borders extends Base {
  button: ButtonAliases;
}

export const borders: Borders = {
  ...base,
  button: buttonAliases,
};
