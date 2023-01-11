import { useForm } from "react-hook-form";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { screen, render, RenderResult } from "@testing-library/react";
import { theme } from "@buoysoftware/anchor-theme";
import { ThemeProvider } from "styled-components";
import userEvent from "@testing-library/user-event";

import { Form, RadioField, RadioFieldProps } from "../src";

describe("<RadioField />", () => {
  type MockFormProps = Partial<RadioFieldProps<string>>;

  const OPTIONS = [
    {
      value: "a",
      label: "Value A",
    },
    {
      value: "b",
      label: "Value B",
    },
  ];

  const translations = {
    labels: {
      my_radio_field: "This is my radio field",
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

  const MockForm: React.FC<MockFormProps> = (
    radioFieldProps
  ): React.ReactElement => {
    const form = useForm();

    return (
      <Form
        id="test-form"
        data-testid="test-form"
        form={form}
        scope="test_form"
        onSubmit={jest.fn()}
      >
        <RadioField
          data-testid="radio-test"
          rules={{ required: true }}
          options={OPTIONS}
          name="myRadioField"
          {...radioFieldProps}
        />
        <button type="submit">Submit</button>
      </Form>
    );
  };

  interface Render extends RenderResult {
    user: ReturnType<typeof userEvent.setup>;
  }

  const renderField = (props: MockFormProps = {}): Render => {
    return {
      user: userEvent.setup(),
      ...render(
        <ThemeProvider theme={theme}>
          <MockForm {...props} />
        </ThemeProvider>
      ),
    };
  };

  it("renders properly", () => {
    const wrapper = renderField();

    expect(wrapper.asFragment()).toMatchSnapshot();
  });

  context("with error", () => {
    it("flags the field as invalid", async () => {
      const { user } = renderField();

      await user.click(screen.getByText("Submit"));

      expect(screen.getByTestId("radio-test")).toBeInvalid();
    });

    it("renders properly", async () => {
      const { user, asFragment } = renderField();

      await user.click(screen.getByText("Submit"));

      expect(asFragment()).toMatchSnapshot();
    });
  });
  //
  describe("group label", () => {
    context("ccustom label is provided", () => {
      it("uses the passed in label", () => {
        const label = <p>Hello World</p>;

        renderField({ "data-testid": "test-field", label });

        expect(screen.getByTestId("test-field")).toHaveTextContent(
          "Hello World"
        );
      });
    });

    context("custom label is not provided", () => {
      it("builds a label from translations", () => {
        renderField();

        expect(screen.getByTestId("radio-test")).toHaveTextContent(
          "This is my radio field"
        );
      });
    });
  });

  describe("defaultChecked", () => {
    context("defaultChecked is provided", () => {
      it("checks the associated radio option", () => {
        renderField({
          defaultChecked: "b",
        });

        expect(screen.getByTestId("radio-my-radio-field-b")).toBeChecked();
      });

      it("does not check another option", () => {
        renderField({
          defaultChecked: "b",
        });

        expect(screen.getByTestId("radio-my-radio-field-a")).not.toBeChecked();
      });
    });

    context("defaultChecked is not provided", () => {
      it("does not check any options", () => {
        const { container } = renderField({
          defaultChecked: undefined,
        });

        expect(
          container.querySelector("input[type='radio']:checked")
        ).toBeNull();
      });
    });
  });
});
