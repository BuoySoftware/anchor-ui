import { useFormContext, RegisterOptions } from "react-hook-form";
import { BoxProps } from "@buoysoftware/anchor-layout";
import pick from "lodash/pick";

import { Input, InputProps } from "./input";
import {
  STYLED_INPUT_WRAPPER_PROP_LIST
} from "./input/styled_input_wrapper_prop_list";
import { FormField } from "./form_field";
import { useFormField } from "./use_form_field";

interface OwnProps {
  Component?: React.FC;
  label?: string;
  name: string;
  rules?: RegisterOptions;
}

export type TextFieldProps = OwnProps & Omit<InputProps, "theme"> & BoxProps;

export const TextField: React.FC<TextFieldProps> = ({
  Component = Input,
  label,
  name,
  rules,
  ...inputProps
}): React.ReactElement => {
  const wrapperProps = pick(inputProps, STYLED_INPUT_WRAPPER_PROP_LIST);
  const {
    error,
    inputId,
    label: formFieldLabel,
    placeholder,
  } = useFormField({ name, buildLabel: label === undefined });
  const { register } = useFormContext();
  const fieldLabel = label ?? formFieldLabel;

  return (
    <FormField
      error={error}
      label={fieldLabel}
      inputId={inputId}
      name={name}
      {...wrapperProps}
    >
      <Component
        error={!!error}
        id={inputId}
        placeholder={placeholder}
        {...register(name, { shouldUnregister: true, ...rules })}
        {...inputProps}
      />
    </FormField>
  );
};
