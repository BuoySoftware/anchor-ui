import get from "lodash/get";

import { StyledTbody } from "./styled_tbody";
import { TableBodyProps } from "./types";
import { TableRow } from "./table_row";

type TbodyProps<RecordData> = TableBodyProps<RecordData>;

export const Tbody = function <RecordData>({
  TableCellComponent,
  TableRowComponent = TableRow,
  cellConfigs,
  recordIdKey,
  records,
  rowAction,
  ...styledTbodyProps
}: TbodyProps<RecordData>): React.ReactElement {
  return (
    <StyledTbody hasRowAction={!!rowAction} {...styledTbodyProps}>
      {records.map((record) => {
        const id = get(record, recordIdKey, undefined);
        const rowId = `tr-${id}`;

        return (
          <TableRowComponent
            TableCellComponent={TableCellComponent}
            key={id}
            record={record}
            rowAction={rowAction}
            rowId={rowId}
            cellConfigs={cellConfigs}
          />
        );
      })}
    </StyledTbody>
  );
};
