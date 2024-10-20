import clsx from 'clsx';

import { useResearchAbstract } from './useResearchAbstract';

import { Typography } from '@/components';
import { ResearchDetail as Research } from '@/types';

type ResearchAbstractProps = {
  research: Research;
};
export const ResearchAbstract = ({ research }: ResearchAbstractProps) => {
  const { onClick } = useResearchAbstract(research);

  const className = clsx(
    'w-full rounded-md p-3',
    'flex flex-col items-center gap-2',
    'border-gray-300 bg-white shadow-lg',
    'cursor-pointer transition-colors duration-200 hover:bg-gray-100 hover:shadow-xl',
    'text-left'
  );

  return (
    <button className={className} onClick={onClick}>
      <Typography variant="h1">{research.title}</Typography>
      <div className="overflow-scroll">
        <img alt="research image" src={research.imageUrl} />
      </div>
    </button>
  );
};
