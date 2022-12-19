import { style } from "styled-system";

interface OwnProps {
  textTransform?:
    | "capitalize"
    | "uppercase"
    | "lowercase"
    | "none"
    | "full-width"
    | "full-size-kana";
}

export type TextTransformProps = OwnProps;

export const textTransform = style({
  prop: "textTransform",
  cssProperty: "textTransform",
});
