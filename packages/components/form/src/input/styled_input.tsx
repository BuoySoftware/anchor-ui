import React from "react";
import styled from "styled-components";
import { boxCss, BoxProps } from "@buoysoftware/anchor-layout";

export type StyledInputProps = BoxProps &
  React.InputHTMLAttributes<HTMLInputElement>;

const Input = styled.input<StyledInputProps>`
  outline: none;
  background: none;
  border: none;
  color: inherit;
  fontsize: inherit;
  line-height: inherit;
  margin: 0;
  padding: 0;
  width: 100%;
  text-align: inherit;

  ${boxCss};
`;

export const StyledInput = React.forwardRef<HTMLInputElement, StyledInputProps>(
  function StyledInput({ ...props }, forwardRef): React.ReactElement {
    return <Input ref={forwardRef} {...props} />;
  }
);
