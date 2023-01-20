import styled from "styled-components";

import { TableVariant } from "./types";

interface OwnProps {
  variant?: TableVariant;
}

export type StyledTheadProps = OwnProps;

export const StyledThead = styled.thead<StyledTheadProps>`
  border-bottom: ${({ theme }) => theme.borders["1SolidSubdued"]};

  th {
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
    vertical-align: bottom;

    &:last-child {
      padding-right: 0;
    }
  }

  &:first-child th {
    padding-top: 0;
  }
`;
