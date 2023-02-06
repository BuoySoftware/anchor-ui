import { RefCallback } from "react";
import ReactSelect, {
  GroupBase,
  Props as ReactSelectProps,
  Theme,
} from "react-select";
import ReactAsyncSelect, {
  AsyncProps as ReactAsyncSelectProps,
} from "react-select/async";
import ReactAsyncCreateSelect, {
  AsyncCreatableProps as ReactAsyncCreateSelectProps,
} from "react-select/async-creatable";
import { useTheme } from "@buoysoftware/anchor-theme";

import { DropdownIndicator } from "./dropdown_indicator";
import { buildStyles, buildTheme } from "./styles";

export type OnCreateOption = (inputValue: string) => void;
export type OptionalOnCreateOption = OnCreateOption | undefined;

interface OwnProps<
  Option,
  OnCreate extends OptionalOnCreateOption,
  Async extends boolean
> {
  async?: Async;
  error?: boolean;
  inputRef?: RefCallback<Option>;
  onCreateOption?: OnCreate;
}

export type SelectProps<
  Option,
  OnCreate extends OptionalOnCreateOption | undefined,
  Async extends boolean,
  IsMulti extends boolean
> = OwnProps<Option, OnCreate, Async> &
  ReactAsyncSelectProps<Option, IsMulti, GroupBase<Option>> &
  ReactAsyncCreateSelectProps<Option, IsMulti, GroupBase<Option>> &
  ReactSelectProps<Option, IsMulti, GroupBase<Option>>;

export const Select = <
  Option,
  OnCreate extends OnCreateOption,
  Async extends boolean,
  IsMulti extends boolean
>({
  async,
  error = false,
  onCreateOption,
  ...props
}: SelectProps<Option, OnCreate, Async, IsMulti>): React.ReactElement => {
  const buoyTheme = useTheme();
  const className = async ? "react-async-select" : "react-select";

  let Component:
    | typeof ReactAsyncCreateSelect
    | typeof ReactAsyncSelect
    | typeof ReactSelect;
  if (async) {
    Component = onCreateOption ? ReactAsyncCreateSelect : ReactAsyncSelect;
  } else {
    Component = ReactSelect;
  }

  return (
    <Component
      placeholder="Select"
      components={{ DropdownIndicator }}
      className={className}
      menuPosition="fixed"
      onCreateOption={onCreateOption}
      styles={buildStyles(buoyTheme, props, error)}
      theme={(theme: Theme) => buildTheme(buoyTheme, theme)}
      inputRef={props.inputRef}
      {...props}
    />
  );
};
