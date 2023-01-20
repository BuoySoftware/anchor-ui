import { Flex, FlexProps } from "@buoysoftware/anchor-layout";

interface OwnProps {
  children: React.ReactNode;
  "data-testid"?: string;
}

type PageActionBarProps = OwnProps & Omit<FlexProps, "gridArea">;

export const PageActionBar: React.FC<PageActionBarProps> = ({
  children,
  ...props
}): React.ReactElement => {
  return (
    <Flex
      backgroundColor="background.secondary"
      gridArea="action-bar"
      px="xxxl"
      py="xl"
      {...props}
    >
      {children}
    </Flex>
  );
};
