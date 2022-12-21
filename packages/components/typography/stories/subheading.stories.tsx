import { Subheading as SubheadingComponent } from "../src";
import { ThemeProvider } from "styled-components";
import { theme } from "@buoysoftware/anchor-theme";

export default {
  title: "Typography / Components / Subheading",
  component: SubheadingComponent,
  argTypes: {
    textTransform: { table: { disable: true } },
    as: {
      options: ["p", "h1", "h2", "h3", "h4", "h5", "h6"],
      control: { type: "select" },
    },
    size: {
      options: ["m", "s"],
      control: { type: "select" },
    },
  },
};

export const Subheading = ({ content, ...args }) => {
  return (
    <ThemeProvider theme={theme}>
      <SubheadingComponent size="m" {...args}>
        {content}
      </SubheadingComponent>
    </ThemeProvider>
  );
};

Subheading.args = {
  size: "m",
  content: "Subheading",
};
