import kebabCase from "lodash/kebabCase";

import { Td } from "./td";
import { TableRow as GeneralRowProps } from "./types";

type TableRowProps<RecordData> = GeneralRowProps<RecordData>;

export const TableRow = function <RecordData>({
  cellConfigs,
  record,
  rowAction,
  rowId,
  ...tableRowProps
}: TableRowProps<RecordData>): React.ReactElement {
  return (
    <tr
      data-testid={rowId}
      {...(rowAction ? { onClick: () => rowAction(record) } : {})}
    >
      {cellConfigs.map((cellConfig) => {
        const { dataKey } = cellConfig;
        const cellId = `${rowId}-td-${kebabCase(String(dataKey))}`;

        return (
          <Td
            cellConfig={cellConfig}
            key={cellId}
            record={record}
            testId={cellId}
            {...tableRowProps}
          />
        );
      })}
    </tr>
  );
};
