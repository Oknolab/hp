export function articleIdFromPathname(pathname: string): string | null {
  const n = pathname.length;
  return pathname.slice(1, n).replace('/', '-') || null;
}
