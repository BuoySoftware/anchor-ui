import { Flex, FlexProps } from "@buoysoftware/anchor-layout";
import styled from "styled-components";

interface OwnProps {
  children?: React.ReactNode;
}

export type LegacyModalActionsProps = FlexProps & OwnProps;

export const LegacyModalActions = styled(({ children, ...flexProps }) => (
  <Flex
    justifyContent="flex-end"
    pt="l"
    mx="modal.gutterX"
    pb="xl"
    {...flexProps}
  >
    {children}
  </Flex>
))<LegacyModalActionsProps>``;
