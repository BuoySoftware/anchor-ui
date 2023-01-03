import styled from "styled-components";
import { Flex, FlexProps } from "@buoysoftware/anchor-layout";

import { NavItem } from "./nav_item";

export const NavItemsContainer = styled((props) => (
  <Flex
    as="ul"
    alignItems="center"
    list-style="none"
    height="100%"
    display="flex"
    {...props}
  />
))<FlexProps>`
  &:hover {
    ${NavItem}:not(:hover) {
      opacity: 0.7;
    }
  }
`;
