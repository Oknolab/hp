import { ArticleAbstract } from '@/types';

export const articleAbstracts: ArticleAbstract[] = Array.from({ length: 3 }, (_, i) => ({
  articleId: `article${i + 1}`,
  title: `記事${i + 1}`,
  url: `#`,
}));
