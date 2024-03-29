import styled from "styled-components";

import { Body, BodyProps } from "@buoysoftware/anchor-typography";

interface OwnProps {
  children: React.ReactNode;
}

type DropdownMenuItemProps = OwnProps & Omit<BodyProps, "size">;

export const DropdownMenuItem = styled(Body).attrs<DropdownMenuItemProps>(
  () => ({
    "data-testid": "dropdown-menu-item",
    textDecoration: "none",
    size: "m",
    py: "xs",
    px: "m",
  })
)<DropdownMenuItemProps>`
  a {
    color: inherit;
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.background.hover};
    cursor: pointer;
  }
`;
