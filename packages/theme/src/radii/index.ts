import { base, Base } from "./base";
import { ButtonAliases, buttonAliases } from "./buttonAliases";

export interface Radii extends Base {
  button: ButtonAliases;
}

export const radii: Radii = {
  ...base,
  button: buttonAliases,
};
