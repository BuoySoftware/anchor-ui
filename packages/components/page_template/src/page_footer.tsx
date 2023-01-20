import { Flex, FlexProps } from "@buoysoftware/anchor-layout";

interface OwnProps {
  children?: React.ReactNode;
}

export type PageFooterProps = OwnProps & Omit<FlexProps, "gridArea">;

export const PageFooter: React.FC<PageFooterProps> = ({
  children,
  ...props
}): React.ReactElement => {
  return (
    <Flex
      alignItems="center"
      as="footer"
      borderTop="1SolidSubdued"
      data-testid="page-footer"
      gap="m"
      gridArea="footer"
      height="pageFooter"
      justifyContent="flex-end"
      px="xxxl"
      {...props}
    >
      {children}
    </Flex>
  );
};
