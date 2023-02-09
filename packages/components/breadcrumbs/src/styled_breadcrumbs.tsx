import styled from "styled-components";
import { Flex, FlexProps } from "@buoysoftware/anchor-layout";

export const StyledBreadcrumbs = styled(Flex).attrs(() => ({
  as: "nav",
  listStyle: "none",
}))<FlexProps>`
  .breadcrumb:not(:first-child):not(:empty):before {
    color: ${(props) => props.theme.colors.text.secondary};
    content: "/";
    font-size: ${(props) => props.theme.fontSizes["font-size-75"]};
    padding: 0 ${(props) => props.theme.space.xs};
  }
`;
