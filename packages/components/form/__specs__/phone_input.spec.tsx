import { useForm } from "react-hook-form";
import userEvent from "@testing-library/user-event";

import PhoneInput, { PhoneInputProps } from "../src/phone_field/phone_input";
import { Form } from "../src/form";
import { render, UserRenderResult } from "../test_utils";

describe("<PhoneInput />", () => {
  type MockFormProps = Partial<PhoneInputProps>;

  const MockForm: React.FC<MockFormProps> = (props): React.ReactElement => {
    const form = useForm();

    return (
      <Form
        data-testid="test-form"
        form={form}
        id="test-form"
        onSubmit={jest.fn()}
        scope="test_form"
      >
        <PhoneInput name="phoneNumber" onChange={jest.fn()} {...props} />
      </Form>
    );
  };

  function setup(props: Partial<PhoneInputProps>): UserRenderResult {
    return render(<MockForm {...props} />);
  }

  it("formats the phone number as it is input", async () => {
    const { user, getByTestId } = setup({ "data-testid": "phone-number" });
    const field = getByTestId("input-phone-number");

    await user.type(field, "516");

    expect(field).toHaveValue("(516)");

    await user.type(field, "5552389");

    expect(field).toHaveValue("(516) 555-2389");
  });

  it("allows the user to back space", async () => {
    const { user, getByTestId } = setup({ "data-testid": "phone-number" });
    const field = getByTestId("input-phone-number");

    await user.type(field, "516");

    await user.keyboard("{Backspace}");

    expect(field).toHaveValue("(516");
  });
});
