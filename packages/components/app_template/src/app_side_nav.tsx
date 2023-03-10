import { Box, BoxProps } from "@buoysoftware/anchor-layout";

interface OwnProps {
  children?: React.ReactNode;
}

type AppSideNavProps = OwnProps & Omit<BoxProps, "gridArea">;

export const AppSideNav: React.FC<AppSideNavProps> = ({
  children,
  ...props
}): React.ReactElement => {
  return (
    <Box gridArea="side-nav" overflowY="auto" {...props}>
      {children}
    </Box>
  );
};
