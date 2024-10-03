import { Typography } from '@/components';
import { ArticleAbstract } from '@/types';

type ChapterProps = {
  label: string;
  articles: ArticleAbstract[];
};
export const Chapter = ({ label, articles }: ChapterProps) => {
  return (
    <nav aria-label="目次" className="flex flex-col border border-black-200 p-2 gap-1">
      <Typography variant="h3">{label}</Typography>
      <ul className="mx-2 flex flex-col gap-1">
        {articles.map((article) => (
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
    <li className="hover:bg-gray-200 px-1">
      <a href={article.url} className="block w-full">
        <Typography variant="button">{article.title}</Typography>
      </a>
    </li>
  );
};
