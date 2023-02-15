import { useTranslation } from "react-i18next";
import { createContext, useContext } from "react";

type UseTranslationParameters = Parameters<typeof useTranslation>;
export type TNamespace = UseTranslationParameters[0];

interface FormScope {
  baseErrors: string[];
  formId: string;
  scope: string;
  tNamespace?: TNamespace;
}

export const FormScopeContext = createContext<FormScope>({
  baseErrors: [],
  formId: "",
  scope: "",
  tNamespace: undefined,
});

export const FormScopeProvider = FormScopeContext.Provider;

export const useFormScope = (): FormScope => useContext(FormScopeContext);
