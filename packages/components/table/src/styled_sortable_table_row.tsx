import styled from "styled-components";
import { CSSProperties, forwardRef } from "react";

import { SortableRecord, SortableTableRow } from "./types";
import { TableRow } from "./table_row";

interface OwnProps {
  style?: CSSProperties;
}

export type StyledSortableTableRowProps<RecordData extends SortableRecord> = OwnProps &
  SortableTableRow<RecordData>;

export const StyledSortableTableRow = styled(
  forwardRef(function StyledSortableTableRow<RecordData extends SortableRecord>(
    { ...tableRowProps }: StyledSortableTableRowProps<RecordData>,
    ref?: React.ForwardedRef<HTMLTableRowElement>
  ): React.ReactElement {
    return <TableRow ref={ref} {...tableRowProps} />;
  })
)`
  :has(td:focus-visible) {
    outline: 2px solid ${({ theme }) => theme.colors.interactive.default};
    border-radius: 4px;

    td {
      outline: none;
    }
  }
`;
