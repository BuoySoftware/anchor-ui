import { Body as BodyComponent } from "../src";

export default {
  title: "Typography / Components / Body",
  component: BodyComponent,
  argTypes: {
    as: {
      options: ["div", "p", "span"],
      control: { type: "select" },
    },
    size: {
      options: ["l", "m", "s"],
      control: { type: "select" },
    },
  },
};

interface BodyParameters extends Object {
  content: string,
}

export const Body = ({ content, ...args }: BodyParameters) => {
  return (
    <BodyComponent size="m" {...args}>
      {content}
    </BodyComponent>
  );
};

Body.args = {
  size: "m",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed faucibus turpis in eu mi bibendum neque egestas congue. Arcu non odio euismod lacinia at quis risus. Id velit ut tortor pretium viverra suspendisse potenti. Nisl condimentum id venenatis a condimentum vitae. Blandit turpis cursus in hac. Tortor pretium viverra suspendisse potenti. Faucibus a pellentesque sit amet porttitor eget. Nullam ac tortor vitae purus faucibus ornare suspendisse. Cursus in hac habitasse platea dictumst quisque sagittis purus. Pellentesque habitant morbi tristique senectus. Sed vulputate odio ut enim. Dui vivamus arcu felis bibendum ut tristique. Amet volutpat consequat mauris nunc congue. Amet volutpat consequat mauris nunc.",
};
