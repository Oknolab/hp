export function articleIdFromPathname(pathname: string): string | null {
  if (pathname === '/') {
    return 'intro-abstract'; //temp
  }
  const n = pathname.length;
  return pathname.slice(1, n).replace('/', '-') || null;
}
