import { useFormState } from "react-hook-form";
import { Button, ButtonProps } from "@buoysoftware/anchor-button";

type FormButtonProps = ButtonProps;

export const FormButton: React.FC<FormButtonProps> = ({
  children,
  ...props
}): React.ReactElement => {
  const { isSubmitting } = useFormState();

  return (
    <Button submitting={isSubmitting} {...props}>
      {children}
    </Button>
  );
};
