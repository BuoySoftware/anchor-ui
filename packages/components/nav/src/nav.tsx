import styled from "styled-components";

import { Flex, FlexProps } from "@buoysoftware/anchor-layout";

type Variant = "main" | "sub" | "tabs";

interface OwnProps {
  variant?: Variant;
}

export type NavProps = FlexProps & OwnProps;

export const Nav = styled(({ variant, ...props }) => {
  return (
    <Flex
      as="nav"
      alignItems="center"
      bg="white"
      data-testid={`${variant}-navigation-bar`}
      display="flex"
      height={variant === "tabs" ? "tabBar" : "navigationBar"}
      px={variant === "tabs" ? undefined : "page.gutterX"}
      position="relative"
      width="100%"
      borderBottom={variant === "main" ? "none" : "1SolidSubdued"}
      {...props}
    />
  );
})<NavProps>``;

Nav.defaultProps = {
  variant: "main",
};
