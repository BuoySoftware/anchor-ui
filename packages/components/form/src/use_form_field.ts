import { get, useFormState, FieldError } from "react-hook-form";
import compact from "lodash/compact";
import flatten from "lodash/flatten";
import kebabCase from "lodash/kebabCase";
import snakeCase from "lodash/snakeCase";
import { useTranslation } from "react-i18next";

import { useFormScope } from "./form_scope_provider";

export interface UseFormFieldProps<L extends true | false> {
  buildLabel?: L;
  name: string;
  defaultPlaceholder?: string;
}

interface FormField<L> {
  error: FieldError;
  inputId: string;
  label: L extends true ? string : undefined;
  placeholder: string;
  scope: string;
}

export const useFormField = <L extends true | false>({
  buildLabel = true as L,
  defaultPlaceholder = "",
  name,
}: UseFormFieldProps<L>): FormField<true> | FormField<false> => {
  const { scope, tNamespace } = useFormScope();
  const { t } = useTranslation(compact(flatten([tNamespace, "forms"])));
  const { errors } = useFormState();

  const snakeScope = snakeCase(scope);
  const inputId = kebabCase(name);
  const i18nKey = snakeCase(name);

  const placeholder = t(
    [
      `forms.placeholders.${snakeScope}.${i18nKey}`,
      `placeholders.${snakeScope}.${i18nKey}`,
    ],
    {
      defaultValue: defaultPlaceholder,
    }
  );

  const label = buildLabel
    ? t([
        `forms.labels.${snakeScope}.${i18nKey}`,
        `labels.${snakeScope}.${i18nKey}`,
        `labels.${i18nKey}`,
      ])
    : undefined;

  const error = get(errors, name);

  return {
    error,
    inputId,
    label,
    placeholder,
    scope,
  };
};

export default useFormField;
