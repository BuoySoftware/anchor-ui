import { Box, FlexProps } from "@buoysoftware/anchor-layout";
import { ColorScheme, StyledButton } from "./styled_button";
import { Heading } from "@buoysoftware/anchor-typography";
import { LoadingIndicator } from "@buoysoftware/anchor-loading-indicator";
import { forwardRef } from "react";

type Size = "s" | "l";
type IconPosition = "left" | "right";

interface OwnProps {
  children: React.ReactNode;
  colorScheme?: ColorScheme;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: IconPosition;
  size?: Size;
  submitting?: boolean;
}

type OwnAndFlexProps = OwnProps &
  Omit<FlexProps, "theme" | "color" | "size" | "as">;

export type ButtonProps<TComponent extends React.ElementType = "button"> =
  PolymorphicComponentPropsWithRef<TComponent, OwnAndFlexProps>;

type ButtonComponent = <C extends React.ElementType = "button">(
  props: ButtonProps<C>
) => React.ReactElement | null;

const HEIGHT_MAPPING: Record<Size, number> = {
  l: 40,
  s: 28,
};

export const Button: ButtonComponent = forwardRef(function Button<
  TComponent extends React.ElementType = "button"
>(
  {
    children,
    colorScheme = "basic",
    disabled,
    icon,
    iconPosition,
    size = "l",
    submitting = false,
    ...props
  }: ButtonProps<TComponent>,
  ref: PolymorphicRef<TComponent>
): React.ReactElement {
  const Component = props.as || "button";

  return (
    <StyledButton
      as={Component}
      alignItems="center"
      borderRadius="4px"
      colorScheme={colorScheme}
      disabled={disabled || submitting}
      height={HEIGHT_MAPPING[size]}
      px={size}
      ref={ref}
      {...(Component === "button" ? { type: props.type || "button" } : {})}
      {...props}
    >
      {submitting ? (
        <LoadingIndicator
          data-testid="button-loading-indicator"
          size="12px"
          strokeSize={1}
          color="text.tertiary"
        />
      ) : (
        <>
          {iconPosition === "left" && (
            <Box display="flex" ml="-xxs" mr="xs">
              {icon}
            </Box>
          )}
          <Heading as="span" color="inherit" size="s" textDecoration="none">
            {children}
          </Heading>
          {iconPosition === "right" && (
            <Box display="flex" ml="xs" mr="-xxs">
              {icon}
            </Box>
          )}
        </>
      )}
    </StyledButton>
  );
});
