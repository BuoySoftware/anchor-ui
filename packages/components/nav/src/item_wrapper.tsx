import styled from "styled-components";

import { Flex, FlexProps } from "@buoysoftware/anchor-layout";

interface OwnProps {
  active?: boolean;
}

export type ItemWrapperProps = OwnProps & FlexProps;

export const ItemWrapper = styled(({ active = false, ...props }) => {
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
      as="li"
      {...props}
    />
  );
})<ItemWrapperProps>`
  text-decoration: none;
  transition: opacity 0.1s ease-in-out, border-color 0.3s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;
