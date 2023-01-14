import { useTranslation } from "react-i18next";

type UseTranslationParameters = Parameters<typeof useTranslation>;
type TNamespace = UseTranslationParameters[0];

interface TranslatableComponentProps {
  tNamespace: TNamespace;
  tOptions: UseTranslationParameters[1];
}

type Value = string;

interface Option {
  label: string;
  value: Value;
}

export const useTranslatedOptions = function useTranslatedOptions(
  values: Value[],
  { tNamespace, tOptions }: TranslatableComponentProps
): Option[] {
  const { t } = useTranslation(tNamespace, tOptions);

  return values.map((value) => ({
    label: t(value),
    value,
  }));
};

export default useTranslatedOptions;
