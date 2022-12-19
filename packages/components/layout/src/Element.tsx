import styled, { css } from "styled-components";
import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  flexGrow,
  FlexGrowProps,
  grid,
  GridProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from "styled-system";

export type ElementStructuralProps = BorderProps &
  FlexboxProps &
  FlexGrowProps &
  GridProps &
  LayoutProps &
  PositionProps &
  SpaceProps;

export type ElementStylisticProps = BackgroundProps &
  ColorProps &
  ShadowProps &
  TypographyProps;

export type ElementProps = ElementStructuralProps & ElementStylisticProps;

export const elementCss = css`
  box-sizing: border-box;

  ${background};
  ${border};
  ${color};
  ${flexbox};
  ${flexGrow}
  ${grid};
  ${layout};
  ${position};
  ${shadow};
  ${space};
  ${typography};
`;

export const Element = styled.div<ElementProps>`
  ${elementCss}
`;
