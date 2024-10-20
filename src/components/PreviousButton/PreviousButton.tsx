import { Transition } from '@headlessui/react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { Typography } from '@/components/Typography';
import { useChapter } from '@/contexts/chapter';
import { paths } from '@/utils';

type PreviousButtonProps = {
  isShowing?: boolean;
};

export const PreviousButton = ({ isShowing = true }: PreviousButtonProps) => {
  const { prevArticle } = useChapter();
  const isActive = prevArticle ? true : false;

  const className = clsx('flex h-12 w-20 items-center justify-center', {
    'opacity-10 pointer-events-none scale-100': !isActive,
  });

  const to = prevArticle ? paths.article(prevArticle.articleId) : '#';

  return (
    <Link className={className} to={to}>
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
          <Typography variant="button">
            {/* <div className="mr-1 flex items-center">
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
              <span>Prev</span>
            </div> */}
          </Typography>
        </div>
      </Transition>
    </Link>
  );
};
