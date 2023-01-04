import * as CSS from "csstype";
import { system } from "styled-system";

export const textDecoration = system({
  textDecoration: true,
});

export interface TextDecorationProps {
  textDecoration?: CSS.Property.TextDecoration;
}
