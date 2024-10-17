import { useLocation } from 'react-router-dom';

import { categories } from '@/mocks';
import { ArticleAbstract, Category } from '@/types';
import { categoryIdFromPathname } from '@/utils';

export function useArticleNav(): ArticleNav {
  const pathname = useLocation().pathname;

  const currentCategoryId = categoryIdFromPathname(pathname);
  const currentCategoryPos = categories.findIndex(
    (category) => category.categoryId === currentCategoryId
  );

  return {
    categories,
    currentArticles: categories[currentCategoryPos].articles,
    currentCategoryPos,
  };
}

interface ArticleNav {
  categories: Category[];
  currentCategoryPos: number;
  currentArticles: ArticleAbstract[];
}
