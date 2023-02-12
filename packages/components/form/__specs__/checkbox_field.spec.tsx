import { useForm } from "react-hook-form";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { render as baseRender, waitFor, UserRenderResult } from "../test_utils";
import { CheckboxField } from "../src/checkbox_field";
import { Form } from "../src/form";

describe("<CheckboxField />", () => {
  const translations = {
    errors: {
      input_types: {
        checkbox: {
          required: "This field is required",
        },
      },
    },
    labels: {
      my_checkbox_field: "Example checkbox",
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
        <CheckboxField name="myCheckboxField" rules={{ required: true }} />
        <button type="submit">Submit</button>
      </Form>
    );
  };

  function render(): UserRenderResult {
    return baseRender(<MockForm />);
  }

  it("renders properly", () => {
    const { asFragment } = render();

    expect(asFragment()).toMatchSnapshot();
  });

  context("with error", () => {
    it("flags the field as invalid", async () => {
      const { user, getByText, getByLabelText } = render();

      await user.click(getByText("Example checkbox"));

      waitFor(() => {
        expect(getByLabelText("Example checkbox")).toBeInvalid();
      });
    });

    it("renders properly", async () => {
      const { user, getByText, asFragment } = render();

      await user.click(getByText("Submit"));

      expect(asFragment()).toMatchSnapshot();
    });
  });
});
