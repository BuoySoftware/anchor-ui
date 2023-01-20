import type { PropertyPath } from "lodash";

import { BodyProps } from "@buoysoftware/anchor-typography";

export type CellProps = Partial<BodyProps> | undefined;

export interface Connection<NodeData> {
  edges: Edge<NodeData>[];
}

export interface ConnectionWithEdges<EdgeData> {
  edges: EdgeData[];
}

export interface Edge<NodeData> {
  node: Record<NodeData>;
}

export type Record<RecordData> = RecordData & { id?: string };

export type RowAction<RecordData> = (rowData: RecordData) => void;

export type TbodyProps<RecordData> = {
  records: Record<RecordData>[];
  recordIdKey: PropertyPath;
} & Omit<TableRow<RecordData>, "record" | "rowId">;

export type RenderPlaceholder<RecordData> = (
  rowData: RecordData
) => React.ReactElement | string;

export interface TableCellConfig<RecordData> {
  cellProps?: (rowData: RecordData) => CellProps;
  dataKey: PropertyPath;
  name?: string;
  render?: (rowData: RecordData) => React.ReactNode;
}

export interface TableRow<RecordData> {
  cellConfigs: TableCellConfig<RecordData>[];
  record: Record<RecordData>;
  renderPlaceholder?: RenderPlaceholder<RecordData>;
  rowAction?: RowAction<RecordData>;
  rowId: string;
}

export interface PageInfo {
  startCursor: string | null;
  endCursor: string | null;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  perPage: number;
}

export interface PageableConnection {
  pageInfo: PageInfo;
  totalCount: number;
}

export type TableVariant = "default" | "condensed";
