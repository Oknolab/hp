import { useState } from 'react';

import { categories } from '@/mocks';
import { ArticleAbstract, Category } from '@/types';

export function useArticleNav(): ArticleNav {
  const [hoveredCategoryPos, setHoveredCategoryPos] = useState<number | null>(0);
  const [activeCategoryPos, setActiveCategoryPos] = useState<number | null>(0);
  const [activeArticlePos, setActiveArticlePos] = useState<number | null>(0);

  const hoveredCategory = hoveredCategoryPos !== null ? categories[hoveredCategoryPos] : null;
  const activeCategory = activeCategoryPos !== null ? categories[activeCategoryPos] : null;
  const activeArticle =
    activeCategory && activeArticlePos !== null ? activeCategory.articles[activeArticlePos] : null;

  function handleClickCategory(categoryPos: number) {
    setActiveCategoryPos(categoryPos);
  }

  return {
    categories,
    hoveredCategory,
    activeCategory,
    activeArticle,
    handleClickCategory,
  };
}

interface ArticleNav {
  categories: Category[];
  hoveredCategory: Category | null;
  activeCategory: Category | null;
  activeArticle: ArticleAbstract | null;
  handleClickCategory: (categoryPos: number) => void;
}
