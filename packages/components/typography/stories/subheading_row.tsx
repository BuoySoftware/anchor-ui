import { Element } from "@buoysoftware/anchor-layout";
import { theme } from "@buoysoftware/anchor-theme";
import { remToPx, stripUnit } from "polished";

import {
  Subheading,
  SubheadingSize,
  SUBHEADING_TOKEN_MAPPING,
} from "../src/subheading";
import { Td } from "./td";

interface OwnProps {
  size: SubheadingSize;
}

type RowProps = OwnProps;

export const SubheadingRow: React.FC<RowProps> = ({
  size,
}): React.ReactElement => {
  const token = SUBHEADING_TOKEN_MAPPING[size];

  return (
    <Element as="tr" pt="l">
      <Subheading size={size} py="l" as="td">
        Subheading - {size.toUpperCase()}
      </Subheading>

      <Subheading size={size} as="td">
        {stripUnit(remToPx(theme.fontSizes[token]))}
      </Subheading>

      <Td>--</Td>

      <Td>Regular (400)</Td>
      <Td>{stripUnit(remToPx(theme.lineHeights[token]))}</Td>
      <Td>0.1rem</Td>
    </Element>
  );
};
