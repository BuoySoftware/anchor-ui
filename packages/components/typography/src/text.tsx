import styled from "styled-components";
import { Box, BoxProps } from "@buoysoftware/anchor-layout";
import { typography, TypographyProps } from "styled-system";

import {
  textTransform,
  TextTransformProps,
} from "./custom_style_props/text_transform";

import {
  textDecoration,
  TextDecorationProps,
} from "./custom_style_props/text_decoration";

export interface LegacyHtmlProps {
  color?: string;
  height?: string;
  width?: string;
}

export type TextProps = BoxProps &
  TypographyProps &
  TextTransformProps &
  TextDecorationProps &
  LegacyHtmlProps;

export const Text = styled(Box)<TextProps>`
  font-family: -apple-system, BlinkMacSystemFont, San Francisco, Segoe UI,
    Roboto, Helvetica Neue, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  ${typography}
  ${textTransform}
  ${textDecoration}
`;

Text.defaultProps = {
  color: "text.primary",
};
