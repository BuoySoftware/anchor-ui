import { useForm } from "react-hook-form";
import { fireEvent } from "@testing-library/react";

import PhoneInput, { PhoneInputProps } from "../src/phone_field/phone_input";
import { Form } from "../src/form";
import { render, UserRenderResult } from "../test_utils";

const BACKSPACE_KEY = {
  key: "Backspace",
  code: 8,
  inputType: "deleteContentBackward",
};

const SHARED_EVENT_CONFIG = {
  key: BACKSPACE_KEY.key,
  charCode: BACKSPACE_KEY.code,
  keyCode: BACKSPACE_KEY.code,
  which: BACKSPACE_KEY.code,
};

describe("<PhoneInput />", () => {
  type MockFormProps = Partial<PhoneInputProps>;

  const backspace = (field: Element): void => {
    let { value } = field as HTMLInputElement;

    const downEvent = fireEvent.keyDown(field, SHARED_EVENT_CONFIG);

    if (downEvent) {
      value = value.slice(0, -1);

      fireEvent.input(field, {
        target: { value },
        inputType: BACKSPACE_KEY.inputType,
        bubbles: true,
        cancelable: true,
      });
    }

    fireEvent.keyUp(field, SHARED_EVENT_CONFIG);
  };

  const fillInput = (field: Element, value: string): void => {
    fireEvent.input(field, { target: { value } });
  };

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

  function renderInput(props: Partial<PhoneInputProps>): UserRenderResult {
    return render(<MockForm {...props} />);
  }

  it("formats the phone number as it is input", () => {
    const wrapper = renderInput({ "data-testid": "phone-number" });
    const field = wrapper.getByTestId("input-phone-number");

    fillInput(field, "516");

    expect(field).toHaveValue("(516)");

    fillInput(field, "5165552389");

    expect(field).toHaveValue("(516) 555-2389");
  });

  it("allows the user to back space", () => {
    const wrapper = renderInput({ "data-testid": "phone-number" });
    const field = wrapper.getByTestId("input-phone-number");

    fillInput(field, "516");
    backspace(field);

    expect(field).toHaveValue("(516");
  });
});
