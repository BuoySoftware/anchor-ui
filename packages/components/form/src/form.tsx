import kebabCase from "lodash/kebabCase";
import { useEffect, useState } from "react";
import {
  FieldValues,
  FormProvider,
  get,
  SubmitHandler,
  UseFormReturn,
} from "react-hook-form";
import { ErrorMessage } from "./error_message";
import { Box, BoxProps } from "@buoysoftware/anchor-layout";

import { FormScopeProvider, TNamespace } from "./form_scope_provider";

export type FormValidationErrors<T> = {
  [key in keyof T]: string[];
};

export type ErrorKeys<TFormValues> = Record<string, keyof TFormValues>;

interface OwnProps<TFormValues extends FieldValues> {
  "data-testid"?: string;
  id: string;
  scope: string;
  onSubmit?: SubmitHandler<TFormValues>;
  children: React.ReactNode;
  form: UseFormReturn<TFormValues>;
  errorKeys?: ErrorKeys<TFormValues>;
  mutationErrors?: Partial<FormValidationErrors<TFormValues>>;
  tNamespace?: TNamespace;
}

export type FormProps<TFormValues extends FieldValues> = OwnProps<TFormValues> &
  BoxProps;

export const Form = <TFormValues extends FieldValues>({
  "data-testid": testId,
  id,
  scope,
  children,
  errorKeys = {},
  form: { handleSubmit, ...form },
  onSubmit = () => undefined,
  mutationErrors = {},
  tNamespace,
  ...elementProps
}: FormProps<TFormValues>): React.ReactElement => {
  const [hasErrors, setHasErrors] = useState(false);

  useEffect(() => {
    if (hasErrors) {
      Object.entries(mutationErrors).forEach(([key, errors]) => {
        if (key !== "base") {
          const messages = errors?.join("\n");
          const inputKey = get(errorKeys, key, key);

          form.setError(inputKey as any, {
            type: "server",
            message: messages,
          });
        }
      });
    }
  }, [hasErrors, mutationErrors]);

  useEffect(() => {
    setHasErrors(!!Object.keys(mutationErrors).length);
  }, [mutationErrors]);

  const baseErrors = mutationErrors["base"] || [];

  return (
    <FormScopeProvider value={{ formId: id, baseErrors, scope, tNamespace }}>
      <FormProvider {...form} handleSubmit={handleSubmit}>
        <Box
          as="form"
          autoComplete="off"
          id={id}
          data-testid={testId || kebabCase(scope)}
          onSubmit={handleSubmit(onSubmit)}
          {...elementProps}
        >
          {children}
        </Box>
      </FormProvider>
    </FormScopeProvider>
  );
};
