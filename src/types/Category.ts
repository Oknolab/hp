import { ArticleAbstract } from './ArticleAbstract';

export type Category = {
  categoryId: string;
  title: string;
  articles: ArticleAbstract[];
};
