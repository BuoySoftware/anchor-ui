import { Children } from "react";
import { remToPx, stripUnit } from "polished";
import { Box } from "@buoysoftware/anchor-layout";
import {
  DropdownMenuItem,
  DropdownMenuList,
  DropdownMenuPopover,
} from "@buoysoftware/anchor-dropdown-menu";
import { useTheme } from "@buoysoftware/anchor-theme";

import { AppSwitcherTrigger } from "./app_switcher_trigger";

interface OwnProps {
  children: React.ReactNode;
  triggerLabel: string;
}

type SideNavAppSwitcherProps = OwnProps;

export const SideNavAppSwitcher: React.FC<SideNavAppSwitcherProps> = ({
  children,
  triggerLabel,
}) => {
  const { space } = useTheme();
  const inset = stripUnit(remToPx(space.sideNav));

  return (
    <Box gridArea="side-nav-app-switcher">
      <DropdownMenuPopover
        boundaryInset={inset as number}
        containerStyle={{
          marginTop: space["-sideNav"],
        }}
        trigger={<AppSwitcherTrigger>{triggerLabel}</AppSwitcherTrigger>}
      >
        <DropdownMenuList>
          {Children.map(children, (child) => (
            <DropdownMenuItem size="s">{child}</DropdownMenuItem>
          ))}
        </DropdownMenuList>
      </DropdownMenuPopover>
    </Box>
  );
};
