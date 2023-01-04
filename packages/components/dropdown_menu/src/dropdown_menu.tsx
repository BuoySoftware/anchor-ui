import { useState } from "react";
import { Popover, PopoverProps } from "react-tiny-popover";

import { DropdownMenuButton } from "./dropdown_menu_button";
import { DropdownMenuList } from "./dropdown_menu_list";

interface OwnProps {
  children: React.ReactNode;
  label: string;
}

type DropdownMenuProps = OwnProps & Partial<Omit<PopoverProps, "children">>;

const MENU_CONTAINER_OFFSET = 3;

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  children,
  label,
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
      <DropdownMenuButton label={label} onClick={onClick} />
    </Popover>
  );
};
