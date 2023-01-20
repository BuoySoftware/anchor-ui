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
    <Flex as="header" mt="xxxl" mb="l" ml="page.gutterX" {...props}>
      <Heading as="h1" gridArea="page-title" size="xl">
        {title}
      </Heading>
    </Flex>
  );
};
