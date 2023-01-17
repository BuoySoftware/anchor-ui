import styled, { css } from "styled-components";
import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  color,
  ColorProps,
  flex,
  FlexProps,
  flexGrow,
  FlexGrowProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
} from "styled-system";

import { gap, GapProps } from "./custom_style_props/gap";
import { listStyle, ListStyleProps } from "./custom_style_props/list_style";

export interface BoxProps
  extends BorderProps,
    BackgroundProps,
    BackgroundProps,
    ColorProps,
    ColorProps,
    FlexGrowProps,
    FlexProps,
    GapProps,
    LayoutProps,
    ListStyleProps,
    PositionProps,
    ShadowProps,
    ShadowProps,
    SpaceProps {
  as?: React.ElementType;
  children?: React.ReactNode;
}

export const boxCss = css`
  box-sizing: border-box;

  ${background};
  ${border};
  ${color};
  ${flex};
  ${flexGrow};
  ${gap};
  ${layout};
  ${listStyle};
  ${position};
  ${shadow};
  ${space};
`;

export const Box = styled.div<BoxProps>`
  ${boxCss}
`;
