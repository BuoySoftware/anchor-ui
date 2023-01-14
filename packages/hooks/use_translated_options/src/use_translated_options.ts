import { useTranslation } from "react-i18next";

type UseTranslationParameters = Parameters<typeof useTranslation>;

interface TranslatableComponentProps {
  tNamespace: UseTranslationParameters[0];
  tOptions?: UseTranslationParameters[1];
}

type Value = string;

interface Option {
  label: string;
  value: Value;
}

export function useTranslatedOptions(
  values: Value[],
  { tNamespace, tOptions }: TranslatableComponentProps
): Option[] {
  const { t } = useTranslation(tNamespace, tOptions);

  return values.map((value) => ({
    label: t(value),
    value,
  }));
}
