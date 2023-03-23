import { useImperativeHandle, forwardRef, useRef, useState } from "react";
import kebabCase from "lodash/kebabCase";
import pick from "lodash/pick";
import { Box, Flex } from "@buoysoftware/anchor-layout";

import { STYLED_INPUT_PROP_LIST } from "./styled_input_prop_list";
import { STYLED_INPUT_WRAPPER_PROP_LIST } from "./styled_input_wrapper_prop_list";
import { StyledInput } from "./styled_input";
import {
  StyledInputWrapper,
  StyledInputWrapperProps,
} from "./styled_input_wrapper";

type FlexDirection = "row" | "row-reverse";

const getFlexDirection = (prefixUnit?: boolean): FlexDirection =>
  prefixUnit ? "row-reverse" : "row";

type TextAlign = "left" | "right" | undefined;

const getTextAlign = (unit?: string, prefixUnit?: boolean): TextAlign => {
  if (!unit) return undefined;

  return prefixUnit ? "left" : "right";
};

interface OwnProps {
  "data-testid"?: string;
  icon?: React.ReactNode;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  prefixUnit?: boolean;
  unit?: string;
}

export type InputProps = React.InputHTMLAttributes<Element> &
  OwnProps &
  Omit<StyledInputWrapperProps, "inputRef" | "hasIcon">;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  function Input(
    {
      "data-testid": testIdProp,
      defaultValue,
      disabled,
      icon,
      id,
      error,
      onClick,
      onChange,
      onFocus,
      onBlur,
      prefixUnit,
      readOnly,
      unit,
      value,
      ...props
    },
    forwardedRef
  ): React.ReactElement {
    const inputProps = pick(props, STYLED_INPUT_PROP_LIST);
    const wrapperProps = pick(props, STYLED_INPUT_WRAPPER_PROP_LIST);

    const testId = testIdProp || kebabCase(id);
    const [hasValue, setHasValue] = useState(!!defaultValue || !!value);
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const _onBlur = (e: React.FocusEvent<HTMLInputElement>): void => {
      setIsFocused(false);
      if (onBlur) onBlur(e);
    };

    const _onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      setHasValue(!!e.currentTarget.value);
      if (onChange) onChange(e);
    };

    useImperativeHandle(forwardedRef, () => inputRef.current!);

    const _onClick = (): void => {
      inputRef?.current?.focus();
      inputRef?.current?.click();
    };

    const _onFocus = (e: React.FocusEvent<HTMLInputElement>): void => {
      setIsFocused(true);
      if (onFocus) onFocus(e);
    };

    const _textAlign = getTextAlign(unit, prefixUnit);

    return (
      <StyledInputWrapper
        data-testid={`input-wrapper-${testId}`}
        disabled={disabled}
        error={error}
        hasIcon={!!icon}
        hasValue={hasValue}
        isFocused={isFocused}
        onClick={_onClick}
        readOnly={readOnly}
        textAlign={_textAlign}
        {...wrapperProps}
      >
        <Flex alignItems="center" flexDirection={getFlexDirection(prefixUnit)}>
          {icon && <Box mr="xs">{icon}</Box>}
          <Box alignItems="center" flex="1">
            <StyledInput
              data-testid={`input-${testId}`}
              aria-errormessage={error ? `error-${id}` : undefined}
              aria-describedby={error ? `error-${id}` : undefined}
              aria-invalid={error}
              defaultValue={defaultValue}
              disabled={disabled}
              id={id}
              onBlur={_onBlur}
              onChange={_onChange}
              onClick={onClick}
              onFocus={_onFocus}
              readOnly={readOnly}
              ref={inputRef}
              value={value}
              {...inputProps}
            />
          </Box>
          {unit && (
            <Box
              data-testid="input-unit"
              mr={prefixUnit ? "xs" : 0}
              color="text.tertiary"
            >
              {unit}
            </Box>
          )}
        </Flex>
      </StyledInputWrapper>
    );
  }
);
