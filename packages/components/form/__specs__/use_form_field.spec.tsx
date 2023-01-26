import { renderHook, RenderHookResult } from "@testing-library/react";
import i18next from "i18next";
import { useFormField, UseFormFieldProps, FormScopeProvider } from "../src";

import { ResourceKey } from "i18next";
import { I18nextProvider } from "react-i18next";

jest.mock("react-hook-form", () => ({
  ...jest.requireActual("react-hook-form"),
  useFormState: jest.fn(),
}));

import HookForm from "react-hook-form";

describe("useFormField", () => {
  interface FormTranslations {
    [key: string]: ResourceKey;
  }

  interface RenderArgs<L extends true | false> extends UseFormFieldProps<L> {
    errors?: HookForm.FieldErrors;
    mockTranslations?: FormTranslations;
    tNamespace?: string[];
  }

  function buildI18nInstance(
    translations: FormTranslations,
    tNamespace: string[]
  ): typeof i18next {
    const i18nInstance = i18next.createInstance({
      lng: "en",
      ns: [...tNamespace, "forms"],
      resources: {
        en: translations,
      },
    });

    i18nInstance.init();

    return i18nInstance;
  }

  const renderFieldHook = <L extends true | false>({
    mockTranslations = {},
    tNamespace = [],
    errors,
    ...hookProps
  }: RenderArgs<L>): RenderHookResult<
    ReturnType<typeof useFormField>,
    UseFormFieldProps<L>
  > => {
    const i18nInstance = buildI18nInstance(mockTranslations, tNamespace);
    jest.spyOn(HookForm, "useFormState").mockReturnValue({
      errors,
    } as any);

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <I18nextProvider i18n={i18nInstance}>
        <FormScopeProvider value={{ scope: "test_form", tNamespace }}>
          {children}
        </FormScopeProvider>
      </I18nextProvider>
    );

    return renderHook(() => useFormField(hookProps), { wrapper });
  };

  describe("label", () => {
    it("returns a label from i18n for the given field", () => {
      const mockTranslations = {
        forms: {
          labels: {
            test_form: {
              test_field: "Test Field Label",
            },
          },
        },
      };

      const { result } = renderFieldHook({
        name: "testField",
        mockTranslations,
      });

      expect(result.current.label).toEqual("Test Field Label");
    });

    context("namespace", () => {
      it("renders for a single provided namespace", () => {
        const mockTranslations = {
          forms: {
            labels: {
              test_form: {
                test_field: "Test Field Label",
              },
            },
          },
          providedNamespace: {
            forms: {
              labels: {
                test_form: {
                  test_field: "Provided Namespace Label",
                },
              },
            },
          },
        };

        const { result } = renderFieldHook({
          name: "testField",
          mockTranslations,
          tNamespace: ["providedNamespace"],
        });

        expect(result.current.label).toEqual("Provided Namespace Label");
      });

      it("renders for multiple provided namespaces", () => {
        const mockTranslations = {
          forms: {
            labels: {
              test_form: {
                test_field: "Form Namespace Label",
              },
            },
          },
          firstNamespace: {
            forms: {
              labels: {
                test_form: {
                  test_field: "First Namespace Label",
                },
              },
            },
          },
          secondNamespace: {
            test_field: "Second Namespace Label",
          },
        };

        const { result } = renderFieldHook({
          name: "testField",
          mockTranslations,
          tNamespace: ["firstNamespace", "secondNamespace"],
        });

        expect(result.current.label).toEqual("First Namespace Label");
      });
    });

    context("fallback", () => {
      it("falls back to render label outside the scope of the form", () => {
        const mockTranslations = {
          forms: {
            labels: {
              test_field: "Hello Fallback",
            },
          },
        };

        const { result } = renderFieldHook({
          name: "testField",
          mockTranslations,
        });

        expect(result.current.label).toEqual("Hello Fallback");
      });
    });
  });

  describe("inputId", () => {
    it("generates an id from the field name", () => {
      const { result } = renderFieldHook({ name: "testField" });

      expect(result.current.inputId).toEqual("test-field");
    });
  });

  describe("placeholder", () => {
    context("placeholder exists for the field", () => {
      it("renders the placeholder", () => {
        const mockTranslations = {
          forms: {
            placeholders: {
              test_form: {
                test_field: "ABC 123",
              },
            },
          },
        };

        const { result } = renderFieldHook({
          name: "testField",
          mockTranslations,
        });

        expect(result.current.placeholder).toEqual("ABC 123");
      });
    });

    context("placeholder does not exist for the field", () => {
      it("renders the an empty placeholder", () => {
        const { result } = renderFieldHook({ name: "testField" });

        expect(result.current.placeholder).toEqual("");
      });
    });

    context("custom default placeholder provided", () => {
      it("renders the the provided default placeholder", () => {
        const { result } = renderFieldHook({
          name: "testField",
          defaultPlaceholder: "Custom default placeholder",
        });

        expect(result.current.placeholder).toEqual(
          "Custom default placeholder"
        );
      });
    });
  });

  describe("error", () => {
    context("error does not exist", () => {
      it("does nothing", () => {
        const { result } = renderFieldHook({ name: "testField" });

        expect(result.current.error).toBeUndefined();
      });
    });

    context("error does exist", () => {
      it("returns the error for display", async () => {
        const error = { type: "required", message: "This is required" };

        const { result } = renderFieldHook({
          name: "testField",
          errors: {
            testField: error,
          },
        });

        expect(result.current.error).toEqual(error);
      });
    });
  });
});
