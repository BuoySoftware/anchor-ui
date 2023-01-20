import { useTranslation } from "react-i18next";
import { Body } from "@buoysoftware/anchor-typography";
import { useTable, DEFAULT_TABLE_NAMESPACE } from "./use_table";

export const EmptyMessage: React.FC = (): React.ReactElement => {
  const { tNamespace, tableName } = useTable();
  const { t } = useTranslation();

  const translationLookup = [
    `${tNamespace}:${tableName}.empty_message`,
    `${tNamespace}:tables.${tableName}.empty_message`,
    `${DEFAULT_TABLE_NAMESPACE}:${tableName}.empty_message`,
    `${DEFAULT_TABLE_NAMESPACE}:empty_message`,
  ];

  return (
    <Body mt="xl" size="m" textAlign="center" data-testid="empty-table-state">
      {t(translationLookup)}
    </Body>
  );
};
