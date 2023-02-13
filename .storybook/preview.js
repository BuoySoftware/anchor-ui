import { ThemeProvider } from "styled-components";
import { theme } from "@buoysoftware/anchor-theme";

export const parameters = {
  options: {
    storySort: {
      order: [
        "Typography",
        [
          "Introduction",
          "Components",
          ["Heading", "Subheading", "Body", "Markdown"],
        ],
        "Components",
        ["Forms", ["Introduction"]],
        "Templates",
        "Hooks",
        "Theme",
        "anchor-ui-compat",
      ],
    },
  },
  controls: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const argTypes = {
  theme: { table: { disable: true } },
  ref: { table: { disable: true } },
  listStyle: { table: { disable: true } },
  forwardedAs: { table: { disable: true } },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];
