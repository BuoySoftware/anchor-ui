import kebabCase from "lodash/kebabCase";
import styled from "styled-components";
import { FieldError as HookFormFieldError } from "react-hook-form";
import { Box, BoxProps } from "@buoysoftware/anchor-layout";
import { Body } from "@buoysoftware/anchor-typography";
import { Label } from "./label";

import { FieldError, InputType } from "./field_error";

interface OwnProps {
  children: React.ReactNode;
  error?: HookFormFieldError;
  hint?: string;
  inputId: string;
  inputType?: InputType;
  label: string;
  name?: string;
}

export type FormFieldProps = OwnProps & Omit<BoxProps, "errors">;

export const FormField = styled(
  ({
    children,
    error,
    hint,
    inputId,
    inputType,
    name,
    label,
    ...elementProps
  }) => {
    const testId = kebabCase(inputId);

    return (
      <Box
        data-testid={`form-field-${testId}`}
        mb="form.fieldGap"
        display="flex"
        width="input"
        flexDirection="column"
        {...elementProps}
      >
        <Label htmlFor={inputId} mb="form.labelGap">
          {label}
        </Label>
        <Box position="relative" zIndex={1}>
          {children}
        </Box>
        {hint && (
          <Body mt="xxs" size="s" color="text.secondary">
            {hint}
          </Body>
        )}
        <FieldError
          error={error}
          inputId={inputId}
          inputType={inputType}
          mt="xxs"
          name={name}
          width="100%"
        />
      </Box>
    );
  }
)<FormFieldProps>``;
