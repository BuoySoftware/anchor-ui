import styled from "styled-components";

import { Flex, FlexProps } from "@buoysoftware/anchor-layout";

type Variant = "main" | "sub";

interface OwnProps {
  variant?: Variant;
}

type NavProps = FlexProps & OwnProps;

export const Nav = styled(({ variant, ...props }) => {
  return (
    <Flex
      as="nav"
      alignItems="center"
      bg="white"
      data-testid={`${variant}-navigation-bar`}
      display="flex"
      height="navigationBar"
      px="page.gutterX"
      position="relative"
      width="100%"
      borderBottom={variant === "sub" ? "1SolidSubdued" : "none"}
      {...props}
    />
  );
})<NavProps>``;

Nav.defaultProps = {
  variant: "main",
};
