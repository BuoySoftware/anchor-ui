import styled from "styled-components";
import { Element, ElementProps } from "@buoysoftware/anchor-layout";

import {
  textTransform,
  TextTransformProps,
} from "./custom_style_props/text_transform";

export interface LegacyHtmlProps {
  color?: string;
  height?: string;
  width?: string;
}

export type TextProps = ElementProps & TextTransformProps & LegacyHtmlProps;

export const Text = styled(Element)<TextProps>`
  font-family: -apple-system, BlinkMacSystemFont, San Francisco, Segoe UI,
    Roboto, Helvetica Neue, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  ${textTransform}
`;
