import { forwardRef, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { AsYouType } from "libphonenumber-js";

import { Input, InputProps } from "../input";

interface OwnProps {
  defaultValue?: string;
  name: string;
  onChange: (value: string) => void;
  value?: string;
}

export type PhoneInputProps = OwnProps & Omit<InputProps, "theme" | "type">;

const MAX_LENGTH = 16;

export const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
  function PhoneInput({ value: defaultValue = "", name, onChange, ...inputProps }, ref) {
    const [value, setValue] = useState(defaultValue);
    const {
      formState: { errors },
    } = useFormContext();

    useEffect(() => {
      setValue(defaultValue);
    }, [defaultValue]);

    const updateNumber = (phoneNumber: string): void => {
      setValue(phoneNumber);
      onChange(phoneNumber);
    };

    const onNumberChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      const newValue = e.currentTarget.value;
      const asYouType = new AsYouType("US").input(newValue);

      if (newValue.length < value.length) {
        updateNumber(newValue);
      } else {
        updateNumber(asYouType);
      }
    };

    return (
      <Input
        error={!!errors[name]}
        maxLength={MAX_LENGTH}
        name={name}
        onChange={onNumberChange}
        ref={ref}
        type="tel"
        value={value}
        {...inputProps}
      />
    );
  }
);
