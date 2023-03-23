import styled, { css } from "styled-components";
import { boxCss, BoxProps } from "@buoysoftware/anchor-layout";

import {
  tableLayout,
  TableLayoutProps,
} from "./custom_style_props/table_layout";

export type TableVariant = "default" | "condensed" | "sortable";
export const DEFAULT_TABLE_VARIANT: TableVariant = "default";

interface OwnProps {
  variant?: TableVariant;
}

export type StyledTableProps = OwnProps & BoxProps & TableLayoutProps;

const sortableStyles = css`
  tr:has(td:focus-visible) {
    outline: 2px solid ${({ theme }) => theme.colors.interactive.default};
    border-radius: 4px;

    td {
      outline: none;
    }
  }
`;

export const StyledTable = styled.table<StyledTableProps>`
  width: 100%;

  ${boxCss}
  ${tableLayout}
  ${({ variant }) => variant === "sortable" && sortableStyles}
`;
