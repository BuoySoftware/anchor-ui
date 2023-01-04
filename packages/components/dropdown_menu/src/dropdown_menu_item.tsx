import { Body } from "@buoysoftware/anchor-typography";

interface OwnProps {
  children: React.ReactNode;
}

type DropdownMenuItemProps = OwnProps;

export const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({
  children,
}): React.ReactElement => {
  return (
    <Body as="a" href="#" py="xxs" px="m" size="m" textDecoration="none">
      {children}
    </Body>
  );
};
