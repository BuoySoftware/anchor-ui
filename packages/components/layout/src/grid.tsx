import styled from "styled-components";
import { Box, BoxProps } from "@buoysoftware/anchor-layout";
import { grid, GridProps as StyledGridProps } from "styled-system";

export type GridProps = BoxProps & StyledGridProps;

export const Grid = styled(Box).attrs<GridProps>(() => ({
  display: "grid",
}))<GridProps>`
  ${grid}
`;
