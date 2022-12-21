import { rem } from "polished";
import { buildThemeAliases } from "../utils/buildThemeAliases";

const baseLineHeights = {
  "font-size-700": rem("48px"),
  "font-size-600": rem("40px"),
  "font-size-500": rem("32px"),
  "font-size-400": rem("28px"),
  "font-size-300": rem("24px"),
  "font-size-200": rem("20px"),
  "font-size-100": rem("16px"),
  "font-size-75": rem("16px"),
  "9": rem("9px"),
  "11": rem("11px"),
  "13": rem("13px"),
  "15": rem("15px"),
  "17": rem("17px"),
  "18": rem("18px"),
  "19": rem("19px"),
  "21": rem("21px"),
  "23": rem("23px"),
  "24": rem("24px"),
  "25": rem("25px"),
  "27": rem("27px"),
  "29": rem("29px"),
  "30": rem("30px"),
  "31": rem("31px"),
  "33": rem("33px"),
  "35": rem("35px"),
  "37": rem("37px"),
  "39": rem("39px"),
  "41": rem("41px"),
  "43": rem("43px"),
  "45": rem("45px"),
  "47": rem("47px"),
  "49": rem("49px"),
};

const baseAliases = buildThemeAliases(baseLineHeights, {
  alert: "21",
  body: "17",
  button: "21",
  link: "21",
  step: "19",
});

export const base = {
  ...baseLineHeights,
  ...baseAliases,
};

export type Base = Record<keyof typeof base, string>;
