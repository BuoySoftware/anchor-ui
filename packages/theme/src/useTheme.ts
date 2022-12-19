import { useContext } from "react";
import { ThemeContext } from "styled-components";

import { ThemeProps } from "./theme";

export const useTheme = (): ThemeProps => {
  return useContext<ThemeProps>(ThemeContext);
};
