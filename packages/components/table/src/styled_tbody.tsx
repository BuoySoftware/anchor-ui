import styled, { css } from "styled-components";

interface OwnProps {
  hasRowAction: boolean;
}

export type StyledTbodyProps = OwnProps;

export const StyledTbody = styled.tbody<StyledTbodyProps>`
  tr {
    border-bottom: ${({ theme }) => theme.borders["1SolidSubdued"]};

    ${({ hasRowAction }) =>
      hasRowAction &&
      css`
        cursor: pointer;

        &:hover {
          background-color: ${({ theme }) => theme.colors.background.hover};
        }
      `}
  }
`;
