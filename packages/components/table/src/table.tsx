import kebabCase from "lodash/kebabCase";

import { DEFAULT_TABLE_NAMESPACE } from "./use_table";
import { EmptyMessage } from "./empty_message";
import { TableActions } from "./table_actions";
import { StyledTable, StyledTableProps } from "./styled_table";
import { TableProps as GeneralTableProps } from "./types";
import { TableProvider } from "./table_provider";
import { Tbody } from "./tbody";
import { Thead } from "./thead";

type TableProps<RecordData> = GeneralTableProps<RecordData> &
  Partial<StyledTableProps>;

export const Table = <RecordData,>({
  TableCellComponent,
  TableRowComponent,
  cellConfigs,
  fetchMore,
  name,
  paginationData,
  recordIdKey,
  records,
  renderPlaceholder = () => "--",
  rowAction,
  tNamespace = DEFAULT_TABLE_NAMESPACE,
}: TableProps<RecordData>): React.ReactElement => {
  const renderTableActions = fetchMore && paginationData && records.length > 0;

  return (
    <TableProvider value={{ name, tNamespace }}>
      <StyledTable data-testid={`${kebabCase(name)}-table`}>
        <Thead cellConfigs={cellConfigs} />
        <Tbody
          TableCellComponent={TableCellComponent}
          TableRowComponent={TableRowComponent}
          cellConfigs={cellConfigs}
          recordIdKey={recordIdKey}
          records={records}
          renderPlaceholder={renderPlaceholder}
          rowAction={rowAction}
        />
      </StyledTable>
      {records.length === 0 && <EmptyMessage />}
      {renderTableActions && (
        <TableActions data={paginationData} fetchMore={fetchMore} />
      )}
    </TableProvider>
  );
};
