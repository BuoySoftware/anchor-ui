import React from "react";
import { Heading } from "@buoysoftware/anchor-typography";

interface OwnProps {
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  label: string;
  onClick: React.MouseEventHandler;
}

type DropdownMenuButtonProps = OwnProps;

export const DropdownMenuButton = React.forwardRef<
  HTMLAnchorElement,
  DropdownMenuButtonProps
>(({ label, iconPosition, icon, onClick }, ref) => (
  <Heading
    as="a"
    border="1SolidDefault"
    borderRadius="4px"
    display="block"
    href="#"
    onClick={onClick}
    px="m"
    py="s"
    ref={ref}
    size="s"
    textDecoration="none"
  >
    {iconPosition === "left" && icon}
    <Heading as="span" mx="xs" size="s">
      {label}
    </Heading>
    {iconPosition === "right" && icon}
  </Heading>
));

DropdownMenuButton.displayName = "DropdownMenuButton";
