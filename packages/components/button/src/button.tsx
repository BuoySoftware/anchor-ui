import kebabCase from "lodash/kebabCase";
import { forwardRef } from "react";
import { Heading } from "@buoysoftware/anchor-typography";
import { Box, FlexProps } from "@buoysoftware/anchor-layout";
import { ColorScheme, InnerButton } from "./inner_button";
import { StyledButton } from "./styled_button";

type Size = "s" | "l";
type IconPosition = "left" | "right";

interface OwnProps {
  children: React.ReactNode;
  colorScheme?: ColorScheme;
  "data-testid"?: string;
  disabled?: boolean;
  form?: string;
  icon?: React.ReactNode;
  iconPosition?: IconPosition;
  onClick?: React.MouseEventHandler;
  size?: Size;
}

type ButtonProps = OwnProps & Omit<FlexProps, "theme" | "color" | "size">;

const HEIGHT_MAPPING: Record<Size, number> = {
  l: 40,
  s: 28,
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      colorScheme = "basic",
      "data-testid": testId,
      disabled,
      form,
      icon,
      iconPosition,
      onClick,
      size = "l",
      ...props
    },
    ref
  ): React.ReactElement => (
    <StyledButton
      data-testid={testId}
      disabled={disabled}
      form={form}
      onClick={onClick}
      ref={ref}
    >
      <InnerButton
        alignItems="center"
        borderRadius="4px"
        colorScheme={colorScheme}
        disabled={disabled}
        height={HEIGHT_MAPPING[size]}
        px={size}
        {...props}
      >
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
      </InnerButton>
    </StyledButton>
  )
);

Button.displayName = "Button";
