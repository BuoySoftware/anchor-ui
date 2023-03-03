import {
  isPossiblePhoneNumber,
  parsePhoneNumberFromString,
} from "libphonenumber-js";
import { useFormContext, Controller, RegisterOptions } from "react-hook-form";
import snakeCase from "lodash/snakeCase";
import { useTranslation } from "react-i18next";

import { FormField } from "../form_field";
import { useFormField } from "../use_form_field";
import PhoneInput, { PhoneInputProps } from "./phone_input";

interface OwnProps {
  defaultValue?: string;
  label?: Maybe<string>;
  name: string;
  rules?: Exclude<RegisterOptions, "valueAsNumber" | "valueAsDate">;
}

export type PhoneFieldProps = OwnProps &
  Omit<PhoneInputProps, "onChange" | "defaultValue">;

const formattedValue = (value: string): string => {
  const parsedPhoneNumber = parsePhoneNumberFromString(value);
  return parsedPhoneNumber?.formatNational() ?? "";
};

export const PhoneField: React.FC<PhoneFieldProps> = ({
  defaultValue = "",
  label: labelProp,
  name,
  rules,
  width = "input",
  zIndex = "formField",
  ...props
}): React.ReactElement => {
  const { control } = useFormContext();
  const { t } = useTranslation(["anchorForms", "forms"]);
  const {
    error,
    hint,
    label: formFieldLabel,
    placeholder,
  } = useFormField({
    defaultPlaceholder:
      t([
        "anchorForms:placeholders.phone_number",
        "forms:placeholders.phone_number",
      ]) ?? "",
    name,
  });
  const label = labelProp ?? formFieldLabel;
  const inputId = snakeCase(name);

  const phoneNumberValidation = (phoneNumber: string): string | undefined => {
    const valid = isPossiblePhoneNumber(phoneNumber, "US");

    if (!valid) {
      return (
        t("errors.invalidPhoneNumber", { ns: ["anchorForms", "forms"] }) ||
        undefined
      );
    }
  };

  return (
    <FormField
      data-testid={`phone-field-${inputId}`}
      error={error}
      hint={hint}
      inputId={inputId}
      inputType="phone"
      label={label}
      name={name}
      position="relative"
      zIndex={zIndex}
      width={width}
    >
      <Controller
        control={control}
        name={name}
        defaultValue={formattedValue(defaultValue)}
        render={({ field }) => {
          return (
            <PhoneInput
              id={inputId}
              placeholder={placeholder}
              {...props}
              {...field}
            />
          );
        }}
        rules={{ ...rules, validate: { phoneNumber: phoneNumberValidation } }}
      />
    </FormField>
  );
};
