import { ArticleLayout } from '@/components';

export const Boss = () => {
  return (
    <ArticleLayout title="先生はどんな人？">
      <p>
        <a
          className="text-blue-400 hover:opacity-50"
          href="https://www.fun.ac.jp/faculty/okuno-taku"
          rel="noopener noreferrer"
          target="_blank"
        >
          こちら
        </a>
        をご確認ください。
      </p>
    </ArticleLayout>
  );
};
