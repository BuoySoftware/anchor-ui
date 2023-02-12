import { render } from "../test_utils";
import { useForm } from "react-hook-form";
import { Form } from "../src";

describe("<Form />", () => {
  interface MockFormProps {
    id: string;
    mutationErrors?: Record<string, string[]>;
    scope: string;
  }

  interface FormFields {
    testField: "string";
  }

  const MockForm: React.FC<MockFormProps> = ({
    ...props
  }): React.ReactElement => {
    const form = useForm<FormFields>();
    const {
      formState: { errors },
    } = form;

    return (
      <Form form={form} {...props}>
        {errors["testField"] !== undefined && (
          <div data-testid="error-test-field">
            {errors["testField"].message}
          </div>
        )}
      </Form>
    );
  };

  context("form is valid", () => {
    it("does not render an error message", () => {
      const { queryByTestId } = render(
        <MockForm scope="test-form-scope" id="test-form" />
      );

      expect(queryByTestId("error-test-form")).not.toBeInTheDocument();
    });
  });

  context("server errors are provided", () => {
    it("renders base error messages for the form", () => {
      const { queryByTestId } = render(
        <MockForm
          scope="test-form-scope"
          mutationErrors={{ base: ["Something went wrong"] }}
          id="test-form"
        />
      );

      expect(queryByTestId("error-test-form")).toHaveTextContent(
        "Something went wrong"
      );
    });

    it("renders field specific server errors", () => {
      const { queryByTestId } = render(
        <MockForm
          scope="test-form-scope"
          mutationErrors={{ testField: ["Something went wrong"] }}
          id="test-form"
        />
      );

      expect(queryByTestId("error-test-field")).toHaveTextContent(
        "Something went wrong"
      );
    });
  });
});
