import { LegacyTable, LegacyTableProps } from "@buoysoftware/anchor-ui-legacy-table";
import { Connection, PageableConnection } from "@buoysoftware/anchor-table";

interface OwnProps<RecordData> {
  connection?: Connection<RecordData> & PageableConnection;
}

export type ConnectionTableProps<RecordData> =
  OwnProps<RecordData> &
    Omit<
    LegacyTableProps<RecordData>,
      "records" | "paginationData"
    >;

export const LegacyConnectionTable = <RecordData,>({
  connection,
  ...tableBuilderProps
}: ConnectionTableProps<RecordData>): React.ReactElement => {
  const records = connection ? connection.edges.map(({ node }) => node) : [];

  return (
    <LegacyTable
      paginationData={connection}
      records={records}
      {...tableBuilderProps}
    />
  );
};
