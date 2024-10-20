import { ArticleLayout, Typography } from '@/components';
import { ResearchList } from '@/components/research';
import { tourisms } from '@/mocks';

export const Other = () => {
  return (
    <ArticleLayout title="その他">
      <Typography>その他もろもろ</Typography>
      <ResearchList researches={tourisms} />
    </ArticleLayout>
  );
};
