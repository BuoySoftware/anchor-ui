import styled from "styled-components";
import { Text, TextProps } from "./text";
import { theme } from "@buoysoftware/anchor-theme";

export type HeadingSize = "s" | "m" | "l" | "xl" | "2xl" | "3xl";

export interface HeadingProps extends TextProps {
  size: HeadingSize;
}

export const HEADING_TOKEN_MAPPING: Record<
  HeadingSize,
  keyof typeof theme.fontSizes
> = {
  "3xl": "font-size-700",
  "2xl": "font-size-600",
  xl: "font-size-400",
  l: "font-size-300",
  m: "font-size-200",
  s: "font-size-100",
};

export const Heading = styled(Text).attrs<HeadingProps>((props) => ({
  fontSize: HEADING_TOKEN_MAPPING[props.size],
  fontWeight: "600",
  lineHeight: HEADING_TOKEN_MAPPING[props.size],
}))<HeadingProps>``;
