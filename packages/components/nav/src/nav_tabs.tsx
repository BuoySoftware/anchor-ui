import { Box } from "@buoysoftware/anchor-layout";

import { NavigationItem as NavigationItemType } from "./types";
import { TabsContainer } from "./tabs_container";
import { Tab } from "./styled_tab";

interface OwnProps {
  navigationItems: NavigationItemType[];
}

type NavigationProps = OwnProps;

export const NavigationTabs: React.FC<NavigationProps> = ({
  navigationItems,
}): React.ReactElement => {
  return (
    <Box flex={1} height="100%">
      <TabsContainer>
        {navigationItems.map((navigationItem) => (
          <Tab key={navigationItem.title} navigationItem={navigationItem} />
        ))}
      </TabsContainer>
    </Box>
  );
};
