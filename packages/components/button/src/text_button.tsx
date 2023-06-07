import styled from "styled-components";

export const TextButton = styled.button.attrs((props) => ({
  as: "button",
  ...props,
}))`
  align-items: center;
  background: transparent;
  border: none;
  height: 28px;
  color: ${({ theme }) => theme.colors.interactive.default};
  cursor: pointer;
  display: inline-flex;
  font-size: ${({ theme }) => theme.fontSizes["font-size-100"]};
  font-family: -apple-system, BlinkMacSystemFont, San Francisco, Segoe UI, Roboto, Helvetica Neue, sans-serif;
  font-weight: ${({ theme }) => theme.fontWeights["600"]};
  line-height: ${({ theme }) => theme.fontSizes["font-size-200"]};
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
