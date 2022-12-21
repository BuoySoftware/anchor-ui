export const parameters = {
  options: {
    storySort: {
      order: [
        "Typography",
        ["Introduction", "Components", ["Heading", "Subheading", "Body"]],
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
