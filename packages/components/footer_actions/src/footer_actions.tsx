import { Flex, FlexProps } from "@buoysoftware/anchor-layout";

interface OwnProps {
  children?: React.ReactNode;
}

export type FooterActionsProps = OwnProps & FlexProps;

export const FooterActions: React.FC<FooterActionsProps> = ({
  children,
  ...props
}): React.ReactElement => {
  return (
    <Flex
      alignItems="center"
      as="footer"
      borderTop="1SolidSubdued"
      data-testid="footer-actions"
      gap="m"
      height="footerActions"
      justifyContent="flex-end"
      px="xxxl"
      {...props}
    >
      {children}
    </Flex>
  );
};
