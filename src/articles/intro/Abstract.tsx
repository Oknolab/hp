import { ArticleLayout, Typography } from '@/components';

export const Abstract = () => {
  return (
    <ArticleLayout title="概要">
      <div>
        <Typography>比較的自由な研究室だと思います。</Typography>
        <Typography>興味のあることをやらせてくれて、たくさんダメ出ししてもらえます。</Typography>
      </div>
      <img alt="こめじ" src="/images/komeji_happy.jpg" />
    </ArticleLayout>
  );
};
