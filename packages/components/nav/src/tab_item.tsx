import styled from "styled-components";

import { ItemWrapper, ItemWrapperProps } from "./item_wrapper";
import { Tab } from "./tab";

interface OwnProps {
  active?: boolean;
}

export type TabItemProps = OwnProps & ItemWrapperProps;

export const TabItem = styled(({ active = false, children, ...props }: TabItemProps) => {
  return (
    <ItemWrapper active={active} {...props} margin="0" padding="0">
      <Tab active={active}>
        {children}
      </Tab>
    </ItemWrapper>
  );
})``;
