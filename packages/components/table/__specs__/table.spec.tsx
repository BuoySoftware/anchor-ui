import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { render as baseRender, RenderResult } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "@buoysoftware/anchor-theme";

import { extractConnectionNodes } from "../src/extract_connection_nodes";
import { Connection, PageableConnection, TableCellConfig } from "../src/types";
import { Table } from "../src/table";

interface Donation {
  __typename: string;
  id: string;
  status: string | null;
}

const records: Donation[] = [
  { __typename: "Donation", id: "1", status: "Good" },
  { __typename: "Donation", id: "2", status: "Bad" },
  { __typename: "Donation", id: "3", status: "Ugly" },
  { __typename: "Donation", id: "4", status: "Other" },
];

const cellConfigs: TableCellConfig<Donation>[] = [
  { dataKey: "id" },
  { dataKey: "status" },
];

const connection: Connection<Donation> & PageableConnection = {
  edges: [
    {
      node: {
        __typename: "Donation",
        id: "1",
        status: "Good",
      },
    },
    {
      node: {
        __typename: "Donation",
        id: "2",
        status: "Bad",
      },
    },
    {
      node: {
        __typename: "Donation",
        id: "3",
        status: "Ugly",
      },
    },
    {
      node: {
        __typename: "Donation",
        id: "4",
        status: "Other",
      },
    },
  ],
  pageInfo: {
    endCursor: null,
    startCursor: null,
    hasPreviousPage: false,
    hasNextPage: true,
    perPage: 2,
  },
  totalCount: 4,
};

describe("<Table />", () => {
  const render = (ui: React.ReactElement): RenderResult => {
    return baseRender(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
  };

  const tables = {
    empty_message: "Default empty message",
    test_table_donations_empty: {
      empty_message: "Nothing to see here",
    },
  };

  const tablesCustom = {
    tables: {
      test_table_donations_empty: {
        empty_message: "Namespaced custom message",
      },
    },
  };

  i18n.use(initReactI18next).init({
    lng: "en",
    ns: ["tables"],
    resources: {
      en: {
        tables,
        tablesCustom,
      },
    },
  });

  it("renders the table correctly", () => {
    const component = render(
      <Table
        cellConfigs={cellConfigs}
        name="test_table_donations"
        records={records}
        recordIdKey="id"
      />
    );

    expect(component.asFragment()).toMatchSnapshot();
  });

  context("data can be paginated", () => {
    it("renders the table and table actions correctly", () => {
      const records = extractConnectionNodes(connection);

      const component = render(
        <Table
          cellConfigs={cellConfigs}
          fetchMore={jest.fn()}
          name="test_table_donations"
          paginationData={connection}
          records={records}
          recordIdKey="id"
        />
      );

      expect(component.getByTestId("table-actions")).toBeInTheDocument();
    });
  });

  context("some data is null", () => {
    it("renders the placeholder", () => {
      const records: Donation[] = [
        { __typename: "Donation", id: "1", status: "Good" },
        { __typename: "Donation", id: "2", status: "Bad" },
        { __typename: "Donation", id: "3", status: "Ugly" },
        { __typename: "Donation", id: "4", status: null },
      ];

      const component = render(
        <Table
          cellConfigs={cellConfigs}
          name="test_table_donations"
          records={records}
          recordIdKey="id"
        />
      );

      const nullCell = component.getByTestId("tr-4-td-status");

      expect(nullCell).toHaveTextContent("--");
    });
  });

  context("records are empty", () => {
    it("renders a default empty state message", () => {
      const records: Donation[] = [];
      const component = render(
        <Table
          cellConfigs={cellConfigs}
          name="test_table_donations"
          records={records}
          recordIdKey="id"
        />
      );

      expect(component.getByTestId("empty-table-state")).toHaveTextContent(
        "Default empty message"
      );
    });

    it("does not render the table actions", () => {
      const records: Donation[] = [];
      const component = render(
        <Table
          cellConfigs={cellConfigs}
          name="test_table_donations"
          records={records}
          recordIdKey="id"
        />
      );

      expect(component.queryByTestId("table-actions")).not.toBeInTheDocument();
    });

    context("there is a custom empty state message", () => {
      it("renders the custom message", () => {
        const records: Donation[] = [];
        const component = render(
          <Table
            cellConfigs={cellConfigs}
            name="test_table_donations_empty"
            records={records}
            recordIdKey="id"
          />
        );

        expect(component.getByTestId("empty-table-state")).toHaveTextContent(
          "Nothing to see here"
        );
      });
    });

    context("a custom tNamespace is provided", () => {
      context("custom empty message exists", () => {
        it("renders the custom message from the namespace", () => {
          const records: Donation[] = [];
          const component = render(
            <Table
              cellConfigs={cellConfigs}
              name="test_table_donations_empty"
              records={records}
              recordIdKey="id"
              tNamespace="tablesCustom"
            />
          );

          expect(component.getByTestId("empty-table-state")).toHaveTextContent(
            "Namespaced custom message"
          );
        });
      });

      context("custom empty message does not exist", () => {
        it("renders the default fallback message", () => {
          const records: Donation[] = [];
          const component = render(
            <Table
              cellConfigs={cellConfigs}
              name="test_table_no_message"
              records={records}
              recordIdKey="id"
              tNamespace="tablesCustom"
            />
          );

          expect(component.getByTestId("empty-table-state")).toHaveTextContent(
            "Default empty message"
          );
        });
      });
    });

    it("does not render the table actions", () => {
      const records: Donation[] = [];
      const component = render(
        <Table
          cellConfigs={cellConfigs}
          name="test_table_donations"
          records={records}
          recordIdKey="id"
        />
      );

      expect(component.queryByTestId("table-actions")).not.toBeInTheDocument();
    });
  });
});
