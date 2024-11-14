import { ArticleLayout, Typography } from '@/components';

export const Abstract = () => {
  return (
    <ArticleLayout title="概要">
      <div>
        <Typography>比較的自由な研究室だと思います。</Typography>
        <Typography>興味のあることをやらせてくれて、たくさんダメ出ししてもらえます。</Typography>
      </div>
      <div>
        <Typography>
          奥野研に興味ある方は、お気軽に卒研スペースの先輩に話しかけてみてください。
        </Typography>
        <Typography>「ホームページ見たよー！」って言われるとテンション爆上がりします↑↑</Typography>
      </div>
      <img alt="こめじ" src="/images/komeji_happy.jpg" width={500} />
    </ArticleLayout>
  );
};
