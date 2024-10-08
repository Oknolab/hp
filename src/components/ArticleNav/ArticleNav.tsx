import { useArticleNav, ArticleList, CategoryList } from './_internal';

export const ArticleNav = () => {
  const { categories, activeCategory, handleClickCategory } = useArticleNav();
  const className = 'flex flex-col';

  const displayArticleList = activeCategory !== null;

  return (
    <nav className={className}>
      <CategoryList
        activeCategory={activeCategory}
        categories={categories}
        onClickCategory={handleClickCategory}
      />
      {displayArticleList && <ArticleList articles={activeCategory.articles} />}
    </nav>
  );
};
