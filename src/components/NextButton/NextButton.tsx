import { Transition } from '@headlessui/react';

type NextButtonProps = {
  isShowing?: boolean;
};

export const NextButton = ({ isShowing = true }: NextButtonProps) => {
  return (
    <button className="flex h-12 w-20 items-center justify-center">
      <Transition
        enter="transition-transform duration-500"
        enterFrom="scale-0"
        enterTo="scale-100"
        leave="transition-transform duration-200"
        leaveFrom="scale-100"
        leaveTo="scale-0"
        show={isShowing}
      >
        <div className="flex size-full items-center justify-center border-2 p-1">
          <span className="mr-2">Next</span>
          <svg
            className="size-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </div>
      </Transition>
    </button>
  );
};
