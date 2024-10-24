import { ArticleLayout, Typography } from '@/components';
import { ResearchList } from '@/components/research';

export const Archive = () => {
  return (
    <ArticleLayout title="デジタルアーカイブ">
      <Typography>デジタルアーカイブとは、電子データを頑張って貯蔵するための学問です。</Typography>
      <ResearchList researches={[]} />
    </ArticleLayout>
  );
};
