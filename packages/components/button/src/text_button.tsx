import styled from "styled-components";
import { Heading, HeadingProps } from "@buoysoftware/anchor-typography";

interface OwnProps {
  children?: React.ReactNode;
}

type TextButtonProps = OwnProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> &
  Omit<HeadingProps, "as" | "size" | "background" | "color">;

export const TextButton = styled(Heading).attrs(() => ({
  as: "button",
  size: "s",
}))<TextButtonProps>`
  background: transparent;
  border: none;
  height: 28px;
  color: ${({ theme }) => theme.colors.interactive.default};
  cursor: pointer;
  padding: ${({ theme }) => theme.space.xxs};

  &:hover {
    color: ${({ theme }) => theme.colors.interactive.hover};
  }

  &:active {
    color: ${({ theme }) => theme.colors.interactive.pressed};
  }

  &:focus-visible {
    border: 1px solid ${({ theme }) => theme.colors.border.focus};
  }

  &[disabled] {
    color: ${({ theme }) => theme.colors.text.tertiary};
  }
`;
