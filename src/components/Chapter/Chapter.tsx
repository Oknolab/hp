import { Typography } from '@/components';
import { ArticleAbstract } from '@/types';

type ChapterProps = {
  label: string;
  articles: ArticleAbstract[];
};
export const Chapter = ({ label, articles }: ChapterProps) => {
  return (
    <nav aria-label="目次" className="flex flex-col border border-black-200">
      <Typography>{label}</Typography>
      <ul>
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
    <li>
      <a href={article.url}>
        <Typography variant="body1">{article.title}</Typography>
      </a>
    </li>
  );
};
