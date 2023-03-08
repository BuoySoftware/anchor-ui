import { Body, BodyProps, Heading, HeadingProps, Subheading, SubheadingProps } from "@buoysoftware/anchor-typography";

type HeadingVariant = 
| "subtitle"
| "label"
| "headline1"
| "headline2"
| "headline3";

type SubheadingVariant = "overline"

type BodyVariant = 
  | "bodyLargeBold"
  | "bodyLargeMedium"
  | "bodyMediumBold"
  | "bodyMediumMedium"
  | "bodySmallRegular"
  | "bodySmallRegularBold"
  | "bodySmallRegularItalic"
  | "caption"
  | "error"
  | "input";

export type LegacyTextVariant =
  | BodyVariant
  | HeadingVariant
  | SubheadingVariant;

type HeadingVariantProps = { variant: HeadingVariant } & Omit<HeadingProps, 'size'>;
type SubheadingVariantProps = { variant: SubheadingVariant } & Omit<SubheadingProps, 'size'>;
type BodyVariantProps = { variant: BodyVariant } & Omit<BodyProps, 'size'>;
type NoVariantProps = { variant?: undefined } & Omit<BodyProps, 'size'>;

export type TextProps = HeadingVariantProps | SubheadingVariantProps | BodyVariantProps | NoVariantProps;

export const LegacyText: React.FC<TextProps> = (props): React.ReactElement => {
  if (!("variant" in props)) {
    return (<Body size="m" {...props} />);
  }

  switch (props.variant) {
    case "bodyLargeBold":
      return (
        <Body strong size="l" {...props} />
      );
    case "bodyLargeMedium":
      return (
        <Body size="l" {...props} />
      );
    case "bodyMediumBold":
      return (
        <Body strong size="m" {...props} />
      );
    case "bodyMediumMedium":
    case "input":
    case "error":
      return (
        <Body size="m" {...props} />
      );
    case "bodySmallRegular":
    case "caption":
      return (
        <Body size="s" {...props} />
      );
    case "bodySmallRegularBold":
      return (
        <Body size="s" strong {...props} />
      );
    case "bodySmallRegularItalic":
      return (
        <Body size="s" emphasized {...props} />
      );
    case "headline1":
      return (
        <Heading size="xl" {...props} />
      );
    case "headline2":
      return (
        <Heading size="l" {...props} />
      );
    case "headline3":
      return (
        <Heading size="m" {...props} />
      );
    case "overline":
      return (
        <Subheading size="s" {...props} />
      );
    case "subtitle":
    case "label":
      return (
        <Heading size="s" {...props} />
      );
    default:
      throw "unsupported variant";
  }
};
