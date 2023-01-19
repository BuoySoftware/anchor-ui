import { Box } from "@buoysoftware/anchor-layout";

interface OwnProps {
  children?: React.ReactNode;
}

type SideNavFooterProps = OwnProps;

export const SideNavFooter: React.FC<SideNavFooterProps> = ({
  children,
}): React.ReactElement => {
  return <Box gridArea="side-nav-footer">{children}</Box>;
};
