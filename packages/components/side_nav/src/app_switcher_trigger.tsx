import { forwardRef } from "react";
import { DropdownArrow } from "@buoysoftware/anchor-dropdown-menu";
import { StyledAppSwitcherTrigger } from "./styled_app_switcher_trigger";

interface OwnProps {
  children: React.ReactNode;
}

type AppSwitcherTriggerProps = OwnProps;

export const AppSwitcherTrigger = forwardRef<
  HTMLButtonElement,
  AppSwitcherTriggerProps
>(({ children, ...props }, ref) => (
  <StyledAppSwitcherTrigger as="button" size="m" {...props} ref={ref}>
    {children}
    <DropdownArrow />
  </StyledAppSwitcherTrigger>
));

AppSwitcherTrigger.displayName = "AppSwitcherTrigger";
