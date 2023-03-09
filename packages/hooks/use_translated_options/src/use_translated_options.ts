import { useTranslation } from "react-i18next";

type UseTranslationParameters = Parameters<typeof useTranslation>;

interface TranslatableComponentProps {
  tNamespace: UseTranslationParameters[0];
  tOptions?: UseTranslationParameters[1];
}

interface Option<V> {
  label: string;
  value: V;
}

export function useTranslatedOptions<V extends string>(
  values: V[],
  { tNamespace, tOptions }: TranslatableComponentProps
): Option<V>[] {
  const { t } = useTranslation(tNamespace, tOptions);

  return values.map((value) => ({
    label: t(value),
    value,
  }));
}
