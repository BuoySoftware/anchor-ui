import { Popover, PopoverProps } from "react-tiny-popover";
import { useState, cloneElement } from "react";

interface OwnProps {
  children: React.ReactNode;
  trigger: React.ReactElement;
}

export type DropdownMenuPopoverProps = OwnProps &
  Partial<Omit<PopoverProps, "children">>;

const MENU_CONTAINER_OFFSET = 3;

export const DropdownMenuPopover: React.FC<DropdownMenuPopoverProps> = ({
  children,
  trigger,
  ...popoverProps
}): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = (e: React.MouseEvent): void => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const triggerWithHandler = cloneElement(trigger, {
    onClick,
  });

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
      {triggerWithHandler}
    </Popover>
  );
};
