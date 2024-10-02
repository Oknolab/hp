import { TypographyProps, TypographyVariant, TypographyVariantProps } from './_internal';
import { Body1, H1, Button } from './_internal/';

export const Typography = ({ isShowing = true, variant = 'body1', children }: TypographyProps) => {
  const Component = components[variant] || Body1;

  return <Component isShowing={isShowing}>{children}</Component>;
};

const components: Record<TypographyVariant, React.ComponentType<TypographyVariantProps>> = {
  body1: Body1,
  h1: H1,
  button: Button,
};
