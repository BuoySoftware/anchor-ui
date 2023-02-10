import styled, { css } from "styled-components";
import { BoxProps, boxCss } from "@buoysoftware/anchor-layout";

interface OwnProps {
  error?: boolean;
}

export type StyledTextAreaProps = OwnProps &
  BoxProps &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const StyledTextArea = styled.textarea<StyledTextAreaProps>`
  font-family: -apple-system, BlinkMacSystemFont, San Francisco, Segoe UI,
    Roboto, Helvetica Neue, sans-serif;
  resize: none;
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.border.defualt};
  border-radius: 4px;
  font-size: ${({ theme }) => theme.fontSizes["font-size-100"]};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  line-height: ${({ theme }) => theme.lineHeights["font-size-100"]};
  width: ${({ theme }) => theme.sizes.input};
  height: 120px;
  padding: ${({ theme }) => theme.space.s};
  transition: "background 0.75s ease",

  &:focus {
    box-shadow: 0px 0px 0px 2px ${({ theme }) => theme.colors.white},
      0px 0px 0px 4px ${({ theme }) => theme.colors.blue40};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.border.hover};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.background.disabled};
    border-color: ${({ theme }) => theme.colors.border.subdued};
    color: ${({ theme }) => theme.colors.text.tertiary};

    input {
      -webkit-text-fill-color: ${({ theme }) => theme.colors.text.tertiary};
    }
  }

  ${({ error }) =>
    error &&
    css`
      &,
      &:focus,
      &:hover {
        border-color: ${({ theme }) => theme.colors.border.critical};
      }
    `}

  ${boxCss};
`;
