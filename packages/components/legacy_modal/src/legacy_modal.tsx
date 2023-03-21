import ReactModal, { Props as ReactModalProps } from "react-modal";
import { get } from "styled-system";
import { rgba } from "polished";
import { useTheme } from "@buoysoftware/anchor-theme";

if (!(process.env.NODE_ENV === "test")) {
  ReactModal.setAppElement("#root");
}

interface OwnProps {
  bg?: string;
  borderRadius?: string;
  width?: string;
}

export type LegacyModalProps = ReactModalProps & OwnProps;

export const LegacyModal: React.FC<LegacyModalProps> = ({
  bg = "white",
  borderRadius = "modal",
  width = "modalWidth",
  ...props
}): React.ReactElement => {
  const { colors, radii, sizes, space } = useTheme();

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
      {...props}
    />
  );
};
