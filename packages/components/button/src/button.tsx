import { Heading } from "@buoysoftware/anchor-typography";
import { FlexProps } from "@buoysoftware/anchor-layout";
import { ColorScheme, InnerButton } from "./inner_button";
import { StyledButton } from "./styled_button";

type Size = "s" | "l";
type IconPosition = "left" | "right";

type OwnProps<T extends React.ReactNode> = {
  children: React.ReactNode;
  colorScheme?: ColorScheme;
  icon?: T;
  iconPosition: T extends React.ReactNode ? IconPosition : undefined;
  size?: Size;
};

type ButtonProps = OwnProps<React.ReactNode> &
  Omit<FlexProps, "theme" | "color" | "size">;

const HEIGHT_MAPPING: Record<Size, number> = {
  l: 40,
  s: 28,
};

export const Button: React.FC<ButtonProps> = ({
  children,
  colorScheme = "basic",
  icon,
  iconPosition,
  size = "l",
  ...props
}): React.ReactElement => {
  return (
    <StyledButton>
      <InnerButton
        alignItems="center"
        borderRadius="4px"
        colorScheme={colorScheme}
        height={HEIGHT_MAPPING[size]}
        px="m"
        {...props}
      >
        {iconPosition === "left" && icon}
        <Heading
          as="span"
          mx="xs"
          color="inherit"
          size="s"
          textDecoration="none"
        >
          {children}
        </Heading>
        {iconPosition === "right" && icon}
      </InnerButton>
    </StyledButton>
  );
};
