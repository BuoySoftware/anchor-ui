import { Borders, borders } from "./borders";
import { BorderWidths, borderWidths } from "./borderWidths";
import { Colors, colors } from "./colors";
import { Fonts, fonts } from "./fonts";
import { FontSizes, fontSizes } from "./fontSizes";
import { FontStyles, fontStyles } from "./fontStyles";
import { FontWeights, fontWeights } from "./fontWeights";
import { LetterSpacings, letterSpacings } from "./letterSpacing";
import { LineHeights, lineHeights } from "./lineHeights";
import { Radii, radii } from "./radii";
import { Sizes, sizes } from "./sizes";
import { Space, space } from "./space";
import { TextTransforms, textTransforms } from "./textTransforms";

export interface ThemeProps {
  borderWidths: BorderWidths;
  borders: Borders;
  colors: Colors;
  fontSizes: FontSizes;
  fontStyles: FontStyles;
  fontWeights: FontWeights;
  fonts: Fonts;
  letterSpacings: LetterSpacings;
  lineHeights: LineHeights;
  radii: Radii;
  sizes: Sizes;
  space: Space;
  textTransforms: TextTransforms;
}

export const theme: ThemeProps = {
  borderWidths,
  borders,
  colors,
  fontSizes,
  fontStyles,
  fontWeights,
  fonts,
  letterSpacings,
  lineHeights,
  radii,
  sizes,
  space,
  textTransforms,
};
