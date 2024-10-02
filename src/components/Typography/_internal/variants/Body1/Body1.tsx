import { Transition } from '@headlessui/react';

import { TypographyVariantProps, basicTransitionProps } from '../..';

export const Body1 = ({ isShowing = true, children }: TypographyVariantProps) => {
  return (
    <Transition {...basicTransitionProps} show={isShowing}>
      <p>{children}</p>
    </Transition>
  );
};
