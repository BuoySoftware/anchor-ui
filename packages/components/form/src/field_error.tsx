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
  const inputMessage = t(`${i18nErrorScope}.${i18nName}.${error.type}`, {
    defaultValue: "",
  });

  if (inputMessage !== "") {
    return inputMessage;
  }

  const typeMessage = t(`input_types.${snakeCase(inputType)}.${error.type}`, {
    defaultValue: "",
  });

  if (typeMessage !== "") {
    return typeMessage;
  }

  return t(error.type);
}

export const FieldError: React.FC<FieldErrorProps> = ({
  error,
  inputId,
  name,
  inputType = "text",
  ...elementProps
}): React.ReactElement | null => {
  const { t } = useTranslation("forms", { keyPrefix: "errors" });
  const { scope } = useFormScope();

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
