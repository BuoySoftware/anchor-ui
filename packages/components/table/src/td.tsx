import get from "lodash/get";
import { Body, BodyProps } from "@buoysoftware/anchor-typography";
import { forwardRef } from "react";

import { TableCell } from "./types";

export type TdProps<RecordData> = TableCell<RecordData> & Omit<BodyProps, "size">

function PreForwardedTd<RecordData>({
  cellConfig,
  record,
  renderPlaceholder = () => "--",
  testId,
  ...tdProps
}: TdProps<RecordData>,
  ref?: React.ForwardedRef<HTMLTableCellElement>
): React.ReactElement {
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
      as="td"
      data-testid={testId}
      px="xs"
      py="s"
      ref={ref}
      size="m"
      {...cellProps(record)}
      {...tdProps}
    >
      {renderCellContent()}
    </Body>
  );
};

export const Td = forwardRef(PreForwardedTd);
