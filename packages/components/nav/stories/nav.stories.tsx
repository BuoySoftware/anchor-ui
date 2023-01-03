import { useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "@buoysoftware/anchor-theme";
import { Box } from "@buoysoftware/anchor-layout";

import { Nav, NavLogo, NavSeparator, NavItemsContainer, NavItem } from "../src";

const StorybookPageCSS = createGlobalStyle`
  .sb-show-main.sb-main-padded {
    padding: 0;
  }
`;

export default {
  component: Nav,
  title: "Components / Nav",
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <StorybookPageCSS />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export const Basic = (args) => {
  return (
    <Nav>
      <NavLogo />
    </Nav>
  );
};

export const Tabs = (args) => {
  const [currentPage, setCurrentPage] = useState("page1");
  const onClick = (e): void => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    setCurrentPage(href.replace("#", ""));
  };

  return (
    <Box>
      <Nav>
        <NavLogo />
        <NavSeparator />
        <NavItemsContainer>
          <NavItem active={currentPage == "page1"}>
            <a onClick={onClick} href="#page1">
              Page 1
            </a>
          </NavItem>
          <NavItem active={currentPage == "page2"}>
            <a onClick={onClick} href="#page2">
              Page 2
            </a>
          </NavItem>
        </NavItemsContainer>
      </Nav>

      {currentPage == "page1" && <Box p="xl">Page 1</Box>}
      {currentPage == "page2" && <Box p="xl">Page 2</Box>}
    </Box>
  );
};
