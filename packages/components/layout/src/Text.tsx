import styled, { css, CSSProp } from "styled-components";
import { ThemeProps, themeGet } from "@buoysoftware/anchor-theme";

import { ElementProps, elementCss } from "./Element";
import {
  textTransform,
  TextTransformProps,
} from "./custom_style_props/text_transform";

export type Variant =
  | "bodyLargeBold"
  | "bodyLargeMedium"
  | "bodyMediumBold"
  | "bodyMediumMedium"
  | "bodySmallRegular"
  | "bodySmallRegularBold"
  | "bodySmallRegularItalic"
  | "caption"
  | "error"
  | "headline1"
  | "headline2"
  | "headline3"
  | "input"
  | "label"
  | "overline"
  | "subtitle";

interface LegacyHtmlProps {
  color?: string;
  height?: string;
  width?: string;
}

interface OwnProps {
  theme: ThemeProps;
  variant?: Variant;
}

export type TextProps = ElementProps &
  LegacyHtmlProps &
  TextTransformProps &
  OwnProps;

function variantStyles({
  theme,
  fontStyle,
  letterSpacing,
  variant = "bodyMediumMedium",
  textTransform,
}: TextProps): CSSProp {
  return css`
    color: ${theme.colors.text[variant]};
    font-size: ${theme.fontSizes.text[variant]};
    font-styles: ${(fontStyle ?? themeGet(`fontStyles.text.${variant}`),
    "normal")};
    font-weight: ${theme.fontWeights.text[variant]};
    line-height: ${theme.lineHeights.text[variant]};
    text-transform: ${textTransform ??
    themeGet(`textTransforms.text.${variant}`, "none")};
    letter-spacing: ${letterSpacing
      ? themeGet(
          `letterSpacings.${String(letterSpacing)}`,
          `${String(letterSpacing)}`
        )
      : themeGet(`letterSpacings.text.${variant}`, "normal")};
  `;
}

export const textCss = css`
  font-family: ${(props) => props.theme.fonts.brand};

  ${textTransform}
  ${variantStyles}
  ${elementCss}
`;

export const Text = styled.div<TextProps>`
  ${textCss};
`;
