import styled, { css, CSSProp } from "styled-components";
import { BoxProps, boxCss } from "@buoysoftware/anchor-layout";

export type RadioProps = BoxProps & React.InputHTMLAttributes<HTMLInputElement>;

function radioDot(color: string): CSSProp {
  return css`
    background: radial-gradient(${color} 50%, rgba(255, 0, 0, 0) 51%);
  `;
}

export const Radio = styled.input.attrs(() => ({ type: "radio" }))<RadioProps>`
  -webkit-appearance: none;
  outline: none;
  height: 18px;
  width: 18px;
  border-radius: 100%;

  border: 2px solid ${(props) => props.theme.colors.border.default};

  &,
  &[type="radio"] {
    ${boxCss};
  }

  &:hover {
    border-color: ${(props) => props.theme.colors.border.hover};
  }

  &:focus {
    outline: 2px solid ${(props) => props.theme.colors.blue40};
  }

  &:checked {
    border-color: ${(props) => props.theme.colors.interactive.default};
    ${(props) => radioDot(props.theme.colors.interactive.default)}
  }

  &:hover:checked {
    border-color: ${(props) => props.theme.colors.interactive.hover};
    ${(props) => radioDot(props.theme.colors.interactive.hover)}
  }

  &:disabled {
    border-color: ${(props) => props.theme.colors.border.subdued};
  }

  &:checked:disabled {
    ${(props) => radioDot(props.theme.colors.grey40)}
  }
`;
