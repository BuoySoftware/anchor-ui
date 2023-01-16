import { Flex, FlexProps } from "@buoysoftware/anchor-layout";

type StickyFooterProps = Omit<FlexProps, "height">;

export const StickyFooter: React.FC<StickyFooterProps> = ({
  children,
  ...props
}): React.ReactElement => {
  return (
    <Flex
      alignItems="center"
      as="footer"
      borderTop="1SolidSubdued"
      bottom={0}
      gap="m"
      height="stickyFooter"
      justifyContent="flex-end"
      left={0}
      position="fixed"
      px="xxxl"
      right={0}
      zIndex="2"
      {...props}
    >
      {children}
    </Flex>
  );
};
