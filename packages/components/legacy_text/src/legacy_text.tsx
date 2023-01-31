import { BoxProps } from "@buoysoftware/anchor-layout";
import { Body, Heading, Subheading } from "@buoysoftware/anchor-typography";

export type LegacyTextVariant =
  | "bodyLargeBold"
  | "bodyLargeMedium"
  | "bodyMediumBold"
  | "bodyMediumMedium"
  | "bodySmallRegular"
  | "bodySmallRegularBold"
  | "bodySmallRegularItalic"
  | "caption"
  | "error"
  | "headline1"
  | "headline2"
  | "headline3"
  | "input"
  | "label"
  | "overline"
  | "subtitle";

interface OwnProps {
  variant?: LegacyTextVariant;
}

export type TextProps = BoxProps & OwnProps;

export const LegacyText: React.FC<TextProps> = ({
  children,
  variant,
  ...props
}): React.ReactElement => {
  switch (variant) {
    case "bodyLargeBold":
      return (
        <Body strong size="l" {...props}>
          {children}
        </Body>
      );
    case "bodyLargeMedium":
      return (
        <Body size="l" {...props}>
          {children}
        </Body>
      );
    case "bodyMediumBold":
      return (
        <Body strong size="m" {...props}>
          {children}
        </Body>
      );
    case "bodyMediumMedium":
    case "input":
    case "error":
      return (
        <Body size="m" {...props}>
          {children}
        </Body>
      );
    case "bodySmallRegular":
    case "caption":
      return (
        <Body size="s" {...props}>
          {children}
        </Body>
      );
    case "bodySmallRegularBold":
      return (
        <Body size="s" strong {...props}>
          {children}
        </Body>
      );
    case "bodySmallRegularItalic":
      return (
        <Body size="s" emphasized {...props}>
          {children}
        </Body>
      );
    case "headline1":
      return (
        <Heading size="xl" {...props}>
          {children}
        </Heading>
      );
    case "headline2":
      return (
        <Heading size="l" {...props}>
          {children}
        </Heading>
      );
    case "headline3":
      return (
        <Heading size="m" {...props}>
          {children}
        </Heading>
      );
    case "overline":
      return (
        <Subheading size="s" {...props}>
          {children}
        </Subheading>
      );
    case "subtitle":
    case "label":
      return (
        <Heading size="s" {...props}>
          {children}
        </Heading>
      );
    default:
      return (
        <Body size="m" {...props}>
          {children}
        </Body>
      );
  }
};
