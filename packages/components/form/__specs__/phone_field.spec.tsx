import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { useForm } from "react-hook-form";

import { PhoneField } from "../src/phone_field";
import { Form } from "../src/form";
import { act, render, waitFor, UserRenderResult } from "../test_utils";

describe("<PhoneField />", () => {
  const translations = {
    errors: {
      invalidPhoneNumber: "This phone number is invalid",
    },
    hints: {
      test_form: {
        phone_number: "Enter a 10 digit phone number",
      },
    },
    labels: {
      phone_number: "Cell Phone Number",
    },
    placeholders: {
      test_form: {
        phone_number: "ex: xxx-xxx-xxxx",
      },
    },
  };

  i18n.use(initReactI18next).init({
    lng: "en",
    ns: ["forms"],
    resources: {
      en: {
        forms: translations,
      },
    },
  });

  const MockForm: React.FC = (): React.ReactElement => {
    const form = useForm();

    return (
      <Form
        data-testid="test-form"
        form={form}
        id="test-form"
        onSubmit={jest.fn()}
        scope="test_form"
      >
        <PhoneField name="phoneNumber" />
        <button type="submit">Submit</button>
      </Form>
    );
  };

  function setup(): UserRenderResult {
    return render(<MockForm />);
  }

  const FIELD_LABEL = i18n.t("forms:labels.phone_number");

  it("renders properly", () => {
    const form = setup();

    expect(form.asFragment()).toMatchSnapshot();
  });

  context("with an error", () => {
    it("displays errors associated to the field", async () => {
      const { user, getByLabelText, getByText } = setup();
      const errorMessage = i18n.t("forms:errors.invalidPhoneNumber");

      await act(() => {
        user.click(getByText("Submit"));
      });

      await waitFor(() => {
        expect(getByLabelText(FIELD_LABEL)).toHaveErrorMessage(errorMessage);
      });
    });
  });

  context("with a hint", () => {
    it("displays a hint associated to the field", async () => {
      const { user, getByText } = setup();
      const hint = i18n.t("forms:hints.test_form.phone_number");

      await act(() => {
        user.click(getByText("Submit"));
      });

      await waitFor(() => {
        expect(getByText(hint)).toBeInTheDocument();
      });
    });
  });
});
