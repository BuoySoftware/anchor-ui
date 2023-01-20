import { style } from "styled-system";

export interface TableLayoutProps {
  tableLayout?: "auto" | "fixed";
}

export const tableLayout = style({
  prop: "tableLayout",
  cssProperty: "tableLayout",
});
