import { Box, BoxProps } from "@buoysoftware/anchor-layout";

import { AppTemplateGridArea } from "./app_template";

interface OwnProps {
  area: AppTemplateGridArea;
  children?: React.ReactNode;
}

type AppAreaProps = OwnProps & Omit<BoxProps, "gridTemplateArea">;

export const AppArea: React.FC<AppAreaProps> = ({
  area,
  children,
  ...props
}): React.ReactElement => {
  return (
    <Box gridTemplateArea={area} {...props}>
      {children}
    </Box>
  );
};
