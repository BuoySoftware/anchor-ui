import { Box } from "@buoysoftware/anchor-layout";

interface OwnProps {
  children: React.ReactNode;
}

type ActionBarProps = OwnProps;

export const ActionBar: React.FC<ActionBarProps> = ({
  children,
}): React.ReactElement => {
  return (
    <Box px="xxxl" py="xl" backgroundColor="background.secondary">
      {children}
    </Box>
  );
};
