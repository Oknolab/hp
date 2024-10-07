import { Typography } from '@/components';

export const NotFound = () => {
  return (
    <div className="flex h-96 w-full flex-col items-center justify-center gap-2">
      <img alt="画像も見つかりませんでしたorz" className="w-28 rounded-full" src="/not-found.png" />
      <Typography variant="h1">404 Not Found</Typography>
      <Typography>ページが見つかりませんでした。</Typography>
    </div>
  );
};
