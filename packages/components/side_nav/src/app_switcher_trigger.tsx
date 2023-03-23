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
>(function AppSwitcherTrigger({ children, ...props }, ref) {
  return (
    <StyledAppSwitcherTrigger as="button" size="m" {...props} ref={ref}>
      {children}
      <DropdownArrow />
    </StyledAppSwitcherTrigger>
  );
});
