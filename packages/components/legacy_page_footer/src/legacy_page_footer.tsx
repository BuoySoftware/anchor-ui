import { Box } from "@buoysoftware/anchor-layout";

interface OwnProps {
  children?: React.ReactNode;
}

export const LegacyPageFooter: React.FC<OwnProps> = ({
  children,
}): React.ReactElement => {
  return (
    <Box
      bg="white"
      borderTop="1SolidSubdued"
      bottom={0}
      height="pageFooter"
      left={0}
      position="fixed"
      px="xxxl"
      right={0}
      zIndex={2}
    >
      <Box
        alignItems="center"
        display="flex"
        height="100%"
        justifyContent="flex-end"
      >
        {children}
      </Box>
    </Box>
  );
};
