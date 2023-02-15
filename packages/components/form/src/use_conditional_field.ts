import {
  Control,
  FieldPath,
  FieldValues,
  Path,
  PathValue,
  useWatch,
} from "react-hook-form";
import flatten from "lodash/flatten";
import includes from "lodash/includes";
import some from "lodash/some";

interface UseConditionalFieldResult {
  active: boolean;
}

export interface UseConditionalFieldArgs<TFieldValues extends FieldValues> {
  control?: Control<TFieldValues>;
  value:
    | PathValue<TFieldValues, Path<TFieldValues>>
    | PathValue<TFieldValues, Path<TFieldValues>>[];
  watch: FieldPath<TFieldValues> | FieldPath<TFieldValues>[];
}

export function useConditionalField<TFieldValues extends FieldValues>({
  control,
  value,
  watch,
}: UseConditionalFieldArgs<TFieldValues>): UseConditionalFieldResult {
  const actualWatch = flatten([watch]);
  const actualValues = useWatch({
    control,
    name: actualWatch,
  });

  const active = Array.isArray(value)
    ? some(actualValues, (actualValue) => includes(value, actualValue))
    : actualValues.includes(value);

  return { active };
}
