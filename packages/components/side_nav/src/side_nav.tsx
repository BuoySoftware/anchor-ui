import { Box, Grid } from "@buoysoftware/anchor-layout";
import { SideNavLogo } from "./side_nav_logo";

interface OwnProps {
  children?: React.ReactNode;
  "data-testid"?: string;
}

type SideNavProps = OwnProps;

const GRID_TEMPLATE_AREAS = `
  'side-nav-logo'
  'side-nav-items'
  'side-nav-footer'
`;

export const SideNav: React.FC<SideNavProps> = ({
  children,
  "data-testid": testId = "side-nav",
}): React.ReactElement => {
  return (
    <Grid
      data-testid={testId}
      gridTemplateAreas={GRID_TEMPLATE_AREAS}
      gridTemplateRows="auto 1fr auto"
      p="xl"
      bg="brandPrimary"
      width="240px"
      height="100vh"
    >
      <Box gridArea="side-nav-logo">
        <SideNavLogo />
      </Box>

      {children}
    </Grid>
  );
};
