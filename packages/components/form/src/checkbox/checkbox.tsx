import styled, { css } from "styled-components";
import { BoxProps, boxCss } from "@buoysoftware/anchor-layout";
import checkmark from "./checkmark.svg";

interface OwnProps {
  error?: boolean;
}

export type CheckboxProps = OwnProps &
  BoxProps &
  React.InputHTMLAttributes<HTMLInputElement>;

export const Checkbox = styled.input.attrs(() => ({
  type: "checkbox",
}))<CheckboxProps>`
  appearance: none;
  outline: none;
  border: 2px solid ${({ theme }) => theme.colors.border.default};
  border-radius: 4px;
  width: 18px;
  height: 18px;
  padding: ${({ theme }) => theme.space.xxs};
  cursor: pointer;
  ${boxCss};

  ${({ error }) =>
    error &&
    css`
      border-color: ${({ theme }) => theme.colors.border.critical};
      background-color: ${({ theme }) =>
        theme.colors.background.criticalSubdued};
    `}

  &:hover {
    border-color: ${({ theme }) => theme.colors.border.hover};
  }

  &:focus-visible {
    border-color: ${({ theme }) => theme.colors.border.focused};
    box-shadow: 0px 0px 0px 2px ${({ theme }) => theme.colors.white},
      0px 0px 0px 4px ${({ theme }) => theme.colors.blue40};
  }

  &:checked {
    border-color: transparent;
    background: center ${({ theme }) => theme.colors.interactive.default}
      url(${checkmark}) no-repeat;

    ${({ error }) =>
      error &&
      css`
        background-color: ${({ theme }) => theme.colors.background.critical};
      `}
  }

  &:hover:checked {
    background-color: ${({ theme }) => theme.colors.interactive.hover};
  }

  &:disabled {
    border-color: ${({ theme }) => theme.colors.border.subdued};
  }

  &:checked:disabled {
    background-color: ${({ theme }) => theme.colors.grey40};
  }
`;
