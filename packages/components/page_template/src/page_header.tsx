import { Flex, FlexProps } from "@buoysoftware/anchor-layout";
import { Heading } from "@buoysoftware/anchor-typography";

interface OwnProps {
  title: string;
}

type PageHeaderProps = OwnProps & Omit<FlexProps, "gridArea">;

export const PageHeader: React.FC<PageHeaderProps> = ({
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
      {...props}
    >
      <Heading as="h1" size="xl">
        {title}
      </Heading>
    </Flex>
  );
};
