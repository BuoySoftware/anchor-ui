import { Flex } from "@buoysoftware/anchor-layout";

interface OwnProps {
  children?: React.ReactNode;
}

type LegacyModalContentProps = OwnProps;

export const LegacyModalContent: React.FC<LegacyModalContentProps> = ({
  children,
}): React.ReactElement => {
  return (
    <Flex maxHeight="60vh" overflow="auto" pb="l" px="modal.gutterX">
      {children}
    </Flex>
  );
};
