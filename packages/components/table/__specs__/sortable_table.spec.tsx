import i18n from "i18next";
import userEvent from "@testing-library/user-event";
import { SortableTable } from "../src/sortable_table";
import { SortableTableCellConfig } from "../src/types";
import { act, render } from "../test_utils";
import { initReactI18next } from "react-i18next";

interface Donation {
  __typename: string;
  id: string;
  status: string;
}

const cellConfigs: SortableTableCellConfig<Donation>[] = [
  { dataKey: "id", sortHandle: true },
  { dataKey: "status" },
];

const records: Donation[] = [
  {
    __typename: "Donation",
    id: "1",
    status: "Good",
  },
  {
    __typename: "Donation",
    id: "2",
    status: "Bad",
  },
  {
    __typename: "Donation",
    id: "3",
    status: "Ugly",
  },
  {
    __typename: "Donation",
    id: "4",
    status: "Other",
  },
];

describe("<SortableTable />", () => {
  const tables = {
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

  it("renders a sortable table", () => {
    const component = render(
      <SortableTable
        cellConfigs={cellConfigs}
        name="donations"
        onSort={jest.fn()}
        recordIdKey="id"
        records={records}
      />
    );

    expect(component.asFragment()).toMatchSnapshot();
  });

  describe("sorting by mouse", () => {
    it("fires callback with sorted items", async () => {
      const user = userEvent.setup();
      const onSort = jest.fn();
      const component = render(
        <SortableTable
          cellConfigs={cellConfigs}
          name="donations"
          onSort={onSort}
          recordIdKey="id"
          records={records}
        />
      );
      const rows = component.queryAllByRole("button");

      await act(() => user.pointer({ keys: "[MouseLeft>]", target: rows[3] }))
      await act(() => user.pointer({ keys: "[/MouseLeft]", target: rows[0] }))

      expect(onSort).toHaveBeenCalledWith([
        records[3],
        records[0],
        records[1],
        records[2]
      ])
    })
  });

  describe("sorting by keyboard", () => {
    it("fires callback with sorted items", async () => {
      const user = userEvent.setup();
      const onSort = jest.fn();
      render(
        <SortableTable
          cellConfigs={cellConfigs}
          name="donations"
          onSort={onSort}
          recordIdKey="id"
          records={records}
        />
      );

      await act(() => user.keyboard("{Shift>}[Tab]{/Shift}")) // Focus last row
      await act(() => user.keyboard("[Space]")) // Activate "Drag" Start
      await act(() => user.keyboard("[ArrowUp]")) // "Drag" up
      await act(() => user.keyboard("[ArrowUp]")) // "Drag" up
      await act(() => user.keyboard("[ArrowUp]")) // "Drag" up
      await act(() => user.keyboard("[Space]")) // End "Drag"

      expect(onSort).toHaveBeenCalledWith([
        records[3],
        records[0],
        records[1],
        records[2]
      ])
    })
  });
});
