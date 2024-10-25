import { TabGroup, TabPanel, TabPanels } from '@headlessui/react';

import { useArticleNav, ArticleLink } from './_internal';

import { ArticleAbstract } from '@/types';

export const ArticleNav = () => {
  const { categories, currentCategoryPos } = useArticleNav();
  return (
    <TabGroup selectedIndex={currentCategoryPos}>
      {/* <TabList className="flex max-w-full items-end">
        {categories.map((category, i) => {
          const isActive = i === currentCategoryPos;

          return <CategoryTab key={category.categoryId} category={category} isActive={isActive} />;
        })}
      </TabList> */}
      <TabPanels>
        {categories.map((category) => (
          <CategoryTabPanel key={category.categoryId} articles={category.articles} />
        ))}
      </TabPanels>
    </TabGroup>
  );
};

type CategoryTabPanelProps = {
  articles: ArticleAbstract[];
};
const CategoryTabPanel = ({ articles }: CategoryTabPanelProps) => {
  return (
    <TabPanel className="flex overflow-x-scroll">
      {articles.map((article) => (
        <ArticleLink key={article.title} article={article} />
      ))}
    </TabPanel>
  );
};
