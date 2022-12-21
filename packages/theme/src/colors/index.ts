import { base, Base } from "./base";
import {
  buttonBackgroundAliases,
  ButtonBackgroundAliases,
} from "./buttonBackgroundAliases";
import { buttonTextAliases, ButtonTextAliases } from "./buttonTextAliases";
import { calendarAliases, CalendarAliases } from "./calendarAliases";
import { inputAliases, InputAliases } from "./inputAliases";
import { modalAliases, ModalAliases } from "./modalAliases";
import { tableAliases, TableAliases } from "./tableAliases";
import { tdAliases, TdAliases } from "./tdAliases";

export interface Colors extends Base {
  buttonBackground: ButtonBackgroundAliases;
  buttonText: ButtonTextAliases;
  calendar: CalendarAliases;
  input: InputAliases;
  modal: ModalAliases;
  table: TableAliases;
  td: TdAliases;
}

export const colors: Colors = {
  ...base,
  buttonBackground: buttonBackgroundAliases,
  buttonText: buttonTextAliases,
  calendar: calendarAliases,
  input: inputAliases,
  modal: modalAliases,
  table: tableAliases,
  td: tdAliases,
};
