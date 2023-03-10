import { Box, BoxProps } from "@buoysoftware/anchor-layout";
import { Body, BodyProps } from "@buoysoftware/anchor-typography";

interface OwnProps {
  textProps: Omit<BodyProps, "size">;
}

type BadgeProps = OwnProps & BoxProps;

export const Badge: React.FC<BadgeProps> = ({
  children,
  textProps,
  ...props
}) => {
  return (
    <Box px="xs" py="2px" borderRadius="12px" {...props}>
      <Body size="s" strong {...textProps}>
        {children}
      </Body>
    </Box>
  );
};
