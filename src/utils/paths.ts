export const paths = {
  article: (articleId: string) => {
    const [chapter, article] = articleId.split('-');
    return `/${chapter}/${article}`;
  },
};
