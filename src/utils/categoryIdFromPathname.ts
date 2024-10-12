import { articleIdFromPathname } from '.';

export function categoryIdFromPathname(pathname: string): string | null {
  const articleId = articleIdFromPathname(pathname);
  const categoryId = articleId?.split('-')[0] ?? null;

  return categoryId;
}
