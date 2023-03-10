import { Flex, FlexProps } from "@buoysoftware/anchor-layout";
import { Heading } from "@buoysoftware/anchor-typography";

interface OwnProps {
  children?: React.ReactNode;
  title: string;
}

type PageHeaderProps = OwnProps & Omit<FlexProps, "gridArea">;

export const PageHeader: React.FC<PageHeaderProps> = ({
  children,
  title,
  ...props
}): React.ReactElement => {
  return (
    <Flex
      as="header"
      data-testid="page-header"
      gridArea="header"
      mb="l"
      ml="page.gutterX"
      mt="xxxl"
      alignItems="center"
      {...props}
    >
      <Heading as="h1" mr="xs" size="xl">
        {title}
      </Heading>
      {children}
    </Flex>
  );
};
