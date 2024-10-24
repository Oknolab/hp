import { ArticleLayout, Typography } from '@/components';
import { ResearchList } from '@/components/research';

export const Software = () => {
  return (
    <ArticleLayout title="ソフトウェア工学">
      <Typography>ソフトウェア工学とは、高品質なソフトウェアを</Typography>
      <Typography>低コストで期限内に開発し、効率よく保守するための</Typography>
      <Typography>さまざまな技術を扱う学問です。</Typography>
      <ResearchList researches={[]} />
    </ArticleLayout>
  );
};
