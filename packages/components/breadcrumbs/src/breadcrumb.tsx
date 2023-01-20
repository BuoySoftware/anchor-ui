import { Body } from "@buoysoftware/anchor-typography";

interface OwnProps {
  children: React.ReactNode;
  "data-testid"?: string;
}

type BreadcrumbProps = OwnProps;

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  children,
  "data-testid": testId = "breadcrumb",
}): React.ReactElement => {
  return (
    <Body
      className="breadcrumb"
      as="li"
      color="text.secondary"
      data-testid={testId}
      size="s"
    >
      {children}
    </Body>
  );
};
