import { get } from "lodash";
import { readableColor } from "polished";
import { Box, Flex, Grid } from "@buoysoftware/anchor-layout";
import { Body, Heading } from "@buoysoftware/anchor-typography";
import { theme } from "../src";
import { base as baseColors } from "../src/colors/base";

export default {
  title: "Theme / Colors",
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
};

const Palette: React.FC<{ family: string }> = ({
  family,
}): React.ReactElement => {
  const length = 10;

  return (
    <>
      {Array.apply(null, { length }).map((_, i) => (
        <PaletteSwatch key={i} family={family} index={i} />
      ))}
    </>
  );
};

const PaletteSwatch: React.FC<{ family: string; index: number }> = ({
  index,
  family,
}): React.ReactElement => {
  const offset = 10 * index;
  const number = 100 - offset;
  const colorName = `${family}${number}`;
  const hex = theme.colors[colorName];

  return <Swatch color={hex} name={colorName} />;
};

const Swatch: React.FC<{ color: string; name: string }> = ({
  color,
  name,
}): React.ReactElement => {
  const textColor = readableColor(
    color,
    theme.colors.white,
    theme.colors.text.primary
  );

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      size="120px"
      backgroundColor={color}
    >
      <Body color={textColor} size="m">
        {name}
      </Body>
      <Body color={textColor} size="m">
        {color}
      </Body>
    </Flex>
  );
};

const DotSwatch: React.FC<{ alias: string }> = ({
  alias,
}): React.ReactElement => {
  const color = get(theme.colors, alias);
  const baseColor = Object.keys(baseColors).find(
    (key) => baseColors[key] === color
  );

  return (
    <Flex>
      <Box size="48px" borderRadius="100%" backgroundColor={alias} mr="l" />
      <Box>
        <Body size="l">{alias}</Body>
        <Body size="l">{baseColor}</Body>
      </Box>
    </Flex>
  );
};

export const Colors = () => {
  return (
    <>
      <Box>
        <Heading as="h2" size="3xl">
          Core Specturms
        </Heading>

        <Heading as="p" color="text.secondary" size="xl">
          Neutral colors apply to most text, backgrounds, borders, etc.
        </Heading>

        <Flex my="l">
          <Palette family="grey" />
          <Swatch color="#FFFFFF" name="white" />
        </Flex>

        <Heading as="p" color="text.secondary" size="xl">
          We use a standard semantic palette to communicate consistently. Blue
          is our main accent color used for primary actions, while Green,
          Yellow, Red represent positive, warning, and critcal messaging
          respectively.
        </Heading>

        <Flex my="l">
          <Palette family="blue" />
        </Flex>

        <Flex my="l">
          <Palette family="green" />
        </Flex>

        <Flex my="l">
          <Palette family="yellow" />
        </Flex>

        <Flex my="l">
          <Palette family="red" />
        </Flex>
      </Box>

      <Box mt="120px">
        <Heading as="h2" size="3xl">
          Text
        </Heading>
        <Heading as="p" color="text.secondary" size="xl">
          These are the color styles used for text, or icons paired with text
        </Heading>

        <Grid mt="xl" gridTemplateColumns="repeat(2, 1fr)" gridRowGap="xl">
          <DotSwatch alias="text.primary" />
          <DotSwatch alias="text.link" />

          <DotSwatch alias="text.secondary" />
          <DotSwatch alias="text.linkHover" />

          <DotSwatch alias="text.tertiary" />
          <DotSwatch alias="text.linkPressed" />
        </Grid>
      </Box>

      <Box mt="120px">
        <Heading as="h2" size="3xl">
          Interactive
        </Heading>
        <Heading as="p" color="text.secondary" size="xl">
          These are the color styles used for interactive, non-text content like
          primary buttons, selected states for checkboxes and radios, etc.
        </Heading>

        <Grid mt="xl" gridTemplateColumns="1fr" gridRowGap="xl">
          <DotSwatch alias="interactive.default" />
          <DotSwatch alias="interactive.hover" />
          <DotSwatch alias="interactive.pressed" />
        </Grid>
      </Box>

      <Box mt="120px">
        <Heading as="h2" size="3xl">
          Background
        </Heading>
        <Heading as="p" color="text.secondary" size="xl">
          These are the color styles used for surfaces and backgrounds
        </Heading>

        <Grid mt="xl" gridTemplateColumns="repeat(4, 1fr)" gridRowGap="xl">
          <DotSwatch alias="background.default" />
          <DotSwatch alias="background.secondary" />
          <DotSwatch alias="background.selected" />
          <DotSwatch alias="background.warning" />

          <DotSwatch alias="background.hover" />
          <DotSwatch alias="background.secondaryHover" />
          <DotSwatch alias="background.selectedSubdued" />
          <DotSwatch alias="background.warningSubdued" />

          <DotSwatch alias="background.pressed" />
          <DotSwatch alias="background.secondaryPressed" />
          <DotSwatch alias="background.success" />
          <DotSwatch alias="background.critical" />

          <DotSwatch alias="background.disabled" />
          <Box />
          <DotSwatch alias="background.successSubdued" />
          <DotSwatch alias="background.criticalSubdued" />
        </Grid>
      </Box>

      <Box mt="120px">
        <Heading as="h2" size="3xl">
          Borders
        </Heading>
        <Heading as="p" color="text.secondary" size="xl">
          These are the color styles used for borders/dividers
        </Heading>

        <Grid mt="xl" gridTemplateColumns="repeat(2, 1fr)" gridRowGap="xl">
          <DotSwatch alias="border.default" />
          <DotSwatch alias="border.focus" />

          <DotSwatch alias="border.subdued" />
          <DotSwatch alias="border.critical" />

          <DotSwatch alias="border.hover" />
          <DotSwatch alias="border.success" />
        </Grid>
      </Box>
    </>
  );
};
