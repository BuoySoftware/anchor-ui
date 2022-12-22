import styled from "styled-components";
import { Box, BoxProps } from "@buoysoftware/anchor-layout";
import { flexbox, FlexboxProps } from "styled-system";

export type FlexProps = BoxProps & FlexboxProps;

export const Flex = styled(Box).attrs<FlexProps>(() => ({
  display: "flex",
}))<FlexProps>`
  ${flexbox}
`;
