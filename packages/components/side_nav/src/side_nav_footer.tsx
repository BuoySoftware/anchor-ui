import { Box } from "@buoysoftware/anchor-layout";

interface OwnProps {
  children?: React.ReactNode;
  "data-testid"?: string;
}

type SideNavFooterProps = OwnProps;

export const SideNavFooter: React.FC<SideNavFooterProps> = ({
  children,
  "data-testid": testId,
}): React.ReactElement => {
  return (
    <Box data-testid={testId || "side-nav-footer"} gridArea="side-nav-footer">
      {children}
    </Box>
  );
};
