type ArticleLayoutProps = {
  children: React.ReactNode;
};
export const ArticleLayout = ({ children }: ArticleLayoutProps) => {
  return <article className="prose rounded-md border p-4">{children}</article>;
};
