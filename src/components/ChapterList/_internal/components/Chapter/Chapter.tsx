import { Typography } from '@/components';
import { ArticleAbstract, Chapter as ChapterType } from '@/types';

type ChapterProps = {
  chapter: ChapterType;
};
export const Chapter = ({ chapter }: ChapterProps) => {
  return (
    <nav aria-label="目次" className="border-black-200 flex flex-col gap-1 border p-2">
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
  return (
    <li className="px-1 hover:bg-gray-200">
      <a className="block w-full" href={article.url}>
        <Typography variant="button">{article.title}</Typography>
      </a>
    </li>
  );
};
