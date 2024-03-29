import kebabCase from "lodash/kebabCase";
import { Button } from "@buoysoftware/anchor-button";
import { useState } from "react";
import { DropdownArrow } from "./dropdown_arrow";

import {
  DropdownMenuPopover,
  DropdownMenuPopoverProps,
} from "./dropdown_menu_popover";

interface OwnProps {
  children: React.ReactNode;
  "data-testid"?: string;
  label: string;
}

type DropdownMenuProps = OwnProps &
  Partial<Omit<DropdownMenuPopoverProps, "children">>;

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  children,
  "data-testid": testId,
  label,
  ...popoverProps
}): React.ReactElement => {
  const id = testId || kebabCase(`dropdown-menu-${label}`);

  const [isOpen, setIsOpen] = useState(false);

  const onClick = (e: React.MouseEvent): void => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <DropdownMenuPopover
      trigger={
        <Button
          data-testid={id}
          icon={<DropdownArrow />}
          iconPosition="right"
          onClick={onClick}
          size="l"
        >
          {label}
        </Button>
      }
      {...popoverProps}
    >
      {children}
    </DropdownMenuPopover>
  );
};
