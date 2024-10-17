import clsx from 'clsx';
import { useLocation } from 'react-router-dom';

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

  const className = clsx('border', { 'bg-blue-100': isActive });
  return (
    <a className={className} href={url}>
      {article.title}
    </a>
  );
};
