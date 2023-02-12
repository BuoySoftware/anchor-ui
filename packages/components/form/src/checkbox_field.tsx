import { Box, BoxProps } from "@buoysoftware/anchor-layout";
import { RegisterOptions, useFormContext } from "react-hook-form";

import { useFormField } from "./use_form_field";
import { InlineLabel } from "./inline_label";
import { Checkbox } from "./checkbox";
import { FieldError } from "./field_error";

interface OwnProps {
  name: string;
  value?: string;
  rules?: RegisterOptions;
}

type CheckboxFieldProps = OwnProps & BoxProps;

export type CheckboxFieldValue = "1" | false;

export const DEFAULT_CHECKED_VALUE: CheckboxFieldValue = "1";

export const CheckboxField: React.FC<CheckboxFieldProps> = ({
  name,
  value = DEFAULT_CHECKED_VALUE,
  rules,
  ...boxProps
}): React.ReactElement => {
  const { label, error, inputId } = useFormField({ name });
  const { register } = useFormContext();

  return (
    <Box
      as="fieldset"
      data-testid={`checkbox-field-${inputId}`}
      display="flex"
      flexDirection="column"
      mb="form.fieldGap"
      {...boxProps}
    >
      <InlineLabel
        data-testid={`label-${inputId}`}
        display="flex"
        alignItems="center"
        htmlFor={inputId}
      >
        <Checkbox
          aria-describedby={error ? `error-${name}` : undefined}
          aria-invalid={error ? "true" : "false"}
          data-testid={inputId}
          id={inputId}
          mr="xxs"
          value={value}
          {...register(name, { shouldUnregister: true, ...rules })}
        />
        {label}
      </InlineLabel>
      <FieldError
        error={error}
        inputId={inputId}
        inputType="checkbox"
        mt="s"
        name={name}
      />
    </Box>
  );
};
