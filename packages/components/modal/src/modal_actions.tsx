import { Box, BoxProps } from "@buoysoftware/anchor-layout";
import styled from "styled-components";

interface OwnProps {
  children?: React.ReactNode;
}

export type ModalActionsProps = BoxProps & OwnProps;

const ModalActions = styled(({ children, ...boxProps }) => (
  <Box
    borderTop="1SolidGray"
    display="flex"
    justifyContent="flex-end"
    pt="l"
    mx="modal.gutterX"
    pb="xxl"
    {...boxProps}
  >
    {children}
  </Box>
))<ModalActionsProps>``;

export default ModalActions;
