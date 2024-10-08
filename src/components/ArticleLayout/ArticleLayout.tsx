import clsx from 'clsx';

import { Typography } from '../Typography';

type ArticleLayoutProps = {
  title: string;
  className?: string;
  children: React.ReactNode;
};
export const ArticleLayout = ({ title, className, children }: ArticleLayoutProps) => {
  const _className = clsx(
    'prose rounded-md border p-4',
    'min-h-[800px]', //temp
    className
  );
  return (
    <article className={_className}>
      <Typography variant="h1">{title}</Typography>
      {children}
    </article>
  );
};
