import { ChapterList } from '..';
import { mockChapters } from '../_internal/';

export const ChapterListFetch = () => {
  return <ChapterList chapters={mockChapters} />;
};
