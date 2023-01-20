import { BoxProps } from "@buoysoftware/anchor-layout";

import { Heading } from "./heading";

interface OwnProps {
  children: React.ReactNode;
}

type PageTitleProps = OwnProps & BoxProps;

export const PageTitle: React.FC<PageTitleProps> = ({
  children,
  ...props
}): React.ReactElement => {
  return (
    <Heading as="h1" size="xl" mb="m" ml="page.gutterX" {...props}>
      {children}
    </Heading>
  );
};
