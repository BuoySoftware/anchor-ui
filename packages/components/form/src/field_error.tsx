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
  | "phoneNumber"
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
 * 4. An error message in the anchorForms namespace for the given input type and
 *    error type.
 *
 * 5. An error message in the forms namespace for the given error type
 *
 * 6. An error message in the anchorForms namespace for the given error type
 */
function lookupErrorMessage(
  error: HookFormFieldError,
  scope: string,
  name: string,
  inputType: InputType,
  t: TFunction,
  tNamespace: string[]
): string {
  if (error.message !== undefined && error.message !== "") {
    return error.message;
  }

  const i18nName = snakeCase(name);
  const i18nErrorScope = snakeCase(scope);

  // These are translations scoped to the form's scope and field name.
  // The use of forms.errors is to look into the custom tNamespace if one was
  // provided. The second will look up in the forms default namespace.
  const fieldScopes = [
    `forms.errors.${i18nErrorScope}.${i18nName}.${error.type}`,
    `errors.${i18nErrorScope}.${i18nName}.${error.type}`,
  ];

  // Global scopes are used to look up defaults in the forms namespace or
  // the anchorForms namespace
  const globalScopes = [
    `errors.input_types.${snakeCase(inputType)}.${error.type}`,
    `errors.${error.type}`,
  ];

  const combinedGlobalScopes = tNamespace.flatMap((namespace: string) =>
    globalScopes.map((scope) => `${namespace}:${scope}`)
  );

  return t([...fieldScopes, ...combinedGlobalScopes]);
}

export const FieldError: React.FC<FieldErrorProps> = ({
  error,
  inputId,
  name,
  inputType = "text",
  ...elementProps
}): React.ReactElement | null => {
  const { scope, tNamespace = [] } = useFormScope();
  const namespace = compact(flatten([tNamespace, "forms", "anchorForms"]));
  const { t } = useTranslation(namespace);

  if (!error || !name) return null;

  const message = lookupErrorMessage(
    error,
    scope,
    name,
    inputType,
    t,
    namespace
  );

  return (
    <ErrorMessage
      errors={message.split("\n")}
      parentId={inputId}
      {...elementProps}
    />
  );
};
