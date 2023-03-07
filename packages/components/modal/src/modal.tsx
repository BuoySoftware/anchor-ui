import { Box, BoxProps } from "@buoysoftware/anchor-layout";
import ReactModal, { Props as ReactModalProps } from "react-modal";
import { rgba } from "polished";
import { get } from "styled-system";

import { useTheme } from "themes/buoy";

ReactModal.setAppElement("#root");

interface OwnProps {
  bg?: string;
  borderRadius?: string;
  modalActions?: React.ReactNode;
  modalActionsProps?: BoxProps;
  modalContent?: React.ReactNode;
  width?: string;
}

export type ModalProps = ReactModalProps & OwnProps;

const Modal: React.FC<ModalProps> = ({
  bg = "white",
  borderRadius = "modal",
  modalActions,
  modalActionsProps,
  modalContent,
  width = "modalWidth",
  ...modalProps
}): React.ReactElement => {
  const { colors, radii, sizes, space } = useTheme();

  const contentWidth = get(sizes, width, width);
  const contentRadius = get(radii, borderRadius, borderRadius);
  const contentBackground = get(colors, bg, bg);

  return (
    <ReactModal
      style={{
        overlay: {
          backgroundColor: rgba(colors.modal.background, 0.8),
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          zIndex: 99,
        },
        content: {
          backgroundColor: contentBackground,
          border: "none",
          borderRadius: contentRadius,
          bottom: undefined,
          left: undefined,
          marginTop: space.modal.gutterT,
          padding: 0,
          position: undefined,
          right: undefined,
          top: undefined,
          width: contentWidth,
        },
      }}
      {...modalProps}
    >
      <Box maxHeight="60vh" overflow="auto" py="xxl" px="modal.gutterX">
        {modalContent}
      </Box>
      <Box
        borderTop="1SolidGray"
        display="flex"
        justifyContent="flex-end"
        pt="l"
        mx="modal.gutterX"
        pb="xxl"
        {...modalActionsProps}
      >
        {modalActions}
      </Box>
    </ReactModal>
  );
};

export default Modal;
