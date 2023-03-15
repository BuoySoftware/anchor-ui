import { Flex } from "@buoysoftware/anchor-layout";
import { Heading } from "@buoysoftware/anchor-typography";

interface OwnProps {
  title: string;
}

export type LegacyModalHeaderProps = OwnProps;

export const LegacyModalHeader: React.FC<LegacyModalHeaderProps> = ({
  title,
}): React.ReactElement => {
  return (
    <Flex my="xl" px="modal.gutterX">
      <Heading data-testid="" size="xl">
        {title}
      </Heading>
    </Flex>
  );
};
