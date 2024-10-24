import { ArticleLayout, Typography } from '@/components';
import { ResearchList } from '@/components/research';
import { tourisms } from '@/mocks';

export const Tourism = () => {
  return (
    <ArticleLayout title="観光情報学">
      <Typography>観光情報学とは、観光をシステムで支援するための学問です。</Typography>
      <ResearchList researches={tourisms} />
    </ArticleLayout>
  );
};
