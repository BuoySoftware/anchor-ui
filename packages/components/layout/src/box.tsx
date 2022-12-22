import styled, { css } from "styled-components";
import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  color,
  ColorProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
} from "styled-system";

import { listStyle, ListStyleProps } from "./custom_style_props/list_style";

export type BoxStructuralProps = BorderProps &
  LayoutProps &
  ListStyleProps &
  PositionProps &
  SpaceProps;

export type BoxStylisticProps = BackgroundProps & ColorProps & ShadowProps;

export type BoxProps = BoxStructuralProps & BoxStylisticProps;

export const elementCss = css`
  box-sizing: border-box;

  ${background};
  ${border};
  ${color};
  ${layout};
  ${listStyle};
  ${position};
  ${shadow};
  ${space};
`;

export const Box = styled.div<BoxProps>`
  ${elementCss}
`;
