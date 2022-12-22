import { Borders, borders } from "./borders";
import { BorderWidths, borderWidths } from "./borderWidths";
import { Colors, colors } from "./colors";
import { FontSizes, fontSizes } from "./fontSizes";
import { FontStyles, fontStyles } from "./fontStyles";
import { FontWeights, fontWeights } from "./fontWeights";
import { LineHeights, lineHeights } from "./lineHeights";
import { Radii, radii } from "./radii";
import { Sizes, sizes } from "./sizes";
import { Space, space } from "./space";

export interface ThemeProps {
  borderWidths: BorderWidths;
  borders: Borders;
  colors: Colors;
  fontSizes: FontSizes;
  fontStyles: FontStyles;
  fontWeights: FontWeights;
  lineHeights: LineHeights;
  radii: Radii;
  sizes: Sizes;
  space: Space;
}

export const theme: ThemeProps = {
  borderWidths,
  borders,
  colors,
  fontSizes,
  fontStyles,
  fontWeights,
  lineHeights,
  radii,
  sizes,
  space,
};
