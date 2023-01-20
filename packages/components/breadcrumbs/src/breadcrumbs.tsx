import { Box } from "@buoysoftware/anchor-layout";

import { StyledBreadcrumbs } from "./styled_breadcrumbs";

interface OwnProps {
  children?: React.ReactNode;
}

type BreadcrumbsProps = OwnProps;

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  children,
}): React.ReactElement => {
  return (
    <Box as="nav">
      <StyledBreadcrumbs>{children}</StyledBreadcrumbs>
    </Box>
  );
};
