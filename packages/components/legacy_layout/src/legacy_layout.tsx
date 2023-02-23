import { Box, BoxProps, Flex, Grid, boxCss } from "@buoysoftware/anchor-layout";

export const legacyLayoutCss = boxCss;
export type LegacyLayoutProps = BoxProps;

export const LegacyLayout: React.FC<LegacyLayoutProps> = (props): React.ReactElement => {
  if (props.display === "flex") {
    return <Flex {...props} />;
  }

  if (props.display === "grid") {
    return <Grid {...props} />;
  }

  return <Box {...props} />;
};
