import { DialogTitle, Description, Button } from '@headlessui/react';
import clsx from 'clsx';

import { Typography } from '@/components';
import { ResearchDetail as Research } from '@/types';

type ResearchDetailProps = {
  research: Research;
};
export const ResearchDetail = ({ research }: ResearchDetailProps) => {
  return (
    <div className="flex flex-col gap-8">
      <DialogTitle className="text-center">
        <Typography variant="h1">{research.title}</Typography>
      </DialogTitle>
      <div className="flex flex-col gap-2">
        <Description>{research.description}</Description>
        <ButtonToSlide slideUrl={research.slideUrl} />
      </div>
      <div className="max-w-96 overflow-scroll">
        <img alt="research image" src={research.imageUrl} />
      </div>
    </div>
  );
};

type ButtonToSlideProps = {
  slideUrl?: string;
};
const ButtonToSlide = ({ slideUrl }: ButtonToSlideProps) => {
  const className = clsx('inline-block w-32 border p-2 text-center', 'cursor-pointer');

  return (
    <Button as="a" className={className} href={slideUrl} rel="noopener noreferrer" target="_blank">
      発表スライド
    </Button>
  );
};
