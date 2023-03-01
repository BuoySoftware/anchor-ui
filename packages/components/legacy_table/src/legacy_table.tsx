import { BoxProps } from "@buoysoftware/anchor-layout";
import { CellProps, Table, TableCellConfig, TableProps } from "@buoysoftware/anchor-table";
import { LegacyTextVariant } from "@buoysoftware/anchor-ui-legacy-text";
import { TFunction } from "i18next";
import snakeCase from "lodash/snakeCase";
import { useTranslation } from "react-i18next";

type LegacyTextProps = BoxProps & { variant?: LegacyTextVariant };
type LegacyCellProps = Partial<LegacyTextProps> | undefined;

type CellT = TFunction<string[], undefined, string[]>;

type LegacyTableCellConfig<RecordData> = Omit<TableCellConfig<RecordData>, 'cellProps' | 'render'> & {
  cellProps?: (rowData: RecordData) => LegacyCellProps;
  render?: (
    rowData: RecordData,
    tableT: TFunction,
    cellT: (...params: Parameters<CellT>) => string
  ) => React.ReactNode;
  translationNamespace?: string;
  translationKeyPrefix?: string;
};

const keyPrefixedCellT = (cellT: CellT, keyPrefix: string) => (...params: Parameters<CellT>) => {
  const [firstParam, ...restParams] = params;
  const prefixedParam = typeof firstParam === "string" ? [keyPrefix, firstParam].join(".") : firstParam.map(key => [keyPrefix, key].join("."));
  return cellT(prefixedParam, ...restParams);
}

export type LegacyTableProps<RecordData> = Omit<TableProps<RecordData>, 'cellConfigs'> & {
  cellConfigs: LegacyTableCellConfig<RecordData>[];
}

const updateCellProps = (props: LegacyCellProps | undefined): CellProps | undefined => {
  if (props === undefined) {
    return props;
  }

  const { variant, color, width, height, ...unmodifiedProps } = props;

  const bodyProps = {
    color: typeof color === "string" ? color : undefined,
    width: typeof width === "string" ? width : undefined,
    height: typeof height === "string" ? height : undefined,
    ...unmodifiedProps,
  }

  switch (variant) {
    case "bodyLargeBold":
      return { ...bodyProps, strong: true, size: "l" };
    case "bodyLargeMedium":
      return { ...bodyProps, size: "l" };
    case "bodyMediumBold":
      return { ...bodyProps, strong: true, size: "m" };
    case "bodyMediumMedium":
    case "input":
    case "error":
      return { ...bodyProps, size: "m" };
    case "bodySmallRegular":
    case "caption":
      return { ...bodyProps, size: "s" };
    case "bodySmallRegularBold":
      return { ...bodyProps, strong: true, size: "s" };
    case "bodySmallRegularItalic":
      return { ...bodyProps, emphasized: true, size: "s" };
    case "headline1":
      return { ...bodyProps, size: "l" };
    case "headline2":
      return { ...bodyProps, size: "l" };
    case "headline3":
      return { ...bodyProps, size: "m" };
    case "overline":
      return { ...bodyProps, size: "s" };
    case "subtitle":
    case "label":
      return { ...bodyProps, size: "s" };
    default:
      return { ...bodyProps, size: "m" };
  }
}


export const LegacyTable = <RecordData,>({ cellConfigs, ...props }: LegacyTableProps<RecordData>): React.ReactElement => {
  const i18nKey = snakeCase(props.name);
  const { t } = useTranslation("tables");
  const { t: tableT } = useTranslation("tables", { keyPrefix: i18nKey });
  const translationNamespaces = [...new Set(cellConfigs.map(({ translationNamespace }) => translationNamespace ?? "shared").filter(Boolean))];
  const namespaces = translationNamespaces.length > 0 ? translationNamespaces : undefined;
  const { t: cellT } = useTranslation(namespaces);
  const actualT = tableT ?? t;

  return <Table cellConfigs={cellConfigs.map(({ cellProps, dataKey, name, translationKeyPrefix, ...cellConfig }) => {
    const render = cellConfig.render ? (rowData: RecordData) => {
      const actualCellT = translationKeyPrefix ? keyPrefixedCellT(cellT, translationKeyPrefix) : cellT;
      return cellConfig.render && cellConfig.render(rowData, actualT, actualCellT);
    } : undefined;

    return { dataKey, render, name, cellProps: (recordData: RecordData) => updateCellProps(cellProps?.(recordData)) };
    })} {...props}
  />;
};
