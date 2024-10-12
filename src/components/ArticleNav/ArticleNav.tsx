import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';

import { useArticleNav } from './_internal';

import { ArticleAbstract } from '@/types';
import { paths } from '@/utils';

export const ArticleNav = () => {
  const { categories } = useArticleNav();

  return (
    <TabGroup>
      <TabList>
        {categories.map((category) => (
          <CategoryTab key={category.title} categoryName={category.title} />
        ))}
      </TabList>
      <TabPanels>
        {categories.map((category) => (
          <CategoryTabPanel key={category.title} articles={category.articles} />
        ))}
      </TabPanels>
    </TabGroup>
  );
};

type CategoryTabProps = {
  categoryName: string;
};
const CategoryTab = ({ categoryName }: CategoryTabProps) => {
  return <Tab className="border">{categoryName}</Tab>;
};

type CategoryTabPanelProps = {
  articles: ArticleAbstract[];
};
const CategoryTabPanel = ({ articles }: CategoryTabPanelProps) => {
  return (
    <TabPanel className="border">
      {articles.map((article) => (
        <ArticleLink key={article.title} article={article} />
      ))}
    </TabPanel>
  );
};

type ArticleLinkProps = {
  article: ArticleAbstract;
};
const ArticleLink = ({ article }: ArticleLinkProps) => {
  const url = paths.article(article.articleId);

  return (
    <a className="border" href={url}>
      {article.title}
    </a>
  );
};
