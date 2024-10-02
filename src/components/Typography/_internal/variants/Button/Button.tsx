import { Transition } from '@headlessui/react';

import { TypographyVariantProps, basicTransitionProps } from '../..';

export const Button = ({ isShowing = true, children }: TypographyVariantProps) => {
  return (
    <Transition {...basicTransitionProps} show={isShowing}>
      <span className="text-gray-500">{children}</span>
    </Transition>
  );
};
