import { Heading } from "@buoysoftware/anchor-typography";
import { Box, Flex } from "@buoysoftware/anchor-layout";
import ReactModal, { Props as ReactModalProps } from "react-modal";
import { rgba } from "polished";
import { useTheme } from "@buoysoftware/anchor-theme";
import { get } from "styled-system";

import { CloseModal } from "./close_modal";

if (!(process.env.NODE_ENV === "test")) {
  ReactModal.setAppElement("#root");
}

interface OwnProps {
  bg?: string;
  borderRadius?: string;
  children?: React.ReactNode;
  modalActions?: React.ReactNode;
  testId: string;
  title: string;
  width?: string;
}

export type ModalProps = ReactModalProps & OwnProps;

export const Modal: React.FC<ModalProps> = ({
  bg = "white",
  borderRadius = "modal",
  children,
  modalActions,
  testId,
  title,
  width = "modalWidth",
  ...modalProps
}): React.ReactElement => {
  const { colors, radii, sizes } = useTheme();

  const contentWidth = get(sizes, width, width);
  const contentRadius = get(radii, borderRadius, borderRadius);
  const contentBackground = get(colors, bg, bg);
  const isTestEnv = process.env.NODE_ENV === "test";

  return (
    <ReactModal
      ariaHideApp={!isTestEnv}
      style={{
        overlay: {
          backgroundColor: rgba(colors.blue100, 0.64),
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 99,
        },
        content: {
          backgroundColor: contentBackground,
          border: "none",
          borderRadius: contentRadius,
          bottom: undefined,
          left: undefined,
          marginTop: 0,
          padding: 0,
          position: undefined,
          right: undefined,
          top: undefined,
          width: contentWidth,
        },
      }}
      {...modalProps}
    >
      <Box data-testid={testId} py="xl" px="modal.gutterX">
        <Flex
          alignItems="center"
          flexDirection="row"
          flexWrap="nowrap"
          justifyContent="space-between"
          mb="xl"
        >
          <Heading data-testid={`${testId}-title`} size="xl">
            {title}
          </Heading>
          <CloseModal closeModal={modalProps.onRequestClose} />
        </Flex>
        <Box maxHeight="60vh" overflow="none" mb="l">
          {children}
        </Box>
        <Box display="flex" justifyContent="flex-end" mt="l">
          {modalActions}
        </Box>
      </Box>
    </ReactModal>
  );
};
