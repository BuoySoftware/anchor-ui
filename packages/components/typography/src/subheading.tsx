import styled from "styled-components";
import { Text, TextProps } from "./text";
import { theme } from "@buoysoftware/anchor-theme";

export type SubheadingSize = "s" | "m";

interface OwnProps {
  size: SubheadingSize;
}

export type SubheadingProps = TextProps & OwnProps;

export const SUBHEADING_TOKEN_MAPPING: Record<
  SubheadingSize,
  keyof typeof theme.fontSizes
> = {
  m: "font-size-100",
  s: "font-size-75",
};

export const Subheading = styled(Text).attrs<OwnProps>((props) => ({
  fontSize: SUBHEADING_TOKEN_MAPPING[props.size],
  fontWeight: "700",
  lineHeight: SUBHEADING_TOKEN_MAPPING[props.size],
  textTransform: "uppercase",
  letterSpacing: "0.1rem",
}))<SubheadingProps>``;
