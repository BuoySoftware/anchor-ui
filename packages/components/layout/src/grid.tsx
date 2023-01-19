import styled from "styled-components";
import { Box, BoxProps } from "@buoysoftware/anchor-layout";

export type GridProps = BoxProps;

export const Grid = styled(Box).attrs<GridProps>(() => ({
  display: "grid",
}))<GridProps>``;
