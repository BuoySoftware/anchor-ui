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

interface ReturnType<V> {
  options: Option<V>[]
  getOptionFromValue: (value: V) => Option<V> | undefined;
}

export function useTranslatedOptions<V extends string>(
  values: V[],
  { tNamespace, tOptions }: TranslatableComponentProps
): ReturnType<V> {
  const { t } = useTranslation(tNamespace, tOptions);

  const options = values.map((value) => ({
    label: t(value),
    value,
  }));

  const getOptionFromValue = (value: V): Option<V> | undefined => {
    return options.find((option) => option.value === value )
  }

  return { options, getOptionFromValue }
}
