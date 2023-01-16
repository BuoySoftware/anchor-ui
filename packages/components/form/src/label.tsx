import styled from "styled-components";
import { LabelHTMLAttributes } from "react";
import { Heading, HeadingProps } from "@buoysoftware/anchor-typography";
import { BoxProps } from "@buoysoftware/anchor-layout";

export type LabelProps = BoxProps & LabelHTMLAttributes<Element> & HeadingProps;

export const Label = styled(Heading).attrs(() => ({
  as: "label",
  size: "s",
}))<LabelProps>``;
