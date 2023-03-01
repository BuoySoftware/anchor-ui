import { useForm } from "react-hook-form";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import {
  act,
  render as baseRender,
  waitFor,
  UserRenderResult,
} from "../test_utils";
import { Form, TextField } from "../src";

describe("<TextField />", () => {
  const translations = {
    errors: {
      required: "This field is required",
    },
    hints: {
      test_form: {
        my_text_field: "Optional helper text",
      },
    },
    labels: {
      my_text_field: "This is my text field",
    },
    placeholders: {
      test_form: {
        my_text_field: "Enter value",
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
        id="test-form"
        data-testid="test-form"
        form={form}
        scope="test_form"
        onSubmit={jest.fn()}
      >
        <TextField
          data-testid="text-field-test"
          rules={{ required: true }}
          name="myTextField"
        />
        <button type="submit">Submit</button>
      </Form>
    );
  };

  function render(): UserRenderResult {
    return baseRender(<MockForm />);
  }

  const FIELD_LABEL = i18n.t("forms:labels.my_text_field");

  it("renders properly", () => {
    const form = render();

    expect(form.asFragment()).toMatchSnapshot();
  });

  context("with an error", () => {
    it("displays errors associated with the field", async () => {
      const { user, getByLabelText, getByText } = render();
      const errorMessage = i18n.t("forms:errors.required");

      await act(() => {
        user.click(getByText("Submit"));
      });

      await waitFor(() => {
        expect(getByLabelText(FIELD_LABEL)).toHaveErrorMessage(errorMessage);
      });
    });
  });

  context("with a hint", () => {
    it("displays the hint associated with the field", async () => {
      const { user, getByText } = render();
      const hint = i18n.t("forms:hints.test_form.my_text_field");

      await act(() => {
        user.click(getByText("Submit"));
      });

      expect(getByText(hint)).toBeInTheDocument();
    });
  });
});
