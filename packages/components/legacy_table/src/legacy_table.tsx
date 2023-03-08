import { BoxProps } from "@buoysoftware/anchor-layout";
import { CellProps, Table, TableCellConfig, TableProps } from "@buoysoftware/anchor-table";
import { LegacyTextVariant } from "@buoysoftware/anchor-ui-legacy-text";
import { TFunction } from "i18next";
import get from "lodash/get";
import snakeCase from "lodash/snakeCase";
import { useTranslation } from "react-i18next";

type LegacyTextProps = BoxProps & { variant?: LegacyTextVariant };
type LegacyCellProps = Partial<LegacyTextProps> | undefined;

type CellT = TFunction<string[], undefined, string[]>;
type CellTP = Parameters<CellT>;

export type LegacyTableCellConfig<RecordData> = Omit<TableCellConfig<RecordData>, 'cellProps' | 'render'> & {
  cellProps?: (rowData: RecordData) => LegacyCellProps;
  render?: (
    rowData: RecordData,
    tableT: TFunction,
    cellT: ReturnType<typeof keyPrefixedCellT>
  ) => React.ReactNode;
  t?: TFunction<string, string | null>;
  translationNamespace?: string;
  translationKeyPrefix?: string;
};

const keyPrefixedCellT = (cellT: CellT, keyPrefix: string) => (key: CellTP[0], defaultValueOrOptions?: string | CellTP[1], options?: CellTP[1]) => {
  const prefixedKey = typeof key === "string" ? [keyPrefix, key].join(".") : key.map(value => [keyPrefix, value].join("."));
  if (typeof defaultValueOrOptions === "string") {
    return cellT(prefixedKey, defaultValueOrOptions, options);
  } else if (typeof defaultValueOrOptions === "object") {
    return cellT(prefixedKey, defaultValueOrOptions);
  } else {
    return cellT(prefixedKey);
  }
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

const defaultRenderPlaceholder = (): string => "--";

export const LegacyTable = <RecordData,>({ cellConfigs, ...props }: LegacyTableProps<RecordData>): React.ReactElement => {
  const i18nKey = snakeCase(props.name);
  const { t } = useTranslation("tables");
  const { t: tableT } = useTranslation("tables", { keyPrefix: i18nKey });
  const translationNamespaces = [...new Set(cellConfigs.map(({ translationNamespace }) => translationNamespace ?? "shared").filter(Boolean))];
  const namespaces = translationNamespaces.length > 0 ? translationNamespaces : undefined;
  const { t: unprefixedCellT } = useTranslation(namespaces);
  const actualT = tableT ?? t;
  const renderPlaceholder = props.renderPlaceholder ?? defaultRenderPlaceholder;

  return <Table cellConfigs={cellConfigs.map(({ cellProps, dataKey, name, translationKeyPrefix, ...cellConfig }) => {
    const render = cellConfig.render || translationKeyPrefix || cellConfig.t ? (record: RecordData): React.ReactNode => {
      const value = get(record, dataKey, undefined);
      const hasNoValue = value === null || value === undefined;
      const cellT = translationKeyPrefix ? keyPrefixedCellT(unprefixedCellT, value) : unprefixedCellT;

      if (cellConfig.render) return cellConfig.render(record, actualT, cellT);
      if (hasNoValue) return renderPlaceholder(record);
      if (translationKeyPrefix) return cellT(value, { defaultValue: value });
      if (cellConfig.t) return cellConfig.t(value, { defaultValue: value });

      return value;
    } : undefined;

    return { dataKey, render, name, cellProps: (recordData: RecordData) => updateCellProps(cellProps?.(recordData)) };
    })} {...props}
  />;
};
