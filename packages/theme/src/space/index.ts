import { Base, base } from "./base";
import { ButtonAliases, buttonAliases } from "./buttonAliases";
import { FormAliases, formAliases } from "./formAliases";
import { ModalAliases, modalAliases } from "./modalAliases";
import { PageAliases, pageAliases } from "./pageAliases";
import { PanelAliases, panelAliases } from "./panelAliases";

export interface Space extends Base {
  button: ButtonAliases;
  form: FormAliases;
  modal: ModalAliases;
  page: PageAliases;
  panel: PanelAliases;
}

export const space: Space = {
  ...base,
  button: buttonAliases,
  form: formAliases,
  modal: modalAliases,
  page: pageAliases,
  panel: panelAliases,
};
