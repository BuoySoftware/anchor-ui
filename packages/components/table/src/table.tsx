import kebabCase from "lodash/kebabCase";

import { StyledTable, StyledTableProps } from "./styled_table";
import { Tbody } from "./tbody";
import { Thead } from "./thead";
import { TableProvider } from "./table_provider";
import {
  Connection,
  ConnectionWithEdges,
  PageableConnection,
  RenderPlaceholder,
  TbodyProps,
} from "./types";
import { DEFAULT_TABLE_NAMESPACE } from "./use_table";
import { EmptyMessage } from "./empty_message";
import { FetchMore, TableActions } from "./table_actions";

interface OwnProps<RecordData> {
  name: string;
  fetchMore?: FetchMore;
  paginationData?: (Connection<RecordData> | ConnectionWithEdges<RecordData>) &
    PageableConnection;
  renderPlaceholder?: RenderPlaceholder<RecordData>;
  tNamespace?: string;
}

export type TableProps<RecordData> = OwnProps<RecordData> &
  TbodyProps<RecordData> &
  Partial<StyledTableProps>;

export const Table = <RecordData,>({
  cellConfigs,
  fetchMore,
  name,
  paginationData,
  renderPlaceholder = () => "--",
  rowAction,
  recordIdKey,
  records,
  tNamespace = DEFAULT_TABLE_NAMESPACE,
}: TableProps<RecordData>): React.ReactElement => {
  const renderTableActions = fetchMore && paginationData && records.length > 0;

  return (
    <TableProvider value={{ name, tNamespace }}>
      <StyledTable data-testid={`${kebabCase(name)}-table`}>
        <Thead cellConfigs={cellConfigs} />
        <Tbody
          cellConfigs={cellConfigs}
          records={records}
          renderPlaceholder={renderPlaceholder}
          rowAction={rowAction}
          recordIdKey={recordIdKey}
        />
      </StyledTable>
      {records.length === 0 && <EmptyMessage />}
      {renderTableActions && (
        <TableActions data={paginationData} fetchMore={fetchMore} />
      )}
    </TableProvider>
  );
};
