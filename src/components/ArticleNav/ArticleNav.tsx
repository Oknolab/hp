import { useArticleNav, ArticleList, CategoryList } from './_internal';

export const ArticleNav = () => {
  const { categories, activeCategory } = useArticleNav();
  const className = 'flex flex-col';

  const displayArticleList = activeCategory !== null;

  return (
    <nav className={className}>
      <CategoryList categories={categories} />
      {displayArticleList && <ArticleList articles={activeCategory.articles} />}
    </nav>
  );
};
