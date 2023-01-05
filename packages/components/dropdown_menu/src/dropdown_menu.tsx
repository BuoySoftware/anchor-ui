import { useState } from "react";
import { Popover, PopoverProps } from "react-tiny-popover";

import { DropdownMenuButton } from "./dropdown_menu_button";

interface OwnProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  label: string;
}

type DropdownMenuProps = OwnProps & Partial<Omit<PopoverProps, "children">>;

const MENU_CONTAINER_OFFSET = 3;

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  children,
  label,
  icon,
  iconPosition,
  ...popoverProps
}): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = (e: React.MouseEvent): void => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <Popover
      align="start"
      padding={MENU_CONTAINER_OFFSET}
      isOpen={isOpen}
      containerStyle={{ zIndex: "3" }}
      content={<>{children}</>}
      onClickOutside={() => setIsOpen(false)}
      positions={["bottom", "top", "left", "right"]}
      {...popoverProps}
    >
      <DropdownMenuButton
        iconPosition={iconPosition}
        icon={icon}
        label={label}
        onClick={onClick}
      />
    </Popover>
  );
};
