import { useForm } from "react-hook-form";
import { render as baseRender, UserRenderResult } from "../test_utils";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { Form, SelectField } from "../src";

describe("<SelectField />", () => {
  const OPTIONS = [
    {
      value: "a",
      label: "Option A",
    },
    {
      value: "b",
      label: "Option B",
    },
  ];

  const translations = {
    errors: {
      input_types: {
        select: {
          required: "This field is required",
        },
      },
    },
    labels: {
      my_select_field: "This is my select field",
    },
    placeholders: {
      select: "Select",
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

  interface MockFormProps {
    async: boolean;
  }

  const MockForm: React.FC<MockFormProps> = (props): React.ReactElement => {
    const form = useForm();

    return (
      <Form
        id="test-form"
        data-testid="test-form"
        form={form}
        scope="test_form"
        onSubmit={jest.fn()}
      >
        <SelectField
          data-testid="select-test"
          rules={{ required: true }}
          options={OPTIONS}
          name="mySelectField"
          {...props}
        />
        <button type="submit">Submit</button>
      </Form>
    );
  };

  function render(props: MockFormProps): UserRenderResult {
    return baseRender(<MockForm {...props} />);
  }

  const FIELD_LABEL = i18n.t("forms:labels.my_select_field");

  [true, false].forEach((async) => {
    context(`async is ${async}`, () => {
      it("renders properly", async () => {
        const form = render({ async });

        expect(form.asFragment()).toMatchSnapshot();
      });

      context("with an error", () => {
        it("flags the field as invalid", async () => {
          const { user, getByLabelText, getByText } = render({ async });

          await user.click(getByText("Submit"));

          expect(getByLabelText(FIELD_LABEL)).toBeInvalid();
        });

        it("displays errors associated with the field", async () => {
          const { user, getByLabelText, getByText } = render({ async });
          const errorMessage = i18n.t(
            "forms:errors.input_types.select.required"
          );

          await user.click(getByText("Submit"));

          expect(getByLabelText(FIELD_LABEL)).toHaveErrorMessage(errorMessage);
        });
      });
    });
  });
});
