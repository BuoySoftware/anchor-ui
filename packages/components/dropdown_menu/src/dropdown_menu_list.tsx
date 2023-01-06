import { Flex } from "@buoysoftware/anchor-layout";

interface OwnProps {
  children: React.ReactNode;
}

type DropdownMenuListProps = OwnProps;

export const DropdownMenuList: React.FC<DropdownMenuListProps> = ({
  children,
}): React.ReactElement => {
  return (
    <Flex
      bg="white"
      border="1SolidSubdued"
      borderRadius="4px"
      py="xxs"
      flexDirection="column"
    >
      {children}
    </Flex>
  );
};
