import { articleAbstracts } from '.';

import { Category } from '@/types';

export const categories: Category[] = Array.from({ length: 3 }, (_, i) => ({
  categoryId: i.toString(),
  title: `Category ${i + 1}`,
  articles: articleAbstracts,
}));
