import { useFormScope } from "./form_scope_provider";
import { ErrorMessage } from "./error_message";

export const FormBaseErrors: React.FC = (): React.ReactElement | null => {
  const { baseErrors, formId } = useFormScope();

  if (baseErrors.length === 0) return null;

  return (
    <ErrorMessage errors={baseErrors} parentId={formId} mb="form.fieldGap" />
  );
}
