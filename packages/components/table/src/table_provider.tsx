import { createContext } from "react";

interface TableScope {
  tNamespace?: string;
  name: string;
}

export const TableContext = createContext<TableScope>({
  tNamespace: "",
  name: "",
});

export const TableProvider = TableContext.Provider;
