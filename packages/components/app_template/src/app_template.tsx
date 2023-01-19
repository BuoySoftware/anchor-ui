import { Grid } from "@buoysoftware/anchor-layout";

interface OwnProps {
  children?: React.ReactNode;
}

export type AppTemplateProps = OwnProps;

export type AppTemplateGridArea = "side-nav" | "app-content";

const GRID_AREA_TEMPLATE = `
  "side-nav" "app-content"
`;

export const AppTemplate: React.FC<AppTemplateProps> = ({
  children,
}): React.ReactElement => {
  return (
    <Grid
      gridTemplateAreas={GRID_AREA_TEMPLATE}
      gridTemplateColumns="auto 1fr"
      height="100vh"
    >
      {children}
    </Grid>
  );
};
