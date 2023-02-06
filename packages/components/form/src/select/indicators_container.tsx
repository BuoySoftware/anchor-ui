import { Flex } from "@buoysoftware/anchor-layout";

interface OwnProps {
  children: React.ReactNode;
}

type IndicatorsContainer = OwnProps;

export const IndicatorsContainer: React.FC<IndicatorsContainer> = ({
  children,
}): React.ReactElement => {
  return <Flex px="xs">{children}</Flex>;
};
