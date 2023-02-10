import styled, { css } from "styled-components";
import { Box, BoxProps } from "@buoysoftware/anchor-layout";

interface OwnProps {
  disabled?: boolean;
  error?: boolean;
  hasValue?: boolean;
  isFocused?: boolean;
  readOnly?: boolean;
  hasIcon: boolean;
}

export type StyledInputWrapperProps = BoxProps & OwnProps;

export const StyledInputWrapper = styled(Box)<StyledInputWrapperProps>`
  font-family: -apple-system, BlinkMacSystemFont, San Francisco, Segoe UI,
    Roboto, Helvetica Neue, sans-serif;
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border.defualt};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fontSizes["font-size-100"]};
  height: 40px;
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  line-height: ${({ theme }) => theme.lineHeights["font-size-100"]};
  margin: 0;
  padding: ${({ theme, hasIcon }) =>
    hasIcon ? theme.space.xs : theme.space.s} ${({ theme }) => theme.space.s};
  width: ${({ theme }) => theme.sizes.input};
  transition: "background 0.75s ease",

  input::placeholder {
    opacity: 1;
    color: ${({ theme }) => theme.colors.text.tertiary};
    -webkit-text-fill-color: $({ theme}) => theme.colors.text.tertiary};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.border.hover};
  }

  ${({ isFocused }) =>
    isFocused &&
    css`
      box-shadow: 0px 0px 0px 2px ${({ theme }) => theme.colors.white},
        0px 0px 0px 4px ${({ theme }) => theme.colors.blue40};
    `}

  ${({ disabled, readOnly }) =>
    (disabled || readOnly) &&
    css`
      background: ${({ theme }) => theme.colors.background.disabled};
      border-color: ${({ theme }) => theme.colors.border.subdued};
      color: ${({ theme }) => theme.colors.text.tertiary};

      input {
        -webkit-text-fill-color: ${({ theme }) => theme.colors.text.tertiary};
      }
    `}

    ${({ error }) =>
      error &&
      css`
        border-color: ${({ theme }) => theme.colors.border.critical};
      `}
`;
