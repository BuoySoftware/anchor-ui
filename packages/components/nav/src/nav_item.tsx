import styled from "styled-components";

import { Flex, FlexProps } from "@buoysoftware/anchor-layout";
import { Subheading } from "@buoysoftware/anchor-typography";

interface OwnProps {
  active?: boolean;
}

type NavItemProps = OwnProps & FlexProps;

export const NavItem = styled(({ active = false, children, ...props }) => {
  return (
    <Flex
      alignItems="center"
      borderBottomStyle="solid"
      borderBottomWidth="3px"
      borderBottomColor={active ? "interactive.default" : "transparent"}
      display="flex"
      height="100%"
      mx="xxl"
      py="l"
      {...props}
    >
      <Subheading
        color={active ? "interactive.default" : "text.primary"}
        size="m"
      >
        {children}
      </Subheading>
    </Flex>
  );
})<NavItemProps>`
  text-decoration: none;
  transition: opacity 0.1s ease-in-out, border-color 0.3s ease-in-out;

  a {
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    opacity: 1;
  }
`;
