import styled from "styled-components";
import { Flex, FlexProps } from "@buoysoftware/anchor-layout";

export const StickyFooter = styled(Flex).attrs(() => ({
  height: "stickyFooter",
  position: "fixed",
  borderTop: "1SolidSubdued",
  px: "xxxl",
  bg: "white",
  left: 0,
  right: 0,
  bottom: 0,
}))<FlexProps>``;

StickyFooter.defaultProps = {
  gap: "m",
  zIndex: 2,
  alignItems: "center",
  justifyContent: "flex-end",
};
