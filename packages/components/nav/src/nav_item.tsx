import styled from "styled-components";

import { Subheading } from "@buoysoftware/anchor-typography";
import { ItemWrapper, ItemWrapperProps } from "./item_wrapper";

interface OwnProps {
  active?: boolean;
}

export type NavItemProps = OwnProps & ItemWrapperProps;

export const NavItem = styled(({ active = false, children, ...props }: NavItemProps) => {
  return (
    <ItemWrapper active={active} {...props}>
      <Subheading
        color={active ? "interactive.default" : "text.primary"}
        size="m"
      >
        {children}
      </Subheading>
    </ItemWrapper>
  );
})``;
