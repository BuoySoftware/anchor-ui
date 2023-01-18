import styled from "styled-components";

import { boxCss, BoxProps } from "@buoysoftware/anchor-layout";

type StyledButtonProps = BoxProps;

export const StyledButton = styled.button<StyledButtonProps>`
  ${boxCss};

  margin: 0;
  padding: 0;
  display: flex;
  cursor: pointer;
  border: 2px solid transparent;
  background: transparent;

  &:focus-visible {
    background: rgba(255, 255, 255, 0.01);
    border-radius: 4px;
    border-color: rgba(255, 255, 255, 0.01);
    box-shadow: 0px 0px 0px 2px #5b91f4;
    outline: none;
  }
`;
