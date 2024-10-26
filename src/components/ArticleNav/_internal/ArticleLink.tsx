import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';

import { Typography } from '@/components';
import { ArticleAbstract } from '@/types';
import { paths } from '@/utils';
import { articleIdFromPathname } from '@/utils/articleIdFromPathname';

type ArticleLinkProps = {
  article: ArticleAbstract;
};
export const ArticleLink = ({ article }: ArticleLinkProps) => {
  const url = paths.article(article.articleId);

  const pathname = useLocation().pathname;
  const isActive = articleIdFromPathname(pathname) === article.articleId;

  const className = clsx(
    'border border-gray-100 text-center',
    'w-32 shrink-0 px-4 py-2', //シェイプ
    'cursor-pointer hover:bg-blue-100', //ホバー時の背景色
    'truncate',
    { 'bg-blue-100': isActive }
  );
  return (
    <Link className={className} to={url}>
      <Typography variant="button">{article.title}</Typography>
    </Link>
  );
};
