import { Grid, GridProps } from "@buoysoftware/anchor-layout";

interface OwnProps {
  children?: React.ReactNode;
}

export type PageTemplateProps = OwnProps & Omit<GridProps, "gridTemplateAreas">;

export type PageTemplateGridArea =
  | "breadcrumbs"
  | "header"
  | "action-bar"
  | "content"
  | "footer";

const GRID_AREA_TEMPLATE = `
  "breadcrumbs"
  "header"
  "action-bar"
  "content"
  "footer" 
`;

export const PageTemplate: React.FC<PageTemplateProps> = ({
  children,
}): React.ReactElement => {
  return (
    <Grid
      gridTemplateAreas={GRID_AREA_TEMPLATE}
      gridTemplateRows="auto auto auto 1fr auto"
      height="100vh"
    >
      {children}
    </Grid>
  );
};
