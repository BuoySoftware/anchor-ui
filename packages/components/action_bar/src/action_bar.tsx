import styled from "styled-components";
import { Flex, FlexProps } from "@buoysoftware/anchor-layout";

interface OwnProps {
  children: React.ReactNode;
}

type ActionBarProps = OwnProps & FlexProps;

export const ActionBar = styled(Flex).attrs<ActionBarProps>(() => ({
  px: "xxxl",
  py: "xl",
  backgroundColor: "background.secondary",
}))<ActionBarProps>``;
