import styled from "styled-components";

import { Body, BodyProps } from "@buoysoftware/anchor-typography";

interface OwnProps {
  children: React.ReactNode;
}

type DropdownMenuItemProps = OwnProps & BodyProps;

export const DropdownMenuItem = styled(Body).attrs<DropdownMenuItemProps>(
  () => ({
    textDecoration: "none",
    size: "m",
    py: "xs",
    px: "m",
  })
)<DropdownMenuItemProps>`
  &:hover {
    background-color: ${(props) => props.theme.colors.background.hover};
    cursor: pointer;
  }
`;
