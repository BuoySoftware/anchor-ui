import { useState } from "react";
import { Heading } from "@buoysoftware/anchor-typography";
import { Box } from "@buoysoftware/anchor-layout";
import { AppTemplate, AppSideNav, AppContent } from "@buoysoftware/anchor-app-template";

import { SideNavAppSwitcher, SideNav, SideNavItemsContainer, SideNavItem, SideNavFooter } from "../src";

export default {
  component: SideNav,
  title: "Components / SideNav",
  parameters: {
    layout: "fullscreen",
  },
};

export const Basic = () => {
  const [currentPage, setCurrentPage] = useState("page1");
  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (href) setCurrentPage(href.replace("#", ""));
  };
  return (
    <AppTemplate>
      <AppSideNav>
        <SideNav>
          <SideNavAppSwitcher triggerLabel="Centers">
            <a href="#centers">Centers</a>
          </SideNavAppSwitcher>
          <SideNavItemsContainer>
            <SideNavItem active={currentPage === "page1"}>
              <a onClick={onClick} href="#page1">Page 1</a>
            </SideNavItem>
            <SideNavItem active={currentPage === "page2"}>
              <a onClick={onClick} href="#page2">Page 2</a>
            </SideNavItem>
          </SideNavItemsContainer>
          <SideNavFooter>
            <Heading size="s" color="white">Employee N</Heading>
          </SideNavFooter>
        </SideNav>
      </AppSideNav>
      <AppContent>
        { currentPage === "page1" && <Box p="xl">Page 1</Box>}
        { currentPage === "page2" && <Box p="xl">Page 2</Box>}
      </AppContent>
    </AppTemplate>
  );
};
