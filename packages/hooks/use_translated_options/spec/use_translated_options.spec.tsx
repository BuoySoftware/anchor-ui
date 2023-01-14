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

  it("translates the options", () => {
    const { result } = renderHook(() =>
      useTranslatedOptions(["option_1", "option_2"], {
        tNamespace: "myNamespace",
        tOptions: { keyPrefix: "mock_prefix" },
      })
    );

    expect(result.current).toEqual([
      { label: "Option 1", value: "option_1" },
      { label: "Option 2", value: "option_2" },
    ]);
  });
});
