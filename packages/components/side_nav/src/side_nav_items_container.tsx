import { Box } from "@buoysoftware/anchor-layout";

interface OwnProps {
  active?: boolean;
  children?: React.ReactNode;
  "data-testid"?: string;
}

type SideNavItemsContainerProps = OwnProps;

export const SideNavItemsContainer: React.FC<SideNavItemsContainerProps> = ({
  children,
  "data-testid": testId,
}): React.ReactElement => {
  return (
    <Box
      data-testid={testId || "side-nav-items"}
      gridArea="side-nav-items"
      as="ul"
      list-style="none"
    >
      {children}
    </Box>
  );
};
