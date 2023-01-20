import styled from "styled-components";
import { Flex, FlexProps } from "@buoysoftware/anchor-layout";
import get from "lodash/get";
import { ThemeProps } from "@buoysoftware/anchor-theme";

export type ColorScheme = "basic" | "primary" | "critical";

interface OwnProps {
  colorScheme: ColorScheme;
  disabled?: boolean;
}

type InnerButtonProps = FlexProps & OwnProps;

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

export const InnerButton = styled(Flex)<InnerButtonProps>`
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

  [disabled] & {
    background-color: ${(props) =>
      getThemeColor(props.colorScheme, props.theme, "disabledBackground")};

    border-color: ${(props) =>
      getThemeColor(props.colorScheme, props.theme, "disabledBorder")};

    color: ${(props) => props.theme.colors.text.tertiary};
  }
`;
