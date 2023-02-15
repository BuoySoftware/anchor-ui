import { render } from "../test_utils";
import { FormBaseErrors } from "../src/form_base_errors";
import * as FormScopeProvider from "../src/form_scope_provider";


describe("<FormBaseErrors />", () => {
  it("renders any base errors in the form scope", () => {
    jest.spyOn(FormScopeProvider, "useFormScope").mockReturnValue({
      baseErrors: ["Something went wrong"],
      formId: "my-form",
      scope: "test-form",
    });
    const { getByText } = render(<FormBaseErrors />);

    expect(getByText("Something went wrong")).toBeInTheDocument()
  });
});
