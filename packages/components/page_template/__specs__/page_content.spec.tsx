import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { render } from "@testing-library/react";

import { PageContent } from "../src/page_content";

describe("<PageContent />", () => {
  i18n.use(initReactI18next).init({
    lng: "en",
    resources: {
      en: {
        translation: {
          loading: "Loading",
        },
      },
    },
  });

  it("renders content", () => {
    const { getByText } = render(<PageContent>My Content</PageContent>);

    expect(getByText("My Content")).toBeInTheDocument();
  });

  context("loading", () => {
    it("does not render the content", () => {
      const { queryByText } = render(
        <PageContent loading>My Content</PageContent>
      );

      expect(queryByText("My Content")).not.toBeInTheDocument();
    });

    it("renders a loading message", () => {
      const { queryByText } = render(
        <PageContent loading>My Content</PageContent>
      );

      expect(queryByText("Loading")).toBeInTheDocument();
    });
  });
});
