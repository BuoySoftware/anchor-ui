import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { ConnectionTable } from "../src/connection_table";
import { Connection, PageableConnection, TableCellConfig } from "../src/types";
import { render } from "../test_utils";

interface Donation {
  __typename: string;
  id: string;
  status: string;
}

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
    perPage: 4,
    hasNextPage: false,
    hasPreviousPage: false,
    endCursor: null,
    startCursor: null,
  },
  totalCount: 4,
};

describe("<ConnectionTable />", () => {
  const tables = {
    total_label: "Total {{total}}",
    actions: {
      next: "Next",
      previous: "Previous",
    },
    donations: {
      th: {
        id: "ID",
        status: "Status",
      },
    },
  };

  i18n.use(initReactI18next).init({
    lng: "en",
    ns: ["tables"],
    resources: {
      en: {
        tables,
      },
    },
  });

  it("renders a table based on a column configuration", () => {
    const component = render(
      <ConnectionTable
        cellConfigs={cellConfigs}
        connection={connection}
        name="donations"
        recordIdKey="id"
      />
    );

    expect(component.asFragment()).toMatchSnapshot();
  });
});
