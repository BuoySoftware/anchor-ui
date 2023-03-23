import type { PropertyPath } from "lodash";

import { BodyProps } from "@buoysoftware/anchor-typography";

// Pagination utility types
export interface Edge<NodeData> {
  node: Record<NodeData>;
}

export interface Connection<NodeData> {
  edges: Edge<NodeData>[];
}

export interface ConnectionWithEdges<EdgeData> {
  edges: EdgeData[];
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

export interface PaginationVariables {
  variables: {
    after?: string;
    before?: string;
    first?: number;
    last?: number;
  };
}

export type FetchMore = (
  fetchMoreOptions: PaginationVariables
) => Promise<unknown>;

export type PaginationData<RecordData> = (
  | Connection<RecordData>
  | ConnectionWithEdges<RecordData>
) &
  PageableConnection;

// Table component Types
export type CellProps = Partial<BodyProps> | undefined;

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

export interface TableProps<RecordData> {
  TableCellComponent?: React.FC<TableCell<RecordData>>;
  TableRowComponent?: React.FC<TableRow<RecordData>>;
  cellConfigs: TableCellConfig<RecordData>[];
  fetchMore?: FetchMore;
  name: string;
  paginationData?: PaginationData<RecordData>;
  recordIdKey: PropertyPath;
  records: Record<RecordData>[];
  renderPlaceholder?: RenderPlaceholder<RecordData>;
  rowAction?: RowAction<RecordData>;
  tNamespace?: string;
}

export interface TableBodyProps<RecordData> {
  TableCellComponent?: React.FC<TableCell<RecordData>>;
  TableRowComponent?: React.FC<TableRow<RecordData>>;
  cellConfigs: TableCellConfig<RecordData>[];
  recordIdKey: PropertyPath;
  records: Record<RecordData>[];
  renderPlaceholder?: RenderPlaceholder<RecordData>;
  rowAction?: RowAction<RecordData>;
}

export type RenderPlaceholder<RecordData> = (
  rowData: RecordData
) => React.ReactElement | string;

export interface TableRow<RecordData> {
  TableCellComponent?: React.FC<TableCell<RecordData>>;
  cellConfigs: TableCellConfig<RecordData>[];
  record: Record<RecordData>;
  renderPlaceholder?: RenderPlaceholder<RecordData>;
  rowAction?: RowAction<RecordData>;
  rowId: string;
}

export interface TableCell<RecordData> {
  cellConfig: TableCellConfig<RecordData>;
  record: RecordData;
  renderPlaceholder?: RenderPlaceholder<RecordData>;
  testId: string;
  variant?: TableVariant;
}

export interface PageableConnection {
  pageInfo: PageInfo;
  totalCount: number;
}

export type TableVariant = "default" | "condensed";
