import kebabCase from "lodash/kebabCase";
import { useFormContext, RegisterOptions } from "react-hook-form";
import { Flex } from "@buoysoftware/anchor-layout";
import { Body } from "@buoysoftware/anchor-typography";

import { Radio } from "./radio";

export interface TRadioOption<V> {
  label: string;
  value: V;
}

interface OwnProps<V> {
  defaultChecked?: V;
  name: string;
  option: TRadioOption<V>;
  rules?: RegisterOptions;
}

export type RadioOptionProps<V> = OwnProps<V>;

export const RadioOption = function <V extends string>({
  defaultChecked,
  name,
  option: { label, value },
  rules,
}: RadioOptionProps<V>): React.ReactElement {
  const inputId = kebabCase(`${name}_${value}`);
  const { register } = useFormContext();

  return (
    <Flex display="flex" alignItems="center">
      <Radio
        defaultChecked={value === defaultChecked}
        data-testid={`radio-${inputId}`}
        id={inputId}
        {...register(name, { shouldUnregister: true, ...rules })}
        value={value}
      />
      <Body as="label" size="m" ml="s" fontWeight="bold" htmlFor={inputId}>
        {label}
      </Body>
    </Flex>
  );
};
