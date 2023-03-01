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
  label,
  name,
  rules,
  ...inputProps
}): React.ReactElement => {
  const { control } = useFormContext();
  const { error, label: formFieldLabel } = useFormField({
    name,
    buildLabel: label === undefined,
  });
  const { t } = useTranslation("errors");
  const fieldLabel = label ?? formFieldLabel;
  const inputId = snakeCase(name);
  const placeholder = "";

  const phoneNumberValidation = (phoneNumber: string): string | undefined => {
    const valid = isPossiblePhoneNumber(phoneNumber, "US");

    if (!valid) return t("phoneNumber") || undefined;
  };

  return (
    <FormField
      error={error}
      label={fieldLabel}
      inputId={inputId}
      name={name}
      {...inputProps}
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
              {...field}
              {...inputProps}
            />
          );
        }}
        rules={{ ...rules, validate: { phoneNumber: phoneNumberValidation } }}
      />
    </FormField>
  );
};
