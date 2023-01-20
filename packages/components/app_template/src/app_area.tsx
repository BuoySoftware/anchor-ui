import { Box, BoxProps } from "@buoysoftware/anchor-layout";

import { AppTemplateGridArea } from "./app_template";

interface OwnProps {
  area: AppTemplateGridArea;
  children?: React.ReactNode;
}

type AppAreaProps = OwnProps & Omit<BoxProps, "gridArea">;

export const AppArea: React.FC<AppAreaProps> = ({
  area,
  children,
  ...props
}): React.ReactElement => {
  return (
    <Box gridArea={area} {...props}>
      {children}
    </Box>
  );
};
