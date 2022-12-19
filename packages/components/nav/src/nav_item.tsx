import styled from "styled-components";

import { Flex, FlexProps } from "@buoysoftware/anchor-layout";
import { Subheading } from "@buoysoftware/anchor-typography";

export const NavItem = styled(({ children, ...props }) => {
  return (
    <Flex
      alignItems="center"
      display="flex"
      height="100%"
      px="xxl"
      py="l"
      {...props}
    >
      <Subheading size="m">{children}</Subheading>
    </Flex>
  );
})<FlexProps>`
  text-decoration: none;
  transition: opacity 0.1s ease-in-out;

  a {
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    opacity: 1;
  }
`;
