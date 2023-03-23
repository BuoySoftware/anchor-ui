import { SpaceProps } from "styled-system";
import { Heading } from "@buoysoftware/anchor-typography";
import { useTranslation } from "react-i18next";
import { TextButton } from "@buoysoftware/anchor-button";
import { Flex } from "@buoysoftware/anchor-layout";

import { FetchMore, PageableConnection } from "./types";

type Cursor = Maybe<string>;

interface PaginationVariables {
  variables: {
    after?: string;
    before?: string;
    first?: number;
    last?: number;
  };
}
interface OwnProps {
  data: PageableConnection;
  fetchMore: FetchMore;
}

export type TableActionsProps = OwnProps & SpaceProps;

interface PaginationArguments {
  after?: Maybe<string>;
  before?: Maybe<string>;
  pageSize?: number;
}

const paginationVariables = (
  pageInfo: PaginationArguments
): PaginationVariables => {
  return {
    variables: {
      after: pageInfo.after ?? undefined,
      before: pageInfo.before ?? undefined,
      first: pageInfo.after ? pageInfo.pageSize : undefined,
      last: pageInfo.before ? pageInfo.pageSize : undefined,
    },
  };
};

export const TableActions: React.FC<TableActionsProps> = ({
  data: { totalCount, pageInfo },
  fetchMore,
  ...spaceProps
}): React.ReactElement => {
  const { t } = useTranslation("tables");
  const pageSize = pageInfo.perPage;
  const allDisabled = !pageInfo.hasNextPage && !pageInfo.hasPreviousPage;

  const onNext = (cursor: Cursor): void => {
    fetchMore(paginationVariables({ after: cursor, pageSize }));
  };

  const onPrevious = (cursor: Cursor): void => {
    fetchMore(paginationVariables({ before: cursor, pageSize }));
  };

  return (
    <Flex
      px="xs"
      mt="m"
      justifyContent="space-between"
      data-testid="table-actions"
      {...spaceProps}
    >
      <Heading size="s">{t("total_label", { total: totalCount })}</Heading>
      <Flex justifyContent="flex-end" alignItems="center">
        <TextButton
          disabled={!pageInfo.hasPreviousPage}
          onClick={() => onPrevious(pageInfo.startCursor)}
        >
          {t("tables:actions.previous")}
        </TextButton>
        <Heading
          color={allDisabled ? "text.tertiary" : "text.primary"}
          size="s"
          as="span"
          mx="s"
        >
          /
        </Heading>
        <TextButton
          disabled={!pageInfo.hasNextPage}
          onClick={() => onNext(pageInfo.endCursor)}
        >
          {t("tables:actions.next")}
        </TextButton>
      </Flex>
    </Flex>
  );
};
