import { base, Base } from "./base";
import { backgroundAliases, BackgroundAliases } from "./backgroundAliases";
import { borderAliases, BorderAliases } from "./borderAliases";
import { interactiveAliases, InteractiveAliases } from "./interactiveAliases";
import { textAliases, TextAliases } from "./textAliases";

export interface Colors extends Base {
  background: BackgroundAliases;
  border: BorderAliases;
  text: TextAliases;
  interactive: InteractiveAliases;
}

export const colors: Colors = {
  ...base,
  background: backgroundAliases,
  border: borderAliases,
  text: textAliases,
  interactive: interactiveAliases,
};
