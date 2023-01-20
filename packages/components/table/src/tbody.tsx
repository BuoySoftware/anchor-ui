import get from "lodash/get";
import { TableRow } from "./table_row";
import { StyledTbody } from "./styled_tbody";
import { TbodyProps as TableBodyProps } from "./types";

type TbodyProps<RecordData> = Omit<TableBodyProps<RecordData>, "tableT">;

export const Tbody = function <RecordData>({
  cellConfigs,
  records,
  rowAction,
  recordIdKey,
  ...styledTbodyProps
}: TbodyProps<RecordData>): React.ReactElement {
  return (
    <StyledTbody hasRowAction={!!rowAction} {...styledTbodyProps}>
      {records.map((record) => {
        const id = get(record, recordIdKey, undefined);
        const rowId = `tr-${id}`;

        return (
          <TableRow
            key={rowId}
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
