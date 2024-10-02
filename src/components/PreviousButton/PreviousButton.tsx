import { Transition } from '@headlessui/react';

type PreviousButtonProps = {
  isShowing?: boolean;
};

export const PreviousButton = ({ isShowing = true }: PreviousButtonProps) => {
  return (
    <button className="flex h-12 w-20 items-center justify-center">
      <Transition
        enter="transition-opacity duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        show={isShowing}
      >
        <div className="flex size-full items-center justify-center border-2 p-1">
          <svg
            className="size-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
          <span className="mr-2">Prev</span>
        </div>
      </Transition>
    </button>
  );
};
