import React from "react";
import { ThemeProvider } from "styled-components";
import { render, RenderResult, RenderOptions } from "@testing-library/react";
import { theme } from "@buoysoftware/anchor-theme";
import userEvent from "@testing-library/user-event";

export interface UserRenderResult extends RenderResult {
  user: ReturnType<typeof userEvent.setup>;
}

const Wrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}): React.ReactElement => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender = (
  ui: React.ReactElement,
  options?: RenderOptions
): UserRenderResult => ({
  user: userEvent.setup(),
  ...render(ui, { wrapper: Wrapper, ...options }),
});

export * from "@testing-library/react";

export { customRender as render };
