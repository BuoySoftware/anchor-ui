import get from "lodash/get";
import { Body } from "@buoysoftware/anchor-typography";

import { RenderPlaceholder, TableCellConfig, TableVariant } from "./types";

interface TdProps<RecordData> {
  cellConfig: TableCellConfig<RecordData>;
  record: RecordData;
  renderPlaceholder?: RenderPlaceholder<RecordData>;
  testId: string;
  variant?: TableVariant;
}

export const Td = function <RecordData>({
  cellConfig,
  record,
  renderPlaceholder = () => "--",
  testId,
}: TdProps<RecordData>): React.ReactElement {
  const { cellProps = () => undefined, dataKey, render } = cellConfig;

  const renderCellContent = (): React.ReactNode => {
    const value = get(record, dataKey, undefined);
    const hasNoValue = value === null || value === undefined;

    if (render) return render(record) || renderPlaceholder(record);
    if (hasNoValue) return renderPlaceholder(record);

    return value;
  };

  return (
    <Body
      py="s"
      px="xs"
      as="td"
      data-testid={testId}
      size="m"
      {...cellProps(record)}
    >
      {renderCellContent()}
    </Body>
  );
};
