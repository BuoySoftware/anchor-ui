import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import {
  render as baseRender,
  screen,
  RenderResult,
} from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "@buoysoftware/anchor-theme";
import userEvent from "@testing-library/user-event";

import { TableActions } from "../src/table_actions";
import { Connection, PageableConnection } from "../src/types";

interface Donation {
  __typename: string;
  id: string;
  status: string | null;
}

interface MockConnection {
  endCursor?: string;
  startCursor?: string;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
}

const mockConnection = (
  paginationData: MockConnection
): Connection<Donation> & PageableConnection => {
  return {
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
      endCursor: paginationData.endCursor || null,
      startCursor: paginationData.startCursor || null,
      hasNextPage: paginationData.hasNextPage || false,
      hasPreviousPage: paginationData.hasPreviousPage || false,
      perPage: 2,
    },
    totalCount: 4,
  };
};

const mockFetchMore = jest.fn();

describe("<TableActions />", () => {
  const tables = {
    total_label: "Total {{total}}",
    actions: {
      next: "Next",
      previous: "Previous",
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

  interface Render extends RenderResult {
    user: ReturnType<typeof userEvent.setup>;
  }

  const render = (ui: React.ReactElement): Render => {
    return {
      user: userEvent.setup(),
      ...baseRender(<ThemeProvider theme={theme}>{ui}</ThemeProvider>),
    };
  };

  context("user is on first page of multiple", () => {
    it("endables the 'Next' button", () => {
      const paginationData = {
        hasNextPage: true,
        hasPreviousPage: false,
      };
      const connection = mockConnection(paginationData);
      const component = render(
        <TableActions data={connection} fetchMore={mockFetchMore} />
      );
      const nextButton = component.getByText("Next");

      expect(nextButton).toBeEnabled();
    });

    it("disables the 'Previous' button", () => {
      const paginationData = {
        hasNextPage: true,
        hasPreviousPage: false,
      };
      const connection = mockConnection(paginationData);
      const component = render(
        <TableActions data={connection} fetchMore={mockFetchMore} />
      );
      const prevButton = component.getByText("Previous");

      expect(prevButton).toBeDisabled();
    });

    it("fires the fetchMore function", async () => {
      const paginationData = {
        endCursor: "2",
        startCursor: "1",
        hasNextPage: true,
        hasPreviousPage: false,
      };
      const connection = mockConnection(paginationData);
      const expectedParams = {
        variables: { after: "2", before: undefined, first: 2, last: undefined },
      };
      const { user } = render(
        <TableActions data={connection} fetchMore={mockFetchMore} />
      );

      await user.click(screen.getByText("Next"));

      expect(mockFetchMore).toHaveBeenCalledWith(expectedParams);
    });
  });

  context("user is on last page of multiple", () => {
    it("disables the 'Next' button", () => {
      const paginationData = {
        hasNextPage: false,
        hasPreviousPage: true,
      };
      const connection = mockConnection(paginationData);
      const component = render(
        <TableActions data={connection} fetchMore={mockFetchMore} />
      );
      const nextButton = component.getByText("Next");

      expect(nextButton).toBeDisabled();
    });

    it("enables the 'Previous' button", () => {
      const paginationData = {
        hasNextPage: false,
        hasPreviousPage: true,
      };
      const connection = mockConnection(paginationData);
      const component = render(
        <TableActions data={connection} fetchMore={mockFetchMore} />
      );
      const prevButton = component.getByText("Previous");

      expect(prevButton).toBeEnabled();
    });

    it("fires the fetchMore function", async () => {
      const paginationData = {
        endCursor: "4",
        startCursor: "3",
        hasNextPage: false,
        hasPreviousPage: true,
      };
      const connection = mockConnection(paginationData);
      const expectedParams = {
        variables: { after: undefined, before: "3", first: undefined, last: 2 },
      };
      const { user } = render(
        <TableActions data={connection} fetchMore={mockFetchMore} />
      );

      await user.click(screen.getByText("Previous"));

      expect(mockFetchMore).toHaveBeenCalledWith(expectedParams);
    });
  });
});
