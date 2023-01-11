import { Button } from "@buoysoftware/anchor-button";
import { ChevronDown } from "@styled-icons/feather";
import { Popover, PopoverProps } from "react-tiny-popover";
import { useState } from "react";

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
      <Button
        icon={<ChevronDown size="20px" strokeWidth="2px" />}
        iconPosition="right"
        onClick={onClick}
        size="l"
      >
        {label}
      </Button>
    </Popover>
  );
};
