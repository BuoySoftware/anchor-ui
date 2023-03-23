import { useEffect, useCallback, useState } from "react";
import {
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  UniqueIdentifier,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  restrictToVerticalAxis,
  restrictToWindowEdges,
} from "@dnd-kit/modifiers";
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import {
  SortableRecord,
  SortableTableProps as GeneralSortableTable,
} from "./types";
import { SortableTableCell } from "./sortable_table_cell";
import { SortableTableRow } from "./sortable_table_row";
import { Table } from "./table";

type SortableTableProps<RecordData> = GeneralSortableTable<RecordData>;

export const SortableTable = <RecordData extends SortableRecord>({
  onSort,
  records,
  ...tableBuilderProps
}: SortableTableProps<RecordData>): React.ReactElement => {
  const [sortedRecords, setSortedRecords] = useState(records);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const handleDragEnd = useCallback(
    ({ active, over }: DragEndEvent) => {
      if (!active.id || !over?.id) return;
      if (active.id === over.id) return;

      function indexById(records: RecordData[], id: UniqueIdentifier) {
        const record = records.find((record) => id === record.id);
        return record ? records.indexOf(record) : -1;
      }

      setSortedRecords((sortedRecords) => {
        const oldIndex = indexById(sortedRecords, active.id);
        const newIndex = indexById(sortedRecords, over.id);
        const resortedRecords = arrayMove(sortedRecords, oldIndex, newIndex);

        return resortedRecords;
      });
    },
    [setSortedRecords]
  );

  useEffect(() => {
    if (!onSort) return;

    if (sortedRecords !== records) {
      onSort(sortedRecords);
    }
  }, [onSort, sortedRecords, records]);

  return (
    <DndContext
      collisionDetection={closestCenter}
      modifiers={[restrictToVerticalAxis, restrictToWindowEdges]}
      onDragEnd={handleDragEnd}
      sensors={sensors}
    >
      <SortableContext
        items={sortedRecords}
        strategy={verticalListSortingStrategy}
      >
        <Table
          TableCellComponent={SortableTableCell}
          TableRowComponent={SortableTableRow}
          records={sortedRecords}
          variant="sortable"
          {...tableBuilderProps}
        />
      </SortableContext>
    </DndContext>
  );
};
