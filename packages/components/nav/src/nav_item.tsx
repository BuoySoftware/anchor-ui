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
      borderBottom={active ? "3SolidBlue" : "3px solid transparent"}
      display="flex"
      height="100%"
      mx="xxl"
      py="l"
      {...props}
    >
      <Subheading size="m">{children}</Subheading>
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
