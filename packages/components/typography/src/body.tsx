import styled from "styled-components";
import { Text, TextProps } from "./text";
import { theme } from "@buoysoftware/anchor-theme";

export type BodySize = "s" | "m" | "l";

export interface OwnProps {
  as?: React.ElementType;
  emphasized?: boolean;
  size: BodySize;
  strong?: boolean;
}

export type BodyProps = Omit<TextProps, "size"> & OwnProps;

export const BODY_TOKEN_MAPPING: Record<
  BodySize,
  keyof typeof theme.fontSizes
> = {
  l: "font-size-200",
  m: "font-size-100",
  s: "font-size-75",
};

export const Body = styled(Text).attrs<BodyProps>((props) => ({
  fontStyle: props.emphasized ? "italic" : "none",
  fontSize: BODY_TOKEN_MAPPING[props.size],
  fontWeight: props.strong ? "600" : "400",
  lineHeight: BODY_TOKEN_MAPPING[props.size],
}))<BodyProps>``;

Body.defaultProps = {
  as: "p",
  strong: false,
  emphasized: false,
};
