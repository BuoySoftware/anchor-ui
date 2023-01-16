import { Box, BoxProps } from "@buoysoftware/anchor-layout";
import { Body, Markdown } from "@buoysoftware/anchor-typography";

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
  const id = `error-${parentId}`;

  return (
    <Box
      bg="background.criticalSubdued"
      borderRadius="4px"
      data-testid={id}
      id={id}
      pb="xs"
      pt="xs"
      px="m"
      role="alert"
      {...props}
    >
      {errors.map((error, index) => (
        <Body as="div" size="m" key={`error-${index}`} color="text.critical">
          <Markdown>{error}</Markdown>
        </Body>
      ))}
    </Box>
  );
};
