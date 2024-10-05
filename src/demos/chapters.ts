import { articleAbstracts } from '.';

import { Chapter } from '@/types';

export const chapters: Chapter[] = Array.from({ length: 3 }, (_, i) => ({
  title: `Chapter ${i + 1}`,
  articles: articleAbstracts,
}));
