import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { render } from "@testing-library/react";

import { FormScopeProvider } from "../src";
import { FieldError } from "../src/field_error";

describe("<FieldError />", () => {
  const translations = {
    errors: {
      date: "Error type message",
      input_types: {
        text: {
          required: "Default text input required message",
        },
      },
      test_form: {
        my_field: {
          required: "Scoped required error",
        },
      },
    },
  };

  const customScopeTranslations = {
    forms: {
      errors: {
        test_form: {
          custom_field: {
            required: "Custom scoped required error",
          },
        },
      },
    },
  };

  i18n.use(initReactI18next).init({
    lng: "en",
    ns: ["forms", "customScope"],
    resources: {
      en: {
        customScope: customScopeTranslations,
        forms: translations,
      },
    },
  });

  context("error is undefined", () => {
    it("renders nothing", () => {
      const errors = render(
        <FieldError name="my-field" inputId="test-input" />
      );

      expect(errors.asFragment()).toMatchSnapshot();
    });
  });

  context("error field name is missing", () => {
    it("renders nothing", () => {
      const errors = render(
        <FieldError
          error={{ type: "required", message: "Is required" }}
          inputId="test-input"
        />
      );

      expect(errors.asFragment()).toMatchSnapshot();
    });
  });

  context("error message is provided", () => {
    context("with a single message", () => {
      it("renders the provided message", () => {
        const errors = render(
          <FieldError
            name="myField"
            error={{ type: "server", message: "Invalid field" }}
            inputId="test-input"
          />
        );

        expect(errors.asFragment()).toMatchSnapshot();
      });
    });

    context("with multiple messages", () => {
      it("renders all of the provided messages", () => {
        const errors = render(
          <FieldError
            name="myField"
            error={{ type: "server", message: "Invalid field\nOther error" }}
            inputId="test-input"
          />
        );

        expect(errors.asFragment()).toMatchSnapshot();
      });
    });
  });

  context("error message is not provided", () => {
    context("scope and field error exists", () => {
      it("renders a message tailored to the scope and field name", () => {
        const errors = render(
          <FormScopeProvider value={{ scope: "testForm" }}>
            <FieldError
              name="myField"
              error={{ type: "required", message: "" }}
              inputId="test-input"
            />
          </FormScopeProvider>
        );

        expect(errors.getByTestId("error-test-input")).toHaveTextContent(
          "Scoped required error"
        );
      });

      it("supports a custom tNamespace for the scope and field error", () => {
        const errors = render(
          <FormScopeProvider
            value={{ scope: "testForm", tNamespace: ["customScope"] }}
          >
            <FieldError
              name="customField"
              error={{ type: "required", message: "" }}
              inputId="test-input"
            />
          </FormScopeProvider>
        );

        expect(errors.getByTestId("error-test-input")).toHaveTextContent(
          "Custom scoped required error"
        );
      });
    });

    context("input type message exists", () => {
      it("renders the input type validation error message", () => {
        const errors = render(
          <FormScopeProvider value={{ scope: "testForm" }}>
            <FieldError
              name="testField2"
              inputType="text"
              error={{ type: "required", message: "" }}
              inputId="test-input"
            />
          </FormScopeProvider>
        );

        expect(errors.getByTestId("error-test-input")).toHaveTextContent(
          "Default text input required message"
        );
      });
    });

    it("falls back to a message based off the validation error type", () => {
      const errors = render(
        <FormScopeProvider value={{ scope: "testForm" }}>
          <FieldError
            name="date"
            inputType="text"
            error={{ type: "date", message: "" }}
            inputId="test-input"
          />
        </FormScopeProvider>
      );

      expect(errors.getByTestId("error-test-input")).toHaveTextContent(
        "Error type message"
      );
    });
  });

  context("error message with markdown", () => {
    context("with a single message", () => {
      it("renders the provided message with markup", () => {
        const errors = render(
          <FieldError
            name="myField"
            error={{
              type: "server",
              message: "This is **an error** with markdown",
            }}
            inputId="test-input"
          />
        );

        expect(errors.asFragment()).toMatchSnapshot();
      });
    });
  });
});
