import { Table, TableProps } from "./table";
import { Connection, PageableConnection } from "./types";
import { extractConnectionNodes } from "./extract_connection_nodes";

interface OwnProps<RecordData> {
  connection?: Connection<RecordData> & PageableConnection;
}

type ConnectionTableProps<RecordData> = OwnProps<RecordData> &
  Omit<TableProps<RecordData>, "records" | "paginationData">;

export const ConnectionTable = <RecordData,>({
  connection,
  ...tableBuilderProps
}: ConnectionTableProps<RecordData>): React.ReactElement => {
  const records = extractConnectionNodes(connection);

  return (
    <Table
      paginationData={connection}
      records={records}
      {...tableBuilderProps}
    />
  );
};
