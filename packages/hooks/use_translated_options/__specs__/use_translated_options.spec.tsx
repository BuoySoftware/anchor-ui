import { renderHook } from "@testing-library/react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { useTranslatedOptions } from "../src";

describe("useTranslatedOptions", () => {
  const translations = {
    mock_prefix: {
      option_1: "Option 1",
      option_2: "Option 2",
    },
  };

  i18n.use(initReactI18next).init({
    lng: "en",
    ns: ["myNamespace"],
    resources: {
      en: {
        myNamespace: translations,
      },
    },
  });

  it("exposes options", () => {
    const { result } = renderHook(() =>
      useTranslatedOptions(["option_1", "option_2"], {
        tNamespace: "myNamespace",
        tOptions: { keyPrefix: "mock_prefix" },
      })
    );

    expect(result.current.options).toBeDefined();
  });

  it("exposes getOptionFromValue", () => {
    const { result } = renderHook(() =>
      useTranslatedOptions(["option_1", "option_2"], {
        tNamespace: "myNamespace",
        tOptions: { keyPrefix: "mock_prefix" },
      })
    );

    expect(result.current.getOptionFromValue).toBeDefined();
  });

  describe("options", () => {
    it("is a set of translated the options", () => {
      const { result } = renderHook(() =>
        useTranslatedOptions(["option_1", "option_2"], {
          tNamespace: "myNamespace",
          tOptions: { keyPrefix: "mock_prefix" },
        })
      );

      expect(result.current.options).toEqual([
        { label: "Option 1", value: "option_1" },
        { label: "Option 2", value: "option_2" },
      ]);
    });
  });

  describe("getOptionFromValue", () => {
    it("returns an option from a given value", () => {
      const { result } = renderHook(() =>
        useTranslatedOptions(["option_1", "option_2"], {
          tNamespace: "myNamespace",
          tOptions: { keyPrefix: "mock_prefix" },
        })
      );

      expect(result.current.getOptionFromValue("option_1")).toEqual({
        label: "Option 1",
        value: "option_1",
      });
    });
  });
});
