import { useFormContext, RegisterOptions } from "react-hook-form";
import { Box } from "@buoysoftware/anchor-layout";

import { Input, InputProps } from "./input";
import { FormField } from "./form_field";
import { useFormField } from "./use_form_field";

interface OwnProps {
  Component?: React.FC;
  label?: string;
  name: string;
  rules?: RegisterOptions;
}

export type TextFieldProps = OwnProps & Omit<InputProps, "theme">;

export const TextField: React.FC<TextFieldProps> = ({
  Component = Input,
  label,
  name,
  rules,
  ...inputProps
}): React.ReactElement => {
  const {
    error,
    inputId,
    label: formFieldLabel,
    placeholder,
  } = useFormField({ name, buildLabel: label === undefined });
  const { register } = useFormContext();
  const fieldLabel = label ?? formFieldLabel;

  return (
    <Box>
      <FormField error={error} label={fieldLabel} inputId={inputId} name={name}>
        <Component
          error={!!error}
          id={inputId}
          placeholder={placeholder}
          {...register(name, { shouldUnregister: true, ...rules })}
          {...inputProps}
        />
      </FormField>
    </Box>
  );
};
