import { BoxProps } from "@buoysoftware/anchor-layout";

import { useFormScope } from "./form_scope_provider";
import { ErrorMessage } from "./error_message";

type FormBaseErrorsProps = BoxProps;

export const FormBaseErrors: React.FC<FormBaseErrorsProps> = (
  props
): React.ReactElement | null => {
  const { baseErrors, formId } = useFormScope();

  if (baseErrors.length === 0) return null;

  return (
    <ErrorMessage
      errors={baseErrors}
      parentId={formId}
      mb="form.fieldGap"
      {...props}
    />
  );
};
