import { ResearchDetail } from '../ResearchDetail';

import { useDialog } from '@/contexts/dialog';
import { ResearchDetail as Research } from '@/types';

export function useResearchAbstract(research: Research): ResearchAbstract {
  const { openDialog } = useDialog();

  const onClick = () => {
    openDialog(<ResearchDetail research={research} />);
  };

  return {
    onClick,
  };
}

interface ResearchAbstract {
  onClick: () => void;
}
