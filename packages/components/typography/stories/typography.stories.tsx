import { Element } from "@buoysoftware/anchor-layout";
import { Fragment } from "react";
import { ThemeProvider } from "styled-components";
import { remToPx, stripUnit } from "polished";
import { theme } from "@buoysoftware/anchor-theme";

import { Body } from "../src/body";
import { BodyRow } from "./body_row";
import { Heading } from "../src/heading";
import { HeadingRow } from "./heading_row";
import { SubheadingRow } from "./subheading_row";
import { Text } from "../src/text";
import { Th } from "./th";

export default {
  title: "Typography / Introduction",
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
};

const TOKENS = [
  "font-size-700",
  "font-size-600",
  "font-size-500",
  "font-size-400",
  "font-size-300",
  "font-size-200",
  "font-size-100",
  "font-size-75",
];

export const Introduction = (args) => {
  return (
    <ThemeProvider theme={theme}>
      <Element padding="120px">
        <Element justifyContent="space-between" display="flex">
          <Element>
            <Heading as="h1" size="3xl">
              Type Sizes
            </Heading>

            <Element
              width="400px"
              mt="xxxl"
              display="grid"
              gridTemplateColumns="2fr 1fr 1fr"
              gridRowGap="20px"
            >
              <Heading size="m">Token</Heading>
              <Heading size="m">Px</Heading>
              <Heading size="m">REM</Heading>

              {TOKENS.map((token) => (
                <Fragment key={token}>
                  <Body size="l">{token}</Body>
                  <Body size="l">
                    {stripUnit(remToPx(theme.fontSizes[token]))}
                  </Body>
                  <Body size="l">{stripUnit(theme.fontSizes[token])}</Body>
                </Fragment>
              ))}
            </Element>
          </Element>
          <Element>
            <Heading as="h1" size="3xl">
              Type Sizes
            </Heading>

            <Element mt="xxxl">
              <Body color="#46494D" size="l">
                Our stack utilizes core system fonts that match the default font
                of a user’s operating system.
              </Body>

              <Element as="ul" listStyle="disc inside" mt="m">
                <Body color="#46494D" as="li" size="l">
                  Apple devices will display San Francisco
                </Body>
                <Body color="#46494D" as="li" size="l">
                  Android devices will display Roboto
                </Body>
                <Body color="#46494D" as="li" size="l">
                  Devices running Windows will display Segoe UI
                </Body>
              </Element>

              <Element mt="m" padding="l" bg="#F5F6F7">
                <Text as="pre" fontSize="16px">
                  font-family: -apple-system, BlinkMacSystemFont, San Francisco,
                  Segoe UI, Roboto, Helvetica Neue, sans-serif;
                </Text>
              </Element>

              <Element mt="36px">
                <Body size="l">
                  We also utilize the following classes to improve legibility.
                </Body>

                <Element mt="m" padding="l" as="pre" bg="#F5F6F7">
                  <Text fontSize="16px" as="pre">
                    -webkit-font-smoothing: antialiased;
                  </Text>
                  <Text fontSize="16px" as="pre">
                    -moz-osx-font-smoothing: grayscale;
                  </Text>
                </Element>
              </Element>
            </Element>
          </Element>
        </Element>

        <Element mt="160px">
          <Heading as="h1" size="3xl">
            Type Styles
          </Heading>

          <Element as="table" mt="60px" min-width="1200px" width="100%">
            <Element as="thead" mb="60px">
              <Element as="tr" borderBottom="1SolidNavy">
                <Th>Name</Th>
                <Th>Size (Large screens)</Th>
                <Th>Size (Small screens)</Th>
                <Th>Weight/Styles</Th>
                <Th>Line Height</Th>
                <Th>Letter Spacing</Th>
              </Element>
            </Element>

            <Element as="tbody">
              <HeadingRow size="3xl" />
              <HeadingRow size="2xl" />
              <HeadingRow size="xl" />
              <HeadingRow size="l" />
              <HeadingRow size="m" />
              <HeadingRow size="s" />

              <Element as="tr" borderBottom="1SolidNavy">
                <Element as="td" height="10px" />
              </Element>

              <SubheadingRow size="m" />
              <SubheadingRow size="s" />

              <Element as="tr" borderBottom="1SolidNavy">
                <Element as="td" height="10px" />
              </Element>

              <BodyRow size="l" />
              <BodyRow size="m" />
              <BodyRow size="s" />
            </Element>
          </Element>
        </Element>
      </Element>
    </ThemeProvider>
  );
};
