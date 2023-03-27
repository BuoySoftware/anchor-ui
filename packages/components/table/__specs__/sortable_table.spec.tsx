import i18n from "i18next";
import userEvent from "@testing-library/user-event";
import { SortableTable } from "../src/sortable_table";
import { SortableTableCellConfig } from "../src/types";
import { act, render } from "../test_utils";
import { initReactI18next } from "react-i18next";
import { useCallback, useState } from "react";

interface Person {
  __typename: string;
  id: string;
  name: string;
  position: number;
}

const cellConfigs: SortableTableCellConfig<Person>[] = [
  { dataKey: "position", sortHandle: true },
  { dataKey: "name" },
];

const records: Person[] = [
  {
    __typename: "Person",
    id: "1",
    name: "Jerry Seinfeld",
    position: 1,
  },
  {
    __typename: "Person",
    id: "2",
    name: "George Costanza",
    position: 2,
  },
  {
    __typename: "Person",
    id: "3",
    name: "Elaine Benes",
    position: 3,
  },
  {
    __typename: "Person",
    id: "4",
    name: "Cosmo Kramer",
    position: 4,
  },
];

describe("<SortableTable />", () => {
  const tables = {
    donations: {
      th: {
        position: "Position",
        name: "Full Name",
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

  it("re-renders when records change", async () => {
    const DummyComponent: React.FC = (): React.ReactElement => {
      const [sortedRecords, setSortedRecords] = useState<Person[]>(records);

      const reverseRows = useCallback(() => {
        setSortedRecords((records) => [...records].reverse())
      }, [])

      return (
        <>
          <SortableTable
            cellConfigs={cellConfigs}
            name="donations"
            recordIdKey="id"
            records={sortedRecords}
          />
          <a href="#" onClick={reverseRows}>Reverse Rows</a>
        </>
      );
    };
    const user = userEvent.setup();
    const component = render(<DummyComponent />);

    expect(
      component.queryAllByRole("button").map((element) => element.textContent)
    ).toEqual(["1", "2", "3", "4"]);

    const reverseRowsButton = component.getByText("Reverse Rows");
    await act(() => user.click(reverseRowsButton));

    expect(
      component.queryAllByRole("button").map((element) => element.textContent)
    ).toEqual(["4", "3", "2", "1"]);
  });

  describe("onSort", () => {
    it("does not fire on initial render", () => {
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

      expect(onSort).not.toHaveBeenCalled();
    });

    it("fires when sorted by mouse", async () => {
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

      await act(() => user.pointer({ keys: "[MouseLeft>]", target: rows[3] }));
      await act(() => user.pointer({ keys: "[/MouseLeft]", target: rows[0] }));

      expect(onSort).toHaveBeenCalledWith([
        records[3],
        records[0],
        records[1],
        records[2],
      ]);
    });

    it("fires when sorted by keyboard", async () => {
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

      await act(() => user.keyboard("{Shift>}[Tab]{/Shift}")); // Focus last row
      await act(() => user.keyboard("[Space]")); // Activate "Drag" Start
      await act(() => user.keyboard("[ArrowUp]")); // "Drag" up
      await act(() => user.keyboard("[ArrowUp]")); // "Drag" up
      await act(() => user.keyboard("[ArrowUp]")); // "Drag" up
      await act(() => user.keyboard("[Space]")); // End "Drag"

      expect(onSort).toHaveBeenCalledWith([
        records[3],
        records[0],
        records[1],
        records[2],
      ]);
    });
  });
});
