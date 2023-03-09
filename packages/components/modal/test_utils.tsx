import Modal from "react-modal";
import React from "react";
import { ThemeProvider } from "styled-components";
import { render, RenderResult, RenderOptions } from "@testing-library/react";
import { theme } from "@buoysoftware/anchor-theme";
import userEvent from "@testing-library/user-event";

interface UserRenderResult extends RenderResult {
  user: ReturnType<typeof userEvent.setup>;
}

const Wrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}): React.ReactElement => {
  return (
    <div id="test-root">
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </div>
  );
};

const customRender = (
  ui: React.ReactElement,
  options?: RenderOptions
): UserRenderResult => {
  const rendered = render(ui, { wrapper: Wrapper, ...options });

  Modal.setAppElement("#test-root");

  return {
    user: userEvent.setup(),
    ...rendered,
  };
};

export * from "@testing-library/react";

export { customRender as render };
