import * as CSS from "csstype";
import { system } from "styled-system";

export const gap = system({
  gap: {
    property: "gap",
    scale: "space",
  },
});

export interface GapProps {
  gap?: CSS.Property.Gap;
}
