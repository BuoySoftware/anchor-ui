import { Box } from "@buoysoftware/anchor-layout";

import logo from "./logo.png";

export const NavLogo: React.FC = (): React.ReactElement => {
  return <Box as="img" src={logo} height="40px" />;
};
