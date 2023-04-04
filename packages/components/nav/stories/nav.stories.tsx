import { useState } from "react";
import { Box } from "@buoysoftware/anchor-layout";
import { Heading } from "@buoysoftware/anchor-typography";

import { Nav, NavLogo, NavSeparator, NavItemsContainer, NavItem, ItemWrapper, Tab } from "../src";

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

export const NavLinks = () => {
  const [currentPage, setCurrentPage] = useState("page1");
  const onClick = (e: React.MouseEvent): void => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href") || "";
    setCurrentPage(href.replace("#", ""));
  };

  return (
    <Box>
      <Nav>
        <NavLogo />
        <NavSeparator />
        <NavItemsContainer>
          <NavItem active={currentPage == "page1"}>
            <a onClick={onClick} href="#page1" style={{ textDecoration: "none", color: "inherit" }}>
              Page 1
            </a>
          </NavItem>
          <NavItem active={currentPage == "page2"}>
            <a onClick={onClick} href="#page2" style={{ textDecoration: "none", color: "inherit" }}>
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

export const TabBar = () => {
  const [active, setTabIndex] = useState(0);

  return (
    <Nav variant="tabs">
      <NavItemsContainer>
        <ItemWrapper active={active === 0} margin="0" padding="0">
          <Tab active={active === 0} onClick={() => setTabIndex(0)}>
            Current Cycle
          </Tab>
        </ItemWrapper>
        <ItemWrapper active={active === 1} margin="0" padding="0">
          <Tab active={active === 1} onClick={() => setTabIndex(1)}>
            Visits
          </Tab>
        </ItemWrapper>
        <ItemWrapper active={active === 2} margin="0" padding="0">
          <Tab active={active === 2} onClick={() => setTabIndex(2)}>
            Donation Cycles
          </Tab>
        </ItemWrapper>
      </NavItemsContainer>
    </Nav>
  )
}
