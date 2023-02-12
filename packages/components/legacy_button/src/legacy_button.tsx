import { BoxProps } from "@buoysoftware/anchor-layout";
import {
  Button as AnchorButton,
  TextButton as AnchorTextButton,
} from "@buoysoftware/anchor-button";

export type LegacyButtonVariant = "link" | "primary" | "secondary";
export type LegacyButtonSize = "default" | "inline" | "small";

type AnchorButtonSize = "s" | "l";
type AnchorColorScheme = "basic" | "primary";

const AnchorSizeMapping: Record<LegacyButtonSize, AnchorButtonSize> = {
  default: "l",
  small: "s",
  inline: "s",
};

const AnchorColorSchemeMapping: Record<
  "secondary" | "primary",
  AnchorColorScheme
> = {
  primary: "primary",
  secondary: "basic",
};

interface OwnProps {
  disabled?: boolean;
  variant: LegacyButtonVariant;
  sizeVariant?: LegacyButtonSize;
}

export type ButtonProps = OwnProps & Omit<BoxProps, "size" | "color">;

export const LegacyButton: React.FC<ButtonProps> = ({
  variant,
  sizeVariant = "default",
  children,
  ...props
}): React.ReactElement => {
  if (variant === "link") {
    return <AnchorTextButton {...props}>{children}</AnchorTextButton>;
  }

  const mappedSize = AnchorSizeMapping[sizeVariant];
  const mappedColorScheme = AnchorColorSchemeMapping[variant];

  return (
    <AnchorButton size={mappedSize} colorScheme={mappedColorScheme} {...props}>
      {children}
    </AnchorButton>
  );
};
