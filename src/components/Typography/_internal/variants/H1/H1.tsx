import { Transition } from '@headlessui/react';

import { TypographyVariantProps, basicTransitionProps } from '../..';

export const H1 = ({ isShowing = true, children }: TypographyVariantProps) => {
  return (
    <Transition {...basicTransitionProps} show={isShowing}>
      <h1 className="text-6xl">{children}</h1>
    </Transition>
  );
};