import styled from "styled-components";
import { Flex, FlexProps } from "@buoysoftware/anchor-layout";

interface OwnProps {
  children: React.ReactNode;
  "data-testid"?: string;
}

type ActionBarProps = OwnProps & FlexProps;

export const ActionBar = styled(Flex).attrs<ActionBarProps>(() => ({
  px: "xxxl",
  py: "xl",
  backgroundColor: "background.secondary",
}))<ActionBarProps>``;
