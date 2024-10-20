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
      <Description>{research.description}</Description>
      <div className="flex gap-2">
        <ButtonToSlide slideUrl={research.slideUrl} />
        <ButtonToSystem systemUrl={research.systemUrl} />
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
  const className = clsx('inline-block w-52 border p-2 text-center', 'cursor-pointer');

  return (
    <Button as="a" className={className} href={slideUrl} rel="noopener noreferrer" target="_blank">
      発表スライドを見る
    </Button>
  );
};

type ButtonToSystemProps = {
  systemUrl?: string;
};
const ButtonToSystem = ({ systemUrl }: ButtonToSystemProps) => {
  const className = clsx('inline-block w-52 border p-2 text-center', 'cursor-pointer');

  return (
    <Button as="a" className={className} href={systemUrl} rel="noopener noreferrer" target="_blank">
      システムを見る
    </Button>
  );
};
