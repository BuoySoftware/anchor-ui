import { Box, BoxProps } from "@buoysoftware/anchor-layout";

type PageBreadcrumbsProps = Omit<BoxProps, "gridArea">;

export const PageBreadcrumbs: React.FC<PageBreadcrumbsProps> = ({
  children,
  ...props
}): React.ReactElement => {
  return (
    <Box gridArea="breadcrumbs" px="page.gutterX" pt="page.gutterY" {...props}>
      {children}
    </Box>
  );
};
