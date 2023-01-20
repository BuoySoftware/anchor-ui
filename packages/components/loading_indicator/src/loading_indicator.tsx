import styled, { keyframes } from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import { Box, BoxProps } from "@buoysoftware/anchor-layout";

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

interface LoadingIndicatorProps
  extends Omit<BoxProps, "color" | "size">,
    Required<Pick<BoxProps, "color">>,
    Required<Pick<BoxProps, "size">> {
  "data-testid"?: string;
  strokeSize: number;
}

export const LoadingIndicator = styled(Box)<LoadingIndicatorProps>`
  border: ${(props) => props.strokeSize}px solid
    ${(props) => themeGet(props.color)};
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${rotation} 1s linear infinite;
`;
