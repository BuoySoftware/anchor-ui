import styled from "styled-components";

import { Box } from "@buoysoftware/anchor-layout";
import { Body, Heading } from "@buoysoftware/anchor-typography";

interface OwnProps {
  active?: boolean;
  children?: React.ReactNode;
  "data-testid": string;
}

type SideNavItemProps = OwnProps;

export const SideNavItem = styled(
  ({ active = false, children, "data-testid": testId, ...props }) => {
    return (
      <Box as="li" my="s" {...props}>
        {active ? (
          <Heading
            as="span"
            color="brandCoral"
            data-testid={testId || "side-nav-item"}
            size="s"
          >
            {children}
          </Heading>
        ) : (
          <Body as="span" color="white" size="m">
            {children}
          </Body>
        )}
      </Box>
    );
  }
)<SideNavItemProps>`
  & a {
    text-decoration: none;
    color: inherit;
  }
`;
