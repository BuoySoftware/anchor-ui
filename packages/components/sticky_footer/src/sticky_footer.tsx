import {
  FooterActions,
  FooterActionsProps,
} from "@buoysoftware/anchor-footer-actions";

export const StickyFooter: React.FC<FooterActionsProps> = ({
  children,
  ...props
}): React.ReactElement => {
  return (
    <FooterActions
      bottom={0}
      data-testid="sticky-footer"
      left={0}
      position="fixed"
      right={0}
      zIndex="2"
      {...props}
    >
      {children}
    </FooterActions>
  );
};
