import { categories } from '@/mocks';
import { ArticleAbstract, Category } from '@/types';

export function useArticleNav(): ArticleNav {
  return {
    categories,
    currentArticles: categories[0].articles,
  };
}

interface ArticleNav {
  categories: Category[];
  currentArticles: ArticleAbstract[];
}
