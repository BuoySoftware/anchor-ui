import { DropdownIndicatorProps as BaseProps } from "react-select";
import { NavArrowDown } from "iconoir-react";
import { useTheme } from "@buoysoftware/anchor-theme";

type DropdownIndicatorProps<Option> = BaseProps<Option>;

export const DropdownIndicator = <Option,>({
  isDisabled,
}: DropdownIndicatorProps<Option>): React.ReactElement => {
  const {
    colors: { text },
  } = useTheme();

  return (
    <NavArrowDown
      height={24}
      width={24}
      color={isDisabled ? text.tertiary : text.primary}
    />
  );
};
