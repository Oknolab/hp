export const paths = {
  top: '/',
  article: (articleId: string) => {
    const [chapter, article] = articleId.split('-');
    return `/${chapter}/${article}`;
  },
};
