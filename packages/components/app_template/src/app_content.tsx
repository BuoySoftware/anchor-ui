import { Box, BoxProps } from "@buoysoftware/anchor-layout";

interface OwnProps {
  children?: React.ReactNode;
}

type AppContentProps = OwnProps & Omit<BoxProps, "gridArea">;

export const AppContent: React.FC<AppContentProps> = ({
  children,
  ...props
}): React.ReactElement => {
  return (
    <Box gridArea="app-content" overflowY="auto" {...props}>
      {children}
    </Box>
  );
};
