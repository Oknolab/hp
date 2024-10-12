import { Link } from 'react-router-dom';

import { Typography } from '@/components';
import { ArticleAbstract } from '@/types';
import { paths } from '@/utils';

type ArticleListProps = {
  articles: ArticleAbstract[];
};
export const ArticleList = ({ articles }: ArticleListProps) => {
  const className = 'flex gap-1';
  return (
    <ol className={className}>
      {articles.map((article) => (
        <ArticleListItem key={article.articleId} article={article} />
      ))}
    </ol>
  );
};

type ArticleListItemProps = {
  article: ArticleAbstract;
};
const ArticleListItem = ({ article }: ArticleListItemProps) => {
  const className = 'flex-1 min-w-max justify-center p-1 border items-center';
  const to = paths.article(article.articleId);

  return (
    <li className={className}>
      <Link className="block w-full" to={to}>
        <Typography>{article.title}</Typography>
      </Link>
    </li>
  );
};
