import { ResearchAbstract } from '../ResearchAbstract';

import { ResearchDetail } from '@/types';

type ResearchListProps = {
  researches: ResearchDetail[];
};

export const ResearchList = ({ researches }: ResearchListProps) => {
  return (
    <div className="flex gap-8">
      {researches.map((research) => (
        <div key={research.researchId} className="col-span-1 flex h-72 overflow-hidden">
          <ResearchAbstract research={research} />
        </div>
      ))}
    </div>
  );
};
