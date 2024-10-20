import { ArticleLayout, Typography } from '@/components';
import { ResearchList } from '@/components/research';
import { tourisms } from '@/mocks';

export const Software = () => {
  return (
    <ArticleLayout title="ソフトウェア工学">
      <Typography>ソフトウェア工学とは、空気のようなシステムを構築するための学問です。</Typography>
      <ResearchList researches={tourisms} />
    </ArticleLayout>
  );
};
