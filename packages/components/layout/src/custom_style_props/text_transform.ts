import { style } from "styled-system";

export interface TextTransformProps {
  textTransform?:
    | "capitalize"
    | "uppercase"
    | "lowercase"
    | "none"
    | "full-width"
    | "full-size-kana";
}

export const textTransform = style({
  prop: "textTransform",
  cssProperty: "textTransform",
});
