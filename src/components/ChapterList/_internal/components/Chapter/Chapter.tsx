import { useEffect } from 'react';
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

  useEffect(() => {
    console.log('currentArticle:', currentArticle.title);
  }, [currentArticle]);

  return (
    <nav aria-label="目次" className="flex flex-col gap-1 border border-gray-200 p-2">
      <Typography variant="h3">{chapter.title}</Typography>
      <ul className="mx-2 flex flex-col gap-1">
        {chapter.articles.map((article) => (
          <ChapterItem key={article.articleId} article={article} />
        ))}
      </ul>
    </nav>
  );
};

type ChapterItemProps = {
  article: ArticleAbstract;
};
const ChapterItem = ({ article }: ChapterItemProps) => {
  const path = paths.article(article.articleId);

  return (
    <li className="px-1 hover:bg-gray-200">
      <Link className="block w-full" to={path}>
        <Typography variant="button">{article.title}</Typography>
      </Link>
    </li>
  );
};
