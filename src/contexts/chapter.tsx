import { createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { chapters } from '../mocks/chapters';

import { ArticleAbstract } from '@/types';
import { articleIdFromPathname } from '@/utils/articleIdFromPathname';

type ChapterContext = {
  currentArticle: ArticleAbstract;
  title: string;
  articles: ArticleAbstract[];
};

const chapterContext = createContext<ChapterContext>({
  currentArticle: { articleId: '', title: '' },
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
  const chapter = chapters[0];
  const articles = chapter.articles;
  const [currentArticle, setCurrentArticle] = useState(articles[0]);

  useEffect(() => {
    const articleId = articleIdFromPathname(location.pathname);
    if (!articleId) {
      throw new Error('articleId not found');
    }

    const newArticle = articles.find((article) => article.articleId === articleId);
    if (!newArticle) {
      throw new Error('article not found');
    }

    setCurrentArticle(newArticle);
  }, [location, articles]);

  return (
    <chapterContext.Provider
      value={{
        currentArticle,
        title: chapter.title,
        articles,
      }}
    >
      {children}
    </chapterContext.Provider>
  );
};
