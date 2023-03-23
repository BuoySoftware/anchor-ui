import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";

import { TableRow } from "./table_row";
import {
  SortableRecord,
  SortableTableRow as GeneralSortableTableRow,
} from "./types";

export type SortableTableRowProps<RecordData> =
  GeneralSortableTableRow<RecordData>;

export const SortableTableRow = function <RecordData extends SortableRecord>({
  record,
  ...tableRowProps
}: SortableTableRowProps<RecordData>): React.ReactElement {
  const { setNodeRef, transform, transition } = useSortable({
    id: record.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <TableRow
      className="sortable-table"
      record={record}
      ref={setNodeRef}
      style={style}
      {...tableRowProps}
    />
  );
};
