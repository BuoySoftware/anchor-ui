import { Flex } from "@buoysoftware/anchor-layout";

export const NavSeparator: React.FC = (): React.ReactElement => {
  return (
    <Flex
      width="1px"
      mx="xxxl"
      my="s"
      display="flex"
      alignSelf="stretch"
      backgroundColor="#DCDCDC"
    />
  );
};
