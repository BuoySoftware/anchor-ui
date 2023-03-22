import { Heading as HeadingComponent } from "../src";

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

interface HeadingParameters extends Object {
  content: string;
}

export const Heading = ({ content, ...args }: HeadingParameters) => {
  return (
    <HeadingComponent size="3xl" {...args}>
      {content}
    </HeadingComponent>
  );
};

Heading.args = {
  size: "3xl",
  content: "Hello World",
};
