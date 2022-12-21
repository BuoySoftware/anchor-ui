import { Heading as HeadingComponent } from "../src";
import { ThemeProvider } from "styled-components";
import { theme } from "@buoysoftware/anchor-theme";

export default {
  title: "Typography / Components / Heading",
  component: HeadingComponent,
  argTypes: {
    as: {
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      control: { type: "select" },
    },
    size: {
      options: ["3xl", "2xl", "xl", "l", "m", "s"],
      control: { type: "select" },
    },
  },
};

export const Heading = ({ content, ...args }) => {
  return (
    <ThemeProvider theme={theme}>
      <HeadingComponent size="3xl" {...args}>
        {content}
      </HeadingComponent>
    </ThemeProvider>
  );
};

Heading.args = {
  size: "3xl",
  content: "Hello World",
};
