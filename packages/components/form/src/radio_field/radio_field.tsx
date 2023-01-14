import { RegisterOptions } from "react-hook-form";
import { Flex, Grid } from "@buoysoftware/anchor-layout";

import { Label } from "../label";
import { FieldError } from "../field_error";
import { RadioOption, TRadioOption } from "./radio_option";
import { useFormField } from "../use_form_field";

interface OwnProps<V> {
  "data-testid"?: string;
  disabled?: boolean;
  label?: React.ReactElement;
  name: string;
  rules?: RegisterOptions;
  options: TRadioOption<V>[];
  defaultChecked?: V;
}

interface OptionalRenderProp<V> {
  children?: (props: OwnProps<V>) => React.ReactElement;
}

export type RadioFieldProps<V> = OwnProps<V> & OptionalRenderProp<V>;

export const RadioField = function <V extends string>(
  props: RadioFieldProps<V>
): React.ReactElement {
  const {
    "data-testid": testId,
    defaultChecked,
    disabled,
    label,
    name,
    options,
    children,
    rules,
  } = props;

  const {
    inputId,
    error,
    label: fieldLabel,
  } = useFormField({
    name,
    buildLabel: label === undefined,
  });

  const groupLabel = label ?? <Label>{fieldLabel}</Label>;

  return (
    <Flex
      aria-describedby={error ? `error-${inputId}` : undefined}
      aria-errormessage={error ? `error-${inputId}` : undefined}
      aria-invalid={!!error}
      as="fieldset"
      data-testid={testId || `radio-field-${inputId}`}
      disabled={disabled}
      flexDirection="column"
      id={inputId}
      mb="form.fieldGap"
      width="input"
    >
      {groupLabel}

      <Grid gridTemplateColumns="1fr" gridRowGap="xxs" mt="xs">
        {children
          ? children(props)
          : options.map((option) => (
              <RadioOption
                defaultChecked={defaultChecked}
                key={String(option.value)}
                name={name}
                option={option}
                rules={rules}
              />
            ))}
      </Grid>
      <FieldError
        error={error}
        inputId={inputId}
        inputType="radio"
        mt="s"
        name={name}
      />
    </Flex>
  );
};
