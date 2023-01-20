import { Box, BoxProps } from "@buoysoftware/anchor-layout";

type PageContentProps = Omit<BoxProps, "gridArea">;

export const PageContent: React.FC<PageContentProps> = ({
  children,
  ...props
}): React.ReactElement => {
  return (
    <Box gridArea="content" mt="40px" px="page.gutterX" {...props}>
      {children}
    </Box>
  );
};
