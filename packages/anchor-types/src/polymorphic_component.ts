export type PolymorphicComponentProps<
  C extends React.ElementType,
  Props
> = Props & AsProp<C> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

export type PolymorphicComponentPropsWithRef<
  C extends React.ElementType,
  Props
> = PolymorphicComponentProps<C, Props> & { ref?: PolymorphicRef<C> };

export type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>["ref"];

type AsProp<C extends React.ElementType> = {
  as?: C
};

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);

