import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "@buoysoftware/anchor-theme";

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
  return (
    <Nav>
      <NavLogo />
      <NavSeparator />
      <NavItemsContainer>
        <NavItem>
          <a href="#page1">Page 1</a>
        </NavItem>
        <NavItem>
          <a href="#page2">Page 2</a>
        </NavItem>
      </NavItemsContainer>
    </Nav>
  );
};
