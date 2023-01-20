import { Body } from "@buoysoftware/anchor-typography";

interface OwnProps {
  children: React.ReactNode;
}

type BreadcrumbProps = OwnProps;

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  children,
}): React.ReactElement => {
  return (
    <Body className="breadcrumb" as="li" color="text.secondary" size="s">
      {children}
    </Body>
  );
};
