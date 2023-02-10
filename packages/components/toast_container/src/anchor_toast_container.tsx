import styled from "styled-components";
import { ToastContainer, Slide } from "react-toastify";
import { Cancel } from "iconoir-react";

import "react-toastify/dist/ReactToastify.css";

export const AnchorToastContainer = styled(ToastContainer)`
  &.Toastify__toast-container {
    width: 249px;
  }

  .Toastify__toast {
    min-height: 48px;
    padding: ${({ theme }) => theme.space.s};
  }

  .Toastify__toast--success {
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.background.success};
  }

  .Toastify__toast-body {
    font-family: -apple-system, BlinkMacSystemFont, San Francisco, Segoe UI,
      Roboto, Helvetica Neue, sans-serif;
    font-size: ${({ theme }) => theme.fontSizes["font-size-100"]};
    font-weight: ${({ theme }) => theme.fontWeights.semibold};
    margin: 0;
    padding: 0;
  }
`;

AnchorToastContainer.defaultProps = {
  autoClose: 3000,
  closeButton: (props) => (
    <Cancel width={24} height={24} opacity={0.5} {...props} />
  ),
  draggable: false,
  hideProgressBar: true,
  icon: false,
  position: "bottom-center",
  transition: Slide,
};
