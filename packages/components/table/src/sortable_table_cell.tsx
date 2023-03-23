import { useSortable } from "@dnd-kit/sortable";
import { useTheme } from "@buoysoftware/anchor-theme"

import sortHandleGraphic from "./sort_handle.svg";
import { SortableRecord, SortableTableCell as GeneralSortableTableCell } from "./types";
import { Td } from "./td";

export type SortableTableCellProps<RecordData> = GeneralSortableTableCell<RecordData>;

export const SortableTableCell = function <RecordData extends SortableRecord>({
  record,
  cellConfig: sortableCellConfig,
  ...tableCellProps
}: SortableTableCellProps<RecordData>): React.ReactElement {
  const { attributes, listeners, setActivatorNodeRef } = useSortable({
    id: record.id
  });
  const { sizes, space } = useTheme();
  const { sortHandle, ...cellConfig } = sortableCellConfig;

  const sortHandleProps = {
    background: `${space.xs} center url(${sortHandleGraphic}) no-repeat`,
    minHeight: "sortHandle",
    minWidth: "sortHandle",
    pl: `calc(${space.xs} + ${sizes.sortHandle} + ${space.xs})`,
    ref: setActivatorNodeRef,
    style: {
      cursor: "grab"
    },
    ...attributes,
    ...listeners
  }

  return (
    <Td
      cellConfig={cellConfig}
      record={record}
      {...(sortHandle ? sortHandleProps : undefined)}
      {...tableCellProps}
    />
  );
};
