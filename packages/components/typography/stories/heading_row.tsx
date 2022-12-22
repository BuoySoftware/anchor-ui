import { Box } from "@buoysoftware/anchor-layout";
import { theme } from "@buoysoftware/anchor-theme";
import { remToPx, stripUnit } from "polished";

import { Heading, HeadingSize, HEADING_TOKEN_MAPPING } from "../src/heading";
import { Td } from "./td";

interface OwnProps {
  size: HeadingSize;
}

type RowProps = OwnProps;

export const HeadingRow: React.FC<RowProps> = ({
  size,
}): React.ReactElement => {
  const token = HEADING_TOKEN_MAPPING[size];

  return (
    <Box as="tr" pt="l">
      <Heading size={size} py="l" as="td">
        Heading - {size.toUpperCase()}
      </Heading>

      <Heading size={size} as="td">
        {stripUnit(remToPx(theme.fontSizes[token]))}
      </Heading>

      <Td>--</Td>

      <Td>Semibold (600)</Td>
      <Td>{stripUnit(remToPx(theme.lineHeights[token]))}</Td>
      <Td>--</Td>
    </Box>
  );
};
