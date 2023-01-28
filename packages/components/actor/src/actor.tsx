import { Box, BoxProps } from "@buoysoftware/anchor-layout";

interface TActor {
  firstName: string;
  lastName: string;
}

interface OwnProps {
  actor: TActor;
}

type ActorProps = OwnProps & BoxProps;

export const Actor: React.FC<ActorProps> = ({
  actor: { firstName, lastName },
  ...props
}): React.ReactElement => {
  const lastInitial = `${lastName.substring(0, 1)}.`;

  return (
    <Box data-testid="actor" {...props}>
      {firstName} {lastInitial}
    </Box>
  );
};
