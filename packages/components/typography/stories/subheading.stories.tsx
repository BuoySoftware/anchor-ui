import { Subheading as SubheadingComponent } from "../src";

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

interface SubheadingParameters extends Object {
  content: string;
}

export const Subheading = ({ content, ...args }: SubheadingParameters) => {
  return (
    <SubheadingComponent size="m" {...args}>
      {content}
    </SubheadingComponent>
  );
};

Subheading.args = {
  size: "m",
  content: "Subheading",
};
