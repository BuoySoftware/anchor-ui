import { ThemeProvider } from "styled-components";
import { theme } from "@buoysoftware/anchor-theme";
import { remToPx } from "polished";

import { Element } from "../src/Element";
import { Text as TextComponent, Variant } from "../src/Text";

export default {
  title: "Layout / Text",
  component: TextComponent,
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
};

const VARIANTS: Variant[] = [
  "bodyLargeBold",
  "bodyLargeMedium",
  "bodyMediumBold",
  "bodyMediumMedium",
  "bodySmallRegular",
  "bodySmallRegularItalic",
  "caption",
  "error",
  "headline1",
  "headline2",
  "headline3",
  "input",
  "label",
  "overline",
  "subtitle",
];

interface DefinitionProps {
  term: string;
  definition: string;
}

const Definition = ({ term, definition }: DefinitionProps) => {
  return (
    <>
      <TextComponent as="dt" variant="bodyMediumMedium">
        {term}
      </TextComponent>
      <TextComponent as="dd" variant="bodySmallRegular">
        {definition}
      </TextComponent>
    </>
  );
};

const Template = (args) => {
  return (
    <ThemeProvider theme={theme}>
      <Element display="grid" gridTemplateColumns="1fr 2fr" gridRowGap="50px">
        {VARIANTS.map((variant) => (
          <>
            <Element>
              <TextComponent variant="headline1">{variant}</TextComponent>
              <Element
                as="dl"
                mt="s"
                display="grid"
                gridTemplateColumns="1fr 1fr"
              >
                <Definition
                  term="Font Size"
                  definition={remToPx(theme.fontSizes.text[variant])}
                />
                <Definition
                  term="Font Style"
                  definition={theme.fontStyles.text[variant] ?? "regular"}
                />
                <Definition
                  term="Font Weight"
                  definition={theme.fontWeights.text[variant].toString()}
                />
                <Definition
                  term="Line Height"
                  definition={remToPx(theme.lineHeights.text[variant])}
                />
                <Definition
                  term="Text Transform"
                  definition={theme.textTransforms.text[variant] ?? "none"}
                />
                <Definition
                  term="Letter Spacing"
                  definition={theme.letterSpacings.text[variant] ?? "normal"}
                />
              </Element>
            </Element>
            <TextComponent {...args} variant={variant}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </TextComponent>
          </>
        ))}
      </Element>
    </ThemeProvider>
  );
};

//👇 Each story then reuses that template
export const Text = Template.bind({});
