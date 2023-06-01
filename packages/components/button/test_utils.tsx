import React from "react";
import { ThemeProvider } from "styled-components";
import { render, RenderOptions } from "@testing-library/react";
import { theme } from "@buoysoftware/anchor-theme";

const Wrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}): React.ReactElement => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender = (
  ui: React.ReactElement,
  options?: RenderOptions
): ReturnType<typeof render> => render(ui, { wrapper: Wrapper, ...options });

export * from "@testing-library/react";
export { customRender as render };
