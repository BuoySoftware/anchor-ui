import compact from "lodash/compact";
import flatten from "lodash/flatten";
import { FieldError as HookFormFieldError } from "react-hook-form";
import snakeCase from "lodash/snakeCase";
import { BoxProps } from "@buoysoftware/anchor-layout";
import { TFunction } from "i18next";
import { useTranslation } from "react-i18next";

import { useFormScope } from "./form_scope_provider";
import { ErrorMessage } from "./error_message";

export type InputType =
  | "checkbox"
  | "collectionCheckbox"
  | "hidden"
  | "radio"
  | "select"
  | "text";

interface OwnProps {
  error?: HookFormFieldError;
  name?: string;
  inputId: string;
  inputType?: InputType;
}

export type FieldErrorProps = OwnProps & BoxProps;

/**
 * Look up an error message in the i18next translations. This utilizes the
 * i18next fallback mechanism for determining who to translate the error message.
 *
 * The order is as follows:
 *
 * 1. An error message in a custom provided namespace via tNamespace scoped to
 *    forms.errors and then the form scope, field name, and error typea.
 *
 * 2. An error message in the default forms namespace scoped to the form scope,
 *    field name and error type.
 *
 * 3. An error message in default forms namespace for the given input type and
 *    error type.
 *
 * 4. An error message in the default forms namespace scoped to the form scope,
 *    for the error type.
 */
function lookupErrorMessage(
  error: HookFormFieldError,
  scope: string,
  name: string,
  inputType: InputType,
  t: TFunction
): string {
  if (error.message !== undefined && error.message !== "") {
    return error.message;
  }

  const i18nName = snakeCase(name);
  const i18nErrorScope = snakeCase(scope);

  return t([
    `forms.errors.${i18nErrorScope}.${i18nName}.${error.type}`,
    `errors.${i18nErrorScope}.${i18nName}.${error.type}`,
    `errors.input_types.${snakeCase(inputType)}.${error.type}`,
    `errors.${error.type}`,
  ]);
}

export const FieldError: React.FC<FieldErrorProps> = ({
  error,
  inputId,
  name,
  inputType = "text",
  ...elementProps
}): React.ReactElement | null => {
  const { scope, tNamespace } = useFormScope();
  const { t } = useTranslation(compact(flatten([tNamespace, "forms"])));

  if (!error || !name) return null;

  const message = lookupErrorMessage(error, scope, name, inputType, t);

  return (
    <ErrorMessage
      errors={message.split("\n")}
      parentId={inputId}
      {...elementProps}
    />
  );
};
