import { Chapter } from './_internal';

import { Chapter as ChapterType } from '@/types';

type ChapterListProps = {
  chapters: ChapterType[];
};
export const ChapterList = ({ chapters }: ChapterListProps) => {
  return (
    <ul className="flex flex-col gap-1 border">
      {chapters.map((chapter) => (
        // TODO: titleをキーにするのは適切か？
        <li key={chapter.title}>
          <Chapter chapter={chapter} />
        </li>
      ))}
    </ul>
  );
};
