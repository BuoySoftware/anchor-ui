import styled from "styled-components";

interface OwnProps {
  active: boolean;
}

type TabProps = OwnProps;

export const Tab = styled.button<TabProps>`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes['font-size-100']};
  font-weight: 600;
  line-height: ${({ theme }) => theme.fontSizes['font-size-100']};
  white-space: nowrap;
  color: ${({ active, theme }) => active ? theme.colors.text.primary : theme.colors.text.secondary}};
  padding: ${({ theme }) => `${theme.space['16']} ${theme.space['20']}`};
`;
