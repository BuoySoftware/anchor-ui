import { Element } from "@buoysoftware/anchor-layout";
import { theme } from "@buoysoftware/anchor-theme";
import { remToPx, stripUnit } from "polished";

import { Body, BodySize, BODY_TOKEN_MAPPING } from "../src/body";
import { Td } from "./td";

interface OwnProps {
  size: BodySize;
}

type RowProps = OwnProps;

export const BodyRow: React.FC<RowProps> = ({ size }): React.ReactElement => {
  const token = BODY_TOKEN_MAPPING[size];

  return (
    <Element as="tr" pt="l">
      <Body size={size} py="l" as="td">
        Body - {size.toUpperCase()}
      </Body>

      <Body size={size} as="td">
        {stripUnit(remToPx(theme.fontSizes[token]))}
      </Body>

      <Td>--</Td>

      <Td>Bold (700)</Td>
      <Td>{stripUnit(remToPx(theme.lineHeights[token]))}</Td>
      <Td>--</Td>
    </Element>
  );
};
