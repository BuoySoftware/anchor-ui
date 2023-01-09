import { Heading } from "@buoysoftware/anchor-typography";
import { FlexProps } from "@buoysoftware/anchor-layout";
import { ColorScheme, InnerButton } from "./inner_button";
import { StyledButton } from "./styled_button";

type Size = "s" | "l";

interface OwnProps {
  children: React.ReactNode;
  colorScheme?: ColorScheme;
  size?: Size;
}

type ButtonProps = OwnProps & Omit<FlexProps, "theme" | "color" | "size">;

const HEIGHT_MAPPING: Record<Size, number> = {
  l: 40,
  s: 28,
};

export const Button: React.FC<ButtonProps> = ({
  children,
  colorScheme = "basic",
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
        px="l"
        {...props}
      >
        <Heading as="span" color="inherit" size="s" textDecoration="none">
          {children}
        </Heading>
      </InnerButton>
    </StyledButton>
  );
};
