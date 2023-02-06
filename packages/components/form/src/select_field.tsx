import {
  Controller,
  RegisterOptions,
  get,
  useFormContext,
} from "react-hook-form";
import kebabCase from "lodash/kebabCase";
import { useTranslation } from "react-i18next";
import { Box, BoxProps } from "@buoysoftware/anchor-layout";

import { useFormField } from "./use_form_field";
import { Select, SelectProps } from "./select";
import { FormField } from "./form_field";
import { OptionalOnCreateOption } from "./select/select";

type TranslationOptions = Record<string, string>;

interface OwnProps {
  banner?: React.ReactElement;
  disabled?: boolean;
  label?: string;
  name: string;
  rules?: Exclude<RegisterOptions, "valueAsNumber" | "valueAsDate">;
  labelTranslationOptions?: TranslationOptions;
  zIndex?: string;
}

export type SelectFieldProps<
  Option,
  OnCreate extends OptionalOnCreateOption | undefined,
  Async extends boolean,
  IsMulti extends boolean
> = OwnProps &
  Pick<BoxProps, "width"> &
  SelectProps<Option, OnCreate, Async, IsMulti>;

export const SelectField = function <
  Option,
  OnCreate extends OptionalOnCreateOption | undefined,
  Async extends boolean,
  IsMulti extends boolean
>({
  defaultValue,
  disabled = false,
  banner,
  name,
  label: labelProp,
  rules,
  width = "input",
  zIndex = "formField",
  ...props
}: SelectFieldProps<Option, OnCreate, Async, IsMulti>): React.ReactElement {
  const { t } = useTranslation(["anchorForms", "forms"]);
  const { label: formFieldLabel, placeholder } = useFormField({
    defaultPlaceholder:
      t(["anchorForms:placeholders.select", "forms:placeholders.select"]) ?? "",
    name,
  });
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const inputId = kebabCase(name);
  const testId = kebabCase(name);
  const label = labelProp ?? formFieldLabel;
  const error = get(errors, name);

  return (
    <FormField
      data-testid={`select-field-${testId}`}
      error={error}
      inputId={inputId}
      inputType="select"
      label={label}
      name={name}
      position="relative"
      zIndex={zIndex}
      width={width}
    >
      {banner && <Box my="xxs">{banner}</Box>}
      <Controller
        control={control}
        defaultValue={defaultValue ?? null}
        name={name}
        render={({ field: { ref, ...field } }) => {
          return (
            <Select
              aria-describedby={error ? `error-${inputId}` : undefined}
              aria-errormessage={error ? `error-${inputId}` : undefined}
              aria-invalid={!!error}
              data-testid={testId}
              error={!!error}
              inputId={inputId}
              inputRef={ref}
              isDisabled={disabled}
              placeholder={placeholder}
              {...props}
              {...field}
            />
          );
        }}
        rules={rules}
        shouldUnregister={rules?.shouldUnregister ?? true}
      />
    </FormField>
  );
};
