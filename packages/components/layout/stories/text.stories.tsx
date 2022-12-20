import { ThemeProvider } from "styled-components";
import { theme } from "@buoysoftware/anchor-theme";

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

const Template = (args) => {
  return (
    <ThemeProvider theme={theme}>
      <Element display="grid" gridTemplateColumns="1fr 2fr" gridRowGap="50px">
        {VARIANTS.map((variant) => (
          <>
            <TextComponent variant="headline1">{variant}</TextComponent>
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
