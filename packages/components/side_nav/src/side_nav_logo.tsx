import { Box } from "@buoysoftware/anchor-layout";

import logo from "./logo.png";

export const SideNavLogo: React.FC = (): React.ReactElement => {
  return <Box as="img" src={logo} data-testid="side-nav-logo" height="48px" />;
};
