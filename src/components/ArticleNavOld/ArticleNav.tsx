import { useArticleNav, ArticleList, CategoryList } from './_internal';

export const ArticleNav = () => {
  const {
    categories,
    activeCategory,
    hoveredCategory,
    handleClickCategory,
    handleMouseEnterCategory,
    handleMouseLeaveCategory,
  } = useArticleNav();
  const className = 'flex flex-col';

  const displayArticleList = activeCategory !== null;
  const articles =
    hoveredCategory !== null
      ? hoveredCategory.articles
      : activeCategory !== null
        ? activeCategory.articles
        : [];

  return (
    <nav className={className}>
      <CategoryList
        activeCategory={activeCategory}
        categories={categories}
        onClickCategory={handleClickCategory}
        onMouseEnterCategory={handleMouseEnterCategory}
        onMouseLeaveCategory={handleMouseLeaveCategory}
      />
      {displayArticleList && <ArticleList articles={articles} />}
    </nav>
  );
};
