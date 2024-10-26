import { ArticleLayout, Typography } from '@/components';

export const SelfSeminar = () => {
  return (
    <ArticleLayout title="自主ゼミはどんな感じ？">
      <Typography>学生主体で、学びたいことに取り組みます。</Typography>
      <Typography>先輩が色々教えてくれます。</Typography>
      <p>
        過去の自主ゼミのテーマは
        <a
          className="text-blue-500 hover:opacity-60"
          href="https://hope.fun.ac.jp/mod/page/view.php?id=54335"
        >
          こちら
        </a>
        からご確認ください。
      </p>
    </ArticleLayout>
  );
};
