import { Body } from "../src";

export const Th: React.FC<{ children: React.ReactNode }> = ({
  children,
}): React.ReactElement => {
  return (
    <Body size="l" as="th" pb="s" textAlign="left">
      {children}
    </Body>
  );
};
