import clsx from 'clsx';
import { memo, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Typography } from '@/components';
import { useChapter } from '@/contexts/chapter';
import { ArticleAbstract, Chapter as ChapterType } from '@/types';
import { paths } from '@/utils';

type ChapterProps = {
  chapter: ChapterType;
};
export const Chapter = ({ chapter }: ChapterProps) => {
  const { currentArticle } = useChapter();

  console.log(`render Chapter: ${chapter.title}`);

  useEffect(() => {
    console.log('currentArticle:', currentArticle.title);
  }, [currentArticle]);

  return (
    <nav aria-label="目次" className="flex flex-col gap-1 border border-gray-200 p-2">
      <Typography variant="h3">{chapter.title}</Typography>
      <ul className="mx-2 flex flex-col gap-1">
        {chapter.articles.map((article) => {
          const isActive = currentArticle.articleId === article.articleId;
          return (
            <MemoizedChapterItem key={article.articleId} article={article} isActive={isActive} />
          );
        })}
      </ul>
    </nav>
  );
};

type ChapterItemProps = {
  article: ArticleAbstract;
  isActive?: boolean;
};
const ChapterItem = ({ article, isActive }: ChapterItemProps) => {
  const path = paths.article(article.articleId);

  console.log(`render ChapterItem: ${article.title}`);

  const className = clsx('px-1 transition-colors duration-300', {
    'bg-blue-200': isActive,
    'hover:bg-gray-100': !isActive,
  });

  return (
    <li className={className}>
      <Link className="block w-full" to={path}>
        <Typography variant="button">{article.title}</Typography>
      </Link>
    </li>
  );
};

// TODO: もっと良い書き方はないのか？
const MemoizedChapterItem = memo(ChapterItem);
