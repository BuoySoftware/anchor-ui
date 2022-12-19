import { buildThemeAliases } from "../../utils/buildThemeAliases";
import { base } from "./base";

export const calendarAliases = buildThemeAliases(base, {
  background: "grayLight",
  border: "grayLight",
  restrictionStripe: "gray",
  text: "navy",
});

export type CalendarAliases = Record<keyof typeof calendarAliases, string>;
