import { Box } from "@buoysoftware/anchor-layout";

interface OwnProps {
  closeModal?: (e: React.MouseEvent | React.KeyboardEvent) => void;
}

type CloseModalProps = OwnProps;

export const CloseModal: React.FC<CloseModalProps> = ({
  closeModal,
}): React.ReactElement => (
  <Box
    aria-label="Close Button"
    height="26px"
    onClick={closeModal}
    position="relative"
    role="button"
    style={{ cursor: "pointer" }}
    width="26px"
  >
    <Box
      bg="grey50"
      height="1.5px"
      left="5.5px"
      position="absolute"
      style={{ rotate: "45deg" }}
      top="50%"
      width="15px"
    />
    <Box
      bg="grey50"
      height="1.5px"
      left="5.5px"
      position="absolute"
      style={{ rotate: "135deg" }}
      top="50%"
      width="15px"
    />
  </Box>
);
