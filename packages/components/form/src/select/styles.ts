import {
  Props,
  StylesConfig,
  GroupBase,
  Theme as ReactSelectTheme,
} from "react-select";
import { ThemeProps } from "@buoysoftware/anchor-theme";

interface OptionState {
  isSelected: boolean;
  isFocused: boolean;
}

const getOptionColor = (
  state: OptionState,
  colors: ThemeProps["colors"]
): string => {
  if (state.isSelected) {
    return colors.background.selectedSubdued;
  } else if (state.isFocused) {
    return colors.background.hover;
  }

  return colors.white;
};

interface ControlState {
  isDisabled: boolean;
}

const getControlBorderColor = (
  state: ControlState,
  color: ThemeProps["colors"],
  error: boolean
): string => {
  if (error) {
    return color.critical;
  } else if (state.isDisabled) {
    return color.border.subdued;
  }

  return color.border.default;
};

export function buildStyles<
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>(
  theme: ThemeProps,
  props: Props<Option, IsMulti, Group>,
  error = false
): StylesConfig<Option, IsMulti, Group> {
  const {
    colors: { background, text },
    colors,
    fontWeights,
    fontSizes,
    space,
  } = theme;

  return {
    control: (provided, state) => ({
      ...provided,
      borderColor: getControlBorderColor(state, theme.colors, error),
      background: state.isDisabled ? background.disabled : background.default,
      boxShadow: state.isFocused
        ? "0px 0px 0px 2px #FFFFFF, 0px 0px 0px 4px #5B91F4;"
        : "none",
    }),
    input: (provided) => ({
      ...provided,
      color: text.primary,
    }),
    placeholder: (provided, state) => ({
      ...provided,
      color: state.isDisabled ? text.tertiary : text.primary,
      fontWeight: fontWeights.regular,
    }),
    menuList: (provided) => {
      return {
        ...provided,
        maxHeight: props.maxMenuHeight || "200px",
      };
    },
    option: (provided, state) => ({
      ...provided,
      color: text.primary,
      backgroundColor: getOptionColor(state, colors),
      "&:active": {
        backgroundColor: background.selectedSubdued,
      },
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: state.isDisabled ? text.tertiary : text.primary,
      fontWeight: fontWeights.regular,
      fontSize: fontSizes["font-size-100"],
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      marginLeft: space.xs,
      marginRight: space.xs,
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
  };
}

export const buildTheme = (
  buoyTheme: ThemeProps,
  selectTheme: ReactSelectTheme
): ReactSelectTheme => {
  const { colors } = buoyTheme;

  return {
    ...selectTheme,
    colors: {
      ...selectTheme.colors,
      ...colors,
    },
  };
};
