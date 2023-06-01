import styled from "styled-components";
import { Flex } from "@buoysoftware/anchor-layout";
import get from "lodash/get";
import { ThemeProps } from "@buoysoftware/anchor-theme";

export type ColorScheme = "basic" | "primary" | "critical";

interface OwnProps {
  colorScheme: ColorScheme;
}

type StyledButtonProps = OwnProps;

interface ButtonColors {
  active: string;
  border: string;
  default: string;
  disabledBackground: string;
  disabledBorder: string;
  hover: string;
  text: string;
}

const BUTTON_COLORS: Record<ColorScheme, ButtonColors> = {
  basic: {
    active: "background.pressed",
    border: "border.default",
    default: "background.default",
    disabledBackground: "white",
    disabledBorder: "border.subdued",
    hover: "background.hover",
    text: "text.primary",
  },
  primary: {
    active: "interactive.pressed",
    border: "transparent",
    default: "interactive.default",
    disabledBackground: "grey20",
    disabledBorder: "transparent",
    hover: "interactive.hover",
    text: "white",
  },
  critical: {
    active: "interactive.criticalPressed",
    border: "transparent",
    default: "interactive.critical",
    disabledBackground: "grey20",
    disabledBorder: "transparent",
    hover: "interactive.criticalHover",
    text: "white",
  },
};

const getThemeColor = (
  colorScheme: ColorScheme,
  theme: ThemeProps,
  key: keyof ButtonColors
): string => {
  const themeKey = BUTTON_COLORS[colorScheme][key];
  return get(theme.colors, themeKey) || themeKey;
};

export const StyledButton = styled(Flex)<StyledButtonProps>`
  cursor: pointer;
  border-style: solid;
  border-width: 1px;
  background-color: ${(props) =>
    getThemeColor(props.colorScheme, props.theme, "default")};
  border-color: ${(props) =>
    getThemeColor(props.colorScheme, props.theme, "border")};
  color: ${(props) => getThemeColor(props.colorScheme, props.theme, "text")};

  &:hover {
    background-color: ${(props) =>
      getThemeColor(props.colorScheme, props.theme, "hover")};
  }

  &:active {
    background-color: ${(props) =>
      getThemeColor(props.colorScheme, props.theme, "active")};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${(props) =>
      getThemeColor(props.colorScheme, props.theme, "disabledBackground")};
    border-color: ${(props) =>
      getThemeColor(props.colorScheme, props.theme, "disabledBorder")};
    color: ${(props) => props.theme.colors.text.tertiary};
  }

  &:focus-visible {
    border-radius: 4px;
    outline: 2px solid #5b91f4;
    outline-offset: 2px;
  }
`;
