import clsx from 'clsx';

type ArticleLayoutProps = {
  className?: string;
  children: React.ReactNode;
};
export const ArticleLayout = ({ className, children }: ArticleLayoutProps) => {
  const _className = clsx('prose rounded-md border p-4', className);
  return <article className={_className}>{children}</article>;
};
