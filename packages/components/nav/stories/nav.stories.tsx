import { useState } from "react";
import { Box } from "@buoysoftware/anchor-layout";
import { Heading } from "@buoysoftware/anchor-typography";

import { Nav, NavLogo, NavSeparator, NavItemsContainer, NavItem } from "../src";

export default {
  component: Nav,
  title: "Components / Nav",
  parameters: {
    layout: "fullscreen",
  },
};

export const Basic = () => {
  return (
    <Nav>
      <NavLogo />
    </Nav>
  );
};

export const Tabs = () => {
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

export const SubNav = () => {
  return (
    <Box>
      <Nav variant="sub">
        <Heading size="l">Sub page</Heading>
      </Nav>
    </Box>
  );
};
