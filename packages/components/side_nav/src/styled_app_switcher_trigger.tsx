import styled from "styled-components";
import { Heading } from "@buoysoftware/anchor-typography";

export const StyledAppSwitcherTrigger = styled(Heading)`
  background: transparent;
  border-left: none;
  border-right: none;
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  margin: ${({ theme }) => theme.space.xl} 0;
  padding: ${({ theme }) => theme.space.sideNav}
    ${({ theme }) => theme.space.sideNav};
  width: 100%;
`;
