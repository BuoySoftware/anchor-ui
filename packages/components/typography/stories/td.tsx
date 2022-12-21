import { Body } from "../src";

export const Td: React.FC<{ children: React.ReactNode }> = ({
  children,
}): React.ReactElement => {
  return (
    <Body size="m" as="td">
      {children}
    </Body>
  );
};
