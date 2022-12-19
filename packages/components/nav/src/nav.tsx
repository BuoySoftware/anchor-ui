import styled from "styled-components";

import { Flex, FlexProps } from "@buoysoftware/anchor-layout";

export const Nav = styled((props) => {
  return (
    <Flex
      as="nav"
      alignItems="center"
      bg="white"
      borderBottom="1SolidGrayLight"
      display="flex"
      height="navigationBar"
      px="page.gutterX"
      position="relative"
      width="100%"
      {...props}
    />
  );
})<FlexProps>``;
