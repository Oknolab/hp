import { createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { categories } from '@/mocks';
import { ArticleAbstract } from '@/types';
import { articleIdFromPathname } from '@/utils/articleIdFromPathname';

type ChapterContext = {
  prevArticle: ArticleAbstract | null;
  currentArticle: ArticleAbstract;
  nextArticle: ArticleAbstract | null;

  title: string;
  articles: ArticleAbstract[];
};

const chapterContext = createContext<ChapterContext>({
  prevArticle: { articleId: '', title: '' },
  currentArticle: { articleId: '', title: '' },
  nextArticle: { articleId: '', title: '' },
  title: '',
  articles: [],
});

export function useChapter(): ChapterContext {
  return useContext(chapterContext);
}

type ChapterProviderProps = {
  children: React.ReactNode;
};
export const ChapterProvider = ({ children }: ChapterProviderProps) => {
  const location = useLocation();
  const chapter = categories[0];
  const articles = chapter.articles;
  const [currentArticlePos, setCurrentArticlePos] = useState(0);

  const prevArticle = articles[currentArticlePos - 1] ?? null;
  const currentArticle = articles[currentArticlePos];
  const nextArticle = articles[currentArticlePos + 1] ?? null;

  useEffect(() => {
    const articleId = articleIdFromPathname(location.pathname);
    if (!articleId) {
      throw new Error('articleId not found');
    }

    const pos = articles.findIndex((article) => article.articleId === articleId);
    if (pos === -1) {
      throw new Error('article not found');
    }

    setCurrentArticlePos(pos);
  }, [location, articles]);

  return (
    <chapterContext.Provider
      value={{
        prevArticle,
        currentArticle,
        nextArticle,
        title: chapter.title,
        articles,
      }}
    >
      {children}
    </chapterContext.Provider>
  );
};
