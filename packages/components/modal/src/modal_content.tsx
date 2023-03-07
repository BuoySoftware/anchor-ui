import { Box } from "@buoysoftware/anchor-layout";

interface OwnProps {
  children?: React.ReactNode;
}

type ModalContentProps = OwnProps;

const ModalContent: React.FC<ModalContentProps> = ({
  children,
}): React.ReactElement => {
  return (
    <Box maxHeight="60vh" overflow="auto" py="xxl" px="modal.gutterX">
      {children}
    </Box>
  );
};

export default ModalContent;
