import { useState } from 'react';

import { categories } from '@/mocks';
import { ArticleAbstract, Category } from '@/types';

export function useArticleNav(): ArticleNav {
  const [hoveredCategoryPos, setHoveredCategoryPos] = useState<number | null>(0);
  const [activeCategoryPos, setActiveCategoryPos] = useState<number | null>(0);
  const [activeArticlePos, setActiveArticlePos] = useState<number | null>(null);

  const hoveredCategory = hoveredCategoryPos !== null ? categories[hoveredCategoryPos] : null;
  const activeCategory = activeCategoryPos !== null ? categories[activeCategoryPos] : null;
  const activeArticle =
    activeCategory && activeArticlePos !== null ? activeCategory.articles[activeArticlePos] : null;

  function handleClickCategory(categoryPos: number) {
    setActiveCategoryPos(categoryPos);
  }

  function handleMouseEnterCategory(categoryPos: number) {
    if (activeCategoryPos === categoryPos) return; //アクティブなカテゴリーをhoverした場合は何もしない

    setHoveredCategoryPos(categoryPos);
  }

  function handleMouseLeaveCategory() {
    setHoveredCategoryPos(null);
  }

  return {
    categories,
    hoveredCategory,
    activeCategory,
    activeArticle,
    handleClickCategory,
    handleMouseEnterCategory,
    handleMouseLeaveCategory,
  };
}

interface ArticleNav {
  categories: Category[];
  hoveredCategory: Category | null;
  activeCategory: Category | null;
  activeArticle: ArticleAbstract | null;
  handleClickCategory: (categoryPos: number) => void;
  handleMouseEnterCategory: (categoryPos: number) => void;
  handleMouseLeaveCategory: () => void;
}
