import { Transition } from '@headlessui/react';

import { TypographyVariantProps, basicTransitionProps } from '../..';

export const H2 = ({ isShowing = true, children }: TypographyVariantProps) => {
  return (
    <Transition {...basicTransitionProps} show={isShowing}>
      <h2 className="text-2xl">{children}</h2>
    </Transition>
  );
};
