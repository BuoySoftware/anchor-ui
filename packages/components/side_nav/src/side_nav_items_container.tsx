import { Box } from "@buoysoftware/anchor-layout";

interface OwnProps {
  active?: boolean;
  children?: React.ReactNode;
}

type SideNavItemsContainerProps = OwnProps;

export const SideNavItemsContainer: React.FC<SideNavItemsContainerProps> = ({
  children,
}): React.ReactElement => {
  return (
    <Box gridArea="side-nav-items" as="ul" list-style="none">
      {children}
    </Box>
  );
};
