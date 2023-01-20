import { render } from "@testing-library/react";

import { TableProvider } from "../src/table_provider";
import { DEFAULT_TABLE_NAMESPACE } from "../src/use_table";
import { TableCellConfig } from "../src/types";
import { Td } from "../src/td";

interface Record {
  name?: string | null;
  total?: number;
}

const testId = "foo-bar";

interface MockTableProps {
  children?: React.ReactNode;
  tNamespace?: string;
}

const MockTable: React.FC<MockTableProps> = ({
  children,
  tNamespace = DEFAULT_TABLE_NAMESPACE,
}): React.ReactElement => {
  return (
    <TableProvider value={{ name: "mockTable", tNamespace }}>
      <table>
        <tbody>
          <tr>{children}</tr>
        </tbody>
      </table>
    </TableProvider>
  );
};

describe("<Td />", () => {
  it("renders placeholder", () => {
    const cellConfig: TableCellConfig<Record> = { dataKey: "name" };
    const emptyRecord = { name: null };
    const component = render(
      <MockTable>
        <Td cellConfig={cellConfig} record={emptyRecord} testId={testId} />
      </MockTable>
    );

    expect(component.queryByText("--")).toBeInTheDocument();
  });
});
