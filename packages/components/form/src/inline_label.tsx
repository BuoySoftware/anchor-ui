import { Body, BodyProps } from "@buoysoftware/anchor-typography";
import styled from "styled-components";
import { LabelHTMLAttributes } from "react";
import { BoxProps } from "@buoysoftware/anchor-layout";

export type InlineLabelProps = BoxProps &
  LabelHTMLAttributes<Element> &
  BodyProps;

export const InlineLabel = styled(Body).attrs(() => ({
  as: "label",
  size: "m",
}))<InlineLabelProps>`
  [disabled] & {
    color: ${({ theme }) => theme.colors.text.tertiary};
  }
`;
