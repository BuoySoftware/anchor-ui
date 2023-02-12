import { WarningCircle } from "iconoir-react";
import { Box, BoxProps, Flex } from "@buoysoftware/anchor-layout";
import { Body, Markdown } from "@buoysoftware/anchor-typography";
import { useTheme } from "@buoysoftware/anchor-theme";

interface OwnProps {
  errors: string[];
  parentId: string;
}

type ErrorMessageProps = OwnProps & BoxProps;

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  errors,
  parentId,
  ...props
}): React.ReactElement => {
  const { colors } = useTheme();
  const id = `error-${parentId}`;

  return (
    <Flex
      bg="background.criticalSubdued"
      borderRadius="4px"
      data-testid={id}
      id={id}
      py="xxs"
      px="xs"
      role="alert"
      {...props}
    >
      <WarningCircle color={colors.text.critical} width={16} height={16} />
      <Box ml="xs">
        {errors.map((error, index) => (
          <Body as="div" size="m" key={`error-${index}`} color="text.critical">
            <Markdown>{error}</Markdown>
          </Body>
        ))}
      </Box>
    </Flex>
  );
};
