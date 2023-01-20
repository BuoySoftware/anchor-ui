import styled from "styled-components";
import { boxCss, BoxProps } from "@buoysoftware/anchor-layout";

import {
  tableLayout,
  TableLayoutProps,
} from "./custom_style_props/table_layout";

export type TableVariant = "default" | "condensed";
export const DEFAULT_TABLE_VARIANT: TableVariant = "default";

interface OwnProps {
  variant?: TableVariant;
}

export type StyledTableProps = OwnProps & BoxProps & TableLayoutProps;

export const StyledTable = styled.table<StyledTableProps>`
  width: 100%;

  ${boxCss}
  ${tableLayout}
`;
