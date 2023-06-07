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
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Noto Color Emoji";

  ${typography}
  ${textTransform}
  ${textDecoration}
`;

Text.defaultProps = {
  color: "text.primary",
};
