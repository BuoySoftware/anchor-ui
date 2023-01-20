import snakeCase from "lodash/snakeCase";
import kebabCase from "lodash/kebabCase";
import { Heading } from "@buoysoftware/anchor-typography";

import { StyledThead, StyledTheadProps } from "./styled_thead";
import { useTable } from "./use_table";
import { TableCellConfig } from "./types";

interface OwnProps<RecordData> {
  cellConfigs: TableCellConfig<RecordData>[];
}

type TableHeadProps<RecordData> = OwnProps<RecordData> &
  Omit<StyledTheadProps, "theme">;

export const Thead = function <RecordData>({
  cellConfigs,
  ...styledTheadProps
}: TableHeadProps<RecordData>): React.ReactElement {
  const { t } = useTable();

  return (
    <StyledThead {...styledTheadProps}>
      <tr>
        {cellConfigs.map(({ dataKey }, index) => {
          return (
            <Heading
              size="s"
              as="th"
              py="s"
              px="xs"
              key={`th-${index}-${kebabCase(String(dataKey))}`}
            >
              {dataKey && t(`th.${snakeCase(String(dataKey))}`)}
            </Heading>
          );
        })}
      </tr>
    </StyledThead>
  );
};
