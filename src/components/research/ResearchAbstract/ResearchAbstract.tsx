import { DialogTitle, Description, Button } from '@headlessui/react';
import clsx from 'clsx';

import { Typography } from '@/components';
import { ResearchDetail as Research } from '@/types';

type ResearchAbstractProps = {
  research: Research;
};
export const ResearchAbstract = ({ research }: ResearchAbstractProps) => {
  return (
    <div className="flex flex-col gap-8">
      <Typography variant="h1">{research.title}</Typography>
      <div className="max-w-96 overflow-scroll">
        <img alt="research image" src={research.imageUrl} />
      </div>
    </div>
  );
};
