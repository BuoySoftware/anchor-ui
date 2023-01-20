import { useContext } from "react";
import { TFunction } from "i18next";
import { useTranslation } from "react-i18next";
import { TableContext } from "./table_provider";

export const DEFAULT_TABLE_NAMESPACE = "tables";

interface UseTable {
  t: TFunction;
  tableName: string;
  tNamespace: string;
}

export const useTable = (): UseTable => {
  const { name, tNamespace = DEFAULT_TABLE_NAMESPACE } =
    useContext(TableContext);
  const keyPrefix =
    tNamespace === DEFAULT_TABLE_NAMESPACE ? name : `tables.${name}`;
  const { t } = useTranslation(tNamespace, { keyPrefix });

  return {
    t,
    tableName: name,
    tNamespace,
  };
};
