import React from "react";
import { Heading } from "@buoysoftware/anchor-typography";

interface OwnProps {
  label: string;
  onClick: React.MouseEventHandler;
}

type DropdownMenuButtonProps = OwnProps;

export const DropdownMenuButton = React.forwardRef<
  HTMLAnchorElement,
  DropdownMenuButtonProps
>(({ label, onClick }, ref) => (
  <Heading
    as="a"
    px="l"
    py="s"
    border="1SolidDefault"
    borderRadius="4px"
    href="#"
    textDecoration="none"
    onClick={onClick}
    size="s"
    ref={ref}
  >
    {label}
  </Heading>
));

DropdownMenuButton.displayName = "DropdownMenuButton";
