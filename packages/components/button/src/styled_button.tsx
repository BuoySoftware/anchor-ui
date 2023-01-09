import styled from "styled-components";

import { Box, BoxProps } from "@buoysoftware/anchor-layout";

export const StyledButton = styled(Box).attrs(() => ({
  as: "button",
}))<BoxProps>`
  margin: 0;
  padding: 0;
  display: flex;
  border: none;
  background: transparent;

  &:focus {
    background: rgba(255, 255, 255, 0.01);
    border-radius: 4px;
    border: 2px solid rgba(255, 255, 255, 0.01);
    box-shadow: 0px 0px 0px 2px #5b91f4;
    outline: none;
  }
`;
