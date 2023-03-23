import kebabCase from "lodash/kebabCase";
import { CSSProperties, forwardRef } from "react";

import { Td } from "./td";
import { TableRow as GeneralRowProps } from "./types";

interface OwnProps {
  style?: CSSProperties;
  className?: string;
}

export type TableRowProps<RecordData> = OwnProps & GeneralRowProps<RecordData>;

function PreForwardedTableRow<RecordData>(
  {
    TableCellComponent = Td,
    cellConfigs,
    record,
    rowAction,
    rowId,
    style,
    renderPlaceholder,
    ...tableRowProps
  }: TableRowProps<RecordData>,
  ref?: React.ForwardedRef<HTMLTableRowElement>
) {
  return (
    <tr
      data-testid={rowId}
      ref={ref}
      style={{ ...style }}
      {...(rowAction ? { onClick: () => rowAction(record) } : {})}
      {...tableRowProps}
    >
      {cellConfigs.map((cellConfig) => {
        const { dataKey } = cellConfig;
        const cellId = `${rowId}-td-${kebabCase(String(dataKey))}`;

        return (
          <TableCellComponent
            cellConfig={cellConfig}
            key={cellId}
            record={record}
            testId={cellId}
            renderPlaceholder={renderPlaceholder}
          />
        );
      })}
    </tr>
  );
}

export const TableRow = forwardRef(PreForwardedTableRow)
