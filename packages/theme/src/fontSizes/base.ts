import { rem } from "polished";

export const base = {
  "font-size-700": rem("40px"),
  "font-size-600": rem("32px"),
  "font-size-500": rem("28px"),
  "font-size-400": rem("24px"),
  "font-size-300": rem("20px"),
  "font-size-200": rem("16px"),
  "font-size-100": rem("14px"),
  "font-size-75": rem("12px"),
};

export type Base = Record<keyof typeof base, string>;
